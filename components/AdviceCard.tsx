"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AdviceCard() {
  const [adviceData, setAdviceData] = useState({
    advice: "",
    adviceId: null,
  });
  const [noAdvice, setNoAdvice] = useState("");

  const loadAdviceFromLocalStorage = () => {
    const savedAdvice = localStorage.getItem("adviceData");
    if (savedAdvice) {
      return JSON.parse(savedAdvice);
    }
    return { advice: "", adviceId: null };
  };

  const callAPI = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const newAdviceData = {
        advice: data.slip.advice,
        adviceId: data.slip.id,
      };
      setAdviceData(newAdviceData);
      setNoAdvice(""); // Clear noAdvice if the call is successful
      localStorage.setItem("adviceData", JSON.stringify(newAdviceData));
      console.log("Fetched Advice Data:", newAdviceData); // Debugging line
    } catch (err) {
      setNoAdvice("No available advice.");
      console.log(err);
    }
  };

  useEffect(() => {
    const savedAdviceData = loadAdviceFromLocalStorage();
    setAdviceData(savedAdviceData);
    if (!savedAdviceData.advice) {
      callAPI(); // Fetch advice if there's no saved advice
    }
  }, []);

  return (
    <article className="mx-5 flex w-full min-w-[300px] max-w-[545px] flex-col items-center justify-center rounded-lg bg-ag-dark-grayish-blue px-6 pt-10 text-center sm:px-[50px] sm:pt-[50px]">
      <p className="mb-6 text-[0.65rem] uppercase tracking-[.20rem] text-ag-neon-green sm:text-xs">
        {adviceData.adviceId !== null ? `advice #${adviceData.adviceId}` : ""}
      </p>
      <h1 className="text-pretty text-[1.4rem] text-ag-light-cyan sm:text-[1.675rem]">
        &#8220;{adviceData.advice || noAdvice}&#8221;
      </h1>
      <div className="mb-8 mt-6 h-6 w-full bg-[url(/images/pattern-divider-mobile.svg)] bg-center bg-no-repeat sm:my-10 sm:bg-[url(/images/pattern-divider-desktop.svg)]" />
      <button
        onClick={callAPI}
        className="relative -mb-[32px] flex h-16 w-16 items-center justify-center rounded-full bg-ag-neon-green"
      >
        <Image
          src="./images/icon-dice.svg"
          alt="Dice button"
          width={25}
          height={25}
          className="object-cover"
        />
      </button>
    </article>
  );
}
