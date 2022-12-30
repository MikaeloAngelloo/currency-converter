{


const calculateResult = (exchange, amount) => {
  const eurRate = 4.66;
const usdRate = 4.5;
const chfRate = 4.74;

  switch (exchange) {
    case "EUR":
     return amount = eurRate;
      
    case "USD":
     return amount = usdRate;
      
    case "CHF":
     return amount = chfRate;
      
  }
};

const onFormSubmit =  (event) => {
  event.preventDefault();

 
const amountElement = document.querySelector(".js-amount");
const exchangeElement = document.querySelector(".js-exchange");
const resultElement = document.querySelector(".js-result");

  const amount = amountElement.value;
  const exchange = exchangeElement.value;
  const exchangeRate = calculateResult(exchange, amount);
  
  

  

  const result = amount / exchangeRate;
  resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${exchange}`;
};
 const init = () => {
  const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", onFormSubmit);
 };

 init();
}

