function getValue(){
var data=[{"design":"其他","num":2370},{"design":"条纹","num":1882},{"design":"纯色","num":4987},{"design":" 修身型 ","num":11313},
{"design":" 标准型（腰围=胸围）","num": 3837 },{"design":"宽松型 ","num":1065},{"design":"青春休闲","num": 5839},{"design":" 商务休闲","num": 3748},
{"design":"时尚休闲","num": 2859},{"design":"POLO衫 ","num":3426},{"design":"T恤 ","num":2919},{"design":"衬衫","num": 2779},
{"design":"翻领","num":5355},{"design":"圆领","num":3859},{"design":"V领 ","num":2011},{"design":" 简约  ","num":7599},
{"design":"拼色  ","num": 694},{"design":"拼接 ","num":517 } ,{"design":"免烫","num":1563},{"design":"水洗 ","num":1097},{"design":"印花","num":734}];
var dataValue={
	design:[],
	num:[]
	
};
for(var i=0;i<data.length;i++){
	dataValue.design.push(data[i].design);
	dataValue.num.push(data[i].num);
}
return dataValue;
}
drawChartsOfCharset(getValue());