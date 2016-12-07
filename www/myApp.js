var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.records = [
        {"description" : "Cica", "price": 900},
        {"description" : "Cica2", "price": 60},
        {"description" : "Cica3", "price": 1200}
    ];

    $scope.auctionTotalCounter = function () {
        var ac = 0;
        $scope.records().forEach(function (r) {
            ac += Number(r.price);
        });
        return ac;
    }
});