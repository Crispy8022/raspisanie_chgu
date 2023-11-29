document.addEventListener("DOMContentLoaded", function() {
    // Функция для определения номера недели
    function getWeekNumber() {
      const currentDate = new Date();
      const startDate = new Date(2023, 10, 27); // Начальная дата (27.11.23)
      const diffInMilliseconds = currentDate - startDate;
      const diffInWeeks = Math.floor(diffInMilliseconds / (7 * 24 * 60 * 60 * 1000));
      return (diffInWeeks % 2) + 1; // Возвращает 1 для четных недель, 2 для нечетных
    }

    // Функция для форматирования даты в виде "dd.mm.yy"
    function formatDate(date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(-2);
      return `${day}.${month}.${year}`;
    }

    // Определение текущей недели
    const currentWeek = getWeekNumber();

    // Определение диапазона для текущей недели
    const startDate = new Date(2023, 10, 27 + (currentWeek - 1) * 7);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    // Форматирование и вывод сообщения
    const message = `${formatDate(startDate)} - ${formatDate(endDate)} - ${currentWeek === 1 ? 'Вторая' : 'Первая'} Неделя`;
    document.getElementById('weekMessage').innerText = message;
  });