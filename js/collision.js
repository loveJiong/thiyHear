//判断大鱼和果实的距离，若距离小于某个值则吃掉，大于该值继续运动
function momFrutisCollision()
{
	if(!data.gameOver)
	{
		for(var i =0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l< 900)
				{
					//fruti eaten
					fruit.dead(i);
					data.fruitNum++; 
					mom.bigBodyCount++;
					if(mom.bigBodyCount>7)
					{
						mom.bigBodyCount = 7;
					}
					if(fruit.fruitType[i] == "blue")
					{
						data.double = 2;
					}

				}
			}
		}
	}
}
//mom baby momBabyCollision
function momBabyCollision()
{
	if(data.fruitNum >0 && !data.gameOver)
	{
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l <900)
		{

			//baby recover
			baby.babyBodyCount = 0;
			//score update
			mom.bigBodyCount = 0;
			data.addScore();
		
		}
	}
}