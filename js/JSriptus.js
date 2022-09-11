let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");

switch (day) {
    case "poniedziałek":
    case "wtorek":
        howMuch.innerText = "dużo"
        break;

    case "środa":
    case "czwartek":
        howMuch.innerText = "trochę"
        break;

    default:
        howMuch.innerText = "mało"
}

