//U81623325
export function calculateLoanPayment(principal, rate, numOfPayments) {
    let monthlyRate = rate / 12;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, numOfPayments) / (Math.pow(1 + monthlyRate, numOfPayments) - 1);
}
// Commit: "Create loan payment calculation module."