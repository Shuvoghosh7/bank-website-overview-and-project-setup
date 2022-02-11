function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input filed value after click
    inputField.value = ''; 
    return amountValue;
}
function updateTotalFiled(totalFiledId,amount){
    const totalElement =document.getElementById(totalFiledId);
    const totelText = totalElement.innerText;
    const previesTotal = parseFloat(totelText);
    const totalAmount = previesTotal + amount;
    totalElement.innerText= totalAmount ;
}
function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const previesBalanceText = totalBalance.innerText;
    const previesBalance = parseFloat(previesBalanceText);
    return  previesBalance;
}
function updateBalance(depositAmount,isAdd){
    const totalBalance = document.getElementById('balance-total');
    /* const previesBalanceText = totalBalance.innerText;
    const previesBalance = parseFloat(previesBalanceText); */
    const previesBalance = getCurrentBalance();
    if(isAdd == true){
        const newtotalBalance = previesBalance + depositAmount;
        totalBalance.innerText = newtotalBalance;
    }else{
        const newtotalBalance = previesBalance - depositAmount;
        totalBalance.innerText = newtotalBalance;
    }
    
}


document.getElementById('deposit-btn').addEventListener('click',function(){

    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalFiled('deposit-total',newDepositAmount);
        updateBalance(newDepositAmount,true);
    }
});
// get Widthdraw
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawAmount = getInputValue('widthdraw-input');
    const currentBalance = getCurrentBalance();
    if(widthdrawAmount > 0 && widthdrawAmount < currentBalance){
        updateTotalFiled('widthraw-total',widthdrawAmount);
        updateBalance(widthdrawAmount,false);
    }
    if(widthdrawAmount > currentBalance){
        console.log(alert('you can not widthraw more then your current balance'));
    }
})
