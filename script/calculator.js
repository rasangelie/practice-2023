let calculation = localStorage.getItem('calculation') || '';

function calculate(value) {
    calculation += value;
    console.log(calculation);

    showCalculation();

    localStorage.setItem('calculation', calculation);
}


function saveCalculation() {
    localStorage.setItem('calculation', calculation);

}

function showCalculation() {
    console.log(document.querySelector('.js-input')
        .value = calculation);
                
}