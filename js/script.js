const operators = [];
let expression = 'v';
let i = 0;
let resultP;
let resultN;
document.addEventListener("click", function (e) {
    if (e.target.id === 'operator') {
        if (document.getElementById('valueFinal').value === '') {
            alert('Preencha o campo por favor');
            return;
        }
        operators.push(e.target.innerHTML)
        const valueFinal = parseInt(document.getElementById('valueFinal').value);
        expression += e.target.innerHTML + 'v';
        document.getElementById('expression').innerHTML = `${expression.replace(/v/g, ' ? ')} = ${valueFinal}`;
        while (i !== resultP &&
            i < (valueFinal > 0 ?
                valueFinal * 2 :
                -valueFinal * 2)) {
            if (eval(expression.replace(/v/g, i)) === valueFinal) {
                document.getElementById('resultP').innerHTML = `A incógnita equivale =  <b>${i}</b><br>${expression.replace(/v/g, ` ${i} `)} = ${valueFinal}`;
                resultP = i;
                break
            } else {
                resultP += operators.length * valueFinal;
                document.getElementById('resultP').innerHTML = 'Outro resultdo'
            }
            i += 1;
        };
        i = 0;
        while (i !== resultN &&
            i > (valueFinal < 0 ?
                valueFinal * 2 :
                -valueFinal * 2)) {
            if (eval(expression.replace(/v/g, `(${i})`)) === valueFinal) {
                document.getElementById('resultN').innerHTML = `A incógnita equivale =  <b>(${i})</b><br>${expression.replace(/v/g, ` (${i}) `)} = ${valueFinal < 0 ? `(${valueFinal})` : valueFinal}`;
                resultN = i;
                break
            } else {
                resultN += operators.length * valueFinal;
                document.getElementById('resultN').innerHTML = 'Outro resultdo'
            }
            i -= 1;
        };
        i = 0;
    }
    if (e.target.id === 'clear') {
        operators.pop;
        expression = 'v';
        document.getElementById('valueFinal').value = '';
        document.getElementById('expression').innerHTML = '';
        document.getElementById('resultP').innerHTML = '';
        document.getElementById('resultN').innerHTML = '';
    }
});