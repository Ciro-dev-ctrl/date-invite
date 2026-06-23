export default function YesScreen({ onNext }) {

  return (

    <div className="card">

      <div className="emoji hug">

        🐱❤️🐱

      </div>

      <h1>

        Урааааа!!

      </h1>

      <p>

        Тепер я офіційно

        <br />

        чекаю наше побачення ❤️

      </p>

      <button
        className="yes-btn"
        onClick={onNext}
      >

        Далі ❤️

      </button>

    </div>

  );
}