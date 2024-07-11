import { formatDateTime } from "../utils";

describe("formatDateTime", () => {
  it("should return the correct date, time, and day for a given ISO string in en-US locale", () => {
    const result = formatDateTime("2024-07-10T16:56:43-04:00");
    expect(result).toEqual({
      date: "07/11/2024",
      time: "02:26:43",
      day: "Thursday",
    });
  });

  it("should handle different time zones correctly", () => {
    const result = formatDateTime("2024-07-10T16:56:43+02:00");
    expect(result).toEqual({
      date: "07/10/2024",
      time: "20:26:43",
      day: "Wednesday",
    });
  });

  it("should handle different locales correctly", () => {
    const result = formatDateTime("2024-07-10T16:56:43-04:00", "en-GB");
    expect(result).toEqual({
      date: "11/07/2024",
      time: "02:26:43",
      day: "Thursday",
    });
  });

  it("should return invalid date for invalid ISO string", () => {
    const result = formatDateTime("invalid-date");
    expect(result).toEqual({
      date: "Invalid Date",
      time: "Invalid Date",
      day: "Invalid Date",
    });
  });
});
