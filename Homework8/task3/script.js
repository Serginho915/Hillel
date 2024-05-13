class ContactBook {
    constructor() {
      this.contacts = [];
    }
}
ContactBook.prototype.searchContactByName = function(name) {
    return this.contacts.find(contact => contact.name === name);
};
  
ContactBook.prototype.addContact = function(name, phoneNumber, email) {
    this.contacts.push({ name, phoneNumber, email });
};
  
let myContactBook = new ContactBook();

  
myContactBook.addContact("Ivan", "123456789", "ivan@gmail.com");
myContactBook.addContact("Maria", "987654321", "maria@gmail.com"); 
myContactBook.addContact("Petro", "456789123", "petro@gmail.com");

console.log(myContactBook.searchContactByName("Maria"));  
console.log(myContactBook.contacts);
  
