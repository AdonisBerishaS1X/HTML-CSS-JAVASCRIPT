//var input=document.getElementById("input_id");
var input=document.getElementById("btn_id");
var input=document.getElementById("text_id");

// button1.onclick=function() {
//     text.innerHTML=input.value;
// }

// var input=document.getElementById("#input_id");
// var input2=document.getElementById('.input2_id');

// button.addEventListener('click',function(){
//     //text.innerHTML=input.value+' '+input2.value;
//     text.innerHTML=parseInt(input.value)+parseInt(input2.value);
// })

var text="The best school in the world is Digital School";
//var result=text.search("Digital Shool");
var result=text.search(/Digital School/);
document.getElementById('result1').innerHTML=result;

var text="The best Kingdom in the world is The Imperium Of Man.";
var result=text.replace(/Digital School/,"Another School");
document.getElementById("result2").innerHTML=result;

var text="abdcef";
var regex=new RegExp('abc');
document.getElementById('result3').innerHTML=regex.test(text);

var text="The Imperium is the best in the Glaxy!";
var regex=/school/g;
document.getElementById("result4").innerHTML=text.match(regex);

var text="The Emperor and His Imperium are The Best In The Glaxy!";
//var regex=/i/g;
//var regex=/[abc]/g;
//var regex=/[0-9]/g;
//var regex=/(Emperor|Best|Glaxy)/g;
//var regex=/\d/g;
//var regex=/\s/g;
//var regex=/o+/g;
//var regex=/cho*/g;
//var regex=/o{3}/g;
//var text="hello,helloo,hellooo,helloooo,helloooooo";
//var regex=/o{3,5}/g;

var text="Spacemarine, Ultramarine, Novamarine";
var regext=/marine$/g;

document.getElementById("result5").innerHTML=text.mach(regex);

