import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => {
        return (
          <span key={topic.id}>
            <TopicListItem
              title={topic.title}
            />
          </span>
        );
      })}
    </div>
  );
};

export default TopicList;
