var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image(); 

var ane;
var fruit;

var mom;
var baby;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var bigTail = [];
var bigEye = [];
var bigBodyOra = [];
var bigBodyBlue =[];

var mx;
var my;

var data;

document.body.onload = game;
function game()
{
	document.body.addEventListener("click",start);
}

function start(){
	init();	
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init()
{
	document.body.removeEventListener("click",start);
	can1 = document.getElementById("canvas1");//fishes.dust,UI
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background,fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src = "src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
    ane = new aneObj();
    ane.init();

   	fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();
   
   	mx = canWidth *0.5;
   	my = canHeight *0.5;

   	for(var i = 0;i <8;i++)//小鱼数组
   	{
   		babyTail[i] = new Image;
   		babyTail[i].src = "./src/babyTail" + i +".png";
   	}
   	for(var i = 0;i<2;i++)
   	{
   		babyEye[i] = new Image;
   		babyEye[i].src = "./src/babyEye" + i +  ".png";
   	}
   	for(var i = 0; i<20;i++)
   	{
   		babyBody[i] = new Image;
   		babyBody[i].src = "./src/babyFade" +i +".png"; 
   	}

   	for(var i = 0;i <8;i++)//大鱼数组
   	{
   		bigTail[i] = new Image;
   		bigTail[i].src = "./src/bigTail" + i +".png";
   	}
   	for(var i = 0;i<2;i++)
   	{
   		bigEye[i] = new Image;
   		bigEye[i].src = "./src/bigEye" + i +  ".png";
   	}

   	data = new dataObj();
   	for(var i =0;i<8;i++)
   	{
   		bigBodyOra[i] = new Image;
   		bigBodyBlue[i] = new Image;
   		bigBodyOra[i].src = "./src/bigSwim" + i + ".png";
   		bigBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
   	}

   	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center"

}
function gameloop()
{
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime>40) deltaTime =40;
    drawBackground();
	ane.draw();
	fruit.draw();
	frutiMonitor();

	ctx1.clearRect(0,0,canWidth,canHeight);//每次画ctx1的时候清空一下
	mom.draw();
	momFrutisCollision();
	momBabyCollision()

	baby.draw();
	data.draw();
}

function onMouseMove(e)
{
	//layerX:FF特有，鼠标相对于“触发事件的元素的层级关系中离该元素最近的，设置了position的父元素”的边界的位置，从border的左上角开始定位，即如果这个父元素存在border，则坐标原点在border的左上角，而不是内容区域的左上角。 
	//offsetX:x：IE特有,跟layerX一个效果，可作为layerX的直接替换属性。  
	if(!data.gameOver)
	{
		if(e.offSetX || e.layerX)
		{
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}