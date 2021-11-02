function BankAccount (accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
  this.ledger = new Ledger();
}

BankAccount.prototype.withdrawMoney = function(amount) {
  this.balance -= amount;
  let transaction = new Transaction(-amount);
  this.ledger.addTransaction(transaction);
}

BankAccount.prototype.depositMoney = function(amount) {
  this.balance += amount;
  let transaction = new Transaction(amount);
  this.ledger.addTransaction(transaction);
}

function Transaction (amount) {
  this.amount = amount;
  switch (this.amount >= 0) {
    case true:
      this.type = "deposit";
    case false:
      this.type = "withdrawl";
  }
}

function Ledger () {
  this.transactions = {}
  this.transactId = 0;
}

Ledger.prototype.addTransaction = function(transaction) {
  this.transactId += 1;
  this.transactions[transactId] = transaction;
}
