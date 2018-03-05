function drawChartsOfPrice(priceRange){
//    var date = [];  
//    var consume = []; 
//    for(var i=0;i<data.length;i++){
//      date.push(data[i].date);
//      consume.push(data[i].consume);
//    }
var range=[];
for(var i=0;i<priceRange.length;i++)
range.push(priceRange[i].range);
var count=[];
for(var i=0;i<priceRange.length;i++)
count.push(priceRange[i].count);
require.config({
	paths:{
		'echarts': 'js/echarts/dist',	
		}
	});
	require([
	'echarts',
	'echarts/chart/line',
	'echarts/chart/bar'
	],
	function(ec){
		var myChart=ec.init(document.getElementById("main2"));
		myChart.showLoading({
			text:'正在加载中。。。',
			effect:'whirl'
			}
		);
		var option1={
			title:{
				text:"价格分布"
				
				},
				tooltip:{
					trigger:'axis'
					},
					toolbox:{
						show:true,
						orient : 'vertical',
                        x: 'left', 
                        y: 'center',
						feature : {
                            mark : {show: true},
                            dataView : {show:true,readOnly:false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                            }
						},
					    dataZoom : {
							show:true,
                            realtime: true,
                            start : 10,
                            end : 60
                            },
						caculable:true,
						xAxis:[{
							type:'category',
//							data:date.sort()
							data:range
							}],
							yAxis:[{
								type:'value'
								}],
								series:[{
									name:'计数',
									type:'bar',
									data:count
//									data:consume
									}]
			};
			setTimeout(function (){
                myChart.hideLoading();
                myChart.setOption(option1);
			//	window.onresize = myChart.resize;
			 window.addEventListener("resize",function(){
                                      myChart.resize();

                });
                },220);
				myChart.on('click',function(param){
				//	document.getElementById("tableBorder").style.display="";
					document.getElementById("titlex").style.display='block';
					document.getElementById("pageb").style.display='block';
						
	            //  alert(param.name);
					var index=(param.name-20)/20;
					var low=param.name-20;
					var high=param.name;
					var tbl = "";
					tbl+="<thead><tr><th>价格范围</th><th>商品名称</th><th>店铺</th><th>价格</th><th>品牌</th><th>季节</th></thead><tbody>";
                 	for(i=0;i<priceRange[index].count;i++){
						var td="";
					    {
						td=td+"<td>"+low+"-"+high+"</td>";
						td+="<td>"+priceRange[index].item_name[i]+"</td>";
						td+="<td>"+priceRange[index].shop[i]+"</td>";
						td+="<td>"+priceRange[index].price[i]+"</td>";
						td+="<td>"+priceRange[index].brand[i]+"</td>";
						td+="<td>"+priceRange[index].season[i]+"</td>";
					    }
					    tbl+="<tr>"+td+"</tr>";
					}
					tbl+="</tbody>";
                    document.getElementById("table").innerHTML = tbl;	
					
					display(priceRange[index].count);
                    				
	                });

		});
}
		

