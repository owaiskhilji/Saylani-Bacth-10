var expenses = [] ;
var totalamount = 0;

var cetegoryselect = document.getElementById('cetegory-select') 
var amountinput = document.getElementById('amount-input') 
var dateinput = document.getElementById('date-input') 
var addbtn = document.getElementById('add-btn') 
var expensesTableBody = document.getElementById('expense-table-body')
 var totalamountcell = document.getElementById('total-amount')

// (addEventListener)ye btn se bh attach ho jata h take btn se clk kr k km liye ja ske
addbtn.addEventListener('click', function() {
    var cetegory = cetegoryselect.value;
    var amount = Number(amountinput.value);
    var date = dateinput.value;
if(cetegory === '' ){
    alert('Please select a cetegory')
    return;
}
if(isNaN(amount) || amount <= 0 ){
    alert('Please enter a valid number')
    return;
}
if(date === '' ){
        alert('Please select a date')
    return;
}
expenses.push({cetegory,amount,date})
totalamount += amount;
// " (textContent)   جاوا اسکرپٹ میں ایک پروپرٹی ہے جو ویب پیج کے مختلف ایلیمنٹس (جیسے کہ ٹیکسٹ بکس، ڈومینٹس، اور اور کچھ) کے مواد یا ٹیکسٹ کو متن کی شکل میں پرکھنے کے لئے استعمال ہوتا ہے
totalamountcell.textContent = totalamount;

// var newRow = expense-tbl-body.insertRow();
 var newRow = expensesTableBody.insertRow();

var cetegoryCell = newRow.insertCell();
var amountCell = newRow.insertCell();
var dateCell = newRow.insertCell();
var deleteCell = newRow.insertCell();
var deletebtn = document.createElement('button');

deletebtn.textContent = "Delete";
//(classlist) یہ پروپرٹی ویب ایلیمنٹ کی کلاسوں کو ایک لسٹ کی شکل میں پرکھنے اور ترتیب دینے کے لئے استعمال کی جاتی ہے۔ آپ اس پروپرٹی کا استعمال کرکے کوئی بھی کلاس کو ویب ایلیمنٹ سے شامل یا حذف کر سکتے ہیں۔
deletebtn.classList.add('delete-btn');
deletebtn.addEventListener('click', function() {
    expenses.splice(expenses.indexOf(expense), 1);
    totalamount -= expense.amount;
totalamountcell.textContent = totalamount;

expensesTableBody.removeChild(newRow);
// expense-tbl-body.removeChild(newRow);

})

var expense = expenses[expenses.length -1]
cetegoryCell.textContent = expense.cetegory;
amountCell.textContent = expense.amount;
dateCell.textContent = expense.date;
deleteCell.appendChild(deletebtn);

})

for(var expense of expenses) {
    totalamount += expense.amount;
    totalamountcell.textContent = totalamount;
    
    var newRow = expensesTableBody.insertRow();
    // var newRow = expense-tbl-body.insertRow();
var cetegoryCell = newRow.insertCell();
    var amountCell = newRow.insertCell();
    var dateCell = newRow.insertCell();
    var deleteCell = newRow.insertCell();
    var deletebtn = document.createElement('button');
    deletebtn.textContent('Delete');
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);
        totalamount -= expense.amount;
    totalamountcell.textContent = totalamount;
    
    expensesTableBody.removeChild(newRow);
    // expense-tbl-body.removeChild(newRow);
    })
    
    cetegoryCell.textContent = expense.cetegory;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);
        
    
}














