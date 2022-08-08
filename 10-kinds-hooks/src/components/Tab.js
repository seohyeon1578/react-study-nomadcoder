import React from "react";
import { useTab } from "../hooks/useTab";

const contents = [
  {
    tap: 'Section 1',
    content: "I'm the content of the Section 1"
  },
  {
    tap: 'Section 2',
    content: "I'm the content of the Section 2"
  },
]

const Tab = () => {
  const { currentItem, changeItem } = useTab(0, contents);
  return (
    <div>
      {contents.map((content, index) => (
        <button onClick={() => changeItem(index)} key={content.tap}>{content.tap}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  )
}

export default Tab;