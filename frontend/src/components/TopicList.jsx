import React from "react";

// styling
import "../styles/TopicList.scss";

// components
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topics, fetchTopicPhotos } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <span key={topic.id}>
            <TopicListItem
              id={topic.id}
              title={topic.title}
              fetchTopicPhotos={fetchTopicPhotos}
            />
          </span>
        );
      })}
    </div>
  );
};

export default TopicList;
