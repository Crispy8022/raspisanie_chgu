    // Counter and update function for Понедельник
    let counterPn_ = localStorage.getItem('counterPn_') || 0;

    function updateCounterPn_(cellId) {
        const table = document.querySelector(".dztable-pn_");
        const rows = table.getElementsByTagName('tr');

        counterPn_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterPn_++;
            }
        }

        document.querySelector(".spisok-pn_").innerHTML = `Понедельник (${counterPn_})`;
        localStorage.setItem('counterPn_', counterPn_);
    }

    document.querySelector(".spisok-pn_").innerHTML = `Понедельник (${counterPn_})`;

    // Counter and update function for Вторник
    let counterVt_ = localStorage.getItem('counterVt_') || 0;

    function updateCounterVt_(cellId) {
        const table = document.querySelector(".dztable-vt_");
        const rows = table.getElementsByTagName('tr');

        counterVt_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterVt_++;
            }
        }

        document.querySelector(".spisok-vt_").innerHTML = `Вторник (${counterVt_})`;
        localStorage.setItem('counterVt_', counterVt_);
    }

    document.querySelector(".spisok-vt_").innerHTML = `Вторник (${counterVt_})`;

    // Counter and update function for Среда
    let counterSr_ = localStorage.getItem('counterSr_') || 0;

    function updateCounterSr_(cellId) {
        const table = document.querySelector(".dztable-sr_");
        const rows = table.getElementsByTagName('tr');

        counterSr_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterSr_++;
            }
        }

        document.querySelector(".spisok-sr_").innerHTML = `Среда (${counterSr_})`;
        localStorage.setItem('counterSr_', counterSr_);
    }

    document.querySelector(".spisok-sr_").innerHTML = `Среда (${counterSr_})`;

    // Counter and update function for Четверг
    let counterCht_ = localStorage.getItem('counterCht_') || 0;

    function updateCounterCht_(cellId) {
        const table = document.querySelector(".dztable-cht_");
        const rows = table.getElementsByTagName('tr');

        counterCht_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterCht_++;
            }
        }

        document.querySelector(".spisok-cht_").innerHTML = `Четверг (${counterCht_})`;
        localStorage.setItem('counterCht_', counterCht_);
    }

    document.querySelector(".spisok-cht_").innerHTML = `Четверг (${counterCht_})`;

    // Counter and update function for Пятница
    let counterPt_ = localStorage.getItem('counterPt_') || 0;

    function updateCounterPt_(cellId) {
        const table = document.querySelector(".dztable-pt_");
        const rows = table.getElementsByTagName('tr');

        counterPt_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterPt_++;
            }
        }

        document.querySelector(".spisok-pt_").innerHTML = `Пятница (${counterPt_})`;
        localStorage.setItem('counterPt_', counterPt_);
    }

    document.querySelector(".spisok-pt_").innerHTML = `Пятница (${counterPt_})`;

    // Counter and update function for Суббота
    let counterSb_ = localStorage.getItem('counterSb_') || 0;

    function updateCounterSb_(cellId) {
        const table = document.querySelector(".dztable-sb_");
        const rows = table.getElementsByTagName('tr');

        counterSb_ = 0;

        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].getElementsByTagName('td')[1];
            if (cell.innerHTML.trim() !== "") {
                counterSb_++;
            }
        }

        document.querySelector(".spisok-sb_").innerHTML = `Суббота (${counterSb_})`;
        localStorage.setItem('counterSb_', counterSb_);
    }

    document.querySelector(".spisok-sb_").innerHTML = `Суббота (${counterSb_})`;