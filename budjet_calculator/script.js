let expenses = getDataFromLocalStorage('expenses') || [];
let incomes = getDataFromLocalStorage('incomes') || [];
let budget = getDataFromLocalStorage('budget') || [];

// Класи для Витрат, Доходів та Бюджету
class Expense {
    constructor(expenseSpendingType, description, amount) {
        this.expenseSpendingType = expenseSpendingType;
        this.description = description;
        this.amount = amount;
    }
}

class Income {
    constructor(incomeType, description, amount) {
        this.incomeType = incomeType;
        this.description = description;
        this.amount = amount;
    }
}

class BudgetItem {
    constructor(spendingType, description, amount) {
        this.spendingType = spendingType;
        this.description = description;
        this.amount = amount;
    }
}

// print on screen info about expenses/incomes
// Метод відображає на екрані дані для таблиці доходів та витрат
function showOnScreenEI() {
    const incomeTable = document.querySelector("#incomeTableBody");
    const expensesTable = document.querySelector("#expensesTableBody");

    let incomeHtml = '';
    for (let income of incomes) {
        incomeHtml += `<tr>
                            <td>${income.description}</td>
                            <td>${income.amount}</td>
                        </tr>`;
    }

    let expenseHtml = '';
    for (let expense of expenses) {
        expenseHtml += `<tr>
                            <td>${expense.description}</td>
                            <td>${expense.amount}</td>
                        </tr>`;
    }

    incomeTable.innerHTML = incomeHtml;
    expensesTable.innerHTML = expenseHtml;
}

//print budget on screen
// Відображає дані для таблиці бюджету
function showOnScreenBudget() {
    const budgetTable = document.querySelector("#budgetTable");

    let budgetHtml = '';
    for (let item of budget) {
        budgetHtml += `<tr>
                            <td>${item.description}</td>
                            <td>${item.amount}</td>
                        </tr>`;
    }

    budgetTable.innerHTML = budgetHtml;
}

// Спрацьовує на додавання доходу
function addIncome() {
    const incomeType = document.querySelector("#incomeType");
    const incomeDescription = document.querySelector("#incomeDescription");
    const incomeAmount = document.querySelector("#incomeAmount");

    const newIncomeInstance = new Income(incomeType.value, incomeDescription.value, incomeAmount.value);
    incomes.push(newIncomeInstance);

    saveToLocalStorage('incomes', incomes);
    $('#incomeModal').modal('hide')
    showOnScreenEI();
}

// Спрацьовує на додоавання витрат
function addExpense() {
    const expenseSpendingType = document.querySelector("#expenseSpendingType");
    const expenseDescription = document.querySelector("#expenseDescription");
    const expenseAmount = document.querySelector("#expenseAmount");

    const newExpenseInstance = new Expense(expenseSpendingType.value, expenseDescription.value, expenseAmount.value);
    expenses.push(newExpenseInstance);

    saveToLocalStorage('expenses', expenses);
    $('#expenseModal').modal('hide')
    showOnScreenEI();
}

// Спрацьовує на додавання бюджету
function addBudgetItem() {
    const budgetSpendingType = document.querySelector("#budgetSpendingType");
    const budgetSpendingDescription = document.querySelector("#budgetSpendingDescription");
    const budgetSpendingAmount = document.querySelector("#budgetSpendingAmount");

    const newBudgetInstance = new BudgetItem(budgetSpendingType.value, budgetSpendingDescription.value, budgetSpendingAmount.value);
    budget.push(newBudgetInstance);

    saveToLocalStorage('budget', budget);
    $('#budgetModal').modal('hide');
    showOnScreenBudget();
}

// Метод зберігає дані до localstorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Метод отримує дані з localstorage
function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Метод очищує Localstorage
function cleanCache() {
    saveToLocalStorage('budget', []);
    budget = [];
    saveToLocalStorage('incomes', []);
    incomes = []
    saveToLocalStorage('expenses', []);
    expenses = [];

    showOnScreenEI();
}

// Методи спрацьовують на переключання вкладок, для відображення відповідної інформації
document.querySelector("#budget-tab").addEventListener('click', () => {
    showOnScreenBudget();
});

// початкова точка програми, відобрпажаємо таблиці доходів/витрат
showOnScreenEI();

