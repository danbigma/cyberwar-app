import ExcelJS from "exceljs";
import Registration from "../models/Registration";

export async function generateExcelFile(): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Registrations");

  // Заголовки столбцов
  worksheet.columns = [
    { header: "Email", key: "email", width: 30 },
    { header: "Nickname", key: "nickname", width: 20 },
    { header: "Rating Type", key: "ratingType", width: 15 },
    { header: "Rating Value", key: "ratingValue", width: 10 },
  ];

  // Получаем данные из базы данных
  const registrations = await Registration.find({});

  // Добавляем данные в worksheet
  registrations.forEach((registration) => {
    worksheet.addRow({
      email: registration.email,
      nickname: registration.nickname,
      ratingType: registration.ratingType,
      ratingValue: registration.ratingValue,
    });
  });

  // Генерируем буфер Excel файла
  const uint8Array = await workbook.xlsx.writeBuffer();
  const buffer = Buffer.from(uint8Array);
  return buffer;
}
