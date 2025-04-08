import express from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { google } from "googleapis";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
  })
);

interface RegistrationData {
  email: string;
  nickname: string;
  ratingType: string;
  ratingValue: number;
}

app.get("/", (req, res) => {
  res.send("Hello from Express on Node.js with TypeScript!");
});

app.post(
  "/registration",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("nickname").notEmpty().withMessage("Nickname is required"),
    body("ratingValue")
      .isNumeric()
      .withMessage("Rating value must be a number"),
  ],
  async (
    req: express.Request<{}, {}, RegistrationData>,
    res: express.Response
  ): Promise<void> => {
    // Явное указание типа возвращаемого значения Promise<void>
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return; // Важно завершить выполнение функции после отправки ответа
    }

    const { email, nickname, ratingType, ratingValue } = req.body;

    try {
      // Здесь можно добавить логику сохранения в базу данных
      console.log("Registration received:", req.body);

      // Инициализация клиента для Google Sheets
      const auth = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        undefined,
        process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        ["https://www.googleapis.com/auth/spreadsheets"]
      );

      const sheets = google.sheets({ version: "v4", auth });

      // Запись данных регистрации в Google Sheet
      const appendResult = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID!,
        range: "Sheet1!A:D", // Область, куда будет добавлена запись
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: [[email, nickname, ratingType, ratingValue]],
        },
      });

      console.log("Google Sheets append result:", appendResult.data);

      res.json({ status: "ok", message: "Registration successful" });
    } catch (error) {
      console.error("Registration failed:", error);
      res.status(500).json({ status: "error", message: "Registration failed" });
    }
  }
);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
