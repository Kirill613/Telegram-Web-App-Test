let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
let textContainer = document.getElementById("popupText");

openBtn.addEventListener("click", () => {
    const phrases = ["Yes", "No"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    textContainer.textContent = randomPhrase + readFromTelegram();

    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

function readFromTelegram(){
    let user = window.Telegram.WebApp.initDataUnsafe.user;

    const userData = `${user?.first_name} ${user?.last_name} ${user?.username} ${user?.language_code} ${user?.id}`;
    
    return ` [${userData}] `;
};