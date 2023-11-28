// Функция для обновления счетчика
function updateCounter(day, counter) {
    let count = localStorage.getItem(counter) || 0;

    function update() {
        const table = document.querySelector(`.dztable-${day}`);
        const rows = table.getElementsByTagName('tr');

        count = Array.from(rows).slice(1).reduce((acc, row) => {
            const cell = row.getElementsByTagName('td')[1];
            return acc + (cell.innerHTML.trim() !== "" ? 1 : 0);
        }, 0);

        document.querySelector(`.spisok-${day}`).innerHTML = `${day} (${count})`;
        localStorage.setItem(counter, count);
    }

    update();

    return update;
}

// Создаем функции обновления для каждого дня
const updatePn = updateCounter("pn", "counterPn");
const updateVt = updateCounter("vt", "counterVt");
const updateSr = updateCounter("sr", "counterSr");
const updateCht = updateCounter("cht", "counterCht");
const updatePt = updateCounter("pt", "counterPt");
const updateSb = updateCounter("sb", "counterSb");

// Вызываем функции обновления при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    updatePn();
    updateVt();
    updateSr();
    updateCht();
    updatePt();
    updateSb();
});

// Удаление всех значений и обновление счетчиков
document.getElementById("deleteAll").addEventListener("click", function () {
    // Ваш код для удаления значений

    // После удаления вызываем соответствующие функции обновления
    updatePn();
    updateVt();
    updateSr();
    updateCht();
    updatePt();
    updateSb();
});
