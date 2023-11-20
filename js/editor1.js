const editBtn = document.getElementById("editBtn");
const editables = document.querySelectorAll("#pntime_, #pn1_, #pn2_, #pn3_, #pn4_, #pn5_, #pn6_, #pn7_, #pn8_, #dzpn1_, #dzpn2_, #dzpn3_, #dzpn4_, #vttime_, #vt1_, #vt2_, #vt3_, #vt4_, #vt5_, #vt6_, #vt7_, #vt8_, #dzvt1_, #dzvt2_, #dzvt3_, #dzvt4_, #srtime_, #sr1_, #sr2_, #sr3_, #sr4_, #sr5_, #sr6_, #sr7_, #sr8_, #dzsr1_, #dzsr2_, #dzsr3_, #dzsr4_, #chttime_, #cht1_, #cht2_, #cht3_, #cht4_, #cht5_, #cht6_, #cht7_, #cht8_, #dzcht1_, #dzcht2_, #dzcht3_, #dzcht4_, #pttime_, #pt1_, #pt2_, #pt3_, #pt4_, #pt5_, #pt6_, #pt7_, #pt8_, #dzpt1_, #dzpt2_, #dzpt3_, #dzpt4_, #sbtime_, #sb1_, #sb2_, #sb3_, #sb4_, #sb5_, #sb6_, #sb7_, #sb8_, #dzsb1_, #dzsb2_, #dzsb3_, #dzsb4_");
if (typeof Storage !== "undefined") {
  if (localStorage.getItem("pntime_") !== null) {
    editables[0].innerHTML = localStorage.getItem("pntime_");
  }
  if (localStorage.getItem("pn1_") !== null) {
    editables[1].innerHTML = localStorage.getItem("pn1_");
  }
  if (localStorage.getItem("pn2_") !== null) {
    editables[2].innerHTML = localStorage.getItem("pn2_");
  }
  if (localStorage.getItem("pn3_") !== null) {
    editables[3].innerHTML = localStorage.getItem("pn3_");
  }
  if (localStorage.getItem("pn4_") !== null) {
    editables[4].innerHTML = localStorage.getItem("pn4_");
  }
  if (localStorage.getItem("pn5_") !== null) {
    editables[5].innerHTML = localStorage.getItem("pn5_");
  }
  if (localStorage.getItem("pn6_") !== null) {
    editables[6].innerHTML = localStorage.getItem("pn6_");
  }
  if (localStorage.getItem("pn7_") !== null) {
    editables[7].innerHTML = localStorage.getItem("pn7_");
  }
  if (localStorage.getItem("pn8_") !== null) {
    editables[8].innerHTML = localStorage.getItem("pn8_");
  }
  if (localStorage.getItem("dzpn1_") !== null) {
    editables[9].innerHTML = localStorage.getItem("dzpn1_");
  }
  if (localStorage.getItem("dzpn2_") !== null) {
    editables[10].innerHTML = localStorage.getItem("dzpn2_");
  }
  if (localStorage.getItem("dzpn3_") !== null) {
    editables[11].innerHTML = localStorage.getItem("dzpn3_");
  }
  if (localStorage.getItem("dzpn4_") !== null) {
    editables[12].innerHTML = localStorage.getItem("dzpn4_");
  }
  if (localStorage.getItem("vttime_") !== null) {
    editables[13].innerHTML = localStorage.getItem("vttime_");
  }
  if (localStorage.getItem("vt1_") !== null) {
    editables[14].innerHTML = localStorage.getItem("vt1_");
  }
  if (localStorage.getItem("vt2_") !== null) {
    editables[15].innerHTML = localStorage.getItem("vt2_");
  }
  if (localStorage.getItem("vt3_") !== null) {
    editables[16].innerHTML = localStorage.getItem("vt3_");
  }
  if (localStorage.getItem("vt4_") !== null) {
    editables[17].innerHTML = localStorage.getItem("vt4_");
  }
  if (localStorage.getItem("vt5_") !== null) {
    editables[18].innerHTML = localStorage.getItem("vt5_");
  }
  if (localStorage.getItem("vt6_") !== null) {
    editables[19].innerHTML = localStorage.getItem("vt6_");
  }
  if (localStorage.getItem("vt7_") !== null) {
    editables[20].innerHTML = localStorage.getItem("vt7_");
  }
  if (localStorage.getItem("vt8_") !== null) {
    editables[21].innerHTML = localStorage.getItem("vt8_");
  }
  if (localStorage.getItem("dzvt1_") !== null) {
    editables[22].innerHTML = localStorage.getItem("dzvt1_");
  }
  if (localStorage.getItem("dzvt2_") !== null) {
    editables[23].innerHTML = localStorage.getItem("dzvt2_");
  }
  if (localStorage.getItem("dzvt3_") !== null) {
    editables[24].innerHTML = localStorage.getItem("dzvt3_");
  }
  if (localStorage.getItem("dzvt4_") !== null) {
    editables[25].innerHTML = localStorage.getItem("dzvt4_");
  }
  if (localStorage.getItem("srtime_") !== null) {
    editables[26].innerHTML = localStorage.getItem("srtime_");
  }
  if (localStorage.getItem("sr1_") !== null) {
    editables[27].innerHTML = localStorage.getItem("sr1_");
  }
  if (localStorage.getItem("sr2_") !== null) {
    editables[28].innerHTML = localStorage.getItem("sr2_");
  }
  if (localStorage.getItem("sr3_") !== null) {
    editables[29].innerHTML = localStorage.getItem("sr3_");
  }
  if (localStorage.getItem("sr4_") !== null) {
    editables[30].innerHTML = localStorage.getItem("sr4_");
  }
  if (localStorage.getItem("sr5_") !== null) {
    editables[31].innerHTML = localStorage.getItem("sr5_");
  } 
  if (localStorage.getItem("sr6_") !== null) {
    editables[32].innerHTML = localStorage.getItem("sr6_");
  }
  if (localStorage.getItem("sr7_") !== null) {
    editables[33].innerHTML = localStorage.getItem("sr7_");
  }
  if (localStorage.getItem("sr8_") !== null) {
    editables[34].innerHTML = localStorage.getItem("sr8_");
  } 
  if (localStorage.getItem("dzsr1_") !== null) {
    editables[35].innerHTML = localStorage.getItem("dzsr1_");
  }
  if (localStorage.getItem("dzsr2_") !== null) {
    editables[36].innerHTML = localStorage.getItem("dzsr2_");
  }
  if (localStorage.getItem("dzsr3_") !== null) {
    editables[37].innerHTML = localStorage.getItem("dzsr3_");
  }
  if (localStorage.getItem("dzsr4_") !== null) {
    editables[38].innerHTML = localStorage.getItem("dzsr4_");
  }
  if (localStorage.getItem("chttime_") !== null) {
    editables[39].innerHTML = localStorage.getItem("chttime_");
  }
  if (localStorage.getItem("cht1_") !== null) {
    editables[40].innerHTML = localStorage.getItem("cht1_");
  }
  if (localStorage.getItem("cht2_") !== null) {
    editables[41].innerHTML = localStorage.getItem("cht2_");
  } 
  if (localStorage.getItem("cht3_") !== null) {
    editables[42].innerHTML = localStorage.getItem("cht3_");
  }
  if (localStorage.getItem("cht4_") !== null) {
    editables[43].innerHTML = localStorage.getItem("cht4_");
  } 
  if (localStorage.getItem("cht5_") !== null) {
    editables[44].innerHTML = localStorage.getItem("cht5_");
  }
  if (localStorage.getItem("cht6_") !== null) {
    editables[45].innerHTML = localStorage.getItem("cht6_");
  }
  if (localStorage.getItem("cht7_") !== null) {
    editables[46].innerHTML = localStorage.getItem("cht7_");
  } 
  if (localStorage.getItem("cht8_") !== null) {
    editables[47].innerHTML = localStorage.getItem("cht8_");
  }
  if (localStorage.getItem("dzcht1_") !== null) {
    editables[48].innerHTML = localStorage.getItem("dzcht1_");
  }
  if (localStorage.getItem("dzcht2_") !== null) {
    editables[49].innerHTML = localStorage.getItem("dzcht2_");
  }
  if (localStorage.getItem("dzcht3_") !== null) {
    editables[50].innerHTML = localStorage.getItem("dzcht3_");
  }
  if (localStorage.getItem("dzcht4_") !== null) {
    editables[51].innerHTML = localStorage.getItem("dzcht4_");
  }
  if (localStorage.getItem("pttime_") !== null) {
    editables[52].innerHTML = localStorage.getItem("pttime_");
  } 
  if (localStorage.getItem("pt1_") !== null) {
    editables[53].innerHTML = localStorage.getItem("pt1_");
  } 
  if (localStorage.getItem("pt2_") !== null) {
    editables[54].innerHTML = localStorage.getItem("pt2_");
  }
  if (localStorage.getItem("pt3_") !== null) {
    editables[55].innerHTML = localStorage.getItem("pt3_");
  } 
  if (localStorage.getItem("pt4_") !== null) {
    editables[56].innerHTML = localStorage.getItem("pt4_");
  }
  if (localStorage.getItem("pt5_") !== null) {
    editables[57].innerHTML = localStorage.getItem("pt5_");
  }
  if (localStorage.getItem("pt6_") !== null) {
    editables[58].innerHTML = localStorage.getItem("pt6_");
  } 
  if (localStorage.getItem("pt7_") !== null) {
    editables[59].innerHTML = localStorage.getItem("pt7_");
  }
  if (localStorage.getItem("pt8_") !== null) {
    editables[60].innerHTML = localStorage.getItem("pt8_");
  } 
  if (localStorage.getItem("dzpt1_") !== null) {
    editables[61].innerHTML = localStorage.getItem("dzpt1_");
  }
  if (localStorage.getItem("dzpt2_") !== null) {
    editables[62].innerHTML = localStorage.getItem("dzpt2_");
  }
  if (localStorage.getItem("dzpt3_") !== null) {
    editables[63].innerHTML = localStorage.getItem("dzpt3_");
  }
  if (localStorage.getItem("dzpt4_") !== null) {
    editables[64].innerHTML = localStorage.getItem("dzpt4_");
  }
  if (localStorage.getItem("sbtime_") !== null) {
    editables[65].innerHTML = localStorage.getItem("sbtime_");
  }
  if (localStorage.getItem("sb1_") !== null) {
    editables[66].innerHTML = localStorage.getItem("sb1_");
  }
  if (localStorage.getItem("sb2_") !== null) {
    editables[67].innerHTML = localStorage.getItem("sb2_");
  }
  if (localStorage.getItem("sb3_") !== null) {
    editables[68].innerHTML = localStorage.getItem("sb3_");
  } 
  if (localStorage.getItem("sb4_") !== null) {
    editables[69].innerHTML = localStorage.getItem("sb4_");
  }
  if (localStorage.getItem("sb5_") !== null) {
    editables[70].innerHTML = localStorage.getItem("sb5_");
  }
  if (localStorage.getItem("sb6_") !== null) {
    editables[71].innerHTML = localStorage.getItem("sb6_");
  } 
  if (localStorage.getItem("sb7_") !== null) {
    editables[72].innerHTML = localStorage.getItem("sb7_");
  }
  if (localStorage.getItem("sb8_") !== null) {
    editables[73].innerHTML = localStorage.getItem("sb8_");
  }
  if (localStorage.getItem("dzsb1_") !== null) {
    editables[74].innerHTML = localStorage.getItem("dzsb1_");
  }
  if (localStorage.getItem("dzsb2_") !== null) {
    editables[75].innerHTML = localStorage.getItem("dzsb2_");
  }
  if (localStorage.getItem("dzsb3_") !== null) {
    editables[76].innerHTML = localStorage.getItem("dzsb3_");
  }
  if (localStorage.getItem("dzsb4_") !== null) {
    editables[77].innerHTML = localStorage.getItem("dzsb4_");
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
