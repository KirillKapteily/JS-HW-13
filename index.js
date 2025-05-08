//bank
const account = {
    account: "me",
    balance: 100000,
}

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
    amount: 0,
    type: "add",
    id: 1,

    createTransaction(amount) {
        account.balance += amount;
        this.id = 1;
    },

    getBalance() {
        if (account.balance < 0) {
            console.log("error, result is negative");
        } else {
            console.log(account.balance);
        }


    },

    deposit(amount) {
        account.balance -= amount;

        this.id = 2;
    },

    getTransactionDetails(id) {
        switch (id) {
            case 1:
                console.log("Create Transaction");
                break;

            case 2:
                console.log("Deposit");
                break;

            default:
                console.log("Invalid ID, please try again!");
                break;
        }
    }
};

Transaction.createTransaction(500);
Transaction.getBalance();
Transaction.deposit(10000);
Transaction.getBalance();

Transaction.getTransactionDetails(2); 