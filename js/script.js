let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

const rateEUR = 4.67;
const rateUSD = 4.38;
const rateGBP = 5.27;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;

    let rate;

    switch (currency) {
        case "EUR":
            rate = rateEUR;
            break;

        case "USD":
            rate = rateUSD;
            break;

        case "GBP":
            rate = rateGBP;
    }
    const result = amount / rate
    resultElement.innerHTML = result.toFixed(2);
});

formElement.addEventListener("reset", () => {
    resultElement.innerText = "N/A";
});