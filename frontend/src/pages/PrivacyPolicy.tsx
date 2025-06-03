// src/components/PrivacyPolicy.tsx
import React, { useEffect } from "react";
import ContactSection from "../components/sections/ContactSection";
import { useTranslation } from "react-i18next";
import HeaderSection from "../components/topbar/HeaderSection";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Скролл к началу страницы
  }, []);
  return (
    <>
      <HeaderSection />
      <div className="rounded-b-3xl bg-[#222528] px-4 pt-4 pb-1 text-[#FEFDFD]">
        <h1 className="text-3xl font-bold my-16">
          {t("privacy_policy.title")}
        </h1>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-2xl font-bold mb-6">
          {t("privacy_policy.section1.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1.content")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_1.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_1.content")}</p>
        <ul className="list-disc ml-4 mb-4">
          <li>{t("privacy_policy.section1_1.laws.law1")}</li>
          <li>{t("privacy_policy.section1_1.laws.law2")}</li>
          <li>{t("privacy_policy.section1_1.laws.law3")}</li>
          <li>{t("privacy_policy.section1_1.laws.law4")}</li>
        </ul>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_2.title")}
        </h2>
        <ul className="list-disc ml-4 mb-4">
          <li>{t("privacy_policy.section1_2.address")}</li>
          <li>{t("privacy_policy.section1_2.phone")}</li>
          <li>{t("privacy_policy.section1_2.email")}</li>
        </ul>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_3.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_3.content")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_4.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_4.content")}</p>
        <ul className="list-disc ml-4 mb-4">
          <li>{t("privacy_policy.section1_4.laws.law1")}</li>
          <li>{t("privacy_policy.section1_4.laws.law2")}</li>
          <li>{t("privacy_policy.section1_4.laws.law3")}</li>
          <li>{t("privacy_policy.section1_4.laws.law4")}</li>
          <li>{t("privacy_policy.section1_4.laws.law5")}</li>
          <li>{t("privacy_policy.section1_4.laws.law6")}</li>
          <li>{t("privacy_policy.section1_4.laws.law7")}</li>
        </ul>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_5.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_5.content")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_6.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_6.paragraph_1")}</p>
        <p className="mb-4">{t("privacy_policy.section1_6.paragraph_2")}</p>
        <p className="mb-4">{t("privacy_policy.section1_6.paragraph_3")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_7.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_7.paragraph_1")}</p>
        <p className="mb-4">{t("privacy_policy.section1_7.paragraph_2")}</p>
        <p className="mb-4">{t("privacy_policy.section1_7.paragraph_3")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section1_8.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section1_8.paragraph_1")}</p>
        <p className="mb-4">{t("privacy_policy.section1_8.paragraph_2")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section_2.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section_2.paragraph_1")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section2_1.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section2_1.paragraph_1")}</p>
        <p className="mb-4">{t("privacy_policy.section2_1.paragraph_2")}</p>
        <p className="mb-4">{t("privacy_policy.section2_1.paragraph_3")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section2_2.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section2_2.paragraph_1")}</p>
        <ul className="list-disc ml-4 mb-4">
          <li>{t("privacy_policy.section2_2.laws.law1")}</li>
          <li>{t("privacy_policy.section2_2.laws.law2")}</li>
          <li>{t("privacy_policy.section2_2.laws.law3")}</li>
          <li>{t("privacy_policy.section2_2.laws.law4")}</li>
          <li>{t("privacy_policy.section2_2.laws.law5")}</li>
          <li>{t("privacy_policy.section2_2.laws.law6")}</li>
          <li>{t("privacy_policy.section2_2.laws.law7")}</li>
        </ul>
        <p className="mb-4">{t("privacy_policy.section2_2.paragraph_2")}</p>
        <ul className="list-disc ml-4 mb-4">
          <li>{t("privacy_policy.section2_2.laws2.law1")}</li>
          <li>{t("privacy_policy.section2_2.laws2.law2")}</li>
          <li>{t("privacy_policy.section2_2.laws2.law3")}</li>
          <li>{t("privacy_policy.section2_2.laws2.law4")}</li>
          <li>{t("privacy_policy.section2_2.laws2.law5")}</li>
        </ul>
        <p className="mb-4">{t("privacy_policy.section2_2.paragraph_3")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section2_3.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section2_3.content")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section2_4.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section2_4.content")}</p>
        <hr className="border-[#33393F] mb-16" />
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy_policy.section_3.title")}
        </h2>
        <p className="mb-4">{t("privacy_policy.section_3.paragraph_1")}</p>
        <p className="mb-4">{t("privacy_policy.section_3.paragraph_2")}</p>
        <p className="mb-24">{t("privacy_policy.section_3.paragraph_3")}</p>
        <ContactSection />
      </div>
    </>
  );
};

export default PrivacyPolicy;
