class User {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
  
    displayInfo() {
      console.log("Name:", this.name);
      console.log("Age:", this.age);
      console.log("Location:", this.location);
    }
  }
  
  let user1 = new User("Іван", 30, "Київ");
  
  user1.displayInfo();
  