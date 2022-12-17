let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");

let eurRate = 4.66;
let usdRate = 4.5;
let chfRate = 4.74;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let exchange = exchangeElement.value;
  let exchangeRate;

  switch (exchange) {
  case "EUR":
    exchangeRate = eurRate;
    break;
  case "USD":
    exchangeRate = usdRate;
    break;
  case "CHF":
    exchangeRate = chfRate;
    break;
}

  let result = amount / exchangeRate;
  resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${exchange}`;
});


