app.controller('categoryCtrl',['$scope','$http','$location','dataService',function($scope,$http,$location,dataService){
	$http.get('JSON/category.json')
		.success(function(req){
			dataService.categoryData=req;
			$scope.category=dataService.categoryData.category;
			$location.path('/category/ladies');
			$scope.back=$location.path().split('/')[2];
		});
	$http.get('JSON/ladies.json')
		.success(function(req){
			dataService.ladiesData=req.ladies
			$scope.ladies=dataService.ladiesData;
			
		});
	$scope.addCar = function(x){
        dataService.addCar(x.id);
    }
}])
app.config(['$stateProvider',function($stateProvider){
	$stateProvider
            .state('/category.ladies',{
                url:'/ladies',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-ladies.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.men',{
                url:'/men',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-men.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.shoes',{
                url:'/shoes',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-shoes.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.home',{
                url:'/home',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-home.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.beauty',{
                url:'/beauty',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-beauty.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.digital',{
                url:'/digital',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-digital.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.children',{
                url:'/children',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-children.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.baby',{
                url:'/baby',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-baby.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.bags',{
                url:'/bags',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-bags.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.foods',{
                url:'/foods',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-foods.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.bras',{
                url:'/bras',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-bras.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.textiles',{
                url:'/textiles',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-textiles.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.accessories',{
                url:'/accessories',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-accessories.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.motion',{
                url:'/motion',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-motion.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.elderly',{
                url:'/elderly',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-elderly.html',
						 css:'./category/css/category.css'
                	}
                }
            })
            .state('/category.ladiesAll',{
                url:'/ladiesAll',
                views:{
                	'category_view':{
                		templateUrl : './category/category-page/category-page-all/ladiesAll.html',
                		css:'./category/category-page/category-page-all/css/category-pageAll.css'
                	}
                }
            })
            
}]);