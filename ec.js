function drawCharts(data){
//    var date = [];  
//    var consume = []; 
//    $.ajaxSettings.async = false;  //ͬ同步加载
//    for(var i=0;i<data.length;i++){
//      date.push(data[i].date);
//      consume.push(data[i].consume);
//    }
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
		var myChart=ec.init(document.getElementById("main1"));
		myChart.showLoading({
			text:'正在加载中。。。',
			effect:'bar'
			}
		);
		var option={
			title:{
				text:"时间-销量"
				
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
                            show : true,
                            realtime: true,
                            start : 50,
                            end : 60
                            },
						caculable:true,
						xAxis:[{
							type:'category',
//							data:date.sort()
							data:data.date.sort()
							}],
							yAxis:[{
								type:'value'
								}],
								series:[{
									name:'销量',
									type:'line',
									smooth:true,
									data:data.consume
//									data:consume
									}]
			};
			setTimeout(function (){
                myChart.hideLoading();
                myChart.setOption(option);
			//	window.onresize = myChart.resize;
			 window.addEventListener("resize",function(){

                                      myChart.resize();

                });
                },220);
		}
	);
}
