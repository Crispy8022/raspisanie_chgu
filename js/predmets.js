var valuesArray = [" ", "Вычислительные машины, сети и телекоммуникации", "Математический анализ", "Web-программирование", "Иностранный язык", "Логика и теория вычислительных алгоритмов", "Объектно ориентированное программирование", "Информационные системы и технологии", "Физическая культура и спорт"];
function createDatalist(index) {
    var datalist = document.getElementById("values-list-" + index);
    datalist.innerHTML = "";
    valuesArray.forEach(function(value) {
        var option = document.createElement("option");
        option.value = value;
        datalist.appendChild(option);
    });
}

function showInsertElements(index) {
    var inputBlock = document.getElementById("input-block-" + index);
    inputBlock.style.display = "block";
}


function insertSelectedValue(index) {
var inputField = document.getElementById("input-value-" + index);
var inputValue = inputField.value;
var textField = document.getElementById("text-field-" + index);

if (inputValue) {
    textField.textContent = inputValue;
    localStorage.setItem("savedValue-" + index, inputValue);
}

// Скрываем блок после вставки
var inputBlock = document.getElementById("input-block-" + index);
inputBlock.style.display = "none";
}

for (var i = 1; i <= 1000; i++) {
var savedValue = localStorage.getItem("savedValue-" + i);
var textField = document.getElementById("text-field-" + i);
if (savedValue) {
    textField.textContent = savedValue;
}
}