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
// Not display Element
function NotDisplayElem(elementid)
{
    let element = document.getElementById(elementid);
    element.style.display = 'none';
}


//Increse each body element
function IncreaseNum(elementid)
{
    let element = document.getElementById(elementid);
    let coun = parseInt(element.innerHTML);
    coun++;
    element.innerHTML = coun;
}
// Decrease each body element
function DecreaseNum(elementname)
{
    let last = elementname.charAt(elementname.length - 1);
    console.log(last);
    let element = document.getElementById(elementname);
    let coun = parseInt(element.innerHTML);
    if (coun >= 2)
    {
        coun--;
        element.innerHTML = coun;
    }
    else
    {
        alert(`The quantity can't be less than 1 and it will be removed,So if you still eant to buy it add the item back in the aAdd to Cart Menu. Thank you!:`);
        let elel = 'pixel' + last;
        let p = 'p' + last;
        // console.log(p);
        // console.log(elel);
        RemoveFromCart(p, elel);
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


function RemoveFromCart(elementid, elementname) {
    let Para = document.getElementById(elementid);
    let counter = document.getElementById('spa');
    let lastem = elementid.charAt(elementid.length - 1);
    // console.log(elementid);
    // console.log(lastem);
    let newelem = 'present' + lastem;
    console.log(newelem);
    // console.log(elementname);

    if (Para.innerHTML === 'ADD TO CART') {
        DisplayElem(elementname);
        count = count + 1;
        counter.innerHTML = count;
        Para.innerHTML = "REMOVE FROM THE CART";
        Para.style.backgroundColor = " #FF7A00";
        let newelement = document.getElementById(newelem);
        newelement.innerHTML = 1;
    }
    else {
        NotDisplayElem(elementname);
        //let newelement = document.getElementById(newelem);
        //newelement.innerHTML = 0;
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

//calling each element with its dom
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

//calling each increment with its dom
let btn1 = document.getElementById('btn-sale1');
let btn2 = document.getElementById('btn-sale2');
let btn3 = document.getElementById('btn-sale3');
let btn4 = document.getElementById('btn-sale4');
let btn5 = document.getElementById('btn-sale5');
let btn6 = document.getElementById('btn-sale6');
btn1.onclick = function(){
    IncreaseNum('present1');
}
btn2.onclick = function(){
    IncreaseNum('present2');
}
btn3.onclick = function(){
    IncreaseNum('present3');
}
btn4.onclick = function(){
    IncreaseNum('present4');
}
btn5.onclick = function(){
    IncreaseNum('present5');
}
btn6.onclick = function(){
    IncreaseNum('present6');
}
//calling each increment with its dom
let nbtn1 = document.getElementById('btn-sal1');
let nbtn2 = document.getElementById('btn-sal2');
let nbtn3 = document.getElementById('btn-sal3');
let nbtn4 = document.getElementById('btn-sal4');
let nbtn5 = document.getElementById('btn-sal5');
let nbtn6 = document.getElementById('btn-sal6');
nbtn1.onclick = function(){
    DecreaseNum('present1') ;
}
nbtn2.onclick = function(){
    DecreaseNum('present2') ;
}
nbtn3.onclick = function(){
    DecreaseNum('present3') ;
}
nbtn4.onclick = function(){
    DecreaseNum('present4') ;
}
nbtn5.onclick = function(){
    DecreaseNum('present5') ;
}
nbtn6.onclick = function(){
    DecreaseNum('present6') ;
}
