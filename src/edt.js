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
var c20 = new Course("Advanced learning for text and graph data", [" M.VAZIRGIANNIS"], [])

var all_courses = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20]


// var s! = new Schedule(new Date("2017-10-06T!!:!!:00"), new Date("2017-10-06T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
//S1 (40)
// 02/10/17
var s1 = new Schedule(new Date("2017-10-02T11:00:00"), new Date("2017-10-02T13:00:00"), "Salle Condorcet")
c15.addSchedule(s1)
var s2 = new Schedule(new Date("2017-10-02T13:30:00"), new Date("2017-10-02T16:30:00"), "ENS Ulm Amphi Dussane")
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
var s7 = new Schedule(new Date("2017-10-03T16:00:00"), new Date("2017-10-03T18:00:00"), "salle C103")
c19.addSchedule(s7)
//04/10/17
var s8 = new Schedule(new Date("2017-10-04T09:00:00"), new Date("2017-10-04T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s8)
var s9 = new Schedule(new Date("2017-10-04T13:00:00"), new Date("2017-10-04T16:00:00"), "Salle C109")
c4.addSchedule(s9)
var s10 = new Schedule(new Date("2017-10-04T14:00:00"), new Date("2017-10-04T18:00:00"), "Amphi Marie Curie")
c10.addSchedule(s10)
var s11 = new Schedule(new Date("2017-10-04T13:30:00"), new Date("2017-10-04T17:00:00"), "Salle C102")
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

//S2 (41)
//09/10/17
var s16 = new Schedule(new Date("2017-10-09T10:15:00"), new Date("2017-10-09T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s16)
var s17 = new Schedule(new Date("2017-10-09T11:00:00"), new Date("2017-10-09T13:00:00"), "Salle Condorcet")
c15.addSchedule(s17)
var s18 = new Schedule(new Date("2017-10-09T13:30:00"), new Date("2017-10-09T16:30:00"), "ENS Ulm Amphi Dussane")
c11.addSchedule(s18)
// 10/10/17
var s19 = new Schedule(new Date("2017-10-10T08:45:00"), new Date("2017-10-10T10:45:00"), "Salle Condorcet")
c16.addSchedule(s19)
var s20 = new Schedule(new Date("2017-10-10T11:00:00"), new Date("2017-10-10T13:00:00"), "Salle C103")
c1.addSchedule(s20)
var s21 = new Schedule(new Date("2017-10-10T11:00:00"), new Date("2017-10-10T13:00:00"), "Salle Condorcet")
c13.addSchedule(s21)
var s22 = new Schedule(new Date("2017-10-10T16:15:00"), new Date("2017-10-10T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s22)
var s23 = new Schedule(new Date("2017-10-10T16:00:00"), new Date("2017-10-10T18:00:00"), "Salle C103")
c19.addSchedule(s23)
// 11/10/17
var s24 = new Schedule(new Date("2017-10-11T09:00:00"), new Date("2017-10-11T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s24)
var s25 = new Schedule(new Date("2017-10-11T13:30:00"), new Date("2017-10-11T16:30:00"), "Salle C103")
c4.addSchedule(s25)
var s26 = new Schedule(new Date("2017-10-11T13:30:00"), new Date("2017-10-11T17:00:00"), "Salle C102")
c2.addSchedule(s26)
var s27 = new Schedule(new Date("2017-10-11T14:00:00"), new Date("2017-10-11T18:00:00"), "Salle Condorcet")
c10.addSchedule(s27)
// 12/10/17
var s28 = new Schedule(new Date("2017-10-12T09:00:00"), new Date("2017-10-12T12:15:00"), "Telecom")
c3.addSchedule(s28)
var s29 = new Schedule(new Date("2017-10-12T13:30:00"), new Date("2017-10-12T18:15:00"), "Salle C103")
c6.addSchedule(s29)
// 13/10/17
var s30 = new Schedule(new Date("2017-10-13T09:00:00"), new Date("2017-10-13T12:00:00"), "Salle C315")
c17.addSchedule(s30)
var s31 = new Schedule(new Date("2017-10-13T14:00:00"), new Date("2017-10-13T17:00:00"), "Salle C103")
c8.addSchedule(s31)

//S3 (42)
// 16/10/17
var s32 = new Schedule(new Date("2017-10-16T10:15:00"), new Date("2017-10-16T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s32)
var s33 = new Schedule(new Date("2017-10-16T11:00:00"), new Date("2017-10-16T13:00:00"), "Salle Condorcet")
c15.addSchedule(s33)
var s34 = new Schedule(new Date("2017-10-16T13:30:00"), new Date("2017-10-16T16:30:00"), "ENS Ulm Amphi Dussane")
c11.addSchedule(s34)
var s35 = new Schedule(new Date("2017-10-16T13:45:00"), new Date("2017-10-16T16:45:00"), "CentraleSupelec")
c18.addSchedule(s35)
// 17/10/17
var s36 = new Schedule(new Date("2017-10-17T08:00:00"), new Date("2017-10-17T10:00:00"), "Salle Condorcet")
c16.addSchedule(s36)
var s37 = new Schedule(new Date("2017-10-17T11:00:00"), new Date("2017-10-17T13:00:00"), "Salle C109")
c1.addSchedule(s37)
var s38 = new Schedule(new Date("2017-10-17T16:15:00"), new Date("2017-10-17T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s38)
var s39 = new Schedule(new Date("2017-10-17T16:00:00"), new Date("2017-10-17T18:00:00"), "Salle C103")
c19.addSchedule(s39)
// 18/10/17
var s40 = new Schedule(new Date("2017-10-18T09:00:00"), new Date("2017-10-18T12:00:00"), "Amphi Tocqueville")
c12.addSchedule(s40)
var s41 = new Schedule(new Date("2017-10-18T13:00:00"), new Date("2017-10-18T16:00:00"), "Salle C109")
c4.addSchedule(s41)
var s42 = new Schedule(new Date("2017-10-18T13:30:00"), new Date("2017-10-18T17:00:00"), "Salle C102")
c2.addSchedule(s42)
var s43 = new Schedule(new Date("2017-10-18T14:00:00"), new Date("2017-10-18T18:00:00"), "Salle Condorcet")
c10.addSchedule(s43)
// 19/10/17
var s44 = new Schedule(new Date("2017-10-19T09:00:00"), new Date("2017-10-19T12:15:00"), "Telecom")
c3.addSchedule(s44)
var s45 = new Schedule(new Date("2017-10-19T13:30:00"), new Date("2017-10-19T18:45:00"), "Jussieu")
c9.addSchedule(s45)
var s46 = new Schedule(new Date("2017-10-19T13:30:00"), new Date("2017-10-19T18:15:00"), "Salle C103")
c6.addSchedule(s46)
// 20/10/17
var s47 = new Schedule(new Date("2017-10-20T09:00:00"), new Date("2017-10-20T12:00:00"), "Salle C315")
c17.addSchedule(s47)
var s48 = new Schedule(new Date("2017-10-20T11:00:00"), new Date("2017-10-20T13:00:00"), "Salle Condorcet")
c13.addSchedule(s48)
var s49 = new Schedule(new Date("2017-10-20T14:00:00"), new Date("2017-10-20T17:00:00"), "Salle C103")
c8.addSchedule(s49)

//S4 (43)
// var s! = new Schedule(new Date("2017-10-!!T!!:!!:00"), new Date("2017-10-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 23/10/17
var s50 = new Schedule(new Date("2017-10-23T10:15:00"), new Date("2017-10-23T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s50)
var s51 = new Schedule(new Date("2017-10-23T11:00:00"), new Date("2017-10-23T13:00:00"), "Salle Condorcet")
c15.addSchedule(s51)
var s52 = new Schedule(new Date("2017-10-23T13:30:00"), new Date("2017-10-23T16:30:00"), "ENS Ulm Amphi Jean Jaures")
c11.addSchedule(s52)
var s53 = new Schedule(new Date("2017-10-23T13:45:00"), new Date("2017-10-23T16:45:00"), "CentraleSupelec")
c18.addSchedule(s53)
// 24/10/17
var s54 = new Schedule(new Date("2017-10-24T08:45:00"), new Date("2017-10-24T10:45:00"), "Salle Condorcet")
c16.addSchedule(s54)
var s55 = new Schedule(new Date("2017-10-24T11:00:00"), new Date("2017-10-24T13:00:00"), "Salle C103")
c1.addSchedule(s55)
var s56 = new Schedule(new Date("2017-10-24T11:00:00"), new Date("2017-10-24T13:00:00"), "Salle Condorcet")
c13.addSchedule(s56)
var s57 = new Schedule(new Date("2017-10-24T16:15:00"), new Date("2017-10-24T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s57)
var s58 = new Schedule(new Date("2017-10-24T16:00:00"), new Date("2017-10-24T18:00:00"), "Salle C103")
c19.addSchedule(s58)
// 25/10/17
var s59 = new Schedule(new Date("2017-10-25T09:00:00"), new Date("2017-10-25T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s59)
var s60 = new Schedule(new Date("2017-10-25T13:30:00"), new Date("2017-10-25T16:30:00"), "Salle C103")
c4.addSchedule(s60)
var s61 = new Schedule(new Date("2017-10-25T13:30:00"), new Date("2017-10-25T17:00:00"), "Salle C102")
c2.addSchedule(s61)
var s62 = new Schedule(new Date("2017-10-25T14:00:00"), new Date("2017-10-25T18:00:00"), "Salle Condorcet")
c10.addSchedule(s62)
// 26/10/17
var s63 = new Schedule(new Date("2017-10-26T09:00:00"), new Date("2017-10-26T12:15:00"), "Telecom")
c3.addSchedule(s63)
var s64 = new Schedule(new Date("2017-10-26T13:30:00"), new Date("2017-10-26T18:45:00"), "Jussieu")
c9.addSchedule(s64)
// 27/10/17
var s65 = new Schedule(new Date("2017-10-27T14:00:00"), new Date("2017-10-27T17:00:00"), "Salle C103")
c8.addSchedule(s65)

//S5 (44)
// var s! = new Schedule(new Date("2017-10-!!T!!:!!:00"), new Date("2017-10-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 30/10/17
var s61 = new Schedule(new Date("2017-10-30T09:00:00"), new Date("2017-10-30T12:00:00"), "Salle C102")
c17.addSchedule(s61)
var s62 = new Schedule(new Date("2017-10-30T11:00:00"), new Date("2017-10-30T13:00:00"), "Salle Condorcet")
c15.addSchedule(s62)
var s63 = new Schedule(new Date("2017-10-30T13:45:00"), new Date("2017-10-30T16:45:00"), "CentraleSupelec")
c18.addSchedule(s63)
// 31/10/17
var s64 = new Schedule(new Date("2017-10-31T08:45:00"), new Date("2017-10-31T10:45:00"), "Salle Condorcet")
c16.addSchedule(s64)
var s65 = new Schedule(new Date("2017-10-31T11:00:00"), new Date("2017-10-31T13:00:00"), "Salle C109")
c1.addSchedule(s65)
var s66 = new Schedule(new Date("2017-10-31T11:00:00"), new Date("2017-10-31T13:00:00"), "Salle Condorcet")
c13.addSchedule(s66)
var s68 = new Schedule(new Date("2017-10-31T12:45:00"), new Date("2017-10-31T15:45:00"), "Telecom C48")
c7.addSchedule(s68)
var s67 = new Schedule(new Date("2017-10-31T16:15:00"), new Date("2017-10-31T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s67)
// 02/11/17
var s69 = new Schedule(new Date("2017-11-02T09:00:00"), new Date("2017-11-02T12:15:00"), "Telecom")
c3.addSchedule(s69)
var s70 = new Schedule(new Date("2017-11-02T13:30:00"), new Date("2017-11-02T18:45:00"), "Jussieu")
c9.addSchedule(s70)
// 03/11/17
var s71 = new Schedule(new Date("2017-11-03T14:00:00"), new Date("2017-11-03T17:00:00"), "Salle C103")
c8.addSchedule(s71)

//S6 (45)
// var s! = new Schedule(new Date("2017-11-!!T!!:!!:00"), new Date("2017-11-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 06/11/17
var s72 = new Schedule(new Date("2017-11-06T09:00:00"), new Date("2017-11-06T13:00:00"), "Amphi Marie Curie")
c20.addSchedule(s72)
var s73 = new Schedule(new Date("2017-11-06T10:15:00"), new Date("2017-11-06T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s73)
var s74 = new Schedule(new Date("2017-11-06T11:00:00"), new Date("2017-11-06T13:00:00"), "Salle Condorcet")
c15.addSchedule(s74)
var s75 = new Schedule(new Date("2017-11-06T13:30:00"), new Date("2017-11-06T16:30:00"), "ENS Ulm Amphi Dussane")
c11.addSchedule(s75)
var s76 = new Schedule(new Date("2017-11-06T13:45:00"), new Date("2017-11-06T16:45:00"), "CentraleSupelec")
c18.addSchedule(s76)
// 07//11/17
var s77 = new Schedule(new Date("2017-11-07T08:45:00"), new Date("2017-11-07T10:45:00"), "Salle Condorcet")
c16.addSchedule(s77)
var s78 = new Schedule(new Date("2017-11-07T11:00:00"), new Date("2017-11-07T13:00:00"), "Salle C103")
c1.addSchedule(s78)
var s79 = new Schedule(new Date("2017-11-07T11:00:00"), new Date("2017-11-07T15:00:00"), "Amphi Marie Curie")
c20.addSchedule(s79)
var s81 = new Schedule(new Date("2017-11-07T12:45:00"), new Date("2017-11-07T15:45:00"), "Telecom Amphi Grenat")
c7.addSchedule(s81)
var s82 = new Schedule(new Date("2017-11-07T16:15:00"), new Date("2017-11-07T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s82)
var s83 = new Schedule(new Date("2017-11-07T16:00:00"), new Date("2017-11-07T18:00:00"), "Salle C103")
c19.addSchedule(s83)
// 08/11/17
var s84 = new Schedule(new Date("2017-11-08T09:00:00"), new Date("2017-11-08T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s84)
var s85 = new Schedule(new Date("2017-11-08T13:30:00"), new Date("2017-11-08T16:30:00"), "Salle C103")
c4.addSchedule(s85)
var s86 = new Schedule(new Date("2017-11-08T13:30:00"), new Date("2017-11-08T17:00:00"), "Salle C102")
c2.addSchedule(s86)
// 09/11/17
var s87 = new Schedule(new Date("2017-11-09T09:00:00"), new Date("2017-11-09T12:15:00"), "Telecom")
c3.addSchedule(s87)
var s88 = new Schedule(new Date("2017-11-09T11:00:00"), new Date("2017-11-09T13:00:00"), "Salle Condorcet")
c13.addSchedule(s88)
var s89 = new Schedule(new Date("2017-11-09T13:30:00"), new Date("2017-11-09T18:45:00"), "Jussieu")
c9.addSchedule(s89)
var s90 = new Schedule(new Date("2017-11-09T13:30:00"), new Date("2017-11-09T18:15:00"), "Salle C109")
c6.addSchedule(s90)
// 10/11/17
var s92 = new Schedule(new Date("2017-11-10T09:00:00"), new Date("2017-11-10T13:00:00"), "Salle Condorcet")
c10.addSchedule(s92)
var s91 = new Schedule(new Date("2017-11-10T09:00:00"), new Date("2017-11-10T12:00:00"), "Salle C315")
c17.addSchedule(s91)
var s93 = new Schedule(new Date("2017-11-10T14:00:00"), new Date("2017-11-10T17:00:00"), "Salle C103")
c8.addSchedule(s93)

//S7(46)
// var s! = new Schedule(new Date("2017-11-!!T!!:!!:00"), new Date("2017-11-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 13/11/17
var s95 = new Schedule(new Date("2017-11-13T10:15:00"), new Date("2017-11-13T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s95)
var s96 = new Schedule(new Date("2017-11-13T11:00:00"), new Date("2017-11-13T13:00:00"), "Salle Condorcet")
c15.addSchedule(s96)
var s97 = new Schedule(new Date("2017-11-13T13:30:00"), new Date("2017-11-13T16:30:00"), "ENS Ulm Salle Actes")
c11.addSchedule(s97)
var s94 = new Schedule(new Date("2017-11-13T14:00:00"), new Date("2017-11-13T18:00:00"), "Salle Condorcet")
c20.addSchedule(s94)
// 14/11/17
var s98 = new Schedule(new Date("2017-11-14T08:45:00"), new Date("2017-11-14T10:45:00"), "Salle Condorcet")
c16.addSchedule(s98)
var s99 = new Schedule(new Date("2017-11-14T11:00:00"), new Date("2017-11-14T13:00:00"), "Salle C103")
c1.addSchedule(s99)
var s100 = new Schedule(new Date("2017-11-14T11:00:00"), new Date("2017-11-14T15:00:00"), "Salle Condorcet")
c20.addSchedule(s100)
var s101 = new Schedule(new Date("2017-11-14T12:45:00"), new Date("2017-11-14T15:45:00"), "Telecom Salle C49")
c7.addSchedule(s101)
var s102 = new Schedule(new Date("2017-11-14T16:15:00"), new Date("2017-11-14T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s102)
var s103 = new Schedule(new Date("2017-11-14T16:00:00"), new Date("2017-11-14T18:00:00"), "Salle C103")
c19.addSchedule(s103)
// 15/11/17
var s104 = new Schedule(new Date("2017-11-15T09:00:00"), new Date("2017-11-15T12:00:00"), "Amphi Tocqueville")
c12.addSchedule(s104)
var s105 = new Schedule(new Date("2017-11-15T13:30:00"), new Date("2017-11-15T16:30:00"), "Salle C109")
c4.addSchedule(s105)
var s106 = new Schedule(new Date("2017-11-15T13:30:00"), new Date("2017-11-15T17:00:00"), "Salle C102")
c2.addSchedule(s106)
// 16/11/17
var s107 = new Schedule(new Date("2017-11-16T09:00:00"), new Date("2017-11-16T12:15:00"), "Telecom")
c3.addSchedule(s107)
var s108 = new Schedule(new Date("2017-11-16T11:00:00"), new Date("2017-11-16T13:00:00"), "Salle Condorcet")
c13.addSchedule(s108)
var s109 = new Schedule(new Date("2017-11-16T13:30:00"), new Date("2017-11-16T18:45:00"), "Jussieu")
c9.addSchedule(s109)
var s110 = new Schedule(new Date("2017-11-16T13:30:00"), new Date("2017-11-16T18:15:00"), "Salle C103")
c6.addSchedule(s110)
// 17/11/17
var s111 = new Schedule(new Date("2017-11-17T09:00:00"), new Date("2017-11-17T13:00:00"), "Salle Condorcet")
c10.addSchedule(s111)
var s112= new Schedule(new Date("2017-11-17T14:00:00"), new Date("2017-11-17T17:00:00"), "Salle C103")
c8.addSchedule(s112)

//S8(47)
// var s! = new Schedule(new Date("2017-11-!!T!!:!!:00"), new Date("2017-11-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 20/11/17
var s113 = new Schedule(new Date("2017-11-20T10:15:00"), new Date("2017-11-20T12:45:00"), "ENS Ulm Salle Henri Cartan")
c14.addSchedule(s113)
var s114 = new Schedule(new Date("2017-11-20T11:00:00"), new Date("2017-11-20T13:00:00"), "Salle Condorcet")
c15.addSchedule(s114)
var s115 = new Schedule(new Date("2017-11-20T13:45:00"), new Date("2017-11-20T16:45:00"), "CentraleSupelec")
c18.addSchedule(s115)
var s116 = new Schedule(new Date("2017-11-20T14:00:00"), new Date("2017-11-20T16:00:00"), "Salle C109")
c1.addSchedule(s116)
// 21/11/17
var s117 = new Schedule(new Date("2017-11-21T08:45:00"), new Date("2017-11-21T10:45:00"), "Salle Condorcet")
c16.addSchedule(s117)
var s118 = new Schedule(new Date("2017-11-21T11:00:00"), new Date("2017-11-21T13:00:00"), "Salle C109")
c1.addSchedule(s118)
var s119 = new Schedule(new Date("2017-11-21T11:00:00"), new Date("2017-11-21T13:00:00"), "Salle Condorcet")
c13.addSchedule(s119)
var s120 = new Schedule(new Date("2017-11-21T12:45:00"), new Date("2017-11-21T15:45:00"), "Telecom Salle C49")
c7.addSchedule(s120)
var s121 = new Schedule(new Date("2017-11-21T16:15:00"), new Date("2017-11-21T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s121)
var s122 = new Schedule(new Date("2017-11-21T16:00:00"), new Date("2017-11-21T18:00:00"), "Salle C103")
c19.addSchedule(s122)
// 22/11/17
var s123 = new Schedule(new Date("2017-11-22T09:00:00"), new Date("2017-11-22T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s123)
var s124 = new Schedule(new Date("2017-11-22T13:30:00"), new Date("2017-11-22T16:30:00"), "Salle C109")
c4.addSchedule(s124)
var s125 = new Schedule(new Date("2017-11-22T13:30:00"), new Date("2017-11-22T17:00:00"), "Salle C102")
c2.addSchedule(s125)
// 23/11/17
var s126 = new Schedule(new Date("2017-11-23T09:00:00"), new Date("2017-11-23T12:15:00"), "Telecom")
c3.addSchedule(s126)
var s127 = new Schedule(new Date("2017-11-23T13:30:00"), new Date("2017-11-23T18:45:00"), "Jussieu")
c9.addSchedule(s127)
var s128 = new Schedule(new Date("2017-11-23T13:30:00"), new Date("2017-11-23T18:15:00"), "Salle C103")
c6.addSchedule(s128)
// 24/11/17
var s129 = new Schedule(new Date("2017-11-24T09:00:00"), new Date("2017-11-24T13:00:00"), "Salle Condorcet")
c10.addSchedule(s129)
var s130 = new Schedule(new Date("2017-11-24T09:00:00"), new Date("2017-11-24T12:00:00"), "Salle C315")
c17.addSchedule(s130)
var s131 = new Schedule(new Date("2017-11-24T14:00:00"), new Date("2017-11-24T17:00:00"), "Salle C103")
c8.addSchedule(s131)

//S9(48)
// var s! = new Schedule(new Date("2017-11-!!T!!:!!:00"), new Date("2017-11-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 27/11/17
var s132 = new Schedule(new Date("2017-11-27T09:00:00"), new Date("2017-11-27T13:00:00"), "Amphi Marie Curie")
c20.addSchedule(s132)
var s133 = new Schedule(new Date("2017-11-27T13:45:00"), new Date("2017-11-27T16:45:00"), "CentraleSupelec")
c18.addSchedule(s133)
// 28//11/17
var s134 = new Schedule(new Date("2017-11-28T08:45:00"), new Date("2017-11-28T10:45:00"), "Salle Condorcet")
c16.addSchedule(s134)
var s135 = new Schedule(new Date("2017-11-28T11:00:00"), new Date("2017-11-28T15:00:00"), "Amphi Marie Curie")
c20.addSchedule(s135)
var s136 = new Schedule(new Date("2017-11-28T11:00:00"), new Date("2017-11-28T13:00:00"), "Salle C103")
c1.addSchedule(s136)
var s137 = new Schedule(new Date("2017-11-28T12:45:00"), new Date("2017-11-28T15:45:00"), "Telecom Salle C49")
c7.addSchedule(s137)
var s138 = new Schedule(new Date("2017-11-28T16:15:00"), new Date("2017-11-28T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s138)
var s139 = new Schedule(new Date("2017-11-28T16:00:00"), new Date("2017-11-28T18:00:00"), "Salle C103")
c19.addSchedule(s139)
// 29/11/17
var s140 = new Schedule(new Date("2017-11-29T09:00:00"), new Date("2017-11-29T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s140)
var s141 = new Schedule(new Date("2017-11-29T13:30:00"), new Date("2017-11-29T16:30:00"), "Salle C109")
c4.addSchedule(s141)
var s142 = new Schedule(new Date("2017-11-29T13:30:00"), new Date("2017-11-29T17:00:00"), "Salle C102")
c2.addSchedule(s142)
// 30/11/17
var s143 = new Schedule(new Date("2017-11-30T09:00:00"), new Date("2017-11-30T12:15:00"), "Telecom")
c3.addSchedule(s143)
var s144 = new Schedule(new Date("2017-11-30T11:00:00"), new Date("2017-11-30T13:00:00"), "Salle Condorcet")
c13.addSchedule(s144)
var s145 = new Schedule(new Date("2017-11-30T13:30:00"), new Date("2017-11-30T18:45:00"), "Jussieu")
c9.addSchedule(s145)
var s146 = new Schedule(new Date("2017-11-30T13:30:00"), new Date("2017-11-30T18:15:00"), "Salle C103")
c6.addSchedule(s146)
// 01/12/17
var s147 = new Schedule(new Date("2017-12-01T09:00:00"), new Date("2017-12-01T13:00:00"), "Salle Condorcet")
c10.addSchedule(s147)
var s148 = new Schedule(new Date("2017-12-01T09:00:00"), new Date("2017-12-01T12:00:00"), "Salle C315")
c17.addSchedule(s148)
var s149 = new Schedule(new Date("2017-12-01T14:00:00"), new Date("2017-12-01T17:00:00"), "Salle C103")
c8.addSchedule(s149)

//S10(49)
// var s! = new Schedule(new Date("2017-12-!!T!!:!!:00"), new Date("2017-12-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 04/12/17
var s150 = new Schedule(new Date("2017-12-04T11:00:00"), new Date("2017-12-04T13:00:00"), "Salle Condorcet")
c15.addSchedule(s150)
var s152 = new Schedule(new Date("2017-12-04T13:45:00"), new Date("2017-12-04T16:45:00"), "CentraleSupelec")
c18.addSchedule(s152)
var s151 = new Schedule(new Date("2017-12-04T14:00:00"), new Date("2017-12-04T16:00:00"), "Salle C109")
c1.addSchedule(s151)
// 05/12/17
var s153 = new Schedule(new Date("2017-12-05T08:45:00"), new Date("2017-12-05T10:45:00"), "Salle Condorcet")
c16.addSchedule(s153)
var s155 = new Schedule(new Date("2017-12-05T11:00:00"), new Date("2017-12-05T13:00:00"), "Salle C103")
c1.addSchedule(s155)
var s154 = new Schedule(new Date("2017-12-05T11:00:00"), new Date("2017-12-05T13:00:00"), "Salle Condorcet")
c13.addSchedule(s154)
var s156 = new Schedule(new Date("2017-12-05T16:15:00"), new Date("2017-12-05T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s156)
var s157 = new Schedule(new Date("2017-12-05T16:00:00"), new Date("2017-12-05T18:00:00"), "Salle C103")
c19.addSchedule(s157)
// 06/12/17
var s158 = new Schedule(new Date("2017-12-06T09:00:00"), new Date("2017-12-06T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s158)
var s159 = new Schedule(new Date("2017-12-06T13:30:00"), new Date("2017-12-06T16:30:00"), "Salle C109")
c4.addSchedule(s159)
// 07/12/17
var s160 = new Schedule(new Date("2017-12-07T09:00:00"), new Date("2017-12-07T12:15:00"), "Telecom")
c3.addSchedule(s160)
var s161 = new Schedule(new Date("2017-12-07T13:30:00"), new Date("2017-12-07T18:45:00"), "Jussieu")
c9.addSchedule(s161)
var s162 = new Schedule(new Date("2017-12-07T13:30:00"), new Date("2017-12-07T18:15:00"), "Salle C103")
c6.addSchedule(s162)
// 08/12/17
var s163 = new Schedule(new Date("2017-12-08T09:00:00"), new Date("2017-12-08T13:00:00"), "Salle Condorcet")
c10.addSchedule(s163)

//S11(50)
// var s! = new Schedule(new Date("2017-12-!!T!!:!!:00"), new Date("2017-12-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 11/12/17
var s164 = new Schedule(new Date("2017-12-11T11:00:00"), new Date("2017-12-11T13:00:00"), "Salle Condorcet")
c15.addSchedule(s164)
var s166 = new Schedule(new Date("2017-12-11T14:00:00"), new Date("2017-12-11T18:00:00"), "Salle Condorcet")
c20.addSchedule(s166)
var s165 = new Schedule(new Date("2017-12-11T13:45:00"), new Date("2017-12-11T16:45:00"), "CentraleSupelec")
c18.addSchedule(s165)
// 12/12/17
var s167 = new Schedule(new Date("2017-12-12T08:45:00"), new Date("2017-12-12T10:45:00"), "Salle Condorcet")
c16.addSchedule(s167)
var s168 = new Schedule(new Date("2017-12-12T11:00:00"), new Date("2017-12-12T13:00:00"), "Salle C109")
c1.addSchedule(s168)
var s169 = new Schedule(new Date("2017-12-12T11:00:00"), new Date("2017-12-12T15:00:00"), "Amphi Marie Curie")
c20.addSchedule(s169)
var s170 = new Schedule(new Date("2017-12-12T16:15:00"), new Date("2017-12-12T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s170)
var s171 = new Schedule(new Date("2017-12-12T16:00:00"), new Date("2017-12-12T18:00:00"), "Salle C103")
c19.addSchedule(s171)
// 13/12/17
var s172 = new Schedule(new Date("2017-12-13T09:00:00"), new Date("2017-12-13T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s172)
var s173 = new Schedule(new Date("2017-12-13T13:30:00"), new Date("2017-12-13T16:30:00"), "Salle C109")
c4.addSchedule(s173)
// 14/12/17
var s174 = new Schedule(new Date("2017-12-14T09:00:00"), new Date("2017-12-14T12:15:00"), "Telecom")
c3.addSchedule(s174)
var s175 = new Schedule(new Date("2017-12-14T13:30:00"), new Date("2017-12-14T18:15:00"), "Salle C103")
c6.addSchedule(s175)
// 15/12/17
var s176 = new Schedule(new Date("2017-12-15T09:00:00"), new Date("2017-12-15T13:00:00"), "Salle Condorcet")
c10.addSchedule(s176)

//S12(50)
// var s! = new Schedule(new Date("2017-12-!!T!!:!!:00"), new Date("2017-12-!!T!!:!!:00"), "Salle Condorcet")
// c!.addSchedule(s!)
// 18/12/17
var s177 = new Schedule(new Date("2017-12-18T11:00:00"), new Date("2017-12-18T13:00:00"), "Salle Condorcet")
c15.addSchedule(s177)
var s178 = new Schedule(new Date("2017-12-18T14:00:00"), new Date("2017-12-18T17:00:00"), "Salle C103")
c20.addSchedule(s178)
var s179 = new Schedule(new Date("2017-12-18T13:45:00"), new Date("2017-12-18T16:45:00"), "CentraleSupelec")
c18.addSchedule(s179)
// 19/12/17
var s180 = new Schedule(new Date("2017-12-19T08:45:00"), new Date("2017-12-19T10:45:00"), "Salle Condorcet")
c16.addSchedule(s180)
var s181 = new Schedule(new Date("2017-12-19T11:00:00"), new Date("2017-12-19T13:00:00"), "Salle Condorcet")
c13.addSchedule(s181)
var s182 = new Schedule(new Date("2017-12-19T16:15:00"), new Date("2017-12-19T19:15:00"), "ENS Ulm Immeuble Rataud Amphi Galois")
c5.addSchedule(s182)
var s183 = new Schedule(new Date("2017-12-19T16:00:00"), new Date("2017-12-19T18:00:00"), "Salle C103")
c19.addSchedule(s183)
// 20/12/17
var s184 = new Schedule(new Date("2017-12-20T09:00:00"), new Date("2017-12-20T12:00:00"), "Amphi Marie Curie")
c12.addSchedule(s184)
var s185 = new Schedule(new Date("2017-12-20T13:30:00"), new Date("2017-12-20T17:00:00"), "Salle C102")
c2.addSchedule(s185)
var s186 = new Schedule(new Date("2017-12-20T13:30:00"), new Date("2017-12-20T16:30:00"), "Salle C109")
c4.addSchedule(s186)
// 21/12/17
var s187 = new Schedule(new Date("2017-12-21T09:00:00"), new Date("2017-12-21T12:15:00"), "Telecom")
c3.addSchedule(s187)



//#############################################################################
// DISPLAY COURSES

function displayCoursesList() {
  $("#coursesList").empty()
  for (i = 0; i < all_courses.length; i++) {
    var line = "<div class=\"item\">"
    line += "<div id=\"checkbox_" + i +"\" class=\"ui checkbox\">"
    // line += "<input type=\"checkbox\" id=\"" + i + "\" disabled=\"disabled\">"
    line += "<input type=\"checkbox\" id=\"" + i + "\">"
    line += "<label>" + all_courses[i].name + "</label>"
    line += "</div>"
    line += "</div>"
    $(line).appendTo($("#coursesList"));
  }
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

function addToDict(dict, key, value) {
  if (dict[key] == undefined) {
    dict[key] = [value]
  }
  else {
    dict[key].push(value)
  }
}

// Create an day-dict filled with the (course, schedule)
function createDayDict(all_courses) {
  var dayDict = {}
  var day = ""
  for (k = 0; k < all_courses.length; k++) {
      for (i = 0; i < all_courses[k].scheduleList.length; i++) {
        day = all_courses[k].scheduleList[i].beginTime.toISOString().slice(0,10)
        addToDict(dayDict, day, [all_courses[k], i])
      }
  }
  return dayDict
}

function createOverlapDict(dayDict) {
  var overlap = []
  var overlapDict = {}

  var days = Object.keys(dayDict)
  var schedules = []
  var schedulesRest = []
  for (k = 0; k < days.length; k++) {
    schedules = dayDict[days[k]]
    for (i = 0; i < schedules.length; i++) {
      schedulesRest = schedules.slice(i+1)
      for (j = 0; j < schedulesRest.length; j++) {
        courseA = schedules[i][0]
        scheduleA = courseA.scheduleList[schedules[i][1]]
        courseB = schedulesRest[j][0]
        scheduleB = courseB.scheduleList[schedulesRest[j][1]]
        if (!notOverlap(scheduleA, scheduleB))
        {
          console.log("Overlapping!")
          overlap.push([courseA, courseB])
          addToDict(overlapDict, courseA.name, courseB)
          addToDict(overlapDict, courseB.name, courseA)
        }
      }
    }
  }
  return overlapDict
}

var dayDict = createDayDict(all_courses)
var overlapDict = createOverlapDict(dayDict)
var selectCourses = []
var forbiddenCourses = []

function interactCheckbox() {
  $('.ui .checkbox')
    .checkbox({
      onChecked: function() {
        selectCourses.push(all_courses[this.id])
      }
      ,
      onUnchecked: function() {
        var index = selectCourses.indexOf(all_courses[this.id]);
        if (index > -1) {
            selectCourses.splice(index, 1);
        }
      }
      ,
      onChange: function() {
        for (i=0; i<forbiddenCourses.length; i++) {
          var index = all_courses.indexOf(forbiddenCourses[i])
          $("#checkbox_" + index).empty()
          var line = "<input type=\"checkbox\" id=\"" + index + "\">"
          line += "<label>" + forbiddenCourses[i].name + "</label>"
          line += "</div>"
          $(line).appendTo($("#checkbox_" + index));
        }
        forbiddenCourses = []
        for (i=0; i<selectCourses.length; i++) {
          if (overlapDict[selectCourses[i].name] != undefined) {
            overlapCourses = overlapDict[selectCourses[i].name]
            for (k=0; k<overlapCourses.length; k++) {
              console.log()
              forbiddenCourses.push(overlapCourses[k])
              $("#checkbox_" + all_courses.indexOf(overlapCourses[k])).empty()
              var line = "<input type=\"checkbox\" id=\"" + i + "\" disabled=\"disabled\">"
              line += "<label>" + overlapCourses[k].name + "</label>"
              line += "</div>"
              $(line).appendTo($("#checkbox_" + all_courses.indexOf(overlapCourses[k])));
            }
          }
        }
        console.log("forbidden courses:", forbiddenCourses)
        interactCheckbox()
      }
    })
}

displayCoursesList()
interactCheckbox()


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
  var tzoffset = (new Date(date)).getTimezoneOffset() * 60000; //offset in millisecondss
  var localISOTime = (new Date(date - tzoffset)).toISOString().slice(0,-1);
  return localISOTime.replace(/-/g,"").replace(/:/g,"").slice(0,15)
}

function courseToIcs(course) {
  var courseExport = ""
  for (i = 0; i < course.scheduleList.length; i++) {
    var schedule = course.scheduleList[i]
    console.log(course.scheduleList[i])
    var scheduleExport = "\nBEGIN:VEVENT\n"
    scheduleExport += "SUMMARY:[MVA] " + course.name + "\n"
    scheduleExport += "UID:" + course.name + schedule.beginTime + "\n"
    scheduleExport += "DTSTART;TZID=Europe/Paris:" + dateToString(schedule.beginTime) + "\n"
    // console.log(dateToString(schedule.beginTime))
    scheduleExport += "DTEND;TZID=Europe/Paris:" + dateToString(schedule.endTime) + "\n"
    scheduleExport += "DESCRIPTION:"+ course.prof + "\n"
    scheduleExport += "LOCATION:" + schedule.location + "\n"
    scheduleExport += "END:VEVENT\n"
    courseExport += scheduleExport
  }
  return courseExport
}

function download(courses, name, buttonName, type) {
  var CalendarToDownload = initCalendarExport
  for (k = 0; k < courses.length; k++) {
    console.log(courses[k])
    CalendarToDownload += courseToIcs(courses[k])
  }
  var a = document.getElementById(buttonName);
  var file = new Blob([CalendarToDownload], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

$("#generateFullIcs")
  .on('click', function (){
    console.log("Ics generating...")
    download(all_courses, 'full_mva_calendar.ics', "aFull", 'text/plain')
})


$("#generateIcs")
  .on('click', function (){
    console.log("Ics generating...")
    download(selectCourses, 'mva_calendar.ics', "a", 'text/plain')
})
