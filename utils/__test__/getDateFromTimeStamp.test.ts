import "@testing-library/jest-dom";
import { getWeekDayFromTimeStamp } from "../getDateFromTimeStamp";

describe("getDateFromTimeStamp", () => {
  it("should display monday", () => {
    expect(getWeekDayFromTimeStamp(1651470712)).toEqual("Monday");
  });
  it("should display tuesday", () => {
    expect(getWeekDayFromTimeStamp(1651557112)).toEqual("Tuesday");
  });
  it("should display wednesday", () => {
    expect(getWeekDayFromTimeStamp(1651643512)).toEqual("Wednesday");
  });
  it("should display thursday", () => {
    expect(getWeekDayFromTimeStamp(1651729912)).toEqual("Thursday");
  });
  it("should display friday", () => {
    expect(getWeekDayFromTimeStamp(1651816312)).toEqual("Friday");
  });
  it("should display saturday", () => {
    expect(getWeekDayFromTimeStamp(1651902712)).toEqual("Saturday");
  });
  it("should display sunday", () => {
    expect(getWeekDayFromTimeStamp(1651989112)).toEqual("Sunday");
  });
});
