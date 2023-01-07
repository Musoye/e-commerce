var totalCost = document.getElementById('amounted');

//each element and their properties
var products = [
    {
        index: 1,
        id: 'p1',
        name: 'Samsung TV',
        price: 500000
    },
    {
        index: 2,
        id: 'p2',
        name: 'Pixel 4a',
        price: 250000
    },
    {
        index: 3,
        id: 'p3',
        name: 'PS 5',
        price: 300000
    },
    {
        index: 4,
        id: 'p4',
        name: 'MacBook Air',
        price: 800000
    },
    {
        index: 5,
        id: 'p5',
        name: 'Apple Watch',
        price: 95000
    },
    {
        index: 6,
        id: 'p6',
        name: 'Air Pods',
        price: 75000
    }

];

//Form Input Verification
//name verification
function NameVerification(){
    let name = document.getElementById('elementname');
    let nameerr = document.getElementById("nameError");

    if(!name.value){
        name.style.border = '4px solid red';
        nameerr.innerHTML = 'Please enter your name';
    }else {
        name.style.border = '4px solid green';
        nameerr.innerHTML = '';
    }
}
//Email verification
function EmailVerification(){
    let email = document.getElementById('email');
    let eerr = document.getElementById('emailError')

    if (!email.value){
        email.style.border = '4px solid red';
        eerr.innerHTML = 'Please enter your e-mail';
    } else if (!email.value.includes('@')){
        email.style.border = '4px solid red';
        eerr.innerHTML = 'Please Enter correct HTML';
    } else {
        email.style.border = '4px solid green';
        eerr.innerHTML = '';
    }
}
//Phone number verification
function PNumberVerification(){
    let num = document.getElementById('pnumber');
    let numerr = document.getElementById('pError');

    if (!num.value){
        num.style.border = '4px solid red';
        numerr.innerHTML = 'Please enter your phone number'
    }else if (! /^[0-9]{11}$/.test(num.value)){
        num.style.border = '4px solid red';
        numerr.innerHTML = 'make sure you enter 11 digit number';
    }else{
        num.style.border = '4px solid green';
        numerr.innerHTML = '';
    }
}

// displaying element
function DisplayElem(elementid) {
    let element = document.getElementById(elementid);
    element.style.display = 'block';
}

// Not display Element
function NotDisplayElem(elementid) {
    let element = document.getElementById(elementid);
    element.style.display = 'none';
}

//Increse each body element
function IncreaseNum(elementid) {
    let element = document.getElementById(elementid);
    let coun = parseInt(element.innerHTML);
    coun++;
    element.innerHTML = coun;
    //Handling the total amount and change in amount of product when clicking button
    let pay1 = parseInt(document.getElementById('present1').innerHTML);
    let pay2 = parseInt(document.getElementById('present2').innerHTML);
    let pay3 = parseInt(document.getElementById('present3').innerHTML);
    let pay4 = parseInt(document.getElementById('present4').innerHTML);
    let pay5 = parseInt(document.getElementById('present5').innerHTML);
    let pay6 = parseInt(document.getElementById('present6').innerHTML);

    totalCost.innerHTML = (pay1 * products[0].price) + (pay2 * products[1].price) + (pay3 * products[2].price) + (pay4 * products[3].
        price) + (pay5 * products[4].price) + (pay6 * products[5].price);
    //console.log(totalCost.innerHTML);

    let prc1 = document.getElementById('prc1');
    prc1.innerHTML = parseInt(pay1 * products[0].price);
    let prc2 = document.getElementById('prc2');
    prc2.innerHTML = parseInt(pay2 * products[1].price);
    let prc3 = document.getElementById('prc3');
    prc3.innerHTML = parseInt(pay3 * products[2].price);
    let prc4 = document.getElementById('prc4');
    prc4.innerHTML = parseInt(pay4 * products[3].price);
    let prc5 = document.getElementById('prc5');
    prc5.innerHTML = parseInt(pay5 * products[4].price);
    let prc6 = document.getElementById('prc6');
    prc6.innerHTML = parseInt(pay6 * products[5].price);

    let ttotal = document.getElementById('tamounnt');
    ttotal.value = totalCost.innerHTML;
    //console.log(ttotal.value);
}

// Decrease each body element
function DecreaseNum(elementname) {
    let last = elementname.charAt(elementname.length - 1);
    //console.log(last);
    let element = document.getElementById(elementname);
    let coun = parseInt(element.innerHTML);
    if (coun >= 2) {
        coun--;
        element.innerHTML = coun;
    }
    else {
        alert(`The quantity can't be less than 1 and it will be removed,So if you still want to buy it, add the item back in the Add to Cart Menu. Thank you!  `);
        let elel = 'pixel' + last;
        let p = 'p' + last;
        coun = 0;
        element.innerHTML = coun;
        // console.log(p);
        // console.log(elel);
        RemoveFromCart(p, elel);
    }
    //Handling the total amount and each element price when increment or decrement button is pressed.
    let pay1 = parseInt(document.getElementById('present1').innerHTML);
    let pay2 = parseInt(document.getElementById('present2').innerHTML);
    let pay3 = parseInt(document.getElementById('present3').innerHTML);
    let pay4 = parseInt(document.getElementById('present4').innerHTML);
    let pay5 = parseInt(document.getElementById('present5').innerHTML);
    let pay6 = parseInt(document.getElementById('present6').innerHTML);

    totalCost.innerHTML = (pay1 * products[0].price) + (pay2 * products[1].price) + (pay3 * products[2].price) + (pay4 * products[3].
        price) + (pay5 * products[4].price) + (pay6 * products[5].price);
    //console.log(totalCost.innerHTML);

    let prc1 = document.getElementById('prc1');
    prc1.innerHTML = parseInt(pay1 * products[0].price);
    let prc2 = document.getElementById('prc2');
    prc2.innerHTML = parseInt(pay2 * products[1].price);
    let prc3 = document.getElementById('prc3');
    prc3.innerHTML = parseInt(pay3 * products[2].price);
    let prc4 = document.getElementById('prc4');
    prc4.innerHTML = parseInt(pay4 * products[3].price);
    let prc5 = document.getElementById('prc5');
    prc5.innerHTML = parseInt(pay5 * products[4].price);
    let prc6 = document.getElementById('prc6');
    prc6.innerHTML = parseInt(pay6 * products[5].price);

    let ttotal = document.getElementById('tamounnt');
    ttotal.value = totalCost.innerHTML;
    console.log(ttotal.value);

}

//function on and of siaplay
function OnandOfPopPay(){
    let pop = document.getElementById('pay');
    if (pop.style.display === 'block'){
        pop.style.display = 'none';    
    }
    else {
        pop.style.display = 'block';      
    }
}

//Displaying pop-up page
function displayPopPay() {
    let pop = document.getElementById('pay');
    pop.style.display = 'block';
}

//Nullifying the pop and reload the entire webpage
function ReloadSession() {
    location.reload();
}

//Not displaying the pop up
function RemovePopPay() {
    let pop = document.getElementById('pay');
    pop.style.display = 'none';
}

//Display Summary
function DisplaySummary(refe){
    let summary = document.getElementById('summary');
    let refid = document.getElementById("refid");
    refid.innerHTML = refe;
    summary.style.display = 'block';
}

function RemoveFromCart(elementid, elementname) {
    let Para = document.getElementById(elementid);
    let counter = document.getElementById('spa');
    let numcount = parseInt(counter.innerHTML);
    let lastem = elementid.charAt(elementid.length - 1);
    let newelem = 'present' + lastem;

    if (Para.innerHTML === 'ADD TO CART') {
        DisplayElem(elementname);
        numcount += 1;
        counter.innerHTML = numcount;
        Para.innerHTML = "REMOVE FROM THE CART";
        Para.style.backgroundColor = " #FF7A00";
        let newelement = document.getElementById(newelem);
        newelement.innerHTML = 1;
    }
    else {
        NotDisplayElem(elementname);
        if (count > 0) {
            numcount -= 1;
            counter.innerHTML = numcount;
            Para.innerHTML = 'ADD TO CART';
            Para.style.backgroundColor = " #FF7A00";
            let newelement = document.getElementById(newelem);
            newelement.innerHTML = 0;
        } else {
            numcount = 0;
            counter.innerHTML = numcount;
            Para.innerHTML = 'ADD TO CART';
            Para.style.backgroundColor = " #FF7A00";
            let newelement = document.getElementById(newelem);
            newelement.innerHTML = 0;
        }
    }
    //Handling the total amount and showing in the respective increment of element in each button
    let pay1 = parseInt(document.getElementById('present1').innerHTML);
    let pay2 = parseInt(document.getElementById('present2').innerHTML);
    let pay3 = parseInt(document.getElementById('present3').innerHTML);
    let pay4 = parseInt(document.getElementById('present4').innerHTML);
    let pay5 = parseInt(document.getElementById('present5').innerHTML);
    let pay6 = parseInt(document.getElementById('present6').innerHTML);

    totalCost.innerHTML = (pay1 * products[0].price) + (pay2 * products[1].price) + (pay3 * products[2].price) + (pay4 * products[3].
        price) + (pay5 * products[4].price) + (pay6 * products[5].price);

    let prc1 = document.getElementById('prc1');
    prc1.innerHTML = parseInt(pay1 * products[0].price);
    let prc2 = document.getElementById('prc2');
    prc2.innerHTML = parseInt(pay2 * products[1].price);
    let prc3 = document.getElementById('prc3');
    prc3.innerHTML = parseInt(pay3 * products[2].price);
    let prc4 = document.getElementById('prc4');
    prc4.innerHTML = parseInt(pay4 * products[3].price);
    let prc5 = document.getElementById('prc5');
    prc5.innerHTML = parseInt(pay5 * products[4].price);
    let prc6 = document.getElementById('prc6');
    prc6.innerHTML = parseInt(pay6 * products[5].price);

    let ttotal = document.getElementById('tamounnt');
    ttotal.value = totalCost.innerHTML;
}

//calling each element with its dom
let button1 = document.getElementById('p1');
let button2 = document.getElementById('p2');
let button3 = document.getElementById('p3');
let button4 = document.getElementById('p4');
let button5 = document.getElementById('p5');
let button6 = document.getElementById('p6');
button1.onclick = function () {
    RemoveFromCart('p1', 'pixel1');
}
button2.onclick = function () {
    RemoveFromCart('p2', 'pixel2');
}
button3.onclick = function () {
    RemoveFromCart('p3', 'pixel3');
}
button4.onclick = function () {
    RemoveFromCart('p4', 'pixel4');
}
button5.onclick = function () {
    RemoveFromCart('p5', 'pixel5');
}
button6.onclick = function () {
    RemoveFromCart('p6', 'pixel6');
}

//calling each increment with its dom
let btn1 = document.getElementById('btn-sale1');
let btn2 = document.getElementById('btn-sale2');
let btn3 = document.getElementById('btn-sale3');
let btn4 = document.getElementById('btn-sale4');
let btn5 = document.getElementById('btn-sale5');
let btn6 = document.getElementById('btn-sale6');
btn1.onclick = function () {
    IncreaseNum('present1');
}
btn2.onclick = function () {
    IncreaseNum('present2');
}
btn3.onclick = function () {
    IncreaseNum('present3');
}
btn4.onclick = function () {
    IncreaseNum('present4');
}
btn5.onclick = function () {
    IncreaseNum('present5');
}
btn6.onclick = function () {
    IncreaseNum('present6');
}
//calling each increment with its dom
let nbtn1 = document.getElementById('btn-sal1');
let nbtn2 = document.getElementById('btn-sal2');
let nbtn3 = document.getElementById('btn-sal3');
let nbtn4 = document.getElementById('btn-sal4');
let nbtn5 = document.getElementById('btn-sal5');
let nbtn6 = document.getElementById('btn-sal6');
nbtn1.onclick = function () {
    DecreaseNum('present1');
}
nbtn2.onclick = function () {
    DecreaseNum('present2');
}
nbtn3.onclick = function () {
    DecreaseNum('present3');
}
nbtn4.onclick = function () {
    DecreaseNum('present4');
}
nbtn5.onclick = function () {
    DecreaseNum('present5');
}
nbtn6.onclick = function () {
    DecreaseNum('present6');
}

//The receipt Catalogue Function
function PrintReceipt(){
    let name = document.getElementById('elementname');
    let nam = document.getElementById('sum-name');
    nam.innerHTML = ' ' + name.value;
    for (i = 1; i < 7; i++){
        let eachElement = 'present' + i;
        let elementid = document.getElementById(eachElement);
        let elementVal = parseInt(elementid.innerHTML)
        if (elementVal >= 1)
        {
            let nem = document.createElement("tr");
            nem.innerHTML = `<td class="sum-tab-head">${products[i-1].name}</td><td class="sum-tab-head">${elementVal}</td>`
            let parentElem = document.getElementById("sum-quantity");
            parentElem.appendChild(nem);
        }
    }
}

//the submit and go the checkout
function Checkout(){
    let name = document.getElementById('elementname');
    let email = document.getElementById('email');
    let number = document.getElementById('pnumber');
    // let nam = document.getElementById('sum-name');
    // nam.innerHTML = name.innerHTML;
    let newnum = parseInt(document.getElementById('spa').innerHTML);
    if (newnum <= 0){
        NameVerification();
        EmailVerification();
        PNumberVerification();
        alert("Ohh...You haven't select anything.Please SELECT what you want to buy from the Cart Menu!");
    }
    else{
        if (!(name.value) || !(email.value) || !(number.value)){
            NameVerification();
            EmailVerification();
            PNumberVerification();
        }
        else {
            payWithPaystack();  
        }
            
    }

}


//Paystack Module for payment //NB: this is just for testing.
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {

  let handler = PaystackPop.setup({
    key: 'pk_test_d7550c1118c9fb6ecdd01e5ea47a7e1621ab54bc', // Replace with your public key
    email: document.getElementById("email").value,
    amount: document.getElementById('tamounnt').value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
        //response.reference
        RemovePopPay();
        PrintReceipt();
        DisplaySummary(response.reference);
    }
  });

  handler.openIframe();
}


