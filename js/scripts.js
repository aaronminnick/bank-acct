function BankAccount (accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
}

BankAccount.prototype.withdrawMoney = function(amount) {
  this.balance -= amount;
}

BankAccount.prototype.depositMoney = function(amount) {
  this.balance += amount;
}