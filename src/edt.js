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

var c1 = new Course("Graphs in machine learning", [" M. VALKO"], [])
var s1 = new Schedule(new Date("2017-10-02T11:00:00"), new Date("2017-10-02T13:00:00"), "Salle Condorcet")
var s2 = new Schedule(new Date("2017-10-09T11:00:00"), new Date("2017-10-09T13:00:00"), "Salle Condorcet")

c1.addSchedule(s1)
c1.addSchedule(s2)

console.log(c1)

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


function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

function dateToString(date) {
  return date.toISOString().replace(/-/g,"").replace(/:/g,"").slice(0,15)
}

function courseToIcs(course) {
  var courseExport = ""
  for (i = 0; i < course.scheduleList.length; i++) {
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


// var testCal = "\
// \n\
// BEGIN:VEVENT\n\
// UID:79fbdc92ef6a5875be24381bd923ed8a\n\
// SUMMARY:[Test] Musculation\n\
// DTSTART;TZID=Europe/Paris:20170907T180000\n\
// DTEND;TZID=Europe/Paris:20170907T215500\n\
// DESCRIPTION:Pratique autonome\n\
// LOCATION:Gymnase\n\
// END:VEVENT\n\\"

var CalendarToDownload = initCalendarExport + courseToIcs(c1)

download(CalendarToDownload, 'myfilename3.ics', 'text/plain')
