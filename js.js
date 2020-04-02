const startGame = () => {

    let count = 10; // колличество попыток

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

    // Присваиваем переменной сгенерированное число
    const generatedNum = generatesNum(1, 100);

    const game = (randomNum) => {
        let enterVal = prompt('Угадай число от 1 до 100'); // Спрашиваем пользователя
        let enterNum = Number(enterVal);

        if (count === 0) {
            let gameOver = confirm('Попытки закончились, хотите сыграть еще?');
            return gameOver && startGame();
        } else if (enterNum === randomNum) {
            let gameWin = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            return gameWin && startGame();
        } else if (enterVal === null ) {
            alert('Досвидания!');
            return;
        } else if (!isNumber(enterVal)) {
            alert('Введи число!');
            game();
        } else if (enterNum > randomNum && enterNum !== 0) {
            --count;
            alert(`Загаданное число меньше, осталось попыток: ${count}`);
            game();
        } else if (enterNum < randomNum && enterNum !== 0) {
            --count;
            alert(`Загаданное число больше, осталось попыток: ${count}`);
            game();
        }
    };

    game(generatedNum);
};

startGame();