$("#brand").combobox({
	value:null;
	filter:function(q,row){
		var opts=$(this).combobox('getText');
		var listdata=$.data(this,"combobox");
		var rowdata=listdata.data;
		
		for(var i=0;i<rowdata.length;i++)
		{
			var rows=rowdata[i];
			var txt_val=rows["text"];
			if(txt_val.toLowerCase()==txt_Box.toLowerCase()){
				$("#brand").combobox("setValue",rows['value']);
				$('#brand').val(rows['value']);
				return;
			}
		}
		$("#brand").val(null);
		$("#brand").combobox("setValue",null);
		$("#brand").combobox("setText","");
	}
});
$("#brand").val(null);
$("#brand").combobox("setText","");
function showValue(){
	var gval=$("#brand").combobox("getValue");
	var gtxt=$("#brand").combobox("getText");
	var val=$("#brand").val();
	alert("getValue:" + gval + "\ngetText:" + gtxt + "\nval:" + val);
}