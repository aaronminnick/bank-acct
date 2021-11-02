## TDD:

### Describe: BankAccount()
Test: "It should take and store an account name and an initial deposit amount (as balance)."   
Code:  
```
acct = new BankAccount("Aaron's Money", 100000); 
console.log(acct.accountName, acct.balance);
```  
Expected Output: ```Aaron's Money 100000```

### Describe: BankAccount.prototype.withdrawMoney()
Test: "It should subtract input amount from account balance"  
Code:
``` 
acct = new BankAccount("Aaron's Money", 100000);   
acct.withdrawMoney(5000);   
console.log(acct.balance);   
```
Expected Output: ```95000```

### Describe: BankAccount.prototype.depositMoney()
Test: "It should add input amount to account balance"  
Code:
``` 
acct = new BankAccount("Aaron's Money", 100000);   
acct.depositMoney(5000);   
console.log(acct.balance);   
```
Expected Output: ```105000```