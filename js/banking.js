function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);
    //clear deposit input filed value after click
    depositInput.value = ''; 
    return newDepositAmount;
}


document.getElementById('deposit-btn').addEventListener('click',function(){
 
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText); */
    const newDepositAmount = getInputValue();

    const depositTotal =document.getElementById('deposit-total');
    const previesDepositAmounttext = depositTotal.innerText;
    const previesDepositAmount = parseFloat(previesDepositAmounttext);
    const totalDepositAmount = previesDepositAmount + newDepositAmount;
    depositTotal.innerText= totalDepositAmount ;
    // uupdate blance 
    const totalBalance = document.getElementById('balance-total');
    const previesBalanceText = totalBalance.innerText;
    const previesBalance = parseFloat(previesBalanceText);
    const newtotalBalance = previesBalance + newDepositAmount;
    totalBalance.innerText = newtotalBalance;
    /* //clear deposit input filed value after click
    depositInput.value = '';  */
});
// get Widthdraw
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawInput = document.getElementById('widthdraw-input');
    const newwidthdrawAmountText = widthdrawInput.value;
    const newwidthdrawAmount = parseFloat(newwidthdrawAmountText);

    const widthdrawTotal = document.getElementById('widthraw-total');
    const previuswidthdrawAmountText = widthdrawTotal.innerText;
    const previuswidthdrawAmount = parseFloat(previuswidthdrawAmountText)
    const totalWidthdraw =  previuswidthdrawAmount + newwidthdrawAmount;
    widthdrawTotal.innerText = totalWidthdraw;
    // subtractio after widthdraw
    const balanceTotal = document.getElementById('balance-total');
    const prviesBalanceTotalText =  balanceTotal.innerText;
    const prviesBalanceTotal = parseFloat(prviesBalanceTotalText);
    const newbalanceTotal = prviesBalanceTotal - newwidthdrawAmount;
    balanceTotal.innerText = newbalanceTotal;
    //clear value
    widthdrawInput.value = '';

})