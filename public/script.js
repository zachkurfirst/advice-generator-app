const URL = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector("span");
const adviceQuote = document.querySelector("q");
const fetchBtn = document.querySelector("button");

const fetchAdvice = async () => {
  // DISABLE BUTTON
  fetchBtn.classList.replace("bg-neon-green", "bg-light-cyan");
  fetchBtn.disabled = true;
  fetchBtn.classList.toggle("btn-hover");
  // console.log('button: disabled');

  // CALL API
  const response = await fetch(URL);
  const data = await response.json();
  // console.log("data:", data);
  const advice = data.slip;
  // console.log("advice slip:", advice);
  renderAdvice(advice);

  // ENABLE BUTTON
  setTimeout(() => {
    fetchBtn.disabled = false;
    fetchBtn.classList.replace("bg-light-cyan", "bg-neon-green");
    fetchBtn.classList.toggle("btn-hover");
    // console.log('button: enabled');
  }, 2000);
};

const renderAdvice = async (adviceSlip) => {
  const { id, advice } = adviceSlip;
  adviceNumber.textContent = id;
  adviceQuote.textContent = advice;
};

document.addEventListener("DOMContentLoaded", fetchAdvice);
fetchBtn.addEventListener("click", fetchAdvice);
