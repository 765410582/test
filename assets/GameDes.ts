// 围棋
/**
 * 
 * 围棋算法原理(每个小节都可以封装到一个函数中)
1.判断是否可以清除
	<1>.设置整个棋盘标记数组
	<2>.记录落子四个方向由对方棋子的数据
	<3>.对2中数据进行四方向同类相邻数据收集
	<4>.检测3中是否有消除棋子区域并收集数据
	<5>.有消除数据执行2中<2><3>
	
2.没有消除检测是否违规	
	<1>.4中没有消除棋子区域，判断落子是否合规
	<2>.清除4中棋盘消除区域
	<3>.切换落子 流程结束
	
效率问题：
	1.不需要遍历整个棋盘
	2.数据说话 
	<1>消除一个周围没有任何相邻的循环次数是4
	<2>消除二个周围没有任何相邻的循环次数是7
	<2>消除三个周围没有任何相邻的循环次数是10
	<2>消除四个周围没有任何相邻的循环次数是15
	<2>消除五个周围没有任何相邻的循环次数是16
	3.目前判断消除和检测违规数据没有共享，如果共享的话也会整体减少次数
	4。所以提升部分是数据共享
	5.这种棋盘类游戏多用while 少用递归

3.为解决问题：：1.胜利问题 2.AI对下
 * 
*/

// 射击游戏
/**
 * 1.难点：子弹弹幕 子弹碰撞检测（Cocos 2d物理引擎 移动位置导致闪烁抖动）
 * 2.优化：子弹和敌人的回收 
 * 3.为解决问题： 无
 * */ 

// 画布游戏
/**
 *  1.难点: 像素点读取  像素点绘制  像素灰值模糊  像素区域分离 
 *  2.优化：上面显示内容太慢
 *  3.为解决问题： 无 
 * 
 * */ 

// 写文字游戏
/**
 *  1.难点：解析文字的json 渲染文字 文字词义
 *  2.优化：可以文字一样，有重笔有轻笔效果
 *  3.为解决问题： 书写 擦除
*/
