const promptNumber = () => {
    let userInput;
    let attempts = 0;
    let lastInput;

    const innerPrompt = () => {
        userInput = prompt("Введіть число більше 100:");
        switch(true) {
            case userInput === null:
                console.log("Введено нечислове значення або відміна. Завершення циклу.");
                break;
            case isNaN(userInput):
                console.log(`Користувач ввів текст ${userInput}. Завершення циклу.`);
                lastInput = userInput;
                break;
            case parseInt(userInput) > 100:
                console.log("Користувач ввів число більше за 100. Завершення циклу.");
                lastInput = userInput;
                break;
            default:
                attempts++;
                if (attempts < 10) {
                    console.log("Введено число менше або рівне 100. Спробуйте ще раз.");
                    innerPrompt();
                } else {
                    console.log("Досягнуто максимальну кількість спроб. Завершення циклу.");
                    lastInput = userInput;
                }
        }
    };

    innerPrompt();
    console.log("Останнє введене користувачем число:", lastInput);
};

promptNumber();
