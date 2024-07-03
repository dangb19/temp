import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Setting from "./Setting";
import useKeyBoardEvent from "../../hooks/useKeyBoardEvent";

export default function SettingButton() {
  useKeyBoardEvent();

  const settingRef = useRef();
  const [settingIsShow, setSettingIsShow] = useState(false);

  const handleSettingToggle = () => {
    setSettingIsShow(!settingIsShow);
  };

  const handleClickOutside = (e) => {
    if (settingRef.current && !settingRef.current.contains(e.target)) {
      setSettingIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Button
        onClick={handleSettingToggle}
        sizeClass="h-16 w-16 sm:h-14 sm:w-14 md:h-12 md:w-12"
      >
        <i className="fa-solid fa-gear text-2xl md:text-xl text-gray-800 dark:text-gray-200"></i>
      </Button>
      {settingIsShow && <Setting ref={settingRef} />}
    </div>
  );
}
