
var i = 0;
var message = 'Hello World!';
var speed = 50;
var backspace = false;
let delay = 25;

function typeWriter() {
    document.getElementById("hello-world-typing-p").innerHTML = message.substr(0, i);
    if (i > message.length + delay) {
        backspace = true;
    }
    if (i === 0) {
        backspace = false;
    }
    if (backspace) {
        i--;
    } else {
        i++;
    }
    setTimeout('typeWriter()', speed);
}

function grabDate() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    console.log(date);
    console.log(time);
    console.log(date.getFullYear() , date.getMonth() , date.getDate() )
    var arr = [date.getFullYear() , date.getMonth() , date.getDate()]
    var i;
    for (i = 0; i < arr.length; i++) {
        document.getElementById('landing-page-lower-calandar-atag').innerHTML += arr[i];
        document.getElementById('landing-page-upper-calandar').innerHTML += arr[i];
        if ( i === arr.length - 1 ) {
            // nothing here
        } else {
            document.getElementById('landing-page-lower-calandar-atag').innerHTML += ".";
            document.getElementById('landing-page-upper-calandar').innerHTML += ".";
        }
    }

}

grabDate();


typeWriter();


var cursor = true;
var speed = 220;
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    }else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);


