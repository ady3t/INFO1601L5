//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverateGrade(student, course){
   let sum = 0;
   let i = 0;   

   for (let tr of student.transcript){
      if (tr.course === course){
         for (let g of tr.grades){
            sum += g;
            i ++;
         }
         return sum / i;
      }
   }
   return -1;
}

function getAssignmentMark(student, course, num){

   for (let tr of student.transcript){
      if (tr.course === course){
         return tr.grades[num];
      }
   }
   return -1;
}

function averageAssessment(students, courseName, assignment){
   let sum = 0;
   let i = 0;   
   for(let stu of students){
      for (let tr of stu.transcript){
         if (tr.course === courseName){
            //console.log(`${stu.fname} took ${courseName}`);
            sum += getAssignmentMark(stu,courseName,assignment);
            i ++;
         }
      }
   }
   if(i!==0){
      console.log(`Number of students who took ${courseName}: ${i}\nAverage mark for assignment ${assignment} of ${courseName}: `);
      return sum/i;
   }
   console.log(`No students took ${courseName}`);
   return -1; 
}
   

console.log(getAverateGrade(bob,'INFO 1601'));
console.log(getAssignmentMark(bob,'INFO 1601',0));
console.log(averageAssessment(students,'INFO 1601',0));
