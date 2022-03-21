const names = [
  [0, "Undefined", ""],
  [1, "Ashish", ""],
  [2, "Debjit", ""],
  [3, "Dipro", ""],
  [4, "Rajat", ""],
  [5, "Parichay", "V"],
  [6, "Ayush", "V"],
  [7, "Purbadri", ""],
  [8, "Souvik", ""],
  [9, "Aranya", ""],
  [10, "Suvodeep", ""],
  [11, "Jayita", "V"],
  [12, "Tarun", ""],
  [13, "Aiswanik", "V"],
  [14, "Subham", ""],
  [15, "Sharanya", ""],
  [16, "Keya", ""],
  [17, "Saubhagya", ""],
  [18, "Manjeet", ""],
  [19, "Kashmiri", ""],
  [20, "Monashree", ""],
  [21, "Angshu", ""],
  [23, "Barsha", "V"],
  [24, "Chandni Priya", ""],
  [25, "Sagnik", ""],
  [26, "Jitvan", ""],
  [27, "Imran", "V"],
  [28, "Joyeta", ""],
  [29, "Aninendu", ""],
  [30, "Sahil", ""],
  [32, "Sayanti", "V"],
  [35, "Subhrajit", ""],
  [36, "MD Kaif", ""],
  [37, "Shreya", ""],
  [38, "Shashank", ""],
  [39, "Niladry", ""],
  [40, "Pritam", ""],
  [42, "Arnab", ""],
  [43, "Soumita", ""],
  [44, "Adarsh", ""],
  [45, "Subhra", ""],
  [46, "Ananya", ""],
  [47, "Narun", ""],
  [48, "Mukesh", ""],
  [49, "Vishal", ""],
  [51, "Lalit", ""],
  [52, "Shreya", ""],
  [54, "Priya", ""],
  [55, "MD Azad", ""],
  [56, "Anannya", ""],
  [57, "Tanmoy", ""],
  [58, "Suvodeep", ""],
  [59, "Pronit", "V"],
  [61, "Raj Gaurav", ""],
  [62, "Aman", ""],
  [63, "Shashank", ""],
  [64, "Faisal", ""],
  [65, "Sujit", ""],
  [66, "Ayan", ""],
  [67, "Gargee", ""],
  [68, "Mehuli", ""],
  [69, "Pratik", ""],
  [70, "Srijeet"],
  [71, "Shreyan", "V"],
  [72, "Jarina", ""],
  [73, "Gaurav", ""],
  [74, "Sweta", ""],
  [75, "Farhan", ""],
  [76, "Uwais", ""],
  [77, "Soumyajit", ""],
  [78, "Shilpi", ""],
  [79, "Sounak", ""],
  [80, "Mithalesh", ""],
  [81, "Sambit", ""],
  [82, "Jagadhar", ""],
  [83, "Vikash", ""],
  [84, "Prakash", ""],
  [85, "Rohan", ""],
  [86, "Soumili", ""],
  [89, "Manash", ""],
  [91, "Risha", ""],
  [94, "Mayukh", ""],
  [95, "Ritabrata", ""],
  [96, "Rohan", ""],
  [97, "Sayan", ""],
  [98, "Rankini", ""],
  [99, "Snigdha", ""],
  [100, "SK Aman", ""],
  [101, "Prakash", ""],
  [102, "Koustav", ""],
  [103, "Sayan", ""],
  [104, "Utsa", ""],
  [105, "Isha", "V"],
  [106, "Utsav", ""],
  [107, "Srinjoy", ""],
  [108, "Damayanti", ""],
  [109, "Syed", ""],
  [110, "Deepshika", ""],
  [111, "Saswata", ""],
  [112, "Subhankar", ""],
  [113, "Shrinjon", ""],
  [114, "Ankita", ""],
  [115, "Ropam", "V"],
  [116, "Rishav", ""],
  [117, "Rajarshi", ""],
  [118, "Asim", ""],
  [119, "Debmalya", ""],
  [121, "Trinanjan", ""],
  [122, "Nabarun", "V"],
  [123, "Abhishek", ""],
  [124, "Soumyadeep", "V"],
  [125, "Wasil", ""],
  [126, "Ali Raza", ""],
  [128, "Ritwika", ""],
  [150, "Bishal", ""],
  [151, "Mrinmayee", ""],
  [62, "Ayush", "F"],
  [63, "Shivanjan", "VF"],
  [64, "Raj", "F"],
  [65, "Atul", "F"],
];

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const verified =
  '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>';

document.getElementById("main").style.display = "none";

var rollno = 0;
var isFIT = false;

function submit() {
  rollno = document.getElementById("rollno").value;
  isFIT = document.getElementById("isFIT").checked;

  if (isNaN(rollno) || parseInt(rollno) === 0) {
    alert("Please enter only valid numbers!");
  } else {
    rollno = parseInt(rollno);
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    main(getUID(rollno, isFIT), 0);
  }
}

function getUID(rollno, FIT) {
  for (var i = 0; i < names.length; i++) {
    if (names[i][0] === rollno) {
      if (FIT === true) {
        if (names[i][2].charAt(0) === "F" || names[i][2].charAt(1) === "F") {
          return i;
        }
      } else {
        return i;
      }
    }
  }
  return 0;
}

function nextday() {
  if (dayOfTheWeek == 6) {
    dayOfTheWeek = 0;
  } else {
    dayOfTheWeek += 1;
  }
  main(getUID(rollno, isFIT), 1);
}

function prevday() {
  if (dayOfTheWeek == 0) {
    dayOfTheWeek = 6;
  } else {
    dayOfTheWeek -= 1;
  }
  main(getUID(rollno, isFIT), 1);
}

var dayOfTheWeek = 0;

function main(uid, dayDefine) {
  var hr = new Date().getHours();
  if (dayDefine === 0) {
    dayOfTheWeek = new Date().getDay();
  }
  var greet = names[uid][1];
  var section = isFIT
    ? "CSE 2"
    : rollno >= 1 && rollno <= 72
    ? "CSE 1"
    : "CSE 2";
  var group = "";

  if (isFIT) {
    group = "E";
  } else {
    if (section === "CSE 1") {
      if (rollno >= 1 && rollno <= 37) {
        group = "A";
      } else {
        group = "B";
      }
    } else {
      if (rollno >= 73 && rollno <= 100) {
        group = "C";
      } else if (rollno >= 101 && rollno <= 128) {
        group = "D";
      } else {
        group = "E";
      }
    }
  }

  var timeOfDay = "";
  if (hr >= 4 && hr < 12) {
    timeOfDay = "morning";
  } else if (hr >= 12 && hr < 17) {
    timeOfDay = "afternoon";
  } else if (hr >= 17 || hr < 4) {
    timeOfDay = "evening";
  }

  document.getElementById("greeting").innerHTML = "";
  document.getElementById("section").innerHTML = "";
  document.getElementById("buttons").innerHTML = "";

  document.getElementById(
    "greeting"
  ).innerHTML = `Good ${timeOfDay}, ${greet} ${
    names[uid][2] === "V" || names[uid][2].charAt(0) === "V" ? verified : "."
  }`;
  document.getElementById(
    "section"
  ).innerHTML = `The 2nd Semester routine of ${section} Group ${group} for ${day[dayOfTheWeek]}.`;

  function collapse() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  if (section === "CSE 1") {
    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
      document.getElementById("buttons").innerHTML =
        '<div class="holiday"><p style="text-align: center; margin-top: 50px; color: white; font-size: 30px;">Woohoo! No classes!</p><p><img src="satsun.png" alt="" style="width: 300px; height: 300px; position: relative;"></p></div>';
    } else {
      for (var i = 0; i < CSE1[dayOfTheWeek].length; i++) {
        if (
          CSE1[dayOfTheWeek][i].group === group ||
          CSE1[dayOfTheWeek][i].group === "all"
        ) {
          document.getElementById("buttons").innerHTML =
            document.getElementById("buttons").innerHTML +
            `<button class="collapsible" id=but${i}>${CSE1[dayOfTheWeek][i].time}<h3>${CSE1[dayOfTheWeek][i].subject}</h3></button><div class="content"><div><p id="classData0">Teacher: ${CSE1[dayOfTheWeek][i].teacher}<p>Books: ${CSE1[dayOfTheWeek][i].books}</p><p>Description: ${CSE1[dayOfTheWeek][i].desc}<p/></p></div></div>`;
          collapse();
        }
      }
    }
  } else {
    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
      document.getElementById("buttons").innerHTML =
        '<div class="holiday"><p style="text-align: center; margin-top: 50px; color: white; font-size: 30px;">Woohoo! No classes!</p><p><img src="satsun.png" alt="" style="width: 300px; height: 300px; position: relative;"></p></div>';
    } else {
      for (var i = 0; i < CSE2[dayOfTheWeek].length; i++) {
        if (
          CSE2[dayOfTheWeek][i].group === group ||
          CSE2[dayOfTheWeek][i].group === "all"
        ) {
          document.getElementById("buttons").innerHTML =
            document.getElementById("buttons").innerHTML +
            `<button class="collapsible" id=but${i}>${CSE2[dayOfTheWeek][i].time}<h3>${CSE2[dayOfTheWeek][i].subject}</h3></button><div class="content"><div><p id="classData0">Teacher: ${CSE2[dayOfTheWeek][i].teacher}<p>Books: ${CSE2[dayOfTheWeek][i].books}</p><p>Description: ${CSE2[dayOfTheWeek][i].desc}<p/></p></div></div>`;
          collapse();
        }
      }
    }
  }
}

const CSE1 = [
  [],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem solving",
    },
    {
      group: "all",
      time: "10:30 - 12:10",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      group: "all",
      time: "12:30 - 1:20",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "A",
      time: "1:20 - 5:30",
      subject: "ESME291",
      teacher: "KDM/CG",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      group: "B",
      time: "1:20 - 5:30",
      subject: "HU291",
      teacher: "KDM/CG",
      books: "No Data",
      desc: "Language Laboratory",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "ESME291",
      teacher: "CG",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      group: "B",
      time: "10:30 - 12:10",
      subject: "ESCS291",
      teacher: "JN+SP",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      group: "A",
      time: "12:30 - 2:10",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "Language Laboratory",
    },
    {
      group: "B",
      time: "12:30 - 2:10",
      subject: "ESCS291",
      teacher: "JN+SP",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      group: "B",
      time: "2:10 - 4:40",
      subject: "ESCH291",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      group: "A",
      time: "3:50 - 5:30",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "Language Laboratory",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "A",
      time: "10:30 - 12:10",
      subject: "ESCS291",
      teacher: "JN+KM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      group: "A",
      time: "12:30 - 2:10",
      subject: "ESCS291",
      teacher: "JN+KM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      group: "A",
      time: "2:10 - 5:30",
      subject: "CH291",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 11:20",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      group: "all",
      time: "11:20 - 12:10",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "1:20 - 3:00",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "3:00 - 4:40",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "all",
      time: "10:30 - 11:20",
      subject: "BSM2O1",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "11:20 - 12:10",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      group: "all",
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "KSR",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "B",
      time: "1:20 - 5:30",
      subject: "ESME291",
      teacher: "CG",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
  ],
  [],
];

const CSE2 = [
  [],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for problem solving",
    },
    {
      group: "C",
      time: "10:30 - 12:10",
      subject: "ESCS291",
      teacher: "RKY+SP",
      books: "No Data",
      desc: "Programming for Problem solving(Practical)",
    },
    {
      group: "C",
      time: "12:30 - 2:10",
      subject: "ESCS291",
      teacher: "RKY+SP",
      books: "No Data",
      desc: "Programming for Problem solving(Practical)",
    },
    {
      group: "all",
      time: "2:10 - 3:00",
      subject: "BSM201",
      teacher: "KSR",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "3:00 - 3:50",
      subject: "ESME291",
      teacher: "PBM",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      group: "C",
      time: "3:50 - 5:30",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "Language Laboratory",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "CH201",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      group: "E",
      time: "10:30 - 12:10",
      subject: "ESCH291",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      group: "E",
      time: "12:30 - 2:10",
      subject: "ESCH291",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      group: "C",
      time: "1:20 - 4:40",
      subject: "ESME291",
      teacher: "MB",
      books: "No Data",
      desc: "Engineering Drawing Worskhop",
    },
    {
      group: "D",
      time: "2:10 - 5:30",
      subject: "ESCS291",
      teacher: "RKY+SC2",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      group: "E",
      time: "2:10 - 5:30",
      subject: "ESCS291",
      teacher: "SK+KM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      group: "all",
      time: "10:30 - 11:20",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "all",
      time: "11:20 - 12:10",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "D",
      time: "1:20 - 5:30",
      subject: "ESME291",
      teacher: "PBM",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 11:20",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      group: "all",
      time: "11:20 - 12:10",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "all",
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "E",
      time: "1:20 - 4:40",
      subject: "ESME291",
      teacher: "MB",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      group: "D",
      time: "2:10 - 5:30",
      subject: "ESCH291",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
  ],
  [
    {
      group: "all",
      time: "9:40 - 11:20",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      group: "all",
      time: "11:20 - 12:10",
      subject: "CH201",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      group: "all",
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      group: "all",
      time: "1:20 - 2:10",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      group: "C",
      time: "2:10 - 5:30",
      subject: "ESCH291",
      teacher: "JMG",
      books: "No Data",
      desc: "Chemistry Practical",
    },
    {
      group: "D",
      time: "2:10 - 3:50",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "Language Laboratory",
    },
    {
      group: "E",
      time: "3:50 - 5:30",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "Language Laboratory",
    },
  ],
  [],
];
