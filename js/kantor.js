let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let plnToGbp = 0.18476;
let plnToUsd = 0.21453;
let plnToCzk = 5.21495;
let plnToEur = 0.21257;
let usdToEur = 0.99190;
let usdToCzk = 24.33380;
let usdToGbp = 0.86147;
let gbpToEur = 1.15214;
let gbpToCzk = 28.26830;
let czkToEur = 0.04076;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value
    let outputCurrency = outputCurrencyElement.value
    let amount = amountElement.value

    switch (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * plnToEur);
            else if (outputCurrency === "CZK") result = (amount * plnToCzk);
            else if (outputCurrency === "USD") result = (amount * plnToUsd);
            else if (outputCurrency === "GBP") result = (amount * plnToGbp);
            break;
        case "USD":
            if (outputCurrency === "USD") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * usdToEur);
            else if (outputCurrency === "CZK") result = (amount * usdToCzk);
            else if (outputCurrency === "PLN") result = (amount / plnToUsd);
            else if (outputCurrency === "GBP") result = (amount * usdToGbp);
            break;
        case "GBP":
            if (outputCurrency === "GBP") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * gbpToEur);
            else if (outputCurrency === "CZK") result = (amount * gbpToCzk);
            else if (outputCurrency === "PLN") result = (amount / plnToGbp);
            else if (outputCurrency === "USD") result = (amount / usdToGbp);
            break;
        case "CZK":
            if (outputCurrency === "CZK") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * czkToEur);
            else if (outputCurrency === "GBP") result = (amount / gbpToCzk);
            else if (outputCurrency === "PLN") result = (amount / plnToCzk);
            else if (outputCurrency === "USD") result = (amount / usdToCzk);
            break;
        case "EUR":
            if (outputCurrency === "EUR") result = (amount * 1);
            else if (outputCurrency === "CZK") result = (amount / czkToEur);
            else if (outputCurrency === "GBP") result = (amount / gbpToEur);
            else if (outputCurrency === "PLN") result = (amount / plnToEur);
            else if (outputCurrency === "USD") result = (amount / usdToEur);
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
});
