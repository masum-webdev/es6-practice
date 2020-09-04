//object destructure
const person={name:"Masum",info:{phone:016774910,Address:"Narsingdi"},salary:30000};
const {name,salary}=person;
const {phone,Address}=person.info;
console.log(name,phone,Address,salary);

//array destructure
const friends=["Amir","Samir","Redoy","Rashed"];
const [firstName,secondName,...others]=friends;
console.log(firstName,secondName,others);