import { Link } from "react-router-dom";
import { useState } from "react";
import "@/styles/routing/theme_router.scss";
import { checkUrl } from "@/lib/utils";

export const ThemeRouter = () => {
  const currentUrl = window.location.href;
  const [activeTab, setActiveTab] = useState(checkUrl(currentUrl) ? "manual" : "dynamic");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="theme-router">
      <Link
      to="/dynamic"
        className={`
        border-solid
        px-3 py-2 
        rounded-xl 
        text-center 
        border-2 
        border-gray-600 hover:border-sky-500
        hover:bg-sky-300
        ${activeTab === "dynamic" ? "bg-sky-400" : "bg-white"}
        `}
        onClick={() => handleClick("dynamic")}
      >
        Dynamic
      </Link>

      <Link
        to="/manual"
        className={`
        border-solid 
        border-2 
        px-3 py-2 
        rounded-xl 
        text-center 
        border-gray-600 hover:border-sky-500
        hover:bg-sky-300 
        ${activeTab === "manual" ? "bg-sky-400" : "bg-white"}
        `}
        onClick={() => handleClick("manual")}
      >
        Manual
      </Link>
    </div>
  );
};
