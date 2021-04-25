document.addEventListener("DOMContentLoaded", () => {
    const playerPlaceholder = document.querySelector("#playerPlaceholder");
    const playerFrame = document.querySelector("#playerFrame");

    playerFrame.onload = function () {
        playerFrame.classList.toggle("hide");
        playerPlaceholder.classList.toggle("hide");
    };

    function switchPlayer(src) {
        playerFrame.classList.toggle("hide");
        playerPlaceholder.classList.toggle("hide");

        playerFrame.src = "https://www.youtube.com/embed/" + src;
    }

    let activeTranslation = document.getElementById("translation-default");
    activeTranslation.classList.add("active");
    switchPlayer(activeTranslation.getAttribute("data-src"));

    function translationItemClick(event) {
        const src = event.target.getAttribute("data-src");

        switchPlayer(src);

        activeTranslation.classList.remove("active");
        event.target.classList.add("active");
        activeTranslation = event.target;
    }

    const translationList = document.querySelector("#translation-list");

    for (const translationItem of translationList.children) {
        translationItem.addEventListener("click", translationItemClick);
    }

    let prevText = "Скрыть переводы";

    const toggleTranslationListButton = document.getElementById("toggle-translation-list");
    const toggleTranslationListButtonText = toggleTranslationListButton.children[0];

    toggleTranslationListButton.addEventListener("click", () => {
        translationList.classList.toggle("hide");
        toggleTranslationListButton.classList.toggle("opened");
        const newPrevText = toggleTranslationListButtonText.innerText;
        toggleTranslationListButtonText.innerText = prevText;
        prevText = newPrevText;
    });

    function loadImageAsync(img) {
        const image = new Image();
        image.onload = function () {
            img.setAttribute("src", this.src);
        };
        image.src = img.getAttribute("data-src");
        console.log(image.src)
    }

    const imgs = document.querySelectorAll("img[data-src]");
    for (const img of imgs) {
        loadImageAsync(img);
    }
});