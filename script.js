document.addEventListener("DOMContentLoaded", function() {
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

    const phrases = ["Yes", "No"];
    const checkButton = document.getElementById("checkButton");
    const messageContainer = document.getElementById("messageContainer");

    checkButton.addEventListener("click", function() {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        displayMessage(randomPhrase);
    });

    function displayMessage(phrase) {
        messageContainer.textContent = phrase;
        messageContainer.style.opacity = 1;
        messageContainer.style.transform = "scale(1)";
        setTimeout(() => {
            messageContainer.style.opacity = 0;
            messageContainer.style.transform = "scale(1.5)";
        }, 2000);
    }
});