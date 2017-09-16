class Course {
  constructor(name, prof, scheduleList) {
    this.name = name;
    this.prof = prof;
    this.scheduleList = scheduleList;
  }

  addSchedule(schedule) {
    (this.scheduleList).push(schedule)
  }
}

class Schedule {
  constructor(beginTime, endTime, location) {
    this.beginTime = beginTime;
    this.endTime = endTime;
    this.location = location;
  }
}

var c1 = new Course("Topological data analysis for imaging and machine learning", [" J. TIERNY", " F. CHAZAL"], [])
var c2 = new Course("Introduction to medical image analysis", [" H. DELINGETTE", " X. PENNEC"], [])
var c3 = new Course("Introduction à l'imagerie numérique", [" J. DELON"," Y. GOUSSEAU"], [])
var c4 = new Course("Optimization and features of optimal solutions. Applications to imaging", [" S. LADJAL", " M. NIKOLOVA"], [])
var c5 = new Course("Object recognition and computer vision", ["I. LAPTEV", " J. PONCE", " C. SCHMID", " J. SIVIC"], [])
var c6 = new Course("Sub-pixel image processing", [" L. MOISAN"], [])
var c7 = new Course("3D computer vision", [" R. MARLET", " P. MONASSE", " M. AUBRY"], [])
var c8 = new Course("The PDEs of image processing and their surprising applications", [" J.-M. MOREL"], [])
var c9 = new Course("Méthodes mathématiques pour les neurosciences", [" E. TANRE", "R. VELTZ"], [])
var c10 = new Course("Computational statistics", [" S. ALLASSONNIERE"], [])
var c11 = new Course("Convexe optimization and applications in machine learning", [" A. D'ASPREMONT"], [])
var c12 = new Course("Probabilistic graphical models", [" F. BACH", "G. OBOZINSKI"], [])
var c13 = new Course("Reinforcement learning", [" A. LAZARIC"], [])
var c14 = new Course("Sparsity and compressed sensing", [" G. PEYRE"], [])
var c15 = new Course("Graphs in machine learning", [" M. VALKO"], [])
var c16 = new Course("Introduction to statistical learning", [" N. VAYATIS"], [])
var c17 = new Course("Unsupervised learning: from big data to low-dimensional representations", [" R. VIDAL"], [])
var c18 = new Course("Discrete Inference and Learning", [" N.PARAGIOS", " Y.TARABALKA", " K.ALAHARI"], [])
var c19 = new Course("Lecture Group: foundations and theory of mathematics for learning & vision", [" V.Perchet"], [])

var all_courses = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19]


// var s! = new Schedule(new Date("2017-10-06T!!:!!:00"), new Date("2017-10-06T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 02/10/17
var s1 = new Schedule(new Date("2017-10-02T11:00:00"), new Date("2017-10-02T13:00:00"), "Salle Condorcet")
c15.addSchedule(s1)
var s2 = new Schedule(new Date("2017-10-02T13:30:00"), new Date("2017-10-02T16:30:00"), "Amphi Dussane ENS Ulm")
c11.addSchedule(s2)
// 03/10/17
var s3 = new Schedule(new Date("2017-10-03T08:45:00"), new Date("2017-10-03T10:45:00"), "Salle Condorcet")
c13.addSchedule(s3)
var s4 = new Schedule(new Date("2017-10-03T11:00:00"), new Date("2017-10-03T13:00:00"), "Salle Condorcet")
c16.addSchedule(s4)
var s5 = new Schedule(new Date("2017-10-03T12:45:00"), new Date("2017-10-03T15:45:00"), "Telecom Salle C49")
c7.addSchedule(s5)
var s6 = new Schedule(new Date("2017-10-03T16:15:00"), new Date("2017-10-03T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s6)
var s7 = new Schedule(new Date("2017-10-03T17:00:00"), new Date("2017-10-03T18:00:00"), "salle C103")//TODO 16-18h
c19.addSchedule(s7)
//04/10/17
var s8 = new Schedule(new Date("2017-10-04T09:00:00"), new Date("2017-10-04T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s8)
var s9 = new Schedule(new Date("2017-10-04T13:00:00"), new Date("2017-10-04T16:00:00"), "Salle C109")
c4.addSchedule(s9)
var s10 = new Schedule(new Date("2017-10-04T14:00:00"), new Date("2017-10-04T18:00:00"), "Amphi Marie Curie")
c10.addSchedule(s10)
var s11 = new Schedule(new Date("2017-10-04T13:00:00"), new Date("2017-10-04T17:00:00"), "Salle C102")
c2.addSchedule(s11)
//05/10/17
var s12 = new Schedule(new Date("2017-10-05T09:00:00"), new Date("2017-10-05T12:15:00"), "Telecom")
c3.addSchedule(s12)
var s13 = new Schedule(new Date("2017-10-05T13:30:00"), new Date("2017-10-05T18:15:00"), "Salle C103")
c6.addSchedule(s13)
//06/10/17
var s14 = new Schedule(new Date("2017-10-06T09:00:00"), new Date("2017-10-06T12:00:00"), "Salle C315")
c17.addSchedule(s14)
var s15 = new Schedule(new Date("2017-10-06T14:00:00"), new Date("2017-10-06T17:00:00"), "Salle C103")
c8.addSchedule(s15)

//#############################################################################
// DISPLAY COURSES

for (i = 0; i < all_courses.length; i++) {
  var line = "<div class=\"item\">"
  line += "<div class=\"ui checkbox\">"
  line += "<input type=\"checkbox\" id=\"" + i + "\">"
  line += "<label>" + all_courses[i].name + "</label>"
  line += "</div>"
  line += "</div>"
  $(line).appendTo($("#coursesList"));
}

//#############################################################################
// Bool logic

function notOverlap(scheduleA, scheduleB) {
  // console.log(scheduleA)
  // console.log(scheduleB)
  if (scheduleA.beginTime < scheduleB.beginTime)
  {
    return (scheduleB.beginTime > scheduleA.endTime)
  }
  else {
    return (scheduleA.beginTime > scheduleB.endTime)
  }
}

// Create an day-dict filled with the (course, schedule)
var dayDict = {}
var day = ""
for (k = 0; k < all_courses.length; k++) {
    for (i = 0; i < all_courses[k].scheduleList.length; i++) {
      day = all_courses[k].scheduleList[i].beginTime.toISOString().slice(0,10)
      if (dayDict[day] == undefined) {
        dayDict[day] = [[all_courses[k], i]]
      }
      else {
        dayDict[day].push([all_courses[k], i])
      }
    }
}

var overlap = []

var days = Object.keys(dayDict)
var schedules = []
var schedulesRest = []
for (k = 0; k < days.length; k++) {
  schedules = dayDict[days[k]]
  for (i = 0; i < schedules.length; i++) {
    schedulesRest = schedules.slice(i+1)
    for (j = 0; j < schedulesRest.length; j++) {
      scheduleA = schedules[i][0].scheduleList[schedules[i][1]]
      scheduleB = schedulesRest[j][0].scheduleList[schedulesRest[j][1]]
      if (!notOverlap(scheduleA, scheduleB))
      {
        // console.log("Overlapping!")
        overlap.push([schedules[i][0], schedulesRest[j][0]])
      }
    }
  }
}
console.log(overlap)

$('.ui .checkbox')
  .checkbox({
    onChecked: function() {
      console.log(all_courses[this.id])
    }
  })

//#############################################################################
// Export to ics file

var initCalendarExport = "\
BEGIN:VCALENDAR\n\
VERSION:2.0\n\
PRODID:JulesKzl\n\
X-WR-CALNAME:MVA\n\
BEGIN:VTIMEZONE\n\
TZID:Europe/Paris\n\
X-LIC-LOCATION:Europe/Paris\n\
BEGIN:DAYLIGHT\n\
TZOFFSETFROM:+0100\n\
TZOFFSETTO:+0200\n\
TZNAME:CEST\n\
DTSTART:19700329T020000\n\
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=3\n\
END:DAYLIGHT\n\
BEGIN:STANDARD\n\
TZOFFSETFROM:+0200\n\
TZOFFSETTO:+0100\n\
TZNAME:CET\n\
DTSTART:19701025T030000\n\
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=10\n\
END:STANDARD\n\
END:VTIMEZONE\n"

function dateToString(date) {
  return date.toISOString().replace(/-/g,"").replace(/:/g,"").slice(0,15)
}

function courseToIcs(course) {
  var courseExport = ""
  for (i = 0; i < course.scheduleList.length; i++) {
    console.log("schedule", i)
    var schedule = course.scheduleList[i]
    var scheduleExport = "\nBEGIN:VEVENT\n"
    scheduleExport += "SUMMARY:[MVA] " + course.name + "\n"
    console.log(dateToString(schedule.beginTime))
    scheduleExport += "UID:" + course.name + schedule.beginTime + "\n"
    scheduleExport += "DTSTART;TZID=Europe/Paris:" + dateToString(schedule.beginTime) + "\n"
    scheduleExport += "DTEND;TZID=Europe/Paris:" + dateToString(schedule.endTime) + "\n"
    scheduleExport += "DESCRIPTION:"+ course.prof + "\n"
    scheduleExport += "LOCATION:" + schedule.location + "\n"
    scheduleExport += "END:VEVENT\n"
    courseExport += scheduleExport
  }
  return courseExport
}


function download(courses, name, type) {
  var CalendarToDownload = initCalendarExport
  for (k = 0; k < courses.length; k++) {
    console.log(k)
    console.log(courses[k])
    CalendarToDownload += courseToIcs(courses[k])
  }
  var a = document.getElementById("a");
  var file = new Blob([CalendarToDownload], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

$("#generateIcs")
  .on('click', function (){
    download(all_courses, 'myfilename3.ics', 'text/plain')
})
