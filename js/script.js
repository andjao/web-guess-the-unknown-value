let expression;
let expressionE = ' ? ';
let i = 0;
let resultP;
let resultN;
const emojis = ['😃', '😁', '😍', '💀', '👕', '👖', '👟', '🎩', '🎓', '🕶️', '🐶', '🐱', '🌎', '⭐', '🍎', '🍌', '🍓', '🍔', '🍟', '🍕', '⚽', '🏀', '🎱', '🚲', '🚍', '🚘', '✈️', '🏠', '🔑', '🎁', '❤️', '🎵', '🕒'];
let emoji;
let time0, time1, time2;
let tooltipType;

document.addEventListener("click", function (e) {
    if (e.target.id === 'operator') {
        if (document.getElementById('valueFinal').value === '') {
            tooltip('alert', 'Por favor, preencha o campo', 'red')
            document.getElementById('valueFinal').focus();
            return;
        }
        const valueFinal = parseInt(document.getElementById('valueFinal').value);
        expressionE += e.target.value + ' ? ';
        expression = expressionE.replace(/[*]/g, '×');
        expression = expression.replace(/[/]/g, '÷');
        document.getElementById('expression').innerHTML = `${expression} = ${valueFinal < 0 ? `(${valueFinal})` : valueFinal}`;
        while (i !== resultP &&
            i < (valueFinal > 0 ?
                valueFinal * 2 :
                -valueFinal * 2)) {
            if (eval(expressionE.replace(/[?]/g, i)) === valueFinal) {
                document.getElementById('resultP').innerHTML = `A incógnita equivale =  <b>${i}</b><br>${expression.replace(/[?]/g, ` ${i} `)} = ${valueFinal}`;
                resultP = i;
                break
            } else {
                resultP += valueFinal * 2;
                document.getElementById('resultP').innerHTML = 'Outro resultdo'
            }
            i += 1;
        };
        i = 0;
        while (i !== resultN &&
            i > (valueFinal < 0 ?
                valueFinal * 2 :
                -valueFinal * 2)) {
            if (eval(expressionE.replace(/[?]/g, `(${i})`)) === valueFinal) {
                document.getElementById('resultN').innerHTML = `A incógnita equivale =  <b>(${i})</b><br>${expression.replace(/[?]/g, ` (${i}) `)} = ${valueFinal < 0 ? `(${valueFinal})` : valueFinal}`;
                resultN = i;
                break
            } else {
                resultN += valueFinal * 2;
                document.getElementById('resultN').innerHTML = 'Outro resultdo'
            }
            i -= 1;
        };
        i = 0;
    }
    if (e.target.id === 'clear') {
        expressionE = ' ? ';
        document.getElementById('valueFinal').value = '';
        document.getElementById('valueFinal').focus();
        emoji = emojis[Math.floor(Math.random() * emojis.length)]
        document.getElementById('expression').innerHTML = `Exemplo:<br>${emoji} × ${emoji} - ${emoji} = 6<br>3 × 3 - 3 = 6`;
        document.getElementById('resultP').innerHTML = '';
        document.getElementById('resultN').innerHTML = '';
    }
});

function tooltip(type, text, color) {
    clearTimeout(time0);
    clearTimeout(time1);
    clearTimeout(time2);
    tooltipType = type;
    document.getElementById("tooltip").className = "hiden";
    document.getElementById("tooltip").innerHTML = text;
    document.getElementById("tooltip").style.backgroundColor = color;
    const time = 200;
    time0 = setTimeout(function () {
        document.getElementById("tooltip").className = "show";
    }, time);
    time1 = setTimeout(function () {
        document.getElementById("tooltip").className = "hiden2";
    }, time + 3000);
    time2 = setTimeout(function () {
        document.getElementById("tooltip").className = "hiden";
    }, time + 3500);
}