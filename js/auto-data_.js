var editMode = false;

window.onload = function () {
    var savedTimes = JSON.parse(localStorage.getItem("savedTimes")) || {};
    if (savedTimes.pntime_) {
        document.getElementById("pntime_").innerHTML = savedTimes.pntime_;
        document.getElementById("vttime_").innerHTML = formatDate(getNextDay(savedTimes.pntime_));
        document.getElementById("srtime_").innerHTML = formatDate(getNextDay(getNextDay(savedTimes.pntime_)));
        document.getElementById("chttime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(savedTimes.pntime_))));
        document.getElementById("pttime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime_)))));
        document.getElementById("sbtime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime_))))));
    }
};

function toggleEditMode() {
    editMode = !editMode;
    var pntime_ = document.getElementById("pntime_");
    var vttime_ = document.getElementById("vttime_");
    var srtime_ = document.getElementById("srtime_");
    var chttime_ = document.getElementById("chttime_");
    var pttime_ = document.getElementById("pttime_");
    var sbtime_ = document.getElementById("sbtime_");

    pntime_.contentEditable = editMode;
    vttime_.contentEditable = editMode;
    srtime_.contentEditable = editMode;
    chttime_.contentEditable = editMode;
    pttime_.contentEditable = editMode;
    sbtime_.contentEditable = editMode;

    if (!editMode) {
        // Если режим редактирования выключен, сохранить изменения
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    var savedTimes = {
        pntime_: document.getElementById("pntime_").innerHTML
    };
    localStorage.setItem("savedTimes", JSON.stringify(savedTimes));

    // Обновить времена для vttime_, srtime_, chttime_, pttime_ и sbtime_
    document.getElementById("vttime_").innerHTML = formatDate(getNextDay(savedTimes.pntime_));
    document.getElementById("srtime_").innerHTML = formatDate(getNextDay(getNextDay(savedTimes.pntime_)));
    document.getElementById("chttime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(savedTimes.pntime_))));
    document.getElementById("pttime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime_)))));
    document.getElementById("sbtime_").innerHTML = formatDate(getNextDay(getNextDay(getNextDay(getNextDay(getNextDay(savedTimes.pntime_))))));
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