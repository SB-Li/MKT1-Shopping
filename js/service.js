app.factory("dataService", function() {
	var obj={
		homeData:[],
		categoryData:[],
		ladiesData:[],
		goodData:[],
		carData:[],
		swipe:function()  {
			var mySwipe = new Swiper('.swiper-container',{
					pagination: '.swiper-pagination',
					autoplay: 2500
				});
		},
		addCar:function(id){

            for(var i in this.ladiesData){
                if(this.ladiesData[i].id == id){
                    this.carData.push(this.ladiesData[i]);
                }
            }
        },
        removeCar:function(id){
            for(var i in this.carData){
                if(this.carData[i].id == id){
                    this.carData.splice(i,1);
                }
            }
        }
	}
	return obj
});