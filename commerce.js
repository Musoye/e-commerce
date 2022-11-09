var count = 0;
var totalCost = document.getElementById('amounted');
totalCost.innerHTML = 0;

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
// displaying element
function DisplayElem(elementid) 
{
    let element = document.getElementById(elementid);
    element.style.display = 'block';
}
function NotDisplayElem(elementid)
{
    let element = document.getElementById(elementid);
    element.style.display = 'none';
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


function RemoveFromCart(elementid, elementname) {
    let Para = document.getElementById(elementid);
    let counter = document.getElementById('spa');
    // console.log(elementname);

    if (Para.innerHTML === 'ADD TO CART') {
        DisplayElem(elementname);
        count = count + 1;
        counter.innerHTML = count;
        Para.innerHTML = "REMOVE FROM THE CART"
        Para.style.backgroundColor = " #FF7A00";
    }
    else {
        NotDisplayElem(elementname);
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            Para.innerHTML = 'ADD TO CART';
            Para.style.backgroundColor = " #FF7A00";
        } else {
            count = 0;
            counter.innerHTML = count;
            Para.innerHTML = 'ADD TO CART';
            Para.style.backgroundColor = " #FF7A00";
        }
    }
}
//let q = RemoveFromCart('p1', 'nomen1');
let button1 = document.getElementById('p1');
let button2 = document.getElementById('p2');
let button3 = document.getElementById('p3');
let button4 = document.getElementById('p4');
let button5 = document.getElementById('p5');
let button6 = document.getElementById('p6'); 
button1.onclick = function(){
    RemoveFromCart('p1', 'pixel1');  
}
button2.onclick = function(){
    RemoveFromCart('p2', 'pixel2');  
}
button3.onclick = function(){
    RemoveFromCart('p3', 'pixel3');  
}
button4.onclick = function(){
    RemoveFromCart('p4', 'pixel4');  
}
button5.onclick = function(){
    RemoveFromCart('p5', 'pixel5');  
}
button6.onclick = function(){
    RemoveFromCart('p6', 'pixel6');  
}