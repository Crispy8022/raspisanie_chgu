// Функция для обновления счетчика
function updateCounter(dayInfo) {
    let count = localStorage.getItem(dayInfo.counter) || 0;

    function update() {
        const table = document.querySelector(`.dztable-${dayInfo.shortName}`);
        const rows = table.getElementsByTagName('tr');

        count = Array.from(rows).slice(1).reduce((acc, row) => {
            const cell = row.getElementsByTagName('td')[1];
            return acc + (cell.innerHTML.trim() !== "" ? 1 : 0);
        }, 0);

        document.querySelector(`.spisok-${dayInfo.shortName}`).innerHTML = `${dayInfo.name} (${count})`;
        localStorage.setItem(dayInfo.counter, count);
    }

    update();

    return update;
}

// Создаем объекты с информацией о каждом дне
const daysInfo = [
    { name: "Пн", shortName: "pn", counter: "counterPn" },
    { name: "Вт", shortName: "vt", counter: "counterVt" },
    { name: "Ср", shortName: "sr", counter: "counterSr" },
    { name: "Чт", shortName: "cht", counter: "counterCht" },
    { name: "Пт", shortName: "pt", counter: "counterPt" },
    { name: "Сб", shortName: "sb", counter: "counterSb" }
];

// Создаем функции обновления для каждого дня
const updateFunctions = daysInfo.map(dayInfo => updateCounter(dayInfo));

// Вызываем функции обновления при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    updateFunctions.forEach(updateFunction => updateFunction());
});

// Удаление всех значений и обновление счетчиков
document.getElementById("deleteDZ").addEventListener("click", function () {
    // Ваш код для удаления значений

    // После удаления вызываем соответствующие функции обновления
    updateFunctions.forEach(updateFunction => updateFunction());
});
