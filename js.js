    // Функция которая проверяет является ли переданный аргумент числом
    function isNumber(n) {
        if (typeof n !== 'string') {
            return false;
        }
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // Функция которая генерирует число по заданному интервалу от и до
    const generatesNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Функция которая отвечает за создание и изменение счетчика попыток
    const getCount = () => {
        let count = 5; // Храним колличество попыток
        return function () {
            return --count;
        };
    };

    const startGame = () => {
        const counter = getCount();
        const generatedNum = generatesNum(1, 100);

        return function game() {
            let count = counter(); // Храним колличество попыток которые возвращает функция counter()
            
            let enterVal = prompt('Угадай число от 1 до 100'); // Спрашиваем у пользователя его версию загаданного числа
            let enterNum = Number(enterVal);

            if (count <= 0) {
                let gameOver = confirm('Попытки закончились, хотите сыграть еще?');
                return gameOver && startGame()();
            } else if (enterNum === generatedNum) {
                let gameWin = confirm('Поздравляю, Вы угадали!!! \nХотели бы сыграть еще?');
                return gameWin && startGame()();
            } else if (enterVal === null) {
                alert('Досвидания!');
                return;
            } else if (!isNumber(enterVal)) {
                alert(`Ошибочка! \nВы ввели не число! \nОсталось попыток: ${count}`);
                return game();
            } else if (enterNum > generatedNum && enterNum !== 0) {
                alert(`Загаданное число меньше! \nОсталось попыток: ${count}`);
                return game();
            } else if (enterNum < generatedNum && enterNum !== 0) {
                alert(`Загаданное число больше! \nОсталось попыток: ${count}`);
                return game();
            }
        };
    };

    const runGame = startGame();
    runGame();
