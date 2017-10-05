var app=angular.module('app',['ui.router','angularCSS']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
            .state('/home',{
                url:'/home',
                views:{
                	'one':{
                		templateUrl : './home/home.html',
		                controller:'homeCtrl',
						css:'./home/css/home.css'
                	}
                }
            })
            .state('/category',{
            	url:'/category',
            	views:{
                	'one':{
                		templateUrl : './category/category.html',
		                controller:'categoryCtrl',
						css:'./category/css/category.css'
                	}
               }           	
            })
            .state('/car',{
            	url:'/car',
            	views:{
                	'one':{
                		templateUrl : './car/car.html',
		                controller:'carCtrl',
		                css:'./car/css/car.css'
                	}
               }           	
            })
            .state('/user',{
            	url:'/user',
            	views:{
                	'one':{
                		templateUrl : './user/user.html',
                        controller:'userCtrl',
		                css:'./user/css/user.css'
                	}
               }           	
            })
            .state('/upToday',{
            	url:'/upToday',
            	views:{
                	'one':{
                		templateUrl : './home/adv/upToday.html',
                		controller:'homeCtrl',
		                css:'./home/adv/css/upToday.css'
                	}
               }           	
            })
            .state('/good',{
            	url:'/good',
            	views:{
                	'one':{
                		templateUrl : './good/good.html',
                		controller:'goodCtrl',
                		css:'./good/css/good.css'
                	}
               }           	
            })
}])
