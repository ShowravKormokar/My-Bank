// ---------------------------------------deposit----------------------------------//


// step-1 : add event listener to rhe deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {


    // step-2: get the deposit amount from the deposit input field
    // For input ffield use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current deposit total
    // for non-input (selement other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4; add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5; get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})


// -------------------------------------------------withdraw-----------------------------------//


// step-1 : add event listener to rhe withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-2: get the withdraw amount from the withdraw input field
    // For input ffield use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: get the current withdraw total
    // for non-input (selement other than input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4; add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5; get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the withdraw field
    withdrawField.value = '';
})