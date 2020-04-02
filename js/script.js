let expression;
let expressionE = ' ? ';
let i = 0;
let resultP;
let resultN;
document.addEventListener("click", function (e) {
    if (e.target.id === 'operator') {
        if (document.getElementById('valueFinal').value === '') {
            alert('Preencha o campo por favor');
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
                resultP += valueFinal * 10;
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
                resultN += valueFinal * 10;
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
        document.getElementById('expression').innerHTML = '';
        document.getElementById('resultP').innerHTML = '';
        document.getElementById('resultN').innerHTML = '';
    }
});