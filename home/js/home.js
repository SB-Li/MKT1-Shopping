app.controller('homeCtrl',['$scope','$http','dataService','$timeout','$location',function($scope,$http,dataService,$timeout,$location){
	$http.get('JSON/home.json')
		.success(function(req){
			dataService.homeData=req;
			$scope.banner=dataService.homeData.banner;
			$scope.adv=dataService.homeData.adv;
			$scope.recommend=dataService.homeData.recommend;
			$scope.upToday=dataService.homeData.upToday;
			$timeout(dataService.swipe,1000);
			if ($location.path()=='/upToday') {
				document.querySelectorAll('footer ul li')[0].className='footer_over';
			}
		})
}])