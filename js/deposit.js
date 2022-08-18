// document.getElementById('btn-deposit').addEventListener('click', function () {
//   const depositField = document.getElementById('deposit-field');
//   const newDepositAmountString = depositField.value;
//   const newDepositAmount = parseFloat(newDepositAmountString);

//   depositField.value = '';

//   const depositTotalElement = document.getElementById("deposit-total");
//   const previousDepositTotalString = depositTotalElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);

//   const newDepositTotal = previousDepositTotal + newDepositAmount;
//   depositTotalElement.innerText = newDepositTotal;

//   const balanceTotalElement = document.getElementById('balance-total');
//   const previousBalanceTotalString = balanceTotalElement.innerText;
//   const previousTotalAmount = parseFloat(previousBalanceTotalString);

//   const newBalanceTotal = previousTotalAmount + newDepositAmount;
//   balanceTotalElement.innerText = newBalanceTotal;
// });


function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
  // console.log('deposit button clicked');

  const newDepositAmount = getInputFieldValueById('deposit-field');

  const previousDepositTotal = getTextElementValueById('deposit-total');

  const newDepositTotal = previousDepositTotal + newDepositAmount;

  setTextElementValueById('deposit-total', newDepositTotal);

  const previousBalanceTotal = getTextElementValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById('balance-total', newBalanceTotal);
});
