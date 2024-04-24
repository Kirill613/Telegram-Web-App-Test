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
        if (window && window.Telegram && window.Telegram.WebApp){
            let tg = window.Telegram.WebApp;

            let usercard = document.getElementById("usercard");
    
            let profName = document.createElement('p');
            profName.innerText = `${tg.initDataUnsafe.user.first_name}
            ${tg.initDataUnsafe.user.last_name}
            ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
            
            usercard.appendChild(profName);
    
            let userid = document.createElement('p');
            userid.innerText = `${tg.initDataUnsafe.user.id}`;
            usercard.appendChild(userid);

            console.log(usercard);
        }
    } catch (error) {
        console.log(error);
    }
};