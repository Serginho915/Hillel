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

  
myContactBook.addContact("Іван", "123456789", "ivan@example.com");
myContactBook.addContact("Марія", "987654321", "maria@example.com"); 
myContactBook.addContact("Петро", "456789123", "petro@example.com");

console.log(myContactBook.searchContactByName("Марія"));  
console.log(myContactBook.contacts);
  
