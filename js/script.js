{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.67;
        const rateUSD = 4.38;
        const rateGBP = 5.27;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;;

            case "GBP":
                return amount / rateGBP;
        }
    }

    const formElement = document.querySelector(".js-form");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        resultElement.innerHTML = result.toFixed(2);
    }

    const onFormReset = () => {

        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = "N/A";
    }
    
    const init = () => {

        formElement.addEventListener("submit", onFormSubmit)
    }

    const deleteResult = () => {
        formElement.addEventListener("reset", onFormReset)
    }

    init();
    deleteResult();
}