class BankAccount {
  constructor(initialBalance) {
    this._balance = initialBalance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      throw new Error("Balance cannot be negative");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance = this._balance + amount;
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this.balance = this._balance - amount;
    } else if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.balance); // 1000

account1.deposit(500);

console.log(account1.balance); // 1500

account1.withdraw(200);

console.log(account1.balance); // 1300
