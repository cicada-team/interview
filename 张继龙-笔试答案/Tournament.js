接收到这样的字符串 Allegoric Alaskans;Blithering Badgers;win
首先string.split(";")，可以渠道主队、客队、胜负情况
一个全局记录 const records = [];
一个记录队伍比赛次数的对象mp，以队伍名做key, 出现的次数value
有这样一个方法

function record(race) {
	//TODO: 参数类型检查

	const res = race.split(";");

	//TODO: 数组越界检查
	
	//TODO: 出现的次数 + 1;

	//TODO: 分别看res[0] 和 res[2] 的情况，记录分数

	//TODO: 插入数组


}


输出部分，一个table解决，遍历数组输出，MP从对象mp里读