import Advice from "./components/Advice";
import Count from "./components/Count";
import Dotsloader from "./components/Dotsloader";
import LinePause from "./components/LinePause";
import DiceButton from "./components/DiceButton";

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  async function GetAdvice() {
    setLoading(true);
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    console.log(data.joke);
    setAdvice(data?.joke);
    setCount(Math.floor(Math.random() * 100) + 1);
    setLoading(false);
  }

  useEffect(function () {
    GetAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-darkBlue font-manrope font-extrabold px-4">
      {loading ? (
        <Dotsloader />
      ) : (
        <div className="flex flex-col justify-center items-center bg-darkGrayishBlue px-[23px] py-[30px]  text-center rounded-xl gap-6 relative w-45 md:w-1/2">
          <Count count={count} />
          <Advice advice={advice} />
          <LinePause />
          <DiceButton GetAdvice={GetAdvice} />
        </div>
      )}
    </div>
  );
}

export default App;
