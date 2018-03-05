// JavaScript Document
function drawChartsOfCharset(data){
	
 require.config({
		 paths: {
			   'echarts': 'js/echarts/dist',			   
			  }
		  });
	require(
	[
	'echarts',
	'echarts/chart/wordCloud'
	],
	function(ec){
		var myChart = ec.init(document.getElementById("main_charset"));
        
		// JavaScript Document
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
var dataValue=[];
function dataCount(){
	this.name=null;
	this.value=0;
	this.itemStyle=null;
}
for(var i=0;i<data.design.length;i++){
	var dataCountV=new dataCount();
		dataCountV.name=data.design[i];
		dataCountV.value=data.num[i];
		dataCountV.itemStyle=createRandomItemStyle();
		dataValue.push(dataCountV);
	}

var option = {
    title: {
        text: ''
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '数据库数据的价值量',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
		
        autoSize: {
            enable: true,
            minSize: 14
        },
        data:
		     dataValue
		
		/*
		[
		    (function(){
			for(var i=0;i<data.design.length;i++)
            {
                name: data.design[i],
                value: data.num[i],
                itemStyle: createRandomItemStyle()
			
            }
			})()
			]*/
    }]
};
                    
                    
		myChart.setOption(option);
		window.addEventListener("resize",function(){

                                      myChart.resize();

                });
	});// JavaScript Document
	}