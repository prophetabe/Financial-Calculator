import { calculateInterest } from 'interest.js';
import { calculateLoanPayment } from 'loan.js';
import { calculateInvestmentReturn } from 'investment.js';


function validateInputs(inputs) {
    return inputs.every(input => !isNaN(input) && input !== '');
}

document.getElementById('calculateInterest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interestPrincipal').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('interestTime').value);

    if (validateInputs([principal, rate, time])) {
        const result = calculateInterest(principal, rate, time);
        document.getElementById('interestResult').innerText = `Interest: ${result}`;
    } else {
        document.getElementById('interestResult').innerText = 'Please fill out all fields with valid numbers.';
    }
});

document.getElementById('calculateLoan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100;
    const numOfPayments = parseInt(document.getElementById('loanPayments').value);

    if (validateInputs([principal, rate, numOfPayments])) {
        const result = calculateLoanPayment(principal, rate, numOfPayments);
        document.getElementById('loanResult').innerText = `Monthly Payment: ${result}`;
    } else {
        document.getElementById('loanResult').innerText = 'Please fill out all fields with valid numbers.';
    }
});

document.getElementById('calculateInvestment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investmentPrincipal').value);
    const rate = parseFloat(document.getElementById('investmentRate').value) / 100;
    const time = parseFloat(document.getElementById('investmentTime').value);
    const numOfCompounds = parseInt(document.getElementById('investmentCompounds').value);

    if (validateInputs([principal, rate, time, numOfCompounds])) {
        const result = calculateInvestmentReturn(principal, rate, time, numOfCompounds);
        document.getElementById('investmentResult').innerText = `Future Value: ${result}`;
    } else {
        document.getElementById('investmentResult').innerText = 'Please fill out all fields with valid numbers.';
    }
});