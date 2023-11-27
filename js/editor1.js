const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime_, #pn1_, #pn2_, #pn3_, #pn4_, #pn5_, #pn6_, #pn7_, #pn8_, #dzpn1_, #dzpn2_, #dzpn3_, #dzpn4_, #vttime_, #vt1_, #vt2_, #vt3_, #vt4_, #vt5_, #vt6_, #vt7_, #vt8_, #dzvt1_, #dzvt2_, #dzvt3_, #dzvt4_, #srtime_, #sr1_, #sr2_, #sr3_, #sr4_, #sr5_, #sr6_, #sr7_, #sr8_, #dzsr1_, #dzsr2_, #dzsr3_, #dzsr4_, #chttime_, #cht1_, #cht2_, #cht3_, #cht4_, #cht5_, #cht6_, #cht7_, #cht8_, #dzcht1_, #dzcht2_, #dzcht3_, #dzcht4_, #pttime_, #pt1_, #pt2_, #pt3_, #pt4_, #pt5_, #pt6_, #pt7_, #pt8_, #dzpt1_, #dzpt2_, #dzpt3_, #dzpt4_, #sbtime_, #sb1_, #sb2_, #sb3_, #sb4_, #sb5_, #sb6_, #sb7_, #sb8_, #dzsb1_, #dzsb2_, #dzsb3_, #dzsb4_");

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