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

//Add Transactions to DOM list

function addTransactionDom(transaction) {
    //Get Sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    //Add class based on sign
    item.classList.add(transaction.amount < 0 ? 'minus' : 'add');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn">x</button>
    `;

}

addTransactionDom(transactions);