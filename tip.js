// holding the elements
const totalInput = document.querySelector('#totalBill');
const custom = document.querySelector('#custom');
const numOfPerInput = document.querySelector('#numPerson');

const tipPerson = document.querySelector('#tipPerson');
const tipTotal = document.querySelector('#tipTotal');
const reset = document.querySelector('#reset');

const btns = document.querySelectorAll('.percentage button');


 
btns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let rate = Number(btn.value);
    let totalBill = Number(totalInput.value);

    let totalTip = totalBill * (rate / 100);

    tipTotal.innerHTML = totalTip;

}, false))


custom.addEventListener('change', (e) => {
    e.preventDefault();

    let totalBill = Number(totalInput.value);

    let rate = Number(custom.value); 

    let totalTip = totalBill * (rate / 100);

    tipTotal.innerHTML = totalTip.toFixed(2);

}) 

numOfPerInput.addEventListener('change', (e) => {
    e.preventDefault();

    let numsPers = Number(numOfPerInput.value);

    let tipPerPerson =  Number(tipTotal.innerHTML) / numsPers

    if(numsPers === 0 || numsPers === "") {
        tipPerson.innerHTML = "0.00";
}  else {
      tipPerson.innerHTML = tipPerPerson.toFixed(2);
}
})

reset.addEventListener('click', (e) => {
    let form = document.forms[0];
    form.reset();

    tipPerson.innerHTML = "0.00";
    tipTotal.innerHTML = "0.00";
})