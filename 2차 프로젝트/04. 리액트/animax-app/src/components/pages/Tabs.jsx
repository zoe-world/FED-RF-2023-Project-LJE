import React, { useEffect, useState } from "react";
import { Cast } from "./Cast";
import { StillCut } from "./StillCut";
import { StarRate } from "./StarRate";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../redux/reducers/tab";

export function Tabs({ tabItem, castLength }) {
  // tabItem - 탭 아이템
  const tabData = [
    {
      id: 0,
      name: "등장인물",
      disabled: castLength > 0 ? true : false,
    },
    {
      id: 1,
      name: "스틸컷",
      disabled: true,
    },
    {
      id: 2,
      name: "작품평",
      disabled: true,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const dispatch = useDispatch();
  let tabIndex = useSelector((state) => state.tab.value);

  const tabClickHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    dispatch(changeTab(activeTab));
  }, []);
  console.log(changeTab(activeTab).payload);

  return (
    <>
      <ul className="tab_list">
        {tabData.map((tab, index) => {
          return (
            tab.disabled && (<li
              key={index}
              onClick={() => {
                tabClickHandler(index);
              }}
              className={index === activeTab ? "active" : ""}
            >
              <a href="#" className="tab_item">
                {tab.name}
              </a>
            </li>)
          );
        })}
      </ul>
      <div className="tab_content">
        {activeTab === 0 && castLength > 0 && (
          <Cast castLength={castLength} tabItem={tabItem} />
        )}
        {activeTab === 1 && <StillCut />}
        {activeTab === 2 && <StarRate />}
      </div>

    </>
  );
}
