const menuItems = [
  { name: "ホットケーキ", price: 300 },
  { name: "ジュース", price: 200 },
  { name: "サンドイッチ", price: 400 },
  { name: "ミルク", price: 150 },
];

let currentOrder = [];

function startGame() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "";

  currentOrder = [];
  for (let i = 0; i < 2; i++) {
    const item = menuItems[Math.floor(Math.random() * menuItems.length)];
    currentOrder.push(item);
  }

  currentOrder.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item.name}：${item.price}円`;
    orderList.appendChild(p);
  });

  document.getElementById("result").textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userInput = Number(document.getElementById("answer").value);
  const correctTotal = currentOrder.reduce((sum, item) => sum + item.price, 0);

  const result = document.getElementById("result");
  if (userInput === correctTotal) {
    result.textContent = "🟢 せいかい！すごいね！";
    setTimeout(startGame, 1500);
  } else {
    result.textContent = "🔴 ちがうよ。もういちどやってみよう！";
  }
}

window.addEventListener("DOMContentLoaded", startGame);
