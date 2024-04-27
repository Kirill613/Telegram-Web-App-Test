let openBtn = document.querySelector(".openBtn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".closeBtn");
let textContainer = document.getElementById("popupText");

let tg = window.Telegram.WebApp;

tg.expand();

openBtn.addEventListener("click", async () => {
    const ipData = await fetchUserIp();
    const locData = await getUserLocationFromIP();

    textContainer.textContent = `Ты - ${readFromTelegram()} находишься в ${locData}, деньги кидать на карту 1111 2222 3333 4444, благодарю!`;

    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

function readFromTelegram(){
    const user = tg.initDataUnsafe.user;

    return `${user?.first_name} ${user?.last_name} (${user?.username})`;
};


async function fetchUserIp() {
    try {
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
      const data = await response.text();
  
      const formattedData = data
        .trim()
        .split('\n')
        .reduce((obj, pair) => {
          const [key, value] = pair.split('=');
          obj[key] = value;
          return obj;
        }, {});
  
      return formattedData;
    } catch (error) {
      console.error("Error fetching or processing data:", error);
      return ''; 
    }
}

async function getUserLocationFromIP() {
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (response.ok) {
        const data = await response.json();
        const { city, region, country } = data;
        const userLocation = `${city}, ${region}, ${country}`;
        return userLocation;
      } else {
        throw new Error('Failed to fetch user location');
      }
    } catch (error) {
      console.error('Error fetching user location:', error);
      return null; // or handle the error according to your use case
    }
  }