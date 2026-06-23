import { useState } from "react";

export default function Intro({ onYes }) {

  const texts = [
    "Ні",
    "Точно ні? 🥺",
    "Подумай ще 😢",
    "Ну будь ласка 👉👈",
    "Ти ж знаєш правильну відповідь 😏",
  ];

  const [count, setCount] = useState(0);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {

    setCount((c) =>
      Math.min(c + 1, texts.length - 1)
    );

    setPos({
      x: Math.random() * 260 - 130,
      y: Math.random() * 180 - 90,
    });
  };

  return (
    <div className="card">

      <div className="flower">
        🌸
      </div>

      <div className="cats">

        <div className="cat">
          /\_/\\
          <br />
          ( •.• )
        </div>

        <div className="heart">
          ❤️
        </div>

        <div className="cat">
          /\_/\\
          <br />
          ( •.• )
        </div>

      </div>

      <h1>

        Підеш зі мною

        <br />

        на побачення?

      </h1>

      <div className="buttons">

        <button
          className="yes-btn"
          onClick={onYes}
        >
          Так ❤️
        </button>

        <button
          className="no-btn"
          onMouseEnter={moveButton}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`
          }}
        >

          {texts[count]}

        </button>

      </div>

    </div>
  );
}