console.log("Is this thing on?");

const URL = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  const response = await fetch(URL);
  console.log(response);
  const adviceData = await response.json();
  console.log(adviceData);
};

fetchAdvice();
