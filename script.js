let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
let textContainer = document.getElementById("popupText");

openBtn.addEventListener("click", () => {
    readFromTelegram();

    const phrases = ["Yes", "No"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    textContainer.textContent = randomPhrase;

    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

function readFromTelegram(){
    try {
        let tg = window.Telegram.WebApp;

        const userData = `${tg.initDataUnsafe.user.first_name}
            ${tg.initDataUnsafe.user.last_name}
            ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
    
        const userId = `${tg.initDataUnsafe.user.id}`;
        
        textContainer += userData + userId;
    } catch (error) {
        console.log(error);
    }
};