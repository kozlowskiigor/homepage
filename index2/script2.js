{
    const welcome = () => {
        console.log("Cześć programisto! Witam na stronie opisującej po krótce moje życie.");
    };

    const togglePageTheme = () => {
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
    };

    const body = document.querySelector(".body");
    const table = document.querySelector(".table");
    const changingBackground = document.querySelector(".js-changingBackground");
    const headings = document.querySelectorAll(".heading");
    const everyButton = document.querySelectorAll(".button");

    changingBackground.addEventListener("click", togglePageTheme);

    welcome();
};

{
    const hideMyPhoto = () => {
        myPicture.classList.toggle("hidePhoto");
        if (myPicture.classList.contains("hidePhoto")) {
            buttonHideMyPhoto.innerText = "Pokaż moje zdjęcie";
        } else {
            buttonHideMyPhoto.innerText = "Ukryj moje zdjęcie";
        }
    };

    const buttonHideMyPhoto = document.querySelector(".js-buttonHideMyPhoto");
    const myPicture = document.querySelector(".myPicture");

    buttonHideMyPhoto.addEventListener("click", hideMyPhoto)
};

{
    const hideTeamPhoto = () => {
        wks.classList.toggle("hidePhoto");
        if (wks.classList.contains("hidePhoto")) {
            buttonHideTeamPhoto.innerText = "Pokaż zdjęcie drużyny";
        } else {
            buttonHideTeamPhoto.innerText = "Ukryj zdjęcie drużyny";
        }
    };

    const buttonHideTeamPhoto = document.querySelector(".js-buttonHideTeamPhoto");
    const wks = document.querySelector(".wks");

    buttonHideTeamPhoto.addEventListener("click", hideTeamPhoto)
};

{
    const hideLijaPhoto = () => {
        lija.classList.toggle("hidePhoto");
        if (lija.classList.contains("hidePhoto")) {
            buttonHideLijaPhoto.innerText = "Pokaż zdjęcie pjeska";
        } else {
            buttonHideLijaPhoto.innerText = "Ukryj zdjęcie pjeska";
        }
    };

    const buttonHideLijaPhoto = document.querySelector(".js-buttonHideLijaPhoto");
    const lija = document.querySelector(".lija");

    buttonHideLijaPhoto.addEventListener("click", hideLijaPhoto)
};