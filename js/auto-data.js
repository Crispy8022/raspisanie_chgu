var editMode = false;

window.onload = function () {
    var savedTimes = JSON.parse(localStorage.getItem("savedTimes")) || {};
    if (savedTimes.pntime) {
        document.getElementById("pntime").innerHTML = savedTimes.pntime;
        document.getElementById("vttime").innerHTML = formatDate(getNextDay(savedTimes.pntime));
        document.getElementById("srtime").innerHTML = formatDate(getNextDay(getNextDay(savedTimes.pntime)));
        document.getElementById("chttime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(savedTimes.pntime))));
        document.getElementById("pttime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime)))));
        document.getElementById("sbtime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime))))));
    }
};

function toggleEditMode() {
    editMode = !editMode;
    var pntime = document.getElementById("pntime");
    var vttime = document.getElementById("vttime");
    var srtime = document.getElementById("srtime");
    var chttime = document.getElementById("chttime");
    var pttime = document.getElementById("pttime");
    var sbtime = document.getElementById("sbtime");

    pntime.contentEditable = editMode;
    vttime.contentEditable = editMode;
    srtime.contentEditable = editMode;
    chttime.contentEditable = editMode;
    pttime.contentEditable = editMode;
    sbtime.contentEditable = editMode;

    if (!editMode) {
        // Если режим редактирования выключен, сохранить изменения
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    var savedTimes = {
        pntime: document.getElementById("pntime").innerHTML
    };
    localStorage.setItem("savedTimes", JSON.stringify(savedTimes));

    // Обновить времена для vttime, srtime, chttime, pttime и sbtime
    document.getElementById("vttime").innerHTML = formatDate(getNextDay(savedTimes.pntime));
    document.getElementById("srtime").innerHTML = formatDate(getNextDay(getNextDay(savedTimes.pntime)));
    document.getElementById("chttime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(savedTimes.pntime))));
    document.getElementById("pttime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime)))));
    document.getElementById("sbtime").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime))))));
}

function updateTime(timeId) {
    var timeElement = document.getElementById(timeId);
    var newTime = prompt("Введите новое время:", timeElement.innerHTML);
    if (newTime !== null) {
        timeElement.innerHTML = newTime;
        saveToLocalStorage();
    }
}

function getNextDay(dateString) {
    var currentDate = new Date(dateString.replace(/(\d{2}).(\d{2}).(\d{2})/, '$2/$1/$3'));
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toLocaleDateString('en-GB').replace(/\//g, '.');
}

function formatDate(dateString) {
    var date = new Date(dateString.replace(/(\d{2}).(\d{2}).(\d{2})/, '$2/$1/$3'));
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString().slice(2);
    return day + '.' + month + '.' + year;
}