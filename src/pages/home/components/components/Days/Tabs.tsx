import s from "./Days.module.scss";
import { useCustomDispatch } from "../../../../../hooks/storeHooks";
import { tabsNumberState } from "../../../../../store/slices/TabsSlice";
import { fetchCurrentWeatherCard } from "../../../../../store/thunks/fetchCurrenWeatherCard";
import { useSelector } from "react-redux";
import { SelectTabs } from "../../../../../hooks/selectTabs";

interface Tabs {
  value: string;
  numberState: number;
}
export const Tabs = () => {
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
  const { latitude } = useSelector(SelectTabs);
  const { longitude } = useSelector(SelectTabs);
  function tabsClick(e: number) {
    console.log(latitude, longitude, e);
    dispatch(tabsNumberState(e));
    dispatch(fetchCurrentWeatherCard(latitude, longitude, e));
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
