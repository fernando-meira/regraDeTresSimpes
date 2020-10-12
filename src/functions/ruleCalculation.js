export default function ruleCalculation(firstValue, secondValue, thirdValue) {
  if (firstValue && thirdValue && secondValue) {
    const multiply = secondValue * thirdValue;
    const division = multiply / firstValue;
    const limitindDecimal = parseFloat(division.toFixed(2));

    return limitindDecimal;
  }
}
