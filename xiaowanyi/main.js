/**
 * Created by Raninbow on 2016/9/18.
 */
var app = angular.module("myApp",[]);
    app.controller("cartController",function($scope){
        $scope.cart=[{
            id:1000,
            name:"iphone5s",
            quantity:3,
            price:"4300"
        },{
            id:3300,
            name:"iphone5",
            quantity:30,
            price:"3300"
        },{
            id:232,
            name:"imac",
            quantity:4,
            price:"3000"
        },{
            id:1000,
            name:"ipad",
            quantity:3,
            price:"4300"
        }
        ];
    //    计算总价
        $scope.totalPrice=function(){
            var total=0;
            angular.forEach($scope.cart,function(x){
                total+= x.quantity* x.price
            });
            return total
        };
        //计算总数量
        $scope.totalNum=function(){
            var total=0;
            angular.forEach($scope.cart,function(x){
                total+= x.quantity
            });
            return total
        };
        //删除当前数据
        $scope.remove=function(id){
            var index=-1;
            angular.forEach($scope.cart,function(x,key){
                if(x.id===id){
                    index=key;
                }
            });
            if(index!==-1){
                $scope.cart.splice(index,1);
            }
        };
        $scope.DeleteOn=function(){
            $scope.cart={};
        }
    });













