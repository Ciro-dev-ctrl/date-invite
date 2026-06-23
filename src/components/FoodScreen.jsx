const foods = [

  "🍕 Піца",

  "🍣 Суші",

  "🍔 Бургер",

  "🍝 Паста",

  "🍜 Рамен",

  "🥡 Ролтон",

];

export default function FoodScreen({

  selected,

  setSelected,

  onNext,

}) {

  return (

    <div className="card">

      <div className="emoji">

        😋

      </div>

      <h1>

        Що тобі хочеться?

      </h1>

      <p>

        Я готовий майже на все 😎

      </p>

      <div className="food-grid">

        {foods.map((food) => (

          <div

            key={food}

            className={

              selected === food

                ? "food-card selected"

                : "food-card"

            }

            onClick={() =>

              setSelected(food)

            }

          >

            {food}

          </div>

        ))}

      </div>

      <button

        className="yes-btn"

        disabled={!selected}

        style={{

          opacity:

            selected

              ? 1

              : 0.5

        }}

        onClick={onNext}

      >

        Підтвердити ❤️

      </button>

    </div>

  );

}