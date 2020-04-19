let expression;
let expressionE = ' ? ';
let i = 0;
let resultP;
let resultN;
const emojis = ['😃', '😁', '😍', '💀', '👕', '👖', '👟', '🎩', '🎓', '🕶️', '🐶', '🐱', '🌎', '⭐', '🍎', '🍌', '🍓', '🍔', '🍟', '🍕', '⚽', '🏀', '🎱', '🚲', '🚍', '🚘', '✈️', '🏠', '🔑', '🎁', '❤️', '🎵', '🕒'];
let emoji;
let time0, time1;
let toastType;

document.addEventListener("click", function (e) {
    if (e.target.id === 'operator') {
        if (document.getElementById('valueFinal').value === '') {
            toast('alert', 'Por favor, preencha o campo!', 'red')
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

function toast(type = 'alert', text = 'test', color = 'red', time = 5) {
    toastType = type;
    if (document.getElementById('toastStyle') && document.getElementById('toast')) {
        document.getElementById('toastStyle').remove();
        document.getElementById('toast').remove();
    }
    let div = document.createElement('div');
    div.id = 'toast';
    div.innerHTML = text;
    let style = document.createElement('style');
    style.id = 'toastStyle';
    style.innerHTML = `
        #toast {
            display: flex;
            justify-content: center; 
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: -webkit-max-content;
            width: -moz-max-content;
            width: max-content;
            left: 50%;
            bottom: -3vw;
            border-radius: 50px;
            padding: 2vw 0;
            background-color: ${color};
            white-space: nowrap;
            font-size: 5vw;
            color: #fff;
            font-weight: bold;
            position: fixed;
            z-index: 9999;
            overflow: hidden;
            display: none;
        }.show {
            display: flex !important;
            -webkit-animation: fadeInOut ${time}s;
            animation: fadeInOut ${time}s;
        }@-webkit-keyframes fadeInOut {
            0% { max-width: 0%; padding 2vw 0 }
            25% { max-width: 100%; padding: 2vw 2vw }
            75% { max-width: 100%; padding: 2vw 2vw }
            100% { max-width: 0%; padding: 2vw 0 }
        }@keyframes fadeInOut {
            0% { max-width: 0%; padding 2vw 0 }
            25% { max-width: 100%; padding: 2vw 2vw }
            75% { max-width: 100%; padding: 2vw 2vw }
            100% { max-width: 0%; padding: 2vw 0 }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(div);
    clearTimeout(time0);
    clearTimeout(time1);
    time0 = setTimeout(function () {
        div.className = 'show'
    }, 200);
    time1 = setTimeout(function () {
        document.head.removeChild(style);
        document.body.removeChild(div);
    }, 200 + time * 1000);
}