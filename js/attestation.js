const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#attestation1, #attestation2, #attestation3, #attestation4, #attestation5, #attestation6, #attestation7, #attestation8, #attestation9, #zachet1, #zachet2, #zachet3, #zachet4, #zachet5, #zachet6, #zachet7, #zachet8, #zachet9, #exam1, #exam2, #exam3, #exam4, #exam5");
if (typeof Storage !== "undefined") {
  if (localStorage.getItem("attestation1") !== null) {
    editables[0].innerHTML = localStorage.getItem("attestation1");
  }
  if (localStorage.getItem("attestation2") !== null) {
    editables[1].innerHTML = localStorage.getItem("attestation2");
  }
  if (localStorage.getItem("attestation3") !== null) {
    editables[2].innerHTML = localStorage.getItem("attestation3");
  }
  if (localStorage.getItem("attestation4") !== null) {
    editables[3].innerHTML = localStorage.getItem("attestation4");
  }
  if (localStorage.getItem("attestation5") !== null) {
    editables[4].innerHTML = localStorage.getItem("attestation5");
  }
  if (localStorage.getItem("attestation6") !== null) {
    editables[5].innerHTML = localStorage.getItem("attestation6");
  }
  if (localStorage.getItem("attestation7") !== null) {
    editables[6].innerHTML = localStorage.getItem("attestation7");
  }
  if (localStorage.getItem("attestation8") !== null) {
    editables[7].innerHTML = localStorage.getItem("attestation8");
  }
  if (localStorage.getItem("attestation9") !== null) {
    editables[8].innerHTML = localStorage.getItem("attestation9");
  }
  if (localStorage.getItem("zachet1") !== null) {
    editables[9].innerHTML = localStorage.getItem("zachet1");
  }
  if (localStorage.getItem("zachet2") !== null) {
    editables[10].innerHTML = localStorage.getItem("zachet2");
  }
  if (localStorage.getItem("zachet3") !== null) {
    editables[11].innerHTML = localStorage.getItem("zachet3");
  }
  if (localStorage.getItem("zachet4") !== null) {
    editables[12].innerHTML = localStorage.getItem("zachet4");
  }
  if (localStorage.getItem("zachet5") !== null) {
    editables[13].innerHTML = localStorage.getItem("zachet5");
  }
  if (localStorage.getItem("zachet6") !== null) {
    editables[14].innerHTML = localStorage.getItem("zachet6");
  }
  if (localStorage.getItem("zachet7") !== null) {
    editables[15].innerHTML = localStorage.getItem("zachet7");
  }
  if (localStorage.getItem("zachet8") !== null) {
    editables[16].innerHTML = localStorage.getItem("zachet8");
  }
  if (localStorage.getItem("zachet9") !== null) {
    editables[17].innerHTML = localStorage.getItem("zachet9");
  }
  if (localStorage.getItem("exam1") !== null) {
    editables[18].innerHTML = localStorage.getItem("exam1");
  }
  if (localStorage.getItem("exam2") !== null) {
    editables[19].innerHTML = localStorage.getItem("exam2");
  }
  if (localStorage.getItem("exam3") !== null) {
    editables[20].innerHTML = localStorage.getItem("exam3");
  }
  if (localStorage.getItem("exam4") !== null) {
    editables[21].innerHTML = localStorage.getItem("exam4");
  }
  if (localStorage.getItem("exam5") !== null) {
    editables[22].innerHTML = localStorage.getItem("exam5");
  }
}
editBtn.addEventListener("click", function (e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = "true";
    editables[1].contentEditable = "true";
    editables[2].contentEditable = "true";
	editables[3].contentEditable = "true";
	editables[4].contentEditable = "true";
	editables[5].contentEditable = "true";
	editables[6].contentEditable = "true";
	editables[7].contentEditable = "true";
	editables[8].contentEditable = "true";
	editables[9].contentEditable = "true";
	editables[10].contentEditable = "true";
	editables[11].contentEditable = "true";
	editables[12].contentEditable = "true";
	editables[13].contentEditable = "true";
  editables[14].contentEditable = "true";
	editables[15].contentEditable = "true";
	editables[16].contentEditable = "true";
	editables[17].contentEditable = "true";
	editables[18].contentEditable = "true";
	editables[19].contentEditable = "true";
	editables[20].contentEditable = "true";
	editables[21].contentEditable = "true";
	editables[22].contentEditable = "true";
    editBtn.innerHTML = "Сохранить Изменения";
    editBtn.style.backgroundColor = "#6F9";
	editBtn.style.padding = "3px";
  } else {
    // Disable Editing
    editables[0].contentEditable = "false";
    editables[1].contentEditable = "false";
    editables[2].contentEditable = "false";
	editables[3].contentEditable = "false";
	editables[4].contentEditable = "false";
	editables[5].contentEditable = "false";
	editables[6].contentEditable = "false";
	editables[7].contentEditable = "false";
	editables[8].contentEditable = "false";
	editables[9].contentEditable = "false";
	editables[10].contentEditable = "false";
	editables[11].contentEditable = "false";
	editables[12].contentEditable = "false";
	editables[13].contentEditable = "false";
  editables[14].contentEditable = "false";
	editables[15].contentEditable = "false";
	editables[16].contentEditable = "false";
	editables[17].contentEditable = "false";
	editables[18].contentEditable = "false";
	editables[19].contentEditable = "false";
	editables[20].contentEditable = "false";
	editables[21].contentEditable = "false";
	editables[22].contentEditable = "false";
    // Change Button Text and Color
    editBtn.innerHTML = "Отредактировано";
    editBtn.style.backgroundColor = "#F96";
	editBtn.style.padding = "3px";
    // Save the data in localStorage
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(
        editables[i].getAttribute("id"),
        editables[i].innerHTML
      );
    }
  }
});
document.addEventListener("keydown", function (e) {
  for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(
      editables[i].getAttribute("id"),
      editables[i].innerHTML
    );
  }
});
document.querySelector("#addh1").addEventListener("click", function (e) {
  const text = prompt(
    "What text do you want the heading to have?",
    "Heading"
  );
  editables[2].innerHTML = editables[2].innerHTML + `<h1>${text}</h1>`;
});
document.querySelector("#addh2").addEventListener("click", function (e) {
  const text = prompt(
    "What text do you want the heading to have?",
    "Heading"
  );
  editables[2].innerHTML = editables[2].innerHTML + `<h2>${text}</h2>`;
});
