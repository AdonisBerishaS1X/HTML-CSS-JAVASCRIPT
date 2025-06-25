console.log("----------------------for==----------------------")
for(var i = 0; i<10; i++) {
    console.log("Vlera e variables i eshte:"+i);
}

console.log("---------------for-in--------------------");

var person = {fisrtname:"Rladoron",lastname:"The First Captain", age:565}
var text = "";
var z;

for(z in person) {
    text += person[z];
}

console.log(text);

console.log("----------------------for-of------------------");

var names = ['Jon', 'Enes','Anik','Adonis','Blendi','Gerti'];
var x;

for(x of names){

    document.write(x+"<br>")
    console.log(x);


}

console.log("----------------do-while-----------------");

var a = 0;
do{

    a += 1;
    console.log(a);
}
while(a<5);

console.log("------------------while----------------");

var b=0;
while(b < 3) {
    b +=1;     
}

console.log(b);


