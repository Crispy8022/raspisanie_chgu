const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime, #kpn1, #kpn2, #kpn3, #kpn4, #dzpn1, #dzpn2, #dzpn3, #dzpn4, #vttime, #kvt1, #kvt2, #kvt3, #kvt4, #dzvt1, #dzvt2, #dzvt3, #dzvt4, #srtime, #ksr1, #ksr2, #ksr3, #ksr4, #dzsr1, #dzsr2, #dzsr3, #dzsr4, #chttime, #kcht1, #kcht2, #kcht3, #kcht4, #dzcht1, #dzcht2, #dzcht3, #dzcht4, #pttime, #kpt1, #kpt2, #kpt3, #kpt4, #dzpt1, #dzpt2, #dzpt3, #dzpt4, #sbtime, #ksb1, #ksb2, #ksb3, #ksb4, #dzsb1, #dzsb2, #dzsb3, #dzsb4");

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

  document.querySelector("#deleteDZ").addEventListener("click", function () {
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