var count = 0;

// Our Element and their properties
var products = [   
    {
        index:1,
        id:'p1',
        name:'Samsung TV',
        price:500000
    },
    {
        index:2,
        id:'p2',
        name:'Pixel 4a',
        price:250000
    },
    {
        index:3,
        id:'p3',
        name:'PS 5',
        price:300000
    },
    {
        index:4,
        id:'p4',
        name:'MacBook Air',
        price:800000
    },
    {
        index:5,
        id:'p5',
        name:'Apple Watch',
        price:95000
    },
    {
        index:6,
        id:'p6',
        name:'Air Pods',
        price:75000
    }

];


//Displaying and nullifying the pop-up page
function displayPopPay() {
    var pop = document.getElementById('pay');
    pop.style.display = 'block';
}
function RemovePopPay() {
    location.reload();
}


function AddElement() {
    var add = document.getElementsByClassName('sal').innerHTML;
    console.log(add)
    // add1 = add1 + 1
    // var addEl = document.getElementsByClassName('sal');
    // addEl.innerHTML = add1;
    // console.log(addEl.innerHTML)
};


//Adding and Removing from cart
function RemoveFromCart1() {
    var ParaOne =document.getElementById('p1');
    var counter = document.getElementById('spa');
    if (ParaOne.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaOne.innerHTML ="REMOVE FROM THE CART";
        ParaOne.style.backgroundColor=" #FF7A00";

        // To add the element to the pop-up
        // var add1 = 1;
        // add1 = add1 + 1
        // var addEl = document.getElementsByClassName('sal');
        // addEl.innerHTML = add1;

        //The created element to the body section
        var nem1 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem1);
        nem1.innerHTML =`<td>${products[0].name}</td><td>${products[0].price}</td><td id="sal"><button id="btn-sale">-</button><span id="sal" class="sal">1</span><button id="btn-sale" onclick="AddElement()" class="btn1">+</button></td>`;
        
        
    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaOne.innerHTML = 'ADD TO CART';
            ParaOne.style.backgroundColor=" #FF7A00";
        } else {
            count = 0;
            counter.innerHTML = count;
            ParaOne.innerHTML = 'ADD TO CART';
            ParaOne.style.backgroundColor=" #FF7A00";
        };
    };
};
function RemoveFromCart2() {
    var ParaTwo =document.getElementById('p2');
    var counter = document.getElementById('spa');
    if (ParaTwo.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaTwo.innerHTML ="REMOVE FROM THE CART";
        ParaTwo.style.backgroundColor=" #FF7A00";
        // To add the element to the pop-up
        var nem2 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem2);
        nem2.innerHTML =`<td>${products[1].name}</td><td>${products[1].price}</td><td id="sal"><button id="btn-sale">-</button><span id="sal">1</span><button id="btn-sale">+</button></td>`;
    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaTwo.innerHTML = 'ADD TO CART';
            ParaTwo.style.backgroundColor=" #FF7A00";

        } else {
            count = 0;
            counter.innerHTML = count;
            ParaTwo.innerHTML = 'ADD TO CART';
            ParaTwo.style.backgroundColor=" #FF7A00";
        };
    };
};
function RemoveFromCart3() {
    var ParaThree =document.getElementById('p3');

    var counter = document.getElementById('spa');
    if (ParaThree.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaThree.innerHTML ="REMOVE FROM THE CART";
        ParaThree.style.backgroundColor=" #FF7A00";
        // To add the element to the pop-up
        var nem3 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem3);
        nem3.innerHTML =`<td>${products[2].name}</td><td>${products[2].price}</td><td id="sal"><button id="btn-sale">-</button><span id="sal">1</span><button id="btn-sale">+</button></td>`;
    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaThree.innerHTML = 'ADD TO CART';
            ParaThree.style.backgroundColor=" #FF7A00";

        } else {
            count = 0;
            counter.innerHTML = count;
            ParaThree.innerHTML = 'ADD TO CART';
            ParaThree.style.backgroundColor=" #FF7A00";
        };
    };
};
function RemoveFromCart4() {
    var ParaFour =document.getElementById('p4');

    var counter = document.getElementById('spa');
    if (ParaFour.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaFour.innerHTML ="REMOVE FROM THE CART";
        ParaFour.style.backgroundColor=" #FF7A00";

        // To add the element to the pop-up
        var nem4 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem4);
        nem4.innerHTML =`<td>${products[3].name}</td><td>${products[3].price}</td><td ><button id="btn-sale">-</button><span id="sal">1</span><button id="btn-sale">+</button></td>`;

    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaFour.innerHTML = 'ADD TO CART';
            ParaFour.style.backgroundColor=" #FF7A00";
        } else {
            count = 0;
            counter.innerHTML = count;
            ParaFour.innerHTML = 'ADD TO CART';
            ParaFour.style.backgroundColor=" #FF7A00";
        };
    };
};
function RemoveFromCart5() {
    var ParaFive =document.getElementById('p5');

    var counter = document.getElementById('spa');
    if (ParaFive.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaFive.innerHTML ="REMOVE FROM THE CART";
        ParaFive.style.backgroundColor=" #FF7A00";
        // To add the element to the pop-up
        var nem5 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem5);
        nem5.innerHTML =`<td>${products[4].name}</td><td>${products[4].price}</td><td id="sal"><button id="btn-sale">-</button><span id="sal">1</span><button id="btn-sale">+</button></td>`;

    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaFive.innerHTML = 'ADD TO CART';
            ParaFive.style.backgroundColor=" #FF7A00";

        } else {
            count = 0;
            counter.innerHTML = count;
            ParaFive.innerHTML = 'ADD TO CART';
            ParaFive.style.backgroundColor=" #FF7A00";
        };
    };
};
function RemoveFromCart6() {
    var ParaSix =document.getElementById('p6');

    var counter = document.getElementById('spa');
    if (ParaSix.innerHTML == 'ADD TO CART') {
        count = count + 1
        counter.innerHTML = count;
        ParaSix.innerHTML ="REMOVE FROM THE CART";
        ParaSix.style.backgroundColor=" #FF7A00";
        // To add the element to the pop-up
        var nem6 = document.createElement("tr");
        document.querySelector('tbody').appendChild(nem6);
        nem6.innerHTML =`<td>${products[5].name}</td><td>${products[5].price}</td><td id="sal"><button id="btn-sale">-</button><span id="sal">1</span><button id="btn-sale">+</button></td>`;
    } else {
        if (count > 0) {
            count = count - 1;
            counter.innerHTML = count;
            ParaSix.innerHTML = 'ADD TO CART';
            ParaSix.style.backgroundColor=" #FF7A00";

        } else {
            count = 0;
            counter.innerHTML = count;
            ParaSix.innerHTML = 'ADD TO CART';
            ParaSix.style.backgroundColor=" #FF7A00";
        };
    };
};

