export default function DateScreen({
  date,
  time,
  setDate,
  setTime,
  onNext,
}) {

  return (

    <div className="card">

      <div className="emoji">
        📅✨
      </div>

      <h1>

        Коли ти вільна?

      </h1>

      <p>

        Обери дату і час нашого побачення ❤️

      </p>

      <input
        className="input"
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <input
        className="input"
        type="time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      />

      <button
        className="yes-btn"
        disabled={!date || !time}
        style={{
          opacity:
            date && time
              ? 1
              : 0.5
        }}
        onClick={onNext}
      >

        Далі ❤️

      </button>

    </div>

  );

}