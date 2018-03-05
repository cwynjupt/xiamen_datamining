function getGoodsMessage(goodsMessage){	

var priceRange=[];
function dataRangeOfPrice(){
	this.range=0;
	this.count=0;
	this.id=[];
	this.shop=[];
	this.item_name=[];
	this.price=[];
	this.brand=[];
	this.season=[];
	}

//alert(goodsMessage[0].information.Shop);
(function (){
	for(var j=0;j<601;j+=20){
	var dataRange=new dataRangeOfPrice();
    for(var i=0;i<goodsMessage.length;i++){
	dataRange.range=j+20;
	if(goodsMessage[i].information.Price>j&&goodsMessage[i].information.Price<j+20)
	{
		dataRange.count++;
		dataRange.id.push(goodsMessage[i].id);
		dataRange.shop.push(goodsMessage[i].information.Shop);
		dataRange.item_name.push(goodsMessage[i].information.Item_name);
		dataRange.price.push(goodsMessage[i].information.Price);
		dataRange.brand.push(goodsMessage[i].information.Brand);
		dataRange.season.push(goodsMessage[i].information.Season);
	}
    }
    priceRange.push(dataRange);
	}
	return priceRange;
}());
/*
alert(priceRange[2].range);
alert(priceRange[2].count);
alert(priceRange[2].item_name[0]);
alert(priceRange[2].shop[0]);
/*
var goods={
		id:[],
		shop:[],
		item_name:[],
		price:[],
		brand:[],
		season:[]
};
for (var i=0;i<goodsMessage.length;i++){
	goods.shop.push(goodsMessage[i].information.Shop);
	goods.item_name.push(goodsMessage[i].information.Item_name);
	goods.price.push(goodsMessage[i].information.Price);
	goods.brand.push(goodsMessage[i].information.Brand);
	goods.season.push(goodsMessage[i].information.Season);
}
alert(goods.item_name[0]);
return goods;*/
return priceRange;
}
drawChartsOfPrice(getGoodsMessage(result));
