class Student{
  constructor(sId,sName){
     this.id=sId;
      this.name=sName;
      this.school="KMC School";
  }
  
}
const student1=new Student(121,"Masum");
const student2=new Student(122,"Tafrin");
const student3=new Student(123);
console.log(student1,student2,student3);