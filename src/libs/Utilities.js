export default class Utilities {

  static formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  }

  static symbolsToArray(symbols) {
    if (!symbols) return [];
    const arr = symbols
      .replace(/\s+/g, '')
      .split(',')
      .filter(s => s !== '')
      .map(s => s.toUpperCase());
    return arr;
  }

  static symbolsToString(symbols) {
    return symbols.join(",");
  }

}

