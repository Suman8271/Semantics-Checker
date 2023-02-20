const charval = document.getById("textarea");
let totalCount = document.getById("total-counter");
let remainingCount = document.getById("remaining-counter");

let userChar = 0;

//updating the char on screen

const updateCounter = () => {
    userChar = charval.value.length;

    totalCount.innerText = userChar;

    remainingCount.innerText = 1000 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

//copy

const copyText = () => {
    charval.select();
    charval.setSelectionRange(0,1000)
    navigator.clipboard.writeText(charval.value)
}