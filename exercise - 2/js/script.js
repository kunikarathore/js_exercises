// this is to find the class of seconds hand
var handSec =  document.querySelector('.seconds');

// this is to find the class of minutes hand
var handMin =  document.querySelector('.minutes');

// this is to find the class of hours hand
var handHour =  document.querySelector('.hours');



// ==========  function for seconds =================
var x =90;
function getSec() {
    //var date = new Date();
    //var seconds = date.getSeconds();
   // console.log(seconds);
handSec.style.transform = 'rotate('+x+'deg)';
//x++;
x = x+6;
//console.log(x);

}

// ==========  function for minutes =================
var y =90;
function getMin() {
    //var date = new Date();
    //var seconds = date.getSeconds();
   // console.log(seconds);
handMin.style.transform = 'rotate('+y+'deg)';
//x++;
y = y+6;
console.log(y);

}


// ==========  function for hours =================
var z =90;
function getMin() {
    //var date = new Date();
    //var seconds = date.getSeconds();
   // console.log(seconds);
handHour.style.transform = 'rotate('+z+'deg)';
//x++;
z = z+6;
console.log(z);

}

setInterval(getSec, 1000);
setInterval(getMin, 60000);
setInterval(getMin, 600000);