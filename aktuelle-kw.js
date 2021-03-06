var date = new Date();

// Get thursday
// In JavaScript the Sunday has value 0 as return value of getDay() function.
// So we have to order them first ascending from Monday to Sunday
// Monday: ((1+6) % 7) = 0
// Tuesday ((2+6) % 7) = 1
// Wednesday: ((3+6) % 7) = 2
// Thursday: ((4+6) % 7) = 3
// Friday: ((5+6) % 7) = 4
// Saturday: ((6+6) % 7) = 5
// Sunday: ((0+6) % 7) = 6
// (3 - result) is necessary to get the Thursday of the current week.
// If we want to have Tuesday it would be (1-result)
var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);

// At the beginnig or end of a year the thursday could be in another year.
var yearOfThursday = currentThursday.getFullYear();

// Get first Thursday of the year
var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);

// +1 we start with week number 1
// +0.5 an easy and dirty way to round result (in combinationen with Math.floor)
var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

document.write(weekNumber);

/* for hamml: 
:javascript
    var date = new Date();
    var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
    var yearOfThursday = currentThursday.getFullYear();
    var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);
    var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);
    document.write(weekNumber);
    
        IN RUBY VIEL COOLER!
    KW
      - time = Time.new 
      = time.to_date.cweek
            
