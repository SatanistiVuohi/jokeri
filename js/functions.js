const list = document.querySelector("table");
const button = document.querySelector("button");
const rivit = document.querySelector("p");

let rivienLKM = 0;

button.addEventListener("click", () => {
  rivienLKM++;

  const tr = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    const td = document.createElement("td");
    td.textContent = Math.floor(Math.random() * 10);
    tr.appendChild(td);
  }

  list.appendChild(tr);

  rivit.textContent = `Valmiita rivejä ${rivienLKM}`;
});