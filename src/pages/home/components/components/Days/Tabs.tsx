import React from "react";
import s from "./Days.module.scss";

type Props = {};
interface Tabs {
  value: string;
}
export const Tabs = (props: Props) => {
  const tabs: Tabs[] = [
    {
      value: "На неделе",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На 14 дней",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
