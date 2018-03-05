function getData(data){
	
var str={
		date:[],
		consume:[]
};
for(var i=0;i<data.length;i++){
	str.date.push(data[i].date);
	str.consume.push(data[i].consume);
	
}
return str;
}
drawCharts(getData());
