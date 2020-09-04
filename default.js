function createUser(name,age=18,phone=123){
  const user = {};
  user.name = name;
  user.age = age;
  user.phone=phone;
  return user;
  }
  function show(name,phone={}){
    const user={};
    user.name=name;
    user.phone=phone;
    return user;
  }
  console.log(show("Masum"));
  
  console.log(createUser("Masum"));