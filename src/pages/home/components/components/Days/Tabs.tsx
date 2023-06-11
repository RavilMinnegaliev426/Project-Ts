import React from "react";
import s from "./Days.module.scss";
import { useCustomDispatch } from "../../../../../hooks/storeHooks";
import { tabsNumberState } from "../../../../../store/slices/TabsSlice";

type Props = {};
interface Tabs {
  value: string;
  numberState: number;
}
export const Tabs = (props: Props) => {
  const tabs: Tabs[] = [
    {
      value: "На неделе",
      numberState: 7,
    },
    {
      value: "На 14 дней",
      numberState: 14,
    },
    // {
    //   value: "Слайдер",
    //   numberState: 14,
    // },
  ];
  const dispatch = useCustomDispatch();

  function tabsClick(e: number) {
    dispatch(tabsNumberState(e));
  }
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div
            className={s.tab}
            key={tab.value}
            onClick={() => tabsClick(tab.numberState)}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel} onClick={() => tabsClick(7)}>
        Отменить
      </div>
    </div>
  );
};
