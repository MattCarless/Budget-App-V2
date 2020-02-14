const userWageData = document.getElementById('user-wage-input');
const userExpensesData = document.getElementById('user-expenses-input');
const displayUserDataSentence = document.getElementById('user-input-data-sentence');
const calculateSavingsButtonClicked = document.getElementById('calculate-savings-button');
const displayTotalUserSaving = document.getElementById('display-total-user-savings');
const userSelectsTimePeriod = document.getElementById('time-period-menu');
const resetButtonClicked = document.getElementById('reset-button-html');
let timePeriodString;
let timePeriodMultiplier;

const displayValuesSentence = () => {   //Working, need to use parseInt() that often? Maybe contain .value.lengths in variables?
    errorMessage();
    SelectedTimePeriod();
    if (userWageData.value.length > 0 && userExpensesData.value.length > 0) {
        const userWage = parseInt(userWageData.value);
        const userExpense = parseInt(userExpensesData.value);
        const totalSaving = parseInt(userWage - userExpense) * timePeriodMultiplier;
        displayTotalUserSaving.innerHTML = parseInt(totalSaving);
        if (totalSaving > 0) {  // working, need to convert this into a function
            displayTotalUserSaving.style.color = 'green';
        } else {
            displayTotalUserSaving.style.color = 'red';
        }
        displayUserDataSentence.innerHTML = `Your monthly wage is £${userWage}, your monthly expenses are £${userExpense}. Your total savings for the ${timePeriodString} are £${totalSaving}`;
    }
}

calculateSavingsButtonClicked.addEventListener('click', displayValuesSentence);


const SelectedTimePeriod = () => {
    timePeriodMultiplier = parseInt(userSelectsTimePeriod.value);      // not working properly, sending back correct values, not changing calculations
    if (timePeriodMultiplier === 1) {
        timePeriodString = "month";
    } else if (timePeriodMultiplier === 6) {
        timePeriodString = "6 months";
    } else {
        timePeriodString = "12 months"
    }
}


const errorMessage = () => {  // WORKING
    if (userWageData.value.length === 0 || userExpensesData.value.length === 0) {
        alert("You must enter a numerical value in both boxes");
    }
}

const resetAllValues = () => {   // working
    userWageData.value = "";
    userExpensesData.value = "";
    displayUserDataSentence.innerHTML = " ";
    displayTotalUserSaving.innerHTML = " ";
}

resetButtonClicked.addEventListener('click', resetAllValues);




