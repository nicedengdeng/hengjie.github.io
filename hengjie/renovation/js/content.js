var app = angular.module('myApp', []);

app.controller('yilan', function($scope, $http) {
	$scope.title = "艺澜套间系列";
	$scope.sec_title = "后现代艺术的微澜";
	$scope.content = "融感性与理性、集传统与现代、糅大众与行家……不拘一格，多元而包容，才是后现代生活主义的魅力所在。 \n恒洁艺澜套间，极具后现代艺术风格，是科技与艺术的完美融合。\n凝聚智慧又不失人情味，只为给你兼具品质与健康的舒适体验。";
});

app.controller('jinzhi', function($scope, $http) {
	$scope.title = "金致套间系列";
	$scope.sec_title = "极简中的金色时光";
	$scope.content = "向来拒绝复杂的你，坚持自己的简约美学。\n因此，对于休憩空间，你同样如此期望 - 舒适，精致，简洁。恒洁金致系列套间，与你的哲学不谋而合。\n基于现代灵感打造，整体空间处处透露出对简约美学的表达。享受，本就应该是一件简单的事。";
});

app.controller('oudian', function($scope, $http) {
	$scope.title = "欧典套间系列";
	$scope.sec_title = "欧洲装饰艺术精神";
	$scope.content = "当现代人对生活的追求，邂逅欧洲历史文化的浪漫情怀，欧洲装饰艺术，将对纯粹艺术的冥想带进了现实。\n恒洁欧典套间，源自欧洲装饰艺术精神，将奢华典雅与实用主义相结合，造就经典，内外兼修。\n让你放松自我，惬意享受。";
});

app.controller('yazhi', function($scope, $http) {
	$scope.title = "雅致套间系列";
	$scope.sec_title = "形柔美 心从容";
	$scope.content = "优雅，是淡若清风的知性美。恒洁雅致套间，优雅于形，别致于心。在现代时尚的风格下，亦不失端庄典雅。\n优雅，又何尝不是一种智慧？\n能将卫浴空间装点得安宁、有序，必然也能在其中梳妆出一个自信、从容的自己。";
});

app.controller('zhendian', function($scope, $http) {
	$scope.title = "臻典套间系列";
	$scope.sec_title = "传承美式经典";
	$scope.content = "尊贵不浮于表面，以古朴致敬自然。美式经典，是亘古而久远的芬芳，它将思绪带回到那些饱含古典情怀的浪漫时代。\n恒洁臻典套间，形典雅，意自由。甄选原材，匠心雕琢，成就细腻高贵、而天然舒适的传统美式经典。\n也许它的精髓，就在于这平实的关怀。";
});

app.controller('zhenshang', function($scope, $http) {
	$scope.title = "臻尚套间系列";
	$scope.sec_title = "用匠人的臻心 雕琢中式尚品";
	$scope.content = "于细节处雕琢生活的质感，以含蓄美凝练中式古典情怀。尚品，是经得起时间洗磨的匠心。\n恒洁臻尚套间，典雅大气，别具匠心。\n让你宛若置身于中式园林，感受那份赋有人文之气的中式浪漫情怀。";
});

/*
$scope.setContent=function(index) {

	//id = mySwiper.activeIndex;
	//console.log(id);
	var id = 1;
	id=index;

	if(id == 1) {
		$(".lan").attr("ng-controller", "yilan");
	}

	if(id == 2) {
		$(".lan").attr("ng-controller", "jinzhi");
	}

	if(id == 3) {
		$(".lan").attr("ng-controller", "oudian");
	}

	if(id == 4) {
		$(".lan").attr("ng-controller", "yazhi");
	}

	if(id == 5) {
		$(".lan").attr("ng-controller", "zhendian");
	}

	if(id == 6) {
		$(".lan").attr("ng-controller", "zhenshang");
	}
},
*/