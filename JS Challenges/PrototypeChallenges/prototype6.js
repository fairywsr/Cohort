// Problem statement
// Create a BankAccount constructor that initializes:
// • A balance property representing the account balance.
// • A transactions array to log all deposit and withdrawal activities.
// Implement the following methods on the prototype:
// 1. deposit(amount):
// o Increases the balance by the given amount.
// Adds a transaction log in the format: "Deposited X" (where X is the amount).
// 2. withdraw(amount):
// Decreases the balance by the given amount.
// Prevents overdraft (cannot withdraw if balance is insufficient).
// o If withdrawal is successful, log: "Withdrew X".
// If balance is insufficient, log: "Insufficient balance"
// 3. getTransactionHistory( ):
// Returns the list of all transactions as an array of strings in the order they
// occurred.
// Challenge
// • Implement BankAccount constructor with balance and transactions.
// • Attach deposit(amount), withdraw(amount), and getTransactionHistory()
// methods to the prototype.

function BankAccount(balance){
    this.balance = this.balance;
    this.tranactions = []
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
     this.tranactions.push(`Deposited ${amount}`)
}

BankAccount.prototype.withdrawal = function(amount){
    if(this.balance - amount < 0){
        return this.tranactions.push(`insuficient balance`)
    }
    else{
        this.balance -= amount;
        this.tranactions.push(`withdrawl ${balance}`)
    }
}

BankAccount.prototype.transactionHistory = function(){
    return this.tranactions;
}
