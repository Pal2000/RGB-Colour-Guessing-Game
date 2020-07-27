var numSq=6;
var colors=[];
var pickedColor;
var ClickedColor;
//var colors= generateColor(numSq);
//var pickedColor=pickColor();

var squares=document.querySelectorAll(".square");
var ColorDisplay=document.getElementById("rgb");
var remark=document.getElementById("remark");
var h=document.querySelector("h1");
ColorDisplay.textContent=pickedColor;
var resetbtn=document.getElementById("reset");
var modebtn=document.querySelectorAll(".mode");

init();  /* firsly init() will run for initializing*/

function init(){
	setUpmodebtn();
	setUpsquares();
	reset();
}

function setUpmodebtn(){
	for(var i=0;i<modebtn.length;i++)
	{
	modebtn[i].addEventListener("click",function(){
	modebtn[0].classList.remove("select");
	modebtn[1].classList.remove("select");
	this.classList.add("select");
	this.textContent==="Easy" ? numSq=3:numSq=6;
	reset();
	});
	}
}

function reset(){
	colors=generateColor(numSq);
	pickedColor=pickColor();
	ColorDisplay.textContent=pickedColor;
	remark.textContent="";
	resetbtn.textContent="New Game";
	for(var i=0;i<squares.length;i++)
	{
	if(colors[i]){
	squares[i].style.display="block";
	squares[i].style.background=colors[i];}
	else
	{ squares[i].style.display="none";}
	}
	h.style.background="steelblue";
}

resetbtn.addEventListener("click", function(){
	reset();
});

function setUpsquares(){
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	ClickedColor=this.style.background;
	if(pickedColor===ClickedColor)
	{  
	     remark.textContent="Well Done!!";
	     changeColor(ClickedColor);
	     resetbtn.textContent="Play Again";
	}
	else
	{  remark.textContent="Try Again!!";
		this.style.background="#232323";}
	});
	}
}

function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
	h.style.background=color;
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}