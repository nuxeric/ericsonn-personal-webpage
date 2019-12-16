
var i = 0;
var message = 'Hello World!';
var speed = 80;
var backspace = false;
let delay = 25;

function typeWriter() {
    document.getElementById("hello-world-typing-span").innerHTML = message.substr(0, i);
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





typeWriter();


var cursor = true;
var speed2 = 220;
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    }else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed2);


