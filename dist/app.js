"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_validator_1 = require("express-validator");
const Registration_1 = __importDefault(require("./models/Registration"));
const database_1 = __importDefault(require("./db/database"));
const excelService_1 = require("./services/excelService"); // Импортируем функцию для генерации Excel файла
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
app.get('/registrations/excel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buffer = yield (0, excelService_1.generateExcelFile)();
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=registrations.xlsx');
        res.send(buffer);
    }
    catch (error) {
        console.error("Excel generation failed:", error);
        res.status(500).json({ status: "error", message: "Excel generation failed" });
    }
}));
const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 4000;
(0, database_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
