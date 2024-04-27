let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
let textContainer = document.getElementById("popupText");

let tg = window.Telegram.WebApp;

tg.expand();

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  console.log(data);
});

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