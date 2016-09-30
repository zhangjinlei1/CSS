/**
 * Created by Raninbow on 2016/9/18.
 */
var app = angular.module("myApp",[]);
    app.controller("cartController",function($scope){
        $scope.cart=[{
            id:1000,
            name:"iphone5s",
            quantity:"3",
            price:"4300"
        },{
            id:3300,
            name:"iphone5",
            quantity:"30",
            price:"3300"
        },{
            id:232,
            name:"imac",
            quantity:"4",
            price:"3000"
        },{
            id:1000,
            name:"ipad",
            quantity:"3",
            price:"4300"
        }
        ]
    });













