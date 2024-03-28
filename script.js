const inputArea = document.querySelector("#inputArea");
const output = document.querySelector("#output");

const camaleCase = () => {
  const targetValue = inputArea.value;
  valueSplit = targetValue.split(" ");

  const result = valueSplit
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("");
  output.innerText = result;
};

const clearForm = () => {
  inputArea.value = "";
  output.innerText = "";
};
