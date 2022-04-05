const balance =  document.getElementById('balance'),
moneyPlus =  document.getElementById('money-plus'),
moneyMinus =  document.getElementById('money-minus'),
list  =  document.getElementById('list'),
form =  document.getElementById('form'),
text =  document.getElementById('text'),
amount =  document.getElementById('amount'),
dummyTransactions =  [
    {id: 1, text: 'flower', amount: -20},
    {id: 2, text: 'Salary', amount: 300},
    {id: 3, text: 'Book', amount: -50},
    {id: 4, text: 'Camera', amount: 150}
];

let transactions = dummyTransactions;
console.log(transactions)
//Add Transaction

function addTransaction(e) {
    e.preventDefault();

    if(!text.value.trim() === '' || amount.value.trim() === ''){
        alert('please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }
        transactions.push(transaction);
        addTransactionDom(transaction);
        updateValues();
        text.value = '';
        amount.value = '';

    }
} 
// Generate Random ID 
function generateID() {
    return Math.floor(Math.random() * 1000000);
}
//Add Transactions to DOM list

function addTransactionDom(transaction) {
    //Get Sign
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    //Add class based on sign
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;
    
    //Append itemsEl into list El

    list.appendChild(item);

}

//Update the balane, income and expense

function updateValues() {
    const amounts = transactions.map( transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
                        .filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);
    
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    moneyMinus.innerText = `$${expense}`;
    moneyPlus.innerText = `$${income}`;
}

function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    init()
}

//Init App

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDom);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);