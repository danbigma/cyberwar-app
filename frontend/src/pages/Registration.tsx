import React, { useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import HeaderSection from "../components/topbar/HeaderSection";
import axios from "axios";

// В верхней части файла, после существующих импортов, добавляем API_URL:
const API_URL = process.env.REACT_APP_API_URL || "https://cyberwar-app-production.up.railway.app";

const Registration: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    ratingType: "faceit",
    ratingValue: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.nickname || !formData.ratingValue) {
      setError(t("registration.requiredError"));
      return;
    }
    if (!validateEmail(formData.email)) {
      setError(t("registration.emailError"));
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await axios.post(`${API_URL}/registration`, {
        email: formData.email,
        nickname: formData.nickname,
        ratingType: formData.ratingType,
        ratingValue: formData.ratingValue,
      });

      setSubmitted(true);
    } catch (err: any) {
      // Расширенная обработка ошибок: если сервер вернул массив ошибок, объединяем их
      if (err.response && err.response.data && err.response.data.errors) {
        const messages = err.response.data.errors
          .map((e: any) => e.message)
          .join(", ");
        setError(messages);
      } else {
        setError(t("registration.submitError"));
      }
      console.error(err.response ? err.response.data : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex justify-center bg-[#222528] rounded-b-3xl pb-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-6 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("registration.successTitle")}
          </h2>
          <p>{t("registration.successMessage")}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderSection />
      <div className="flex justify-center bg-[#222528] rounded-b-3xl pb-4">
        <div className="w-full sm:w-1/2 p-6 rounded-3xl text-white">
          <div className="text-left mb-4">
            <h2 className="text-3xl font-bold mb-4">
              {t("registration.title")}
              <span className="text-[#E58A3C]"> {t("registration.date")}</span>
            </h2>
            <hr className="border-[#474C52] mb-8" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("registration.emailPlaceholder")}
              className={classNames(
                "w-full p-3 mt-4 mb-2 text-center bg-[#474C52] text-gray-400 rounded-md border-none focus:ring-2 focus:ring-[#E58A3C] outline-none",
                { "border-2 border-red-500": error }
              )}
              required
            />
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder={t("registration.nicknamePlaceholder")}
              className={classNames(
                "w-full p-3 mt-4 mb-2 text-center bg-[#474C52] text-gray-400 rounded-md border-none focus:ring-2 focus:ring-[#E58A3C] outline-none",
                { "border-2 border-red-500": error }
              )}
              required
            />

            <div className="">
              <label className="block text-white text-sm font-bold mb-2">
                {t("registration.ratingLabel")}
              </label>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="faceit"
                    name="ratingType"
                    value="faceit"
                    checked={formData.ratingType === "faceit"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="faceit"
                    className={classNames(
                      "flex items-center justify-center w-8 h-8 rounded-full border border-[#E58A3C] text-gray-400 cursor-pointer",
                      {
                        "bg-[#E58A3C] text-white":
                          formData.ratingType === "faceit",
                      }
                    )}
                  >
                    <span className="text-sm">F</span>
                  </label>
                  <label htmlFor="faceit" className="ml-2 text-gray-400">
                    Faceit
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="premier"
                    name="ratingType"
                    value="premier"
                    checked={formData.ratingType === "premier"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="premier"
                    className={classNames(
                      "flex items-center justify-center w-8 h-8 rounded-full border border-[#E58A3C] text-gray-400 cursor-pointer",
                      {
                        "bg-[#E58A3C] text-white":
                          formData.ratingType === "premier",
                      }
                    )}
                  >
                    <span className="text-sm">P</span>
                  </label>
                  <label htmlFor="premier" className="ml-2 text-gray-400">
                    Premier
                  </label>
                </div>
              </div>
            </div>

            <input
              type="number"
              name="ratingValue"
              value={formData.ratingValue}
              onChange={handleChange}
              placeholder={
                formData.ratingType === "faceit"
                  ? t("registration.ratingPlaceholderFaceit")
                  : t("registration.ratingPlaceholderPremier")
              }
              className={classNames(
                "w-full p-3 mt-4 mb-2 text-center bg-[#474C52] text-gray-400 rounded-md border-none focus:ring-2 focus:ring-[#E58A3C] outline-none",
                { "border-2 border-red-500": error }
              )}
              required
            />

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            <button
              type="submit"
              className={classNames(
                "w-full py-3 bg-[#E58A3C] mt-4 text-white font-semibold rounded-md shadow-md hover:bg-[#cc752f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#cc752f]",
                { "opacity-50 cursor-not-allowed": isLoading }
              )}
              disabled={isLoading}
            >
              {isLoading
                ? t("registration.loadingButton")
                : t("registration.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
