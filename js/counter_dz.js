 // For Понедельник
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
 
     document.querySelector(".spisok-pn").innerHTML = `Понедельник (${counterPn})`;
     localStorage.setItem('counterPn', counterPn);
 }
 
 document.querySelector(".spisok-pn").innerHTML = `Понедельник (${counterPn})`;
 
 // For Вторник
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
 
     document.querySelector(".spisok-vt").innerHTML = `Вторник (${counterVt})`;
     localStorage.setItem('counterVt', counterVt);
 }
 
 document.querySelector(".spisok-vt").innerHTML = `Вторник (${counterVt})`;
 
 // For Среда
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
 
     document.querySelector(".spisok-sr").innerHTML = `Среда (${counterSr})`;
     localStorage.setItem('counterSr', counterSr);
 }
 
 document.querySelector(".spisok-sr").innerHTML = `Среда (${counterSr})`;
 
 // For Четверг
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
 
     document.querySelector(".spisok-cht").innerHTML = `Четверг (${counterCht})`;
     localStorage.setItem('counterCht', counterCht);
 }
 
 document.querySelector(".spisok-cht").innerHTML = `Четверг (${counterCht})`;
 
 // For Пятница
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
 
     document.querySelector(".spisok-pt").innerHTML = `Пятница (${counterPt})`;
     localStorage.setItem('counterPt', counterPt);
 }
 
 document.querySelector(".spisok-pt").innerHTML = `Пятница (${counterPt})`;
 
 // For Суббота
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
 
     document.querySelector(".spisok-sb").innerHTML = `Суббота (${counterSb})`;
     localStorage.setItem('counterSb', counterSb);
 }
 
 document.querySelector(".spisok-sb").innerHTML = `Суббота (${counterSb})`;
 