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
    let src = event.target.getAttribute("data-src");

    switchPlayer(src);

    activeTranslation.classList.remove("active");
    event.target.classList.add("active");
    activeTranslation = event.target;
}

let translationList = document.querySelector("#translation-list");

for (const translationItem of translationList.children) {
    translationItem.addEventListener("click", translationItemClick);
}

let prevText = "Скрыть переводы";

let toggleTranslationListButton = document.getElementById("toggle-translation-list");
let toggleTranslationListButtonText = toggleTranslationListButton.children[0];

toggleTranslationListButton.addEventListener("click", () => {
    translationList.classList.toggle("hide");
    toggleTranslationListButton.classList.toggle("opened");
    let newPrevText = toggleTranslationListButtonText.innerText;
    toggleTranslationListButtonText.innerText = prevText;
    prevText = newPrevText;
});

function asyncLoad(img) {
    let image = new Image();
    image.onload = function () { 
        img.setAttribute("src", this.src)
    };
    image.src = img.getAttribute("data-src");
}

let imgs = document.querySelectorAll("img[data-src]");
for (const img of imgs) {
    img.src = "../resources/images/placeholder-200x300.png";
    asyncLoad(img);
}