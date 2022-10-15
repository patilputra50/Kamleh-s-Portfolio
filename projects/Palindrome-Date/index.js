//-----------------start----------------------

// taking variable

let dateinput = document.querySelector("#date");

let check = document.querySelector("#check");

let one= document.querySelector("#one")
let two= document.querySelector("#two")
let three=document.querySelector("#three")
let four= document.querySelector("#four")

let datevalue = -1;
let date;

let bool=false;
let futureType;
let pastType;

dateinput.addEventListener("input", function Date() {
  datevalue = dateinput.value;
  console.log("datevalue: ", datevalue);
});


check.addEventListener("click", function checking() {

  futureDayCount=0;
 pastDayCount=0;

  

  // datevalue=dateinput.value   why not only this

  if (datevalue === -1) {
    alert("Please fill birth date first");
    return;
  }

  date = {
    day: datevalue.slice(8, 10),
    month: datevalue.slice(5, 7),
    year: datevalue.slice(0, 4),
  };

  isPalindrome(date);
});

//-------------------// Logic Part-----------------------

// Global Variables

let futureDayCount;
let pastDayCount ;

let pastDay;
let pastCurrentMonth;
let pastCurrentYear;

let monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// -----------------------------------------------

// String Date in to Number Date  // not working
function stringToNumber(date) {
  return {
    day: Number(date.day),
    month: Number(date.month),
    year: Number(date.year),
    // year:String(date.year).padStart(4,'0'),
  };
}

//-------------------------------------------

// first parent -> first child  function called,  returned correct date format          2.
function getCorrectDateFormat(date) {
  let dateobject = { day: "", month: "", year: "" };

  // first way
  dateobject.day = String(date.day).padStart(2, "0");
  dateobject.month = String(date.month).padStart(2, "0");
  dateobject.year = String(date.year).padStart(2, "0");

  // second way

  /*
  if (date.day < 10) {
    dateobject.day = "0" + date.day;
  } else if(date.day>9){
   // console.log("type  ",date.day)
    dateobject.day = date.day.toString();
  }

  if (date.month < 10) {
    dateobject.month = "0" + date.month;
  } else {
    dateobject.month = date.month.toString();
  }

  dateobject.year = date.year.toString();

  */
  return dateobject;
}

//--------------------------------------------------


// first  parent function called,  returned array of dates                                                           1.
function getAllDateFormat(date) {
  let rightDate = getCorrectDateFormat(date);

  // all date formats
  return [
    {
      dateNumber: rightDate.day + rightDate.month + rightDate.year,
      type: "DD-MM-YYYY",
    },

    {
      dateNumber: rightDate.month + rightDate.day + rightDate.year,
      type: "MM-DD-YYYY",
    },

    {
      dateNumber: rightDate.year + rightDate.month + rightDate.day,
      type: "YYYY-MM-DD",
    },

    {
      dateNumber: rightDate.day + rightDate.month + rightDate.year.slice(-2),
      type: "DD-MM-YY",
    },

    {
      dateNumber: rightDate.month + rightDate.day + rightDate.year.slice(-2),
      type: "MM-DD-YY",
    },

    {
      dateNumber: rightDate.year.slice(-2) + rightDate.month + rightDate.day,
      type: "YY-MM-DD",
    },
  ];
}


//---------------------------------------------------


// second parent function -> child function called, returned reversed date                                                             4.
function reversed(str) {
  return str.toString().split("").reverse().join("");
}


//----------------------------------------


// second parent function called,  if not palindrome returned true or false                                                        3.
function checkEachDateFormat(arrayDate) {
  let n = arrayDate.length;
  let flag = false;

  for (let i = 0; i < n; i++) {
    if (arrayDate[i].dateNumber === reversed(arrayDate[i].dateNumber)) {

 
     // document.querySelector("#eleven").textcontent="type "+arrayDate[i].type
     if(bool===false){
      futureType=arrayDate[i].type
      bool=true;
     }

     if(bool){
      pastType=arrayDate[i].type
      bool=false;
     }

      console.log(
        "\n ---  Date format type and Date    --- \n",
        "Type: ",
        arrayDate[i].type,
        "    ",
        "Date: ",
        arrayDate[i].dateNumber,
        "\n"
      );

      return !flag;
    }
  }
  return flag;
}


//------------------------------------------------


// Main function
function isPalindrome(data) {
  console.log("\n Date: ", date);

  // first part checking palindrome
  if (checkEachDateFormat(getAllDateFormat(data))) {

    document.querySelector("#one").textContent="Hurrah! Palindrome 🤩"
    console.log("\nHurrah! Palindrome 🤩\n");
    return;

  } else {
    document.querySelector("#one").textContent="Oh, no!, Not a Palindrome 😌"

    console.log(
      "\nOh, no!, Not a Palindrome 😌\n",
      "-------------------------------------\n"
    );
     
    //document.querySelector("#two").textContent="   --   Nearest Palindrome Date  --"

    console.log("   --   Nearest Palindrome Date  --", "\n");

    //document.querySelector("#three").textContent="Yay! Found Next Future Palindrome Date."

    console.log("Yay! Found Next Future Palindrome Date.\n");

    // second part finding palindrome date

    // future palindrome
    let futurePalindromeDate = getFuturePalindromeDate(data);

    //document.querySelector("#four").textContent="Future Palindrome Date is: ", futurePalindromeDate

    console.log("Future Palindrome Date is: ", futurePalindromeDate, "\n");

    // past palindrome

    //document.querySelector("#five").textContent="Yay! Found Next Past Palindrome Date."

    console.log("Yay! Found Next Past Palindrome Date.\n");

    let pastPalindromeDate = getPastPalindromeDate(data);

   //document.querySelector("#six").textContent ="Past Palindrome Date is:  ", pastPalindromeDate

    console.log("\nPast Palindrome Date is: ", pastPalindromeDate, "\n");

    // nearest palindrome

    //document.querySelector("#seven").textContent ="Total Future days: ", futureDayCount

    //document.querySelector("#eight").textContent ="Total Past days: ", pastDayCount

    console.log("Total Future days: ", futureDayCount);
    console.log("Total Past days: ", pastDayCount);

    if (futureDayCount > pastDayCount) {

      document.querySelector("#nine").textContent ="Nearest palindrome Date is:  "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+pastDayCount+" days in past    "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+"       Date format:"+'\xa0\xa0\xa0\xa0'+  pastType

      console.log(
        "Nearest palindrome date is:   "+
        pastDayCount+
        "   days in past"
      );

      document.querySelector("#ten").textContent ="Nearest palindrome date is: "+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'  +"day:"+pastPalindromeDate.day+`\xa0\xa0\xa0`+"month:"+ pastPalindromeDate.month+`\xa0\xa0\xa0`+"year " +pastPalindromeDate.year

      console.log("\nNearest Palindrome date is: ", pastPalindromeDate, "\n");
    } else {

      document.querySelector("#nine").textContent ="Nearest palindrome date is: "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+futureDayCount+" days in future   "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+"  Date format:"+'\xa0\xa0\xa0\xa0'+ futureType


      console.log(
        "Nearest palindrome date is: ",
        futureDayCount,
        " days in future\n"
      );

      document.querySelector("#ten").textContent ="Nearest Palindrome Date is:"+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+" day:"+futurePalindromeDate.day+`\xa0\xa0\xa0`+"month:"+futurePalindromeDate.month+`\xa0\xa0\xa0`+"year:"+futurePalindromeDate.year

      console.log("Nearest Palindrome Date is: "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ futurePalindromeDate);
    }
  }
}


//------------------------------------------------



// Third parent-> child function called, returned NEXT DATE                                                          6.
function getFutureNextDate(date) {
  let futureDay = date.day + 1;
  let currentMonth = date.month;
  let currentYear = date.year;

  let monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Leap year case
  if (monthArray[currentMonth - 1] === 2 && futureDay === 29) {
    if (
      currentYear % 400 === 0 ||
      currentYear % 100 === 0 ||
      currentYear % 4 === 0
    ) {
      currentMonth = 3;
      futureDay = 1;
    }
  }
  // Normal case
  else if (futureDay > monthArray[currentMonth - 1]) {
    futureDay = 1;
    currentMonth++;

    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
  }

  date = { day: futureDay, month: currentMonth, year: currentYear };
  return date;
}


//---------------------------------------------------


// Third a parent function called, returned palindrome date                  5.
function getFuturePalindromeDate(date) {
  let nextDate = date;
// futureDayCount=0;
  while (true) {
    futureDayCount++;

    nextDate = getFutureNextDate(nextDate);

    if (checkEachDateFormat(getAllDateFormat(nextDate))) {
      return nextDate;
    }
  }
}

// ---------------------------------------

//  next past day

function getPastNextDate(date) {
  if (date.day === 1) {
    pastDay = -1;
  } else {
    pastDay = date.day - 1;
  }

  pastCurrentMonth = date.month;
  pastCurrentYear = date.year;

  // Leap year case

  if (
    pastCurrentYear % 400 === 0 ||
    pastCurrentYear % 100 === 0 ||
    pastCurrentYear % 4 === 0
  ) {
    if (monthArray[pastCurrentMonth - 1] === 3 && pastDay === -1) {
      pastCurrentMonth = 2;
      pastDay = 29;
    }
  }

  // Normal case
  if (pastDay === -1) {
    if (pastCurrentMonth === 1) {
      pastCurrentMonth = 12;
      pastDay = 31;
      pastCurrentYear--;
    } else {
      pastCurrentMonth--;
      pastDay = monthArray[pastCurrentMonth - 1];
    }
  }

  date = { day: pastDay, month: pastCurrentMonth, year: pastCurrentYear };
  return date;
}


//----------------------------------------------------


// getting past palindrome date
function getPastPalindromeDate(date) {
  let pastdate = date;
  // pastDayCount=0;
  while (true) {
    pastDayCount++;

    pastdate = getPastNextDate(pastdate);

    pastdate = {
      day:Number(pastdate.day),
      month: pastdate.month,
      year: pastdate.year,
    };

    if (checkEachDateFormat(getAllDateFormat(pastdate))) {
      return pastdate;
    }
  }
}
