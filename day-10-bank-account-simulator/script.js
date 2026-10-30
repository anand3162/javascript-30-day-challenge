// Day 10 – Bank Account Simulator
// An account object with deposit, withdraw, interest, and statement methods that track balance and history.

const account = {
  balance: 0,
  history: [],

  deposit(amount) {
    this.balance += amount;
    this.history.push({ type: "deposit", amount: amount });
    console.log(`Deposit of $${amount} was successful.`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Withdrawal of $${amount} refused. You only have $${this.balance} in your account.`,
      );
    } else {
      this.balance -= amount;
      this.history.push({ type: "withdraw", amount: amount });
      console.log(`Withdrawal of $${amount} was successful.`);
    }
  },

  interest(rate) {
    const earned = (this.balance * rate) / 100;
    this.balance += earned;
    this.history.push({ type: "interest", amount: earned });
    console.log(`Interest of ${rate}% applied. Earned: $${earned.toFixed(2)}`);
  },

  printStatement() {
    console.log("\n--- Account Details ---");
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== "function" && key !== "history") {
        console.log(`${key}: $${value.toFixed(2)}`);
      }
    });

    console.log("\n--- Transaction History ---");
    this.history.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry.type}: $${entry.amount.toFixed(2)}`);
    });
  },
};

account.deposit(100);
account.withdraw(30);
account.withdraw(500);
account.interest(3);
account.printStatement();