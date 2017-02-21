var aneObj = function()
{
	this.x = [];
	this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	for(var i = 0;i < this.num; i++)
	{
		this.x[i] = i *16 + Math.random()*20;//[0,1)
		this.len[i] = 200 + Math.random()*50;

	}
}
aneObj.prototype.draw = function()
{
	ctx2.save();//只有在这个api里面，以下属性才有用。
	ctx2.globalAlpha = 0.6;//透明度
	ctx2.lineWidth = 20;//线条宽度
	ctx2.lineCap = "round"//线条结束端样式
	ctx2.strokeStyle = "#3b154e";
	for(var i = 0;i <this.num;i++)
	{
		//beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		ctx2.stroke();	
	}
	ctx2.restore();

}