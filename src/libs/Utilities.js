export default class Utilities {

  static formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  }

  static getRandomNumber(min, max, places) {
    const random = (Math.random() * (max - min + 1) + min);
    const adjusted = places > 0 ? random.toFixed(places) : Math.round(random);
    return adjusted;
  }

}

