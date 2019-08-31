import Faker from "faker";
import CompanyList from "./CompanyList";
import moment from "moment";

export default class FakeData {

  static company() {
    const index = Faker.random.number(499)
    var company = CompanyList.find(index);
    return company;
  }

  static earningsTime() {
    return Faker.random.arrayElement(['BMO', 'MAC']);
  }

  static number(min, max, places) {
    const random = (Math.random() * (max - min + 1) + min);
    const adjusted = places > 0 ? random.toFixed(places) : Math.round(random);
    return adjusted;
  }

  static date(start, end) {
    const date = Faker.date.between(start.toDate(), end.toDate());
    return moment(date).startOf("day");
  }

  static paragraph(sentences) {
    return Faker.lorem.paragraph(sentences);
  }


}
