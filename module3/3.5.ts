{
    //
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number; // private for only accessable in this class but protected can be use in child class

        constructor(id: number, name: string, balance: number) {
            this.name = name;
            this.id = id;
            this._balance = balance;
        }

        public addDeposite(amount: number) {
            this._balance += amount
        }

        public getBalance() {
            return this._balance
        }
    }

    class StudentsAccount extends BankAccount {
        test() {
            this._balance;
        }
    }

    const goribManus = new BankAccount(111, "Mr. Gorib", 20);
    goribManus.addDeposite(3000)
    const myBalance = goribManus.getBalance()
    console.log(myBalance)







    //
}