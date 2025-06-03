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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExcelFile = generateExcelFile;
const exceljs_1 = __importDefault(require("exceljs"));
const Registration_1 = __importDefault(require("../models/Registration")); // Путь к вашей модели Registration
function generateExcelFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new exceljs_1.default.Workbook();
        const worksheet = workbook.addWorksheet("Registrations");
        // Заголовки столбцов
        worksheet.columns = [
            { header: "Email", key: "email", width: 30 },
            { header: "Nickname", key: "nickname", width: 20 },
            { header: "Rating Type", key: "ratingType", width: 15 },
            { header: "Rating Value", key: "ratingValue", width: 10 },
        ];
        // Получаем данные из базы данных
        const registrations = yield Registration_1.default.find({});
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
        const uint8Array = yield workbook.xlsx.writeBuffer();
        const buffer = Buffer.from(uint8Array);
        return buffer;
    });
}
