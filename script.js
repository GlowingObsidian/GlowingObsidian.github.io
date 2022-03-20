const names = [
  [0, "Undefined"],
  [1, "Ashish"],
  [2, "Debjit"],
  [3, "Dipro"],
  [4, "Rajat"],
  [5, "Parichay"],
  [6, "Ayush"],
  [7, "Purbadri"],
  [8, "Souvik"],
  [9, "Aranya"],
  [10, "Suvodeep"],
  [12, "Tarun"],
  [14, "Subham"],
  [11, "Jayita"],
  [13, "Aiswanik"],
  [14, "Subham"],
  [15, "Sharanya"],
  [16, "Keya"],
  [17, "Saubhagya"],
  [18, "Manjeet"],
  [19, "Kashmiri"],
  [20, "Monashree"],
  [21, "Angshu"],
  [23, "Barsha"],
  [24, "Chandni Priya"],
  [25, "Sagnik"],
  [26, "Jitvan"],
  [27, "Imran"],
  [28, "Joyeta"],
  [29, "Aninendu"],
  [30, "Sahil"],
  [32, "Sayanti"],
  [35, "Subhrajit"],
  [36, "MD Kaif"],
  [37, "Shreya"],
  [38, "Shashank"],
  [39, "Niladry"],
  [40, "Pritam"],
  [42, "Arnab"],
  [43, "Soumita"],
  [44, "Adarsh"],
  [45, "Subhra"],
  [46, "Ananya"],
  [47, "Narun"],
  [48, "Mukesh"],
  [49, "Vishal"],
  [51, "Lalit"],
  [52, "Shreya"],
  [54, "Priya"],
  [55, "MD Azad"],
  [56, "Anannya"],
  [57, "Tanmoy"],
  [58, "Suvodeep"],
  [59, "Pronit"],
  [61, "Raj Gaurav"],
  [62, "Aman"],
  [63, "Shashank"],
  [64, "Faisal"],
  [65, "Sujit"],
  [66, "Ayan"],
  [67, "Gargee"],
  [68, "Mehuli"],
  [69, "Pratik"],
  [70, "Srijeet"],
  [71, "Shreyan"],
  [72, "Jarina"],
  [73, "Gaurav"],
  [74, "Sweta"],
  [75, "Farhan"],
  [76, "Uwais"],
  [77, "Soumyajit"],
  [78, "Shilpi"],
  [79, "Sounak"],
  [80, "Mithalesh"],
  [81, "Sambit"],
  [82, "Jagadhar"],
  [83, "Vikash"],
  [84, "Prakash"],
  [85, "Rohan"],
  [86, "Soumili"],
  [94, "Mayukh"],
  [95, "Ritabrata"],
  [96, "Rohan"],
  [97, "Sayan"],
  [98, "Rankini"],
  [99, "Snigdha"],
  [100, "SK Aman"],
  [101, "Prakash"],
  [102, "Koustav"],
  [103, "Sayan"],
  [104, "Utsa"],
  [105, "Isha"],
  [106, "Utsav"],
  [107, "Srinjoy"],
  [108, "Damayanti"],
  [109, "Syed"],
  [110, "Deepshika"],
  [111, "Saswata"],
  [112, "Subhankar"],
  [113, "Shrinjon"],
  [114, "Ankita"],
  [115, "Ropam"],
  [116, "Rishav"],
  [117, "Rajarshi"],
  [118, "Asim"],
  [119, "Debmalya"],
  [121, "Trinanjan"],
  [122, "Nabarun"],
  [123, "Abhishek"],
  [124, "Soumyadeep"],
  [125, "Wasil"],
  [126, "Ali Raza"],
  [150, "Bishal"],
  [151, "Mrinmayee"],
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

const CSE1 = [
  [],
  [
    {
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem solving",
    },
    {
      time: "10:30 - 12:10",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      time: "12:30 - 1:20",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      time: "1:20 - 5:30",
      subject: "HU291(B)/ESME291(A)",
      teacher: "KDM/CG",
      books: "No Data",
      desc: "English(Practical)/Engineering Drawing Workshop",
    },
  ],
  [
    {
      time: "9:40 - 10:30",
      subject: "ESME291",
      teacher: "CG",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      time: "10:30 - 12:10",
      subject: "ESCS291(B)",
      teacher: "JN+SP",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      time: "12:30 - 2:10",
      subject: "ESCS291(B)/HU291(A)",
      teacher: "JN+SP/KDM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)/English(Practical)",
    },
    {
      time: "2:10 - 3:50",
      subject: "ESCH291(B)",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      time: "3:50 - 4:40",
      subject: "HU291(A)/ESCH291(B)",
      teacher: "KDM/AVC",
      books: "No Data",
      desc: "English(Practical)/Chemistry(Practical)",
    },
    {
      time: "4:40 - 5:30",
      subject: "HU291(A)",
      teacher: "KDM",
      books: "No Data",
      desc: "English(Practical)",
    },
  ],
  [
    {
      time: "9:40 - 10:30",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "Humanities: English",
    },
    {
      time: "10:30 - 12:10",
      subject: "ESCS291(A)",
      teacher: "JN+KM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      time: "12:30 - 2:10",
      subject: "ESCS291(A)",
      teacher: "JN+KM",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)",
    },
    {
      time: "2:10 - 5:30",
      subject: "CH291(A)",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
  ],
  [
    {
      time: "9:40 - 11:20",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      time: "11:20 - 12:10",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "1:20 - 3:00",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "3:00 - 4:40",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
  ],
  [
    {
      time: "9:40 - 10:30",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      time: "10:30 - 11:20",
      subject: "BSM2O1",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "11:20 - 12:10",
      subject: "ESCS201",
      teacher: "JN",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "KSR",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "1:20 - 5:30",
      subject: "ESME291(B)",
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
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for problem solving",
    },
    {
      time: "10:30 - 12:10",
      subject: "ESCS291(C)",
      teacher: "RKY+SP",
      books: "No Data",
      desc: "Programming for Problem solving(Practical)",
    },
    {
      time: "12:30 - 2:10",
      subject: "ESCS291(C)",
      teacher: "RKY+SP",
      books: "No Data",
      desc: "Programming for Problem solving(Practical)",
    },
    {
      time: "2:10 - 3:00",
      subject: "BSM201",
      teacher: "KSR",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "3:00 - 3:50",
      subject: "ESME291",
      teacher: "PBM",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      time: "3:50 - 5:30",
      subject: "HU291",
      teacher: "KDM",
      books: "No Data",
      desc: "English(Practical)",
    },
  ],
  [
    {
      time: "9:40 - 10:30",
      subject: "CH201",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      time: "10:30 - 12:10",
      subject: "ESCH291(E)",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      time: "12:30 - 1:20",
      subject: "ESCH291(E)",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry(Practical)",
    },
    {
      time: "1:20 - 2:10",
      subject: "ESME291(C)/ESCH291(E)",
      teacher: "MB/RB",
      books: "No Data",
      desc: "Engineering Drawing Worskhop/Chemistry(Practical)",
    },
    {
      time: "2:10 - 4:40",
      subject: "ESCS291(E)/ESCS291(D)/ESME291(C)",
      teacher: "SK+KM/RKY+SC2/MB",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)/Programming for Problem Solving(Practical)/Engineering Drawing Workshop",
    },
    {
      time: "4:40 - 5:30",
      subject: "ESCS291(E)/ESCS291(D)",
      teacher: "SK+KM/RKY+SC2",
      books: "No Data",
      desc: "Programming for Problem Solving(Practical)/Programming for Problem Solving(Practical)",
    },
  ],
  [
    {
      time: "9:40 - 10:30",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      time: "10:30 - 11:20",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      time: "11:20 - 12:10",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "1:20 - 2:10",
      subject: "ESME291(D)",
      teacher: "PBM",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      time: "2:10 - 5:30",
      subject: "ESME291(D)",
      teacher: "PBM",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
  ],
  [
    {
      time: "9:40 - 11:20",
      subject: "CH201",
      teacher: "RB",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      time: "11:20 - 12:10",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TRC",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "1:20 - 2:10",
      subject: "ESME291(E)",
      teacher: "MB",
      books: "No Data",
      desc: "Engineering Drawing Workshop",
    },
    {
      time: "2:10 - 4:40",
      subject: "ESME291(E)/ESCH291(D)",
      teacher: "MB/AVC",
      books: "No Data",
      desc: "Engineering Drawing Workshop/Chemistry(Practical)",
    },
    {
      time: "4:40 - 5:30",
      subject: "ESCH291(D)",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry Practical",
    },
  ],
  [
    {
      time: "9:40 - 11:20",
      subject: "ESCS201",
      teacher: "RKY",
      books: "No Data",
      desc: "Programming for Problem Solving",
    },
    {
      time: "11:20 - 12:10",
      subject: "CH201",
      teacher: "AVC",
      books: "No Data",
      desc: "Chemistry",
    },
    {
      time: "12:30 - 1:20",
      subject: "BSM201",
      teacher: "TJ",
      books: "No Data",
      desc: "Mathematics",
    },
    {
      time: "1:20 - 2:10",
      subject: "HU201",
      teacher: "PB",
      books: "No Data",
      desc: "English",
    },
    {
      time: "2:10 - 3:50",
      subject: "ESCH291(C)/HU291(D)",
      teacher: "JMG/KDM",
      books: "No Data",
      desc: "Chemistry Practical/English Practical",
    },
    {
      time: "3:50 - 5:30",
      subject: "ESCH291(C)/HU291(E)",
      teacher: "JMG/KDM",
      books: "No Data",
      desc: "Chemistry Practical/English Practical",
    },
  ],
  [],
];

document.getElementById("main").style.display = "none";

var rollno = 0;

function submit() {
  rollno = document.getElementById("rollno").value;
  if (isNaN(rollno) || parseInt(rollno) === 0) {
    alert("Please enter only valid numbers!");
  } else {
    rollno = parseInt(rollno);
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    main(getUID(rollno), 0);
  }
}

function getUID(rollno) {
  for (var i = 0; i < names.length; i++) {
    if (names[i][0] === rollno) {
      return i;
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
  main(getUID(rollno), dayOfTheWeek);
}

function prevday() {
  if (dayOfTheWeek == 0) {
    dayOfTheWeek = 6;
  } else {
    dayOfTheWeek -= 1;
  }
  main(getUID(rollno), dayOfTheWeek);
}

var dayOfTheWeek = 0;

function main(uid, dayDefine) {
  var hr = new Date().getHours();
  if (dayDefine === 0) {
    dayOfTheWeek = new Date().getDay();
  }
  var greet = names[uid][1];
  var section = names[uid][0] % 2 != 0 ? "CSE 1" : "CSE 2";

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
  ).innerHTML = `Good ${timeOfDay}, ${greet}.`;
  document.getElementById(
    "section"
  ).innerHTML = `The 2nd Semester routine of ${section} for ${day[dayOfTheWeek]}.`;

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
        document.getElementById("buttons").innerHTML =
          document.getElementById("buttons").innerHTML +
          `<button class="collapsible" id=but${i}>${CSE1[dayOfTheWeek][i].time}<h3>${CSE1[dayOfTheWeek][i].subject}</h3></button><div class="content"><div><p id="classData0">Teacher: ${CSE1[dayOfTheWeek][i].teacher}<p>Books: ${CSE1[dayOfTheWeek][i].books}</p><p>Description: ${CSE1[dayOfTheWeek][i].desc}<p/></p></div></div>`;
        collapse();
      }
    }
  } else {
    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
      document.getElementById("buttons").innerHTML =
        '<div class="holiday"><p style="text-align: center; margin-top: 50px; color: white; font-size: 30px;">Woohoo! No classes!</p><p><img src="satsun.png" alt="" style="width: 300px; height: 300px; position: relative;"></p></div>';
    } else {
      for (var i = 0; i < CSE2[dayOfTheWeek].length; i++) {
        document.getElementById("buttons").innerHTML =
          document.getElementById("buttons").innerHTML +
          `<button class="collapsible" id=but${i}>${CSE2[dayOfTheWeek][i].time}<h3>${CSE2[dayOfTheWeek][i].subject}</h3></button><div class="content"><div><p id="classData0">Teacher: ${CSE2[dayOfTheWeek][i].teacher}<p>Books: ${CSE2[dayOfTheWeek][i].books}</p><p>Description: ${CSE2[dayOfTheWeek][i].desc}<p/></p></div></div>`;
        collapse();
      }
    }
  }
}
