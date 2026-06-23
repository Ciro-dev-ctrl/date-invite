import Confetti from "react-confetti";

export default function FinalScreen({

  date,

  time,

  food,

}) {

  return (

    <>

      <Confetti />

      <div className="card">

        <div className="emoji final">

          🥰💖✨

        </div>

        <h1>

          Я вже чекаю

          <br />

          наше побачення!

        </h1>

        <div className="summary">

          <div>

            📅 {date}

          </div>

          <div>

            🕒 {time}

          </div>

          <div>

            {food}

          </div>

        </div>

        <p>

          До зустрічі ❤️

        </p>

      </div>

    </>

  );

}