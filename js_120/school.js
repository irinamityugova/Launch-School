/*
Student
Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
*/

function createStudent(name, year) {
  return {
    name,
    year,
    courses: {},

    info() {
      console.log(name, year);
    },

    addCourse(course) {
      this.courses[course['code']] = course;
    },

    listCourses() {
      for (let code in this.courses) {
        console.log(`${code}: ${this.courses[code].name}`);
      }
    },

    addNote(code, note) {
      let course = this.courses[code];
      if (!course.note) course.note = note;
      course.note += ',\n' + note;
    },

    updateNote(code, note) {
      this.courses[code]['note'] = note;
    },

    viewNotes() {
      console.log();
      for (let code in this.courses) {
        let course = this.courses[code];
        if(course.note) console.log(`\nNote for ${course.name}: ${course.note}`);
      }
    }
  };
}

/*
Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively.
*/

let school = {
  students: {},

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      this.students[name] = createStudent(name, year);
      return;
    }
    console.log('Invalid Year');
  },

  enrollStudent(name, courses) {
    courses.forEach(course => {
      this.students[name].addCourse(course);
      });
  },

  addGrade(name, course, grade) {
    this.students[name][course].grade = grade;
  },

  getReportCard(name) {
    for (let code in this.students[name]['courses']) {
      let course = this.students[name]['courses'][code];
      console.log(`${course['name']}: ${course.grade ? course.grade : 'In Progress'}`);
    }
  },

  courseReport (course) {
    let count = 0;
    let sum = 0;

    console.log(`= ${course} Grades=`);

    for (let name in this.students) {
      let student = this.students[name];

      for (let code in student.courses) {
        let currentCourse = student.courses[code];

        if (currentCourse.name === course) {
          let grade = currentCourse.grade;
          console.log(`${student.name}: ${currentCourse.grade}`);
          sum += grade;
          count += 1;
        }
      }
    }
    let average = sum / count;
    if (average) {
      console.log('---------------');
      console.log(`Course Average: ${average}`);
    }
  },

};

school.addStudent('foo', '3rd');
school.addStudent('bar', '1st');
school.addStudent('qux', '2nd');

school.enrollStudent('foo', [{ name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }]);
school.enrollStudent('bar', [{ name: 'Math', code: 101, grade: 91, }]);
school.enrollStudent('qux', [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
]);

school.getReportCard('foo');
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
