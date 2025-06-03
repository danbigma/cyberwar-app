import React from "react";
import { useTranslation } from "react-i18next";

const ScheduleCard: React.FC = () => {
  const { t } = useTranslation();

  // Обновленные данные времени работы
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const times = [
    "closed", // Понедельник
    "14:30 - 23:00", // Вторник
    "14:30 - 23:00", // Среда
    "14:30 - 23:00", // Четверг
    "14:30 - 23:00", // Пятница
    "14:30 - 23:00", // Суббота
    "14:30 - 23:00", // Воскресенье
  ];

  return (
    <div className="w-full lg:w-1/2 bg-[#33393F] rounded-3xl p-6">
      <h1 className="text-4xl font-bold mb-6">{t("schedule.title")}</h1>
      <div>
        {days.map((day, index) => (
          <div key={index} className="flex justify-between items-center mb-4 group cursor-pointer">
            <div className="relative">
              <p className="relative inline-block">
                <span className="group-hover:text-white transition-colors duration-200">
                  {t(`schedule.days.${day}`)}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </p>
            </div>
            <p
              className={`transition-colors duration-300 ${
                times[index] === "closed"
                  ? "text-orange-500 line-through"
                  : "group-hover:text-orange-500"
              }`}
            >
              {times[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;