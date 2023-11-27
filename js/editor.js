const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime, #pn1, #pn2, #pn3, #pn4, #pn5, #pn6, #pn7, #pn8, #dzpn1, #dzpn2, #dzpn3, #dzpn4, #vttime, #vt1, #vt2, #vt3, #vt4, #vt5, #vt6, #vt7, #vt8, #dzvt1, #dzvt2, #dzvt3, #dzvt4, #srtime, #sr1, #sr2, #sr3, #sr4, #sr5, #sr6, #sr7, #sr8, #dzsr1, #dzsr2, #dzsr3, #dzsr4, #chttime, #cht1, #cht2, #cht3, #cht4, #cht5, #cht6, #cht7, #cht8, #dzcht1, #dzcht2, #dzcht3, #dzcht4, #pttime, #pt1, #pt2, #pt3, #pt4, #pt5, #pt6, #pt7, #pt8, #dzpt1, #dzpt2, #dzpt3, #dzpt4, #sbtime, #sb1, #sb2, #sb3, #sb4, #sb5, #sb6, #sb7, #sb8, #dzsb1, #dzsb2, #dzsb3, #dzsb4");

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

document.querySelector("#addh1").addEventListener("click", function () {
    const text = prompt("What text do you want the heading to have?", "Heading");
    editables[2].innerHTML += `<h1>${text}</h1>`;
});

document.querySelector("#addh2").addEventListener("click", function () {
    const text = prompt("What text do you want the heading to have?", "Heading");
    editables[2].innerHTML += `<h2>${text}</h2>`;
});
