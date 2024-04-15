const URL = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector("span");
const adviceQuote = document.querySelector("q");
const fetchBtn = document.querySelector("button");

const fetchAdvice = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const renderAdvice = async (adviceSlip) => {
  // destructure the object
  const { id, advice } = adviceSlip;
  adviceNumber.textContent = id;
  adviceQuote.textContent = advice;
};

const generateAdvice = async () => {
  const adviceData = await fetchAdvice();
  const advice = adviceData.slip;
  console.log(advice);
  renderAdvice(advice);
};

fetchBtn.addEventListener("click", generateAdvice);
document.addEventListener("DOMContentLoaded", generateAdvice);