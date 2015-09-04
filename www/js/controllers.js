angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, Meditations) {
  $scope.meditations = Meditations.all();
  $scope.currentuser = $rootScope.currentuser;
  $scope.currentuser = window.localStorage['Parse/82qjoScomPM7rS73GmpMZIiogaBmH7Jo5VSQZSKD/currentUser'];
  console.log($scope.currentuser)

})


.controller('ChatsCtrl', function($scope, Meditations) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('MeditationDetailCtrl', function($scope, $stateParams, Meditations) {
  $scope.meditation = Meditations.get($stateParams.meditationId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $state, $rootScope) {
 
  $scope.data = {};
 
  $scope.signupEmail = function(){
   
    //Create a new user on Parse
    var user = new Parse.User();
    user.set("username", $scope.data.username);
    user.set("password", $scope.data.password);
    user.set("email", $scope.data.email);
   
    // other fields can be set just like with Parse.Object
    user.set("somethingelse", "like this!");
   
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        $rootScope.currentuser = user._serverData.username;
        $state.go('tab.dash');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
   
  };
 
  $scope.loginEmail = function(){
    Parse.User.logIn($scope.data.username, $scope.data.password, {
      success: function(user) {
        // Do stuff after successful login.
        console.log(user);
        
        $rootScope.currentuser = user._serverData.username
        console.log($rootScope.currentuser);
        $state.go('tab.dash');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("error!");
      }
    });
  };

  $scope.logoutUser = function(){
    Parse.User.logOut().then(
     function() {
         alert('success');
       }, function(error) {
         alert('error : ' + error);
       }
    );
  };
 
});
