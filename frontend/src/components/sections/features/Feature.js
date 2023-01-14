import React from "react";
import tick from "../../../assets/tick.png";
import Button from "../../Button";
function Feature({ data, activeId }) {
  const { title, content, advantages, icon, image } = data;
  return (
    <div className="feature-details-container">
      <div>
        <div className="">
          <p className="feature-paragraph">{content}</p>
          <ul className="features-ul">
            {advantages.map(({ id, content }) => {
              return (
                <>
                  <li className="feature-list-item" key={id}>
                    {" "}
                    <img src={tick} alt="" />
                    <span className="feature-list-item__content">
                      {content}
                    </span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="feature-btn">
          <Button text="reserve your seat" />
        </div>
      </div>
      <div className="feature-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Feature;
