
//Main app
var app = angular.module('mainApp', ["ngRoute"]);

//var app = angular.module('mainApp', ["ngRoute"]);
//Single Page App
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "projectpages/mercedes_customizer.html",
    })
    .when("/mercedes_customizer", {
        templateUrl : "projectpages/mercedes_customizer.html"
    })
    .when("/vito-campaign-page", {
        templateUrl : "projectpages/vito_campaign_page.html"
    })
	 .when("/vito_mailer", {
        templateUrl : "projectpages/vito_mailer.html"
    })
    .when("/mtn-business-cloud", {
        templateUrl : "projectpages/mtn_business_cloud.html"
    })
	.when("/mbamba", {
        templateUrl : "projectpages/mbamba.html"
    })
	.when("/music", {
        templateUrl : "projectpages/music.html"
    })
	.when("/joburg", {
        templateUrl : "projectpages/i_love_joburg.html"
    });
});
//Single Page App





//Nav
app.controller('navCtrl', function($scope) {
    $scope.url=[
{label:'Home',link:'index.html',class:'homelink'},
{label:'About',link:'about.html',class:'aboutlink'},
{label:'Work',link:'work.html',class:'worklink'},
{label:'Services',link:'services.html',class:'servicelink'},
//{label:'Products',link:'#products.html'},
{label:'Contact',link:'contact.html',class:'contactlink'}
]
});
//Nav








//BodyContent
app.controller('contentCtrl', function($scope, $http) {
    $http.get("headercontent.php").then(function(response) {
    	$scope.headerContent = response.data.homepageheader;
    });
	
    $http.get("pagecontent.php").then(function(response) {
        $scope.myContent = response.data.content;
    });
});
//BodyContent



app.controller('validateCtrl', function($scope) {
 $scope.user = 'John Doe';
 $scope.email = 'john.doe@gmail.com';
 $scope.textarea = 'Type your message here';
});









