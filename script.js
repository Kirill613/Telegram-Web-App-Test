let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
let textContainer = document.getElementById("popupText");

let tg = window.Telegram.WebApp;

tg.expand();

openBtn.addEventListener("click", () => {
    const phrases = ["Да", "Нет"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    textContainer.textContent = `Ты ${readFromTelegram()} чампикс? ${randomPhrase}`;

    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

function readFromTelegram(){
    const user = tg.initDataUnsafe.user;

    return `${user?.first_name} ${user?.last_name} (${user?.username} ${user?.language_code} ${user?.id})`;
};