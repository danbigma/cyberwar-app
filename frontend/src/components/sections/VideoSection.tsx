import React from "react";
import { ReactComponent as VideoImg } from "../../assets/images/video.svg";
import { ReactComponent as VideoImgMovil } from "../../assets/images/video_movil.svg";
import { useTranslation } from "react-i18next";
import TextWithLineBreaks from "../../utils/TextWithLineBreaks";

const VideoSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl relative mb-20 sm:mb-0">
      <VideoImg className="w-full h-auto hidden sm:block" />
      <VideoImgMovil className="w-full h-auto sm:hidden" />
      <button
        className="w-1/3 sm:hidden absolute top-1 bg-[#3CBCE5] rounded-3xl text-[#222528] px-3 py-1 items-center"
        type="button"
      >
        <span className="text-sm">
          <TextWithLineBreaks text={t("home.price_button")} />
        </span>
      </button>
      <div className="absolute top-60 sm:top-10 left-10 flex flex-col items-start gap-4">
        <h1 className="text-left text-4xl">
          <TextWithLineBreaks text={t("home.headline")} />
        </h1>
        <p className="text-left text-md font-roboto-mono">
          <TextWithLineBreaks text={t("home.description")} />
        </p>
        <a href="https://www.instagram.com/direct/t/17842023225077500/" target="_blank" rel="noreferrer"
          className="bg-[#E58A3C] rounded-lg text-white px-8 py-3 sm:px-3 sm:py-1.5 items-center"
        >
          <TextWithLineBreaks text={t("home.reserve_button")} />
        </a>
      </div>
      <button
        className="hidden sm:block absolute bottom-4 right-10 bg-[#3CBCE5] rounded-3xl text-[#222528] px-3 py-1 items-center"
        type="button"
      >
        <span className="text-sm">
          <TextWithLineBreaks text={t("home.price_button")} />
        </span>
      </button>
    </div>
  );
};

export default VideoSection;
