/*Задание 4 (тайминг 30 минут)
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно*/

const riddles = {
	question: "Сколько будет 2 + 2?",
	answer: "4",
	clues: ["Столько же будет и 2 * 2!", "Столько же будет 6 - 2!"],
	askQuestion() {
		let clue = 2;
		let endGame = false;
		while (!endGame) {
			let userAnswer = prompt(this.question);
			if (userAnswer == this.answer) {
				alert("Правильно! Вы выиграли!");
				endGame = true;
			} else {
				if (clue !== 0) {
					alert(`Неправильно! У Вас осталось ${clue} попыток!`);
					alert(`Подсказка№${2 - clue}: ${this.clues[2 - clue--]}`);
				} else {
					alert("Вы проиграли!");
					endGame = true;
				}
			}
		}
	},
};

riddles.askQuestion();
