import React from "react";
import tick from "../../../assets/tick.png";
function Feature({ data }) {
  const { content, advantages, image } = data;
  return (
    <div className="feature flex">
      <div>
        <div>
          <p className="feature__content">{content}</p>
          <ul>
            {advantages.map(({ id, content }) => {
              return (
                <>
                  <li className="feature__list-item" key={id}>
                    <img src={tick} alt="tick" />
                    <span className="feature__list-item__content">
                      {content}
                    </span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="feature__btn-container">
          <button className="btn">reserve your seat</button>
        </div>
      </div>
      <div>
        <img src={image} alt="feature" />
      </div>
    </div>
  );
}

export default Feature;
