import React from "react";
import "./index.css";
const TabBar = (props) => {
  const handleClick = (item) => {
    props.handleChange(item.id);
  };

  const { currentIndex, list } = props;
  return (
    <ul className="tab-bar">
      {list.map((item) => {
        return (
          <li
            key={item.id}
            className={currentIndex === item.id ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TabBar;
