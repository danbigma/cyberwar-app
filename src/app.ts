import express from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import Registration from "./models/Registration";
import connectDB from "./db/database";
import { RegistrationData } from "./interface/RegistrationData";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
  })
);

app.post(
  "/registration",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),
    body("nickname")
      .trim()
      .notEmpty()
      .withMessage("Nickname is required")
      .isLength({ min: 3 })
      .withMessage("Nickname must be at least 3 characters"),
    body("ratingType")
      .trim()
      .notEmpty()
      .withMessage("Rating type is required")
      .isIn(["faceit", "premier"])
      .withMessage("Rating type must be either 'faceit' or 'premier'"),
    body("ratingValue")
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
  ],
  async (
    req: express.Request<{}, {}, RegistrationData>,
    res: express.Response
  ): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, nickname, ratingType, ratingValue } = req.body;

    try {
      console.log("Registration received:", req.body);

      // Сохраняем данные в MongoDB
      const registration = new Registration({
        email,
        nickname,
        ratingType,
        ratingValue,
      });
      await registration.save();

      res.json({ status: "ok", message: "Registration successful" });
    } catch (error) {
      console.error("Registration failed:", error);
      res.status(500).json({ status: "error", message: "Registration failed" });
    }
  }
);

const PORT = process.env.PORT ?? 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
