//U81623325
export function calculateInvestmentReturn(principal, rate, time, numOfCompounds) {
    return principal * Math.pow((1 + rate / numOfCompounds), numOfCompounds * time);
}
// Commit : "Develop investment return calculation module."