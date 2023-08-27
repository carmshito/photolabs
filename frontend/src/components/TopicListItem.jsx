import React from "react";

// styling
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { title, fetchTopicPhotos, id } = props;

  return (
    <div className="topic-list__item">
      <span onClick={() => fetchTopicPhotos(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
