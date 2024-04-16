const URL = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector("span");
const adviceQuote = document.querySelector("q");
const fetchBtn = document.querySelector("button");

const fetchAdvice = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // console.log("data:", data);
  const advice = data.slip;
  // console.log("advice slip:", advice);
  renderAdvice(advice);
};

const renderAdvice = async (adviceSlip) => {
  // destructure the object
  const { id, advice } = adviceSlip;
  adviceNumber.textContent = id;
  adviceQuote.textContent = advice;
};

document.addEventListener("DOMContentLoaded", fetchAdvice);
fetchBtn.addEventListener("click", fetchAdvice);
