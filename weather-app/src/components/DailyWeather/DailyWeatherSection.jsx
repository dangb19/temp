import { useState } from "react";
import Button from "../UI/Button";
import H2 from "../UI/H2";
import Section from "../UI/Section";

import GridView from "./GridView/GridView";
import TableView from "./TableView/TableView";

export default function DailyWeatherSection() {
  const [view, setView] = useState(true);

  const toggleView = () => {
    setView((prevState) => !prevState);
  };

  let btnIcon = (
    <i className="fa-solid fa-table-list text-2xl sm:text-lg dark:text-[#ababab] text-gray-500"></i>
  );

  if (!view) {
    btnIcon = (
      <i className="fa-solid fa-border-all text-2xl sm:text-lg dark:text-[#ababab] text-gray-500"></i>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-5">
        <H2>Daily</H2>
        <Button onClick={toggleView} sizeClass="w-14 sm:w-12 h-14 sm:h-12">
          {btnIcon}
        </Button>
      </div>
      {view && <GridView />}
      {!view && <TableView />}
    </Section>
  );
}
