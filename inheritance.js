class GrandParent{
  constructor(){
    this.grandFatherName="Momen Khandaker";
  }
}
class Parent extends GrandParent{
  constructor(){
    super();
    this.fatherName="Masum Khandaker";
  }
}
class Child extends Parent{
  constructor(name){
    super();
    this.name=name;
  }
}

const baby1=new Child("Mahrin");
console.log(baby1);