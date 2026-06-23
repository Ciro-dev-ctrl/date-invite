import { useState } from "react";
import "./App.css";

import Intro from "./components/Intro";
import YesScreen from "./components/YesScreen";
import DateScreen from "./components/DateScreen";
import FoodScreen from "./components/FoodScreen";
import FinalScreen from "./components/FinalScreen";
import Petals from "./components/Petals";

function App() {
  const [page, setPage] = useState("intro");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [food, setFood] = useState("");

  return (
    <div className="app">
      <Petals />

      <div className="bg-circle c1"></div>
      <div className="bg-circle c2"></div>
      <div className="bg-circle c3"></div>

      {page === "intro" && (
        <Intro
          onYes={() => setPage("yes")}
        />
      )}

      {page === "yes" && (
        <YesScreen
          onNext={() => setPage("date")}
        />
      )}

      {page === "date" && (
        <DateScreen
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
          onNext={() => setPage("food")}
        />
      )}

      {page === "food" && (
        <FoodScreen
          selected={food}
          setSelected={setFood}
          onNext={() => setPage("final")}
        />
      )}

      {page === "final" && (
        <FinalScreen
          date={date}
          time={time}
          food={food}
        />
      )}
    </div>
  );
}

export default App;