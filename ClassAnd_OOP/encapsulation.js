class BankAccount {
  #balance; // private field (encapsulation)

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance; // controlled access
  }
}

// Usage
const account = new BankAccount("Dishendra", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
