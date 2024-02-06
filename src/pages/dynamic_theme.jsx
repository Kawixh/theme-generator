import "@/styles/pages/dynamic_theme/main.scss";
import { useState } from "react";
import { Check } from "lucide-react";
import { IMG_URLS } from "@/lib/img_urls";
import { applyDynamicTheme } from "@/lib/theme/apply";

export const DynamicTheme = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = async (src) => {
    setSelectedButton(src);

    let x = await  applyDynamicTheme(src);
    console.log(x)
  };

  const renderButtons = () => {
    return IMG_URLS.map((img, index) => (
      <button
        key={index}
        id={img.id}
        className={`rounded-full relative hover:rounded-2xl overflow-hidden transition ease-in hover:ease-in duration-300 ${
          selectedButton === img.src ? "bg-blue-500" : ""
        }`}
        onClick={() => handleClick(img.src)}
      >
        {selectedButton === img.src && (
          <div
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
            style={{ zIndex: 1, transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
          >
            <Check className="text-gray-200" />
          </div>
        )}
        <img src={img.src} alt="" />
      </button>
    ));
  };

  return (
    <div className={"container p-3 grid grid-cols-3"}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold text-gray-900">
            Dynamic Theme Generator
          </h1>

          <p className="text-gray-400">
            A user-generated scheme is derived from an image selection to create
            5 key colors with dynamic color. Select an image or add your own to
            see the user-generated color in action.
          </p>
        </div>

        <div className="flex gap-3">{renderButtons()}</div>
      </div>

      <div className="col-span-2"></div>
    </div>
  );
};
