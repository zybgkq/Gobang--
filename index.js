var chess; //放棋子的对象
var gird; //纪律棋盘是否有棋子，是什么棋子
var girdWidth = 15; //棋盘上的落子的数
var count = 0; //判断当前是白棋还是黑棋
// 初始化棋盘
function init(){
	// 二维数组
  	gird = new Array(girdWidth);
  	// 棋盘X,Y轴
  	for (var i = 0; i < gird.length; i++) {
  		gird[i] = new Array(girdWidth);
  		for(var j = 0; j < gird[i].length; j++){
  			gird[i][j] = createGird(i,j)
  			chess.appendChild(gird[i][j]);
  			// 每个落子区域的点击事件
  			gird[i][j].onclick = function(){
  				//判断已经有棋子了后直接返回
  				if (this.value > 0) {
  					return
  				}
  				// 第一次落下是白棋还是黑棋
  			this.style.backgroundImage = "url(image/"+ (count % 2 + 1)+".png)";
  			// 当前落子之后不能重复落子，当前点击的棋子颜色
  			this.value = count % 2 +1;
  			//判断棋子颜色，否则一直都是黑棋
  			count+=1;
  		}

  	}
  }
}
// 创建棋盘落子节点
function createGird(x,y){
	// 创建元素
	var div = document.createElement("div");
	div.classList.add('gird');
	div.style.left = (7 + x * 50 )+ "px";
    div.style.top = (7 + y * 50) + "px";
    //0为空位，1为黑子，2为白子
    div.value = 0;
    return div;
}
window.onload = function(){
	chess = document.getElementById("chess");
	init()
}