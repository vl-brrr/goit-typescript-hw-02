/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Mon = "MON",
  Tue = "TUE",
  Wed = "WED",
  Thu = "THU",
  Fri = "FRI",
  Sat = "SAT",
  Sun = "SUN",
}

function isWeekend(weekDay: WeekDays): boolean {
  if (weekDay === WeekDays.Sat || weekDay === WeekDays.Sun) {
    return true;
  }
  return false;
}
