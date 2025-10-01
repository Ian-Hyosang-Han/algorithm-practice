function solution(a, b) {
    
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // February has 29 days in a leap year
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

    let totalDay = 0;

    // Sum all days from January to the month before (a - 1)
    for (let month = 0; month < a - 1; month++) {
        totalDay += daysInMonth[month];
    }

    // Add the number of days passed in the current month
    totalDay += b - 1;

    // Jan 1, 2016 was Friday → index 5 in daysOfWeek
    const dayIndex = (totalDay + 5) % 7;

    return daysOfWeek[dayIndex];
}

console.log(solution(5, 24)); // "TUE"
console.log(solution(1, 1));  // "FRI" (Jan 01 2016)
console.log(solution(12, 25)); // "SUN"

/* Step-by-step Breakdown:

Know the reference date:
January 1, 2016 was a Friday.

This means the weekday index starts at 5 (based on: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']).

Count the number of days passed from January 1st to May 24th.

Calculate total days from January to April:
January → 31 days
February → 29 days (leap year)
March → 31 days
April → 30 days
Total for Jan–Apr = 31 + 29 + 31 + 30 = 121 days

Add the days passed in May:
May 24th means 23 full days have passed (don’t count the 24th itself if calculating "days since Jan 1").
So: 121 + 23 = 144 total days since Jan 1

Add the reference weekday index (Jan 1 = Friday = 5):
144 + 5 = 149

Get the weekday index by modulo 7:
149 % 7 = 2

Look up weekday from index:
['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][2] = 'TUE' */



/* Better way to make, using Date function
function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // JS start month from 0, so a - 1
    const date = new Date(2016, a - 1, b);
    
    const dayIndex = date.getDay(); // 0: Sun, 1: Mon, ...
    
    return days[dayIndex];
}
*/