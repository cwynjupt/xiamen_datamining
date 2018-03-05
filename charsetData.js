function getValue(){
var data=[{"design":"其他","num":2370},{"design":"条纹","num":1882},{"design":"纯色","num":4987}];
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