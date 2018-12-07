var Account = {
    title: "Haris Asghar",
    balance: 0,
    currency: "PKRS",
    iban: "PKN1234654321"
};

var month = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function printAccountData()
{
    document.getElementById('title').innerHTML = Account.title;
    document.getElementById('balance').innerHTML = Account.balance;
    document.getElementById('currency').innerHTML = Account.currency;
    document.getElementById('IBAN').innerHTML = Account.iban;
}

document.querySelector('#deposit').addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var value = document.querySelector('#deposit').value;
        var flag = !isNaN(value);

        if(flag && value > 0) {
            deposit(value);
            document.querySelector('#deposit').value = "";
        } else {
            document.querySelector('#deposit-msg').innerHTML = "Enter valid input";
        }
    }
});

document.querySelector('#withdraw').addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var value = document.querySelector('#withdraw').value;
        var flag = !isNaN(value);

        if(flag && value > 0) {

            if(value > Account.balance) {
                document.querySelector('#withdraw-msg').innerHTML = "Does not have sufficient amount";
            }
            else {
                withdraw(value);
                document.querySelector('#withdraw').value = "";
            }
        } else {
            document.querySelector('#withdraw-msg').innerHTML = "Enter valid input";
        }
    }
});

printAccountData();

function printTransection(amt, T)
{
    var date = new Date();
    var Transection = {
        month: date.getMonth(),
        day: date.getDate(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        amount: amt,
        type: T

    };

    var myTable = document.getElementById('transaction-table');
    myTable.innerHTML += '<tr><td>' + month[Transection.month] + " " + Transection.day + ", " + Transection.year + " " + Transection.hour + ":" + Transection.minute + ":"  + Transection.second + '</td><td>'+ T +'</td><td>'+ amt +'</td></tr>';
    document.querySelector('#deposit').value = "";
    document.querySelector('#withdraw').value = "";
    document.querySelector('#deposit-msg').innerHTML = "";
    document.querySelector('#withdraw-msg').innerHTML = "";
    printAccountData();
}


function deposit(value)
{
    Account.balance += parseInt(value);
    printTransection(value, "Credit");
}

function withdraw(value)
{
    Account.balance -= parseInt(value);
    printTransection(value, "Debit");
}