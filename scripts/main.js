/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

//==================
/*var iceCream = 'Chocolate'
if (iceCream === 'Chocolate')
    alert('Yay, I love Chocolate ice cream');
else
    alert('Anything is ok');

//=====================
function multiply(number1, number2) {
    var result;
    result = number1 * number2;
    return result;
}
//alert(multiply(7, 14));
//alert(multiply(10, 20));*/

//====================
document.querySelector('h1').onclick = function() {
    alert('Opp, stop pocking me!');
}

// Change image
var changeImage = document.querySelector('img');
changeImage.onclick = function() {
    var mySrc = changeImage.getAttribute('src');
    if (mySrc === 'images/cute1.svg')
        changeImage.setAttribute('src', 'images/cute3.svg');
    else
        changeImage.setAttribute('src', 'images/cute1.svg');
}

//Change user
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUsername() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcom ' + myName + ' to my Web page';
}
if (!localStorage.getItem('name')) {
    setUsername();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcom ' + storeName + ' to my Web page';
}

myButton.onclick = function() {
    setUsername();
}