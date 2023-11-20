const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime, #pn1, #pn2, #pn3, #pn4, #pn5, #pn6, #pn7, #pn8, #dzpn1, #dzpn2, #dzpn3, #dzpn4, #vttime, #vt1, #vt2, #vt3, #vt4, #vt5, #vt6, #vt7, #vt8, #dzvt1, #dzvt2, #dzvt3, #dzvt4, #srtime, #sr1, #sr2, #sr3, #sr4, #sr5, #sr6, #sr7, #sr8, #dzsr1, #dzsr2, #dzsr3, #dzsr4, #chttime, #cht1, #cht2, #cht3, #cht4, #cht5, #cht6, #cht7, #cht8, #dzcht1, #dzcht2, #dzcht3, #dzcht4, #pttime, #pt1, #pt2, #pt3, #pt4, #pt5, #pt6, #pt7, #pt8, #dzpt1, #dzpt2, #dzpt3, #dzpt4, #sbtime, #sb1, #sb2, #sb3, #sb4, #sb5, #sb6, #sb7, #sb8, #dzsb1, #dzsb2, #dzsb3, #dzsb4");
if (typeof Storage !== "undefined") {
  if (localStorage.getItem("pntime") !== null) {
    editables[0].innerHTML = localStorage.getItem("pntime");
  }
  if (localStorage.getItem("pn1") !== null) {
    editables[1].innerHTML = localStorage.getItem("pn1");
  }
  if (localStorage.getItem("pn2") !== null) {
    editables[2].innerHTML = localStorage.getItem("pn2");
  }
  if (localStorage.getItem("pn3") !== null) {
    editables[3].innerHTML = localStorage.getItem("pn3");
  }
  if (localStorage.getItem("pn4") !== null) {
    editables[4].innerHTML = localStorage.getItem("pn4");
  }
  if (localStorage.getItem("pn5") !== null) {
    editables[5].innerHTML = localStorage.getItem("pn5");
  }
  if (localStorage.getItem("pn6") !== null) {
    editables[6].innerHTML = localStorage.getItem("pn6");
  }
  if (localStorage.getItem("pn7") !== null) {
    editables[7].innerHTML = localStorage.getItem("pn7");
  }
  if (localStorage.getItem("pn8") !== null) {
    editables[8].innerHTML = localStorage.getItem("pn8");
  }
  if (localStorage.getItem("dzpn1") !== null) {
    editables[9].innerHTML = localStorage.getItem("dzpn1");
  }
  if (localStorage.getItem("dzpn2") !== null) {
    editables[10].innerHTML = localStorage.getItem("dzpn2");
  }
  if (localStorage.getItem("dzpn3") !== null) {
    editables[11].innerHTML = localStorage.getItem("dzpn3");
  }
  if (localStorage.getItem("dzpn4") !== null) {
    editables[12].innerHTML = localStorage.getItem("dzpn4");
  }

  if (localStorage.getItem("vttime") !== null) {
    editables[13].innerHTML = localStorage.getItem("vttime");
  }
  if (localStorage.getItem("vt1") !== null) {
    editables[14].innerHTML = localStorage.getItem("vt1");
  }
  if (localStorage.getItem("vt2") !== null) {
    editables[15].innerHTML = localStorage.getItem("vt2");
  }
  if (localStorage.getItem("vt3") !== null) {
    editables[16].innerHTML = localStorage.getItem("vt3");
  }
  if (localStorage.getItem("vt4") !== null) {
    editables[17].innerHTML = localStorage.getItem("vt4");
  }
  if (localStorage.getItem("vt5") !== null) {
    editables[18].innerHTML = localStorage.getItem("vt5");
  }
  if (localStorage.getItem("vt6") !== null) {
    editables[19].innerHTML = localStorage.getItem("vt6");
  }
  if (localStorage.getItem("vt7") !== null) {
    editables[20].innerHTML = localStorage.getItem("vt7");
  }
  if (localStorage.getItem("vt8") !== null) {
    editables[21].innerHTML = localStorage.getItem("vt8");
  }
  if (localStorage.getItem("dzvt1") !== null) {
    editables[22].innerHTML = localStorage.getItem("dzvt1");
  }
  if (localStorage.getItem("dzvt2") !== null) {
    editables[23].innerHTML = localStorage.getItem("dzvt2");
  }
  if (localStorage.getItem("dzvt3") !== null) {
    editables[24].innerHTML = localStorage.getItem("dzvt3");
  }
  if (localStorage.getItem("dzvt4") !== null) {
    editables[25].innerHTML = localStorage.getItem("dzvt4");
  }
  
  if (localStorage.getItem("srtime") !== null) {
    editables[26].innerHTML = localStorage.getItem("srtime");
  }
  if (localStorage.getItem("sr1") !== null) {
    editables[27].innerHTML = localStorage.getItem("sr1");
  }
  if (localStorage.getItem("sr2") !== null) {
    editables[28].innerHTML = localStorage.getItem("sr2");
  }
  if (localStorage.getItem("sr3") !== null) {
    editables[29].innerHTML = localStorage.getItem("sr3");
  }
  if (localStorage.getItem("sr4") !== null) {
    editables[30].innerHTML = localStorage.getItem("sr4");
  }
  if (localStorage.getItem("sr5") !== null) {
    editables[31].innerHTML = localStorage.getItem("sr5");
  } 
  if (localStorage.getItem("sr6") !== null) {
    editables[32].innerHTML = localStorage.getItem("sr6");
  }
  if (localStorage.getItem("sr7") !== null) {
    editables[33].innerHTML = localStorage.getItem("sr7");
  }
  if (localStorage.getItem("sr8") !== null) {
    editables[34].innerHTML = localStorage.getItem("sr8");
  } 
  if (localStorage.getItem("dzsr1") !== null) {
    editables[35].innerHTML = localStorage.getItem("dzsr1");
  }
  if (localStorage.getItem("dzsr2") !== null) {
    editables[36].innerHTML = localStorage.getItem("dzsr2");
  }
  if (localStorage.getItem("dzsr3") !== null) {
    editables[37].innerHTML = localStorage.getItem("dzsr3");
  }
  if (localStorage.getItem("dzsr4") !== null) {
    editables[38].innerHTML = localStorage.getItem("dzsr4");
  }
  
  if (localStorage.getItem("chttime") !== null) {
    editables[39].innerHTML = localStorage.getItem("chttime");
  }
  if (localStorage.getItem("cht1") !== null) {
    editables[40].innerHTML = localStorage.getItem("cht1");
  }
  if (localStorage.getItem("cht2") !== null) {
    editables[41].innerHTML = localStorage.getItem("cht2");
  } 
  if (localStorage.getItem("cht3") !== null) {
    editables[42].innerHTML = localStorage.getItem("cht3");
  }
  if (localStorage.getItem("cht4") !== null) {
    editables[43].innerHTML = localStorage.getItem("cht4");
  } 
  if (localStorage.getItem("cht5") !== null) {
    editables[44].innerHTML = localStorage.getItem("cht5");
  }
  if (localStorage.getItem("cht6") !== null) {
    editables[45].innerHTML = localStorage.getItem("cht6");
  }
  if (localStorage.getItem("cht7") !== null) {
    editables[46].innerHTML = localStorage.getItem("cht7");
  } 
  if (localStorage.getItem("cht8") !== null) {
    editables[47].innerHTML = localStorage.getItem("cht8");
  }
  if (localStorage.getItem("dzcht1") !== null) {
    editables[48].innerHTML = localStorage.getItem("dzcht1");
  }
  if (localStorage.getItem("dzcht2") !== null) {
    editables[49].innerHTML = localStorage.getItem("dzcht2");
  }
  if (localStorage.getItem("dzcht3") !== null) {
    editables[50].innerHTML = localStorage.getItem("dzcht3");
  }
  if (localStorage.getItem("dzcht4") !== null) {
    editables[51].innerHTML = localStorage.getItem("dzcht4");
  }
  
  if (localStorage.getItem("pttime") !== null) {
    editables[52].innerHTML = localStorage.getItem("pttime");
  } 
  if (localStorage.getItem("pt1") !== null) {
    editables[53].innerHTML = localStorage.getItem("pt1");
  } 
  if (localStorage.getItem("pt2") !== null) {
    editables[54].innerHTML = localStorage.getItem("pt2");
  }
  if (localStorage.getItem("pt3") !== null) {
    editables[55].innerHTML = localStorage.getItem("pt3");
  } 
  if (localStorage.getItem("pt4") !== null) {
    editables[56].innerHTML = localStorage.getItem("pt4");
  }
  if (localStorage.getItem("pt5") !== null) {
    editables[57].innerHTML = localStorage.getItem("pt5");
  }
  if (localStorage.getItem("pt6") !== null) {
    editables[58].innerHTML = localStorage.getItem("pt6");
  } 
  if (localStorage.getItem("pt7") !== null) {
    editables[59].innerHTML = localStorage.getItem("pt7");
  }
  if (localStorage.getItem("pt8") !== null) {
    editables[60].innerHTML = localStorage.getItem("pt8");
  } 
  if (localStorage.getItem("dzpt1") !== null) {
    editables[61].innerHTML = localStorage.getItem("dzpt1");
  }
  if (localStorage.getItem("dzpt2") !== null) {
    editables[62].innerHTML = localStorage.getItem("dzpt2");
  }
  if (localStorage.getItem("dzpt3") !== null) {
    editables[63].innerHTML = localStorage.getItem("dzpt3");
  }
  if (localStorage.getItem("dzpt4") !== null) {
    editables[64].innerHTML = localStorage.getItem("dzpt4");
  }
  
  if (localStorage.getItem("sbtime") !== null) {
    editables[65].innerHTML = localStorage.getItem("sbtime");
  }
  if (localStorage.getItem("sb1") !== null) {
    editables[66].innerHTML = localStorage.getItem("sb1");
  }
  if (localStorage.getItem("sb2") !== null) {
    editables[67].innerHTML = localStorage.getItem("sb2");
  }
  if (localStorage.getItem("sb3") !== null) {
    editables[68].innerHTML = localStorage.getItem("sb3");
  } 
  if (localStorage.getItem("sb4") !== null) {
    editables[69].innerHTML = localStorage.getItem("sb4");
  }
  if (localStorage.getItem("sb5") !== null) {
    editables[70].innerHTML = localStorage.getItem("sb5");
  }
  if (localStorage.getItem("sb6") !== null) {
    editables[71].innerHTML = localStorage.getItem("sb6");
  } 
  if (localStorage.getItem("sb7") !== null) {
    editables[72].innerHTML = localStorage.getItem("sb7");
  }
  if (localStorage.getItem("sb8") !== null) {
    editables[73].innerHTML = localStorage.getItem("sb8");
  }
  if (localStorage.getItem("dzsb1") !== null) {
    editables[74].innerHTML = localStorage.getItem("dzsb1");
  }
  if (localStorage.getItem("dzsb2") !== null) {
    editables[75].innerHTML = localStorage.getItem("dzsb2");
  }
  if (localStorage.getItem("dzsb3") !== null) {
    editables[76].innerHTML = localStorage.getItem("dzsb3");
  }
  if (localStorage.getItem("dzsb4") !== null) {
    editables[77].innerHTML = localStorage.getItem("dzsb4");
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
	editables[23].contentEditable = "true";
	editables[24].contentEditable = "true";
	editables[25].contentEditable = "true";
	editables[26].contentEditable = "true";
	editables[27].contentEditable = "true";
	editables[28].contentEditable = "true";
	editables[29].contentEditable = "true";
    editables[30].contentEditable = "true";
    editables[31].contentEditable = "true";
    editables[32].contentEditable = "true";
	editables[33].contentEditable = "true";
	editables[34].contentEditable = "true";
	editables[35].contentEditable = "true";
	editables[36].contentEditable = "true";
	editables[37].contentEditable = "true";
	editables[38].contentEditable = "true";
	editables[39].contentEditable = "true";
	editables[40].contentEditable = "true";
    editables[41].contentEditable = "true";
    editables[42].contentEditable = "true";
	editables[43].contentEditable = "true";
	editables[44].contentEditable = "true";
	editables[45].contentEditable = "true";
	editables[46].contentEditable = "true";
	editables[47].contentEditable = "true";
	editables[48].contentEditable = "true";
    editables[49].contentEditable = "true";
	editables[50].contentEditable = "true";
	editables[51].contentEditable = "true";
	editables[52].contentEditable = "true";
	editables[53].contentEditable = "true";
	editables[54].contentEditable = "true";
	editables[55].contentEditable = "true";
	editables[56].contentEditable = "true";
	editables[57].contentEditable = "true";
	editables[58].contentEditable = "true";
	editables[59].contentEditable = "true";
	editables[60].contentEditable = "true";
    editables[61].contentEditable = "true";
    editables[62].contentEditable = "true";
	editables[63].contentEditable = "true";
	editables[64].contentEditable = "true";
	editables[65].contentEditable = "true";
	editables[66].contentEditable = "true";
	editables[67].contentEditable = "true";
	editables[68].contentEditable = "true";
	editables[69].contentEditable = "true";
	editables[70].contentEditable = "true";
    editables[71].contentEditable = "true";
    editables[72].contentEditable = "true";
    editables[73].contentEditable = "true";
	editables[74].contentEditable = "true";
	editables[75].contentEditable = "true";
	editables[76].contentEditable = "true";
	editables[77].contentEditable = "true";
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
	editables[23].contentEditable = "false";
	editables[24].contentEditable = "false";
    editables[25].contentEditable = "false";
    editables[26].contentEditable = "false";
	editables[27].contentEditable = "false";
	editables[28].contentEditable = "false";
	editables[29].contentEditable = "false";
	editables[30].contentEditable = "false";
	editables[31].contentEditable = "false";
	editables[32].contentEditable = "false";
    editables[33].contentEditable = "false";
    editables[34].contentEditable = "false";
	editables[35].contentEditable = "false";
	editables[36].contentEditable = "false";
	editables[37].contentEditable = "false";
	editables[38].contentEditable = "false";
	editables[39].contentEditable = "false";
	editables[40].contentEditable = "false";
    editables[41].contentEditable = "false";
	editables[42].contentEditable = "false";
	editables[43].contentEditable = "false";
	editables[44].contentEditable = "false";
	editables[45].contentEditable = "false";
	editables[46].contentEditable = "false";
	editables[47].contentEditable = "false";
	editables[48].contentEditable = "false";
    editables[49].contentEditable = "false";
	editables[50].contentEditable = "false";
	editables[51].contentEditable = "false";
	editables[52].contentEditable = "false";
	editables[54].contentEditable = "false";
	editables[55].contentEditable = "false";
	editables[56].contentEditable = "false";
	editables[57].contentEditable = "false";
    editables[58].contentEditable = "false";
	editables[59].contentEditable = "false";
	editables[60].contentEditable = "false";
	editables[61].contentEditable = "false";
	editables[62].contentEditable = "false";
	editables[63].contentEditable = "false";
	editables[64].contentEditable = "false";
	editables[65].contentEditable = "false";
    editables[66].contentEditable = "false";
	editables[67].contentEditable = "false";
	editables[68].contentEditable = "false";
	editables[69].contentEditable = "false";
	editables[70].contentEditable = "false";
	editables[71].contentEditable = "false";
	editables[72].contentEditable = "false";
	editables[73].contentEditable = "false";
	editables[74].contentEditable = "false";
	editables[75].contentEditable = "false";
	editables[76].contentEditable = "false";
	editables[77].contentEditable = "false";
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
