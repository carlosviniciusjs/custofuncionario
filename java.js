// Seleção dos elementos
const vsalario = document.getElementById("salarioBruto");
const valet = document.getElementById("vt");
const vfgts = document.getElementById("fgts");
const calcular = document.getElementById("calcular");
const vdecimo = document.getElementById("decimo");
const vferias = document.getElementById("fer");
const vmulta = document.getElementById("mul");
const vtransporte = document.getElementById("valetransporte");
const mostrasalario = document.getElementById("mostrasalario");
const totalv = document.getElementById("total");

// Funções para mudar a cor e o tamanho da borda ao focar e desfocar os campos
function dentro(event) {
    event.target.style.borderColor = "rgb(243, 5, 231)";
    event.target.style.borderWidth = "4px"; 
}

function fora(event) {
    event.target.style.borderWidth = "1px"; // Define a largura original
    event.target.style.borderColor = "";
}

// Adiciona os eventos de foco e desfoque aos inputs
vsalario.addEventListener("focus", dentro);
vsalario.addEventListener("blur", fora);
valet.addEventListener("focus", dentro);
valet.addEventListener("blur", fora);

// Função para calcular FGTS
function valordofgts() {
    const salario = parseFloat(vsalario.value);
    if (!isNaN(salario)) {
        const calculo = salario * 0.08; // Calcula 8% do salário
        const decimot = salario * 0.0833;
        const ferias = salario * 0.1111;
        const multa = calculo * 0.4 / 12;

        const valortotal = salario + calculo + decimot + ferias + multa;

        mostrasalario.innerHTML = `Salario bruto R$ ${salario.toFixed(2)}`;
        vfgts.innerHTML = `8% FGTS: R$ ${calculo.toFixed(2)}`;
        vdecimo.innerHTML = `13º Proporcional: R$ ${decimot.toFixed(2)}`;
        vferias.innerHTML = `Férias mais 1/3 R$ ${ferias.toFixed(2)}`;
        vmulta.innerHTML = `40% multa fgts proporcional R$ ${multa.toFixed(2)}`;
        vtransporte.innerHTML = '';
        return valortotal;
    } else {
        vfgts.innerHTML = "Insira um valor válido.";
        return 0;
    }
}

function valordovt() {
    const valort = parseFloat(valet.value);
    if (valort > 0 && !isNaN(valort)) {
        const calvalet = valort - (valort * 0.06);
        vtransporte.innerHTML = `Vale transporte R$ ${calvalet.toFixed(2)}`;
        return calvalet;
    }
    else{
        return 0;
    }
}

// Adiciona o evento ao botão para cálculo ao clicar
calcular.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const totalFgts = valordofgts();
    const totalVt = valordovt();
    const mostratotal = totalFgts + totalVt;
    totalv.innerHTML = `Total: R$ ${mostratotal.toFixed(2)}`;

});
