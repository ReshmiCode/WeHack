import React from "react";
import { Carousel } from "antd";

const ContentViewer = () => {
  return (
    <Carousel autoplay>
      <div className="flexRow">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HcmWONC42I4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1>Boss Habits Every Entrepreneur Should Have</h1>
        </div>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6yi20I-AcUg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>How To Go From Idea to Product to Business</h1>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JzHLIXbqlOU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>Women Entrepreneurs Share Their Stories</h1>
      </div>
    </Carousel>
  );
};

export default ContentViewer;
