import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as CloseButton } from "../../assets/images/bt_close.svg";
import { useTranslation } from "react-i18next";
import TextWithLineBreaks from "../../utils/TextWithLineBreaks";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import FocusTrap from "focus-trap-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { t } = useTranslation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError(t("modal.emailError"));
      return;
    }

    setIsLoading(true);

    const templateParams = {
      user_email: email,
      reply_to: email,
    };

    // Отправка уведомления вам
    emailjs
      .send(
        "service_ic6nmcb",
        "template_s55mycw",
        templateParams,
        "2QHLY4zMwNL2hVD97"
      )
      .then(
        (response) => {
          console.log(
            "Уведомление отправлено!",
            response.status,
            response.text
          );

          // Отправка ответа клиенту
          emailjs
            .send(
              "service_ic6nmcb",
              "template_dvue32b",
              templateParams,
              "2QHLY4zMwNL2hVD97"
            )
            .then(
              (response) => {
                console.log(
                  "Ответ клиенту отправлен!",
                  response.status,
                  response.text
                );
                setIsLoading(false);
                setEmail("");
                handleClose();
              },
              (error) => {
                console.error("Ошибка отправки ответа клиенту.", error);
                setIsLoading(false);
                setError(t("modal.sendError"));
              }
            );
        },
        (error) => {
          console.error("Ошибка отправки уведомления вам.", error);
          setIsLoading(false);
          setError(t("modal.sendError"));
        }
      );
  };

  const handleClose = useCallback(() => {
    setEmail("");
    setError("");
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add("overflow-hidden");
      setTimeout(() => {
        setAnimate(true);
      }, 10);
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={classNames(
        "fixed inset-0 flex items-center justify-center z-[9999] transition-opacity duration-300",
        {
          "opacity-100": animate,
          "opacity-0": !animate,
        }
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-70"
        aria-hidden="true"
        onClick={handleClose}
      ></div>
      <FocusTrap>
        <div
          className={classNames(
            "bg-[#33393F] w-full sm:w-1/2 lg:w-1/3 p-6 rounded-3xl text-white relative z-[10000] transform transition-all duration-300",
            {
              "opacity-100 scale-100": animate,
              "opacity-0 scale-95": !animate,
            }
          )}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
            aria-label={t("modal.close")}
          >
            <CloseButton />
          </button>
          <div className="text-left mb-4">
            <h2
              id="modal-title"
              className="text-md font-bold mb-4 leading-[0.95rem] pixeloid-sans"
            >
              <TextWithLineBreaks text={t("modal.title")} />
            </h2>
            <hr className="border-[#474C52] mb-8" />
            <h3 className="text-3xl font-bold">
              {t("modal.subtitle_part1")}{" "}
              <span className="text-[#E58A3C]">{t("modal.highlight")}</span>{" "}
              {t("modal.subtitle_part2")}
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {t("modal.description")}
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={t("modal.placeholder")}
              className={classNames(
                "w-full p-3 mt-4 mb-2 text-center bg-[#474C52] text-gray-400 rounded-md border-none focus:ring-2 focus:ring-[#E58A3C] outline-none",
                {
                  "border-2 border-red-500": error,
                }
              )}
              autoFocus
              aria-invalid={!!error}
              aria-describedby={error ? "email-error" : undefined}
            />
            {error && (
              <p id="email-error" className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}
            <button
              type="submit"
              className={classNames(
                "w-full py-3 bg-[#E58A3C] text-white font-semibold rounded-md shadow-md hover:bg-[#cc752f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#cc752f]",
                {
                  "opacity-50 cursor-not-allowed": isLoading,
                }
              )}
              disabled={isLoading}
            >
              {isLoading ? t("modal.loading") : t("modal.button")}
            </button>
          </form>
        </div>
      </FocusTrap>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
