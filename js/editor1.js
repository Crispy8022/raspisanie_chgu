const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime_, #kpn1_, #kpn2_, #kpn3_, #kpn4_, #dzpn1_, #dzpn2_, #dzpn3_, #dzpn4_, #vttime_, #kvt1_, #kvt2_, #kvt3_, #kvt4_, #dzvt1_, #dzvt2_, #dzvt3_, #dzvt4_, #srtime_, #ksr1_, #ksr2_, #ksr3_, #ksr4_, #dzsr1_, #dzsr2_, #dzsr3_, #dzsr4_, #chttime_, #kcht1_, #kcht2_, #kcht3_, #kcht4_, #dzcht1_, #dzcht2_, #dzcht3_, #dzcht4_, #pttime_, #kpt1_, #kpt2_, #kpt3_, #kpt4_, #dzpt1_, #dzpt2_, #dzpt3_, #dzpt4_, #sbtime_, #ksb1_, #ksb2_, #ksb3_, #ksb4_, #dzsb1_, #dzsb2_, #dzsb3_, #dzsb4_");

if (typeof Storage !== "undefined") {
  for (let i = 0; i < editables.length; i++) {
    const localStorageItem = editables[i].getAttribute("id");
    if (localStorage.getItem(localStorageItem) !== null) {
      editables[i].innerHTML = localStorage.getItem(localStorageItem);
    }
  }
}

editBtn.addEventListener("click", function () {
  if (!editables[0].isContentEditable) {
    for (let i = 0; i < editables.length; i++) {
      editables[i].contentEditable = "true";
    }
    editBtn.innerHTML = "Сохр.";
    editBtn.style.backgroundColor = "#6F9";
    editBtn.style.padding = "3px";
  } else {
    for (let i = 0; i < editables.length; i++) {
      editables[i].contentEditable = "false";
      localStorage.setItem(editables[i].getAttribute("id"), editables[i].innerHTML);
    }
    editBtn.innerHTML = "Отред.";
    editBtn.style.backgroundColor = "#F96";
    editBtn.style.padding = "3px";
  }
});

document.addEventListener("keydown", function () {
  for (let i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute("id"), editables[i].innerHTML);
  }
});

document.querySelector("#deleteDZ_").addEventListener("click", function () {
  const password = prompt("Введите пароль для удаления всех ДЗ:");

  // Проверка правильности пароля
  if (password === "596") {
    for (let i = 0; i < editables.length; i++) {
      // Проверяем, начинается ли id с "pn", "vt", "sr", "cht", "pt", "sb" или "k"
      const isPreserved = editables[i].getAttribute("id").startsWith("pn") ||
                          editables[i].getAttribute("id").startsWith("vt") ||
                          editables[i].getAttribute("id").startsWith("sr") ||
                          editables[i].getAttribute("id").startsWith("cht") ||
                          editables[i].getAttribute("id").startsWith("pt") ||
                          editables[i].getAttribute("id").startsWith("sb") ||
                          editables[i].getAttribute("id").startsWith("k");

      // Удаляем содержимое ДЗ, если не начинается с указанных префиксов
      if (!isPreserved) {
        editables[i].innerHTML = "";
        localStorage.removeItem(editables[i].getAttribute("id"));
      }
    }
    alert("Все ДЗ, кроме тех, которые начинаются на pn, vt, sr, cht, pt, sb или k, удалены успешно.");
  } else {
    alert("Неправильный пароль. ДЗ не удалены.");
  }
});


document.querySelector("#addh1").addEventListener("click", function () {
  const text = prompt("What text do you want the heading to have?", "Heading");
  editables[2].innerHTML += `<h1>${text}</h1>`;
});

document.querySelector("#addh2").addEventListener("click", function () {
  const text = prompt("What text do you want the heading to have?", "Heading");
  editables[2].innerHTML += `<h2>${text}</h2>`;
});