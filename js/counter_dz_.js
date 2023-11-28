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
    { name: "Пн", shortName: "pn_", counter: "counterPn_" },
    { name: "Вт", shortName: "vt_", counter: "counterVt_" },
    { name: "Ср", shortName: "sr_", counter: "counterSr_" },
    { name: "Чт", shortName: "cht_", counter: "counterCht_" },
    { name: "Пт", shortName: "pt_", counter: "counterPt_" },
    { name: "Сб", shortName: "sb_", counter: "counterSb_" }
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
