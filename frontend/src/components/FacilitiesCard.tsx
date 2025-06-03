import React from "react";

interface FacilitiesCardProps {
  image?: string;
  title: string;
  description?: string;
  icon?: string;
  icons?: string[];
  backgroundClass?: string;
  backgroundSize?: string;
  backgroundPosition?: string; // Add this new prop
  className?: string;
  descriptionTextColor?: string;
}

const FacilitiesCard: React.FC<FacilitiesCardProps> = ({
  image,
  title,
  icon,
  icons,
  backgroundClass = "",
  backgroundSize,
  backgroundPosition = "right bottom", // Default position
  className = "",
  description,
  descriptionTextColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-3xl p-4 w-full ${backgroundClass} ${className}`}
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: backgroundSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition, // Use the prop here
      }}
    >
      {icon && <img className="h-auto w-8" src={icon} alt="Icon" />}
      {icons && (
        <div className="flex gap-3">
          {icons.map((iconSrc, index) => (
            <img key={index} className="h-auto w-8" src={iconSrc} alt="Icon" />
          ))}
        </div>
      )}
      {description && (
        <div className="flex gap-3">
          <p className={`text-sm ${descriptionTextColor}`}>{description}</p>
        </div>
      )}
      <p className="text-2xl">{title}</p>
    </div>
  );
};

export default FacilitiesCard;