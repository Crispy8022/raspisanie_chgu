 // For Пн
 let counterPn = localStorage.getItem('counterPn') || 0;

 function updateCounterPn(cellId) {
     const table = document.querySelector(".dztable-pn");
     const rows = table.getElementsByTagName('tr');
 
     counterPn = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterPn++;
         }
     }
 
     document.querySelector(".spisok-pn").innerHTML = `Пн (${counterPn})`;
     localStorage.setItem('counterPn', counterPn);
 }
 
 document.querySelector(".spisok-pn").innerHTML = `Пн (${counterPn})`;
 
 // For Вт
 let counterVt = localStorage.getItem('counterVt') || 0;
 
 function updateCounterVt(cellId) {
     const table = document.querySelector(".dztable-vt");
     const rows = table.getElementsByTagName('tr');
 
     counterVt = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterVt++;
         }
     }
 
     document.querySelector(".spisok-vt").innerHTML = `Вт (${counterVt})`;
     localStorage.setItem('counterVt', counterVt);
 }
 
 document.querySelector(".spisok-vt").innerHTML = `Вт (${counterVt})`;
 
 // For Ср
 let counterSr = localStorage.getItem('counterSr') || 0;
 
 function updateCounterSr(cellId) {
     const table = document.querySelector(".dztable-sr");
     const rows = table.getElementsByTagName('tr');
 
     counterSr = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterSr++;
         }
     }
 
     document.querySelector(".spisok-sr").innerHTML = `Ср (${counterSr})`;
     localStorage.setItem('counterSr', counterSr);
 }
 
 document.querySelector(".spisok-sr").innerHTML = `Ср (${counterSr})`;
 
 // For Чт
 let counterCht = localStorage.getItem('counterCht') || 0;
 
 function updateCounterCht(cellId) {
     const table = document.querySelector(".dztable-cht");
     const rows = table.getElementsByTagName('tr');
 
     counterCht = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterCht++;
         }
     }
 
     document.querySelector(".spisok-cht").innerHTML = `Чт (${counterCht})`;
     localStorage.setItem('counterCht', counterCht);
 }
 
 document.querySelector(".spisok-cht").innerHTML = `Чт (${counterCht})`;
 
 // For Пт
 let counterPt = localStorage.getItem('counterPt') || 0;
 
 function updateCounterPt(cellId) {
     const table = document.querySelector(".dztable-pt");
     const rows = table.getElementsByTagName('tr');
 
     counterPt = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterPt++;
         }
     }
 
     document.querySelector(".spisok-pt").innerHTML = `Пт (${counterPt})`;
     localStorage.setItem('counterPt', counterPt);
 }
 
 document.querySelector(".spisok-pt").innerHTML = `Пт (${counterPt})`;
 
 // For Сб
 let counterSb = localStorage.getItem('counterSb') || 0;
 
 function updateCounterSb(cellId) {
     const table = document.querySelector(".dztable-sb");
     const rows = table.getElementsByTagName('tr');
 
     counterSb = 0;
 
     for (let i = 1; i < rows.length; i++) {
         const cell = rows[i].getElementsByTagName('td')[1];
         if (cell.innerHTML.trim() !== "") {
             counterSb++;
         }
     }
 
     document.querySelector(".spisok-sb").innerHTML = `Сб (${counterSb})`;
     localStorage.setItem('counterSb', counterSb);
 }
 
 document.querySelector(".spisok-sb").innerHTML = `Сб (${counterSb})`;
 