// Heart  count
const heartCount = document.getElementById("heart_count");
const heartIcons = document.getElementsByClassName("card_heart");

for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    let count = parseInt(heartCount.innerText);
    heartCount.innerText = count + 1;
  });
}
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-red-800");
  });
}
// Coin & Call History

const coinCount = document.getElementById("coin_count");
const callButtons = document.getElementsByClassName("card_btn_right");
const callHistoryList = document.getElementById("call_history_list");

for (const btn of callButtons) {
  btn.addEventListener("click", function (e) {
    let currentCoin = parseInt(coinCount.innerText);

    if (currentCoin < 20) {
      alert(" ❌ You don't have enough coins to make a call!");
      return;
    }

    coinCount.innerText = currentCoin - 20;

    let card = e.target;
    while (card && !card.classList.contains("card")) {
      card = card.parentElement;
    }
    const serviceName = card.querySelector(".service_name").innerText;
    const serviceNumber = card.querySelector(".service_number").innerText;

    alert("📞 Calling " + serviceName + " : " + serviceNumber);

    const div = document.createElement("div");
    div.innerHTML = `
      <div id="call_history_list"
          class="font-semibold shadow-lg bg-[#e9e5e5] m-2 py-4 px-2 rounded-lg flex justify-between items-center">
        <span>${serviceName} (${serviceNumber})</span>
        <span>${new Date().toLocaleTimeString()}</span>
      </div>
    `;
    callHistoryList.appendChild(div);
  });
}
// Challenges section
// Copy Button
const copyButtons = document.querySelectorAll(".card_btn_left");
const copyCount = document.getElementById("copy_count").querySelector("span");

for (const btn of copyButtons) {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    const number = card.querySelector(".service_number").innerText;

    navigator.clipboard.writeText(number).then(() => {
      let currentCopy = parseInt(copyCount.innerText);
      copyCount.innerText = currentCopy + 1;
      alert("Copied Number: " + number);
    });
  });
}

// Clear Call History
document.getElementById("call_history").addEventListener("click", function () {
  callHistoryList.innerHTML = "";
  console.log("call history clicked");
});
