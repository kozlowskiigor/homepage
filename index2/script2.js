function welcome() {
    console.log("Cześć programisto! Witam na stronie opisującej po krótce moje życie.");
}

let onChangeBackgroundClick = () => {
    body.classList.toggle("lightstyle");
    table.classList.toggle("darkStyle");
    if (body.classList.contains("lightstyle")) {
        changingBackground.innerText = "Zmień motyw na ciemny";
    } else {
        changingBackground.innerText = "Zmień motyw na jasny";
    }
    headings.forEach((heading) => {
        heading.classList.toggle("heading--darker");
    })
    everyButton.forEach((button) => {
        button.classList.toggle("darkStyle");
        button.classList.toggle("whiteFont");
    })
}

welcome();

let body = document.querySelector(".body");
let buttonHideMyPhoto = document.querySelector(".js-buttonHideMyPhoto");
let buttonHideTeamPhoto = document.querySelector(".js-buttonHideTeamPhoto");
let buttonHideLijaPhoto = document.querySelector(".js-buttonHideLijaPhoto");
let changingBackground = document.querySelector(".js-changingBackground");
let everyButton = document.querySelectorAll(".button");
let table = document.querySelector(".table");
let myPicture = document.querySelector(".myPicture");
let wks = document.querySelector(".wks");
let lija = document.querySelector(".lija");
let headings = document.querySelectorAll(".heading");

// Ukryj/Pokaż zdjęcie 
buttonHideMyPhoto.addEventListener("click", () => {
    myPicture.classList.toggle("hidePhoto");
    if (myPicture.classList.contains("hidePhoto")) {
        buttonHideMyPhoto.innerText = "Pokaż moje zdjęcie";
    } else {
        buttonHideMyPhoto.innerText = "Ukryj moje zdjęcie";
    }
});

buttonHideTeamPhoto.addEventListener("click", () => {
    wks.classList.toggle("hidePhoto");
    if (wks.classList.contains("hidePhoto")) {
        buttonHideTeamPhoto.innerText = "Pokaż zdjęcie drużyny";
    } else {
        buttonHideTeamPhoto.innerText = "Ukryj zdjęcie drużyny";
    }
});

buttonHideLijaPhoto.addEventListener("click", () => {
    lija.classList.toggle("hidePhoto");
    if (lija.classList.contains("hidePhoto")) {
        buttonHideLijaPhoto.innerText = "Pokaż zdjęcie pjeska";
    } else {
        buttonHideLijaPhoto.innerText = "Ukryj zdjęcie pjeska";
    }
});

// Zmiana motywu strony 
changingBackground.addEventListener("click", onChangeBackgroundClick);