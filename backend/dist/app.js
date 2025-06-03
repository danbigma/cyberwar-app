"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_validator_1 = require("express-validator");
const Registration_1 = __importDefault(require("./models/Registration"));
const database_1 = __importDefault(require("./db/database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: (_a = process.env.FRONTEND_URL) !== null && _a !== void 0 ? _a : "http://localhost:3000",
    credentials: true,
}));
app.post("/registration", [
    (0, express_validator_1.body)("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email address")
        .normalizeEmail(),
    (0, express_validator_1.body)("nickname")
        .trim()
        .notEmpty()
        .withMessage("Nickname is required")
        .isLength({ min: 3 })
        .withMessage("Nickname must be at least 3 characters"),
    (0, express_validator_1.body)("ratingType")
        .trim()
        .notEmpty()
        .withMessage("Rating type is required")
        .isIn(["faceit", "premier"])
        .withMessage("Rating type must be either 'faceit' or 'premier'"),
    (0, express_validator_1.body)("ratingValue")
        .notEmpty()
        .withMessage("Rating value is required")
        .isNumeric()
        .withMessage("Rating value must be a number")
        .custom((value) => {
        if (value < 0) {
            throw new Error("Rating value cannot be negative");
        }
        return true;
    }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const { email, nickname, ratingType, ratingValue } = req.body;
    try {
        console.log("Registration received:", req.body);
        // Сохраняем данные в MongoDB
        const registration = new Registration_1.default({
            email,
            nickname,
            ratingType,
            ratingValue,
        });
        yield registration.save();
        res.json({ status: "ok", message: "Registration successful" });
    }
    catch (error) {
        console.error("Registration failed:", error);
        res.status(500).json({ status: "error", message: "Registration failed" });
    }
}));
const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 4000;
(0, database_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
