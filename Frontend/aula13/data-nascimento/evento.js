for (let d = 1; d <= 31; d++) {
    select_dia.innerHTML += "<option>" + d + "</option>"
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

for(let m = 0; m <= 11; m++) {
    select_mes.innerHTML += "<option>" + meses[m] + "</option>";
}

/*for (let m = 1; m <= 12; m++) {
    select_mes.innerHTML += "<option>" + m + "</option>"
}*/



/*let hoje = new Date ();
for (let a = hoje.getFullYear();a >= 1905; a--)*/

for (let a = 2025; a >= 1905; a--) {
    select_ano.innerHTML += "<option>" + a + "</option>"
}
