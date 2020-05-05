angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $ionicScrollDelegate, $location, $localstorage, Chats) {

  $scope.date = new Date().toDateString();
  $scope.time = new Date().toLocaleTimeString();
  $scope.checkId = $localstorage.get('idChat');

  $scope.$on('$ionicView.loaded', function(e) {

    Chats.get().then(function successCallback(response) {
      console.log('$scope.chatResp: ', response.data.units);
      $scope.chatResp = response.data.units;
    }, function errorCallback(response) {
        console.log('Algo errado: ', response);
    });

    setTimeout(function() {
      startProcess($scope.checkId);
      $scope.scrollMe('theBottom');
    }, 1500);
  });

  function startProcess(checkId){
    if(checkId == undefined){
      var idChat = '0'
      $localstorage.set('idChat', '0');
    }else{
      idChat = checkId;
    }    
    switch (idChat) {
      case '0':
        callMessages('0');
        setTimeout(function () {
          showButtons();
        }, 1500);
        break;
      case '1':
        footBtn.remove();
        callMessages('1');
        setTimeout(function () {
          callOptions('3');
        }, 1500);
        break;
      case '2':
        footBtn.remove();
        callMessages('2');
        setTimeout(function () {
          callOptions('3');
        }, 1500);
        break;
      case '3':
        callMessages('3');
        setTimeout(function () {
          showTextArea('3');
        }, 1000);
        break;
      case '4':

        break;
      case '5':        
        setTimeout(function () {
          callMessages('5');
        }, 1500);
        break;
      case '6':
        setTimeout(function () {
          callMessages('5');
        }, 1500);
        break;
      default:       
    }    
  }

  function callMessages(idChat) {
    console.log('callMessages: ', idChat);
    let span = angular.element(document.querySelector('#flowChat'));
    let message = $scope.chatResp[idChat].responses;
    span.append(`<div class="item item-text-wrap itemMargin youPmsg left">${message[0]}</div>`);
    if (message[1] != undefined) {
      setTimeout(function () {
        span.append(`<div class="item item-text-wrap itemMargin youPmsg left">${message[1]}</div>`);        
      }, 1000);
    }
  }

  function showButtons() {
    let div = angular.element(document.querySelector('#footBtn'));
    let btn1 = $scope.chatResp[0].options[0];
    let btn2 = $scope.chatResp[0].options[1];
    div.append(`<button id="divBtn1" class="button button-options youPmsgBtn" onclick="callOptions('1')">${btn1.label}</button>`);
    setTimeout(function () {
      div.append(`<button id="divBtn2" class="button button-options youPmsgBtn" onclick="callOptions('2')">${btn2.label}</button>`);
    }, 600);
  }

  window.callOptions = function callOptions(nextUnit) {
    console.log('nextUnit ', nextUnit);
    $localstorage.set('idChat', nextUnit);
    if(nextUnit=='1' || nextUnit=='2' || nextUnit=='5' || nextUnit=='6'){
      callResponses(nextUnit);
    }
    setTimeout(function () {
      startProcess(nextUnit);
    }, 800);
  }

  function showTextArea(idChat) {
    let textarea = angular.element(document.querySelector('#theBottom'));    
    setTimeout(function () {
      textarea.append(`<input id="text_area" rows="5" wrap="hard" maxlength="2048" class='txtArea item-borderless item-text-wrap' type='textarea' name="txt" [(ngModel)]"textA.txt">`)
      textarea.append(`<button id="btn1" class="button button-options youPmsgBtn" onclick="sendTextArea(event)">Forward</button>`)
    }, 300);
  }

  window.sendTextArea = function callCondition(event){
    let textArea = document.getElementById("text_area").value;
    $scope.textArea = textArea;
    if(textArea.length<=20){
      this.callOptions('5');
    }else if(textArea.length>20){
      this.callOptions('6');
    }
  }

  function callResponses(idChat) {
    console.log('idChat-response ', idChat);
    let span = angular.element(document.querySelector('#flowChat'));
    if(idChat == '1'){
      span.append(`<div class="item item-text-wrap itemMargin youPmsg right">${$scope.chatResp[0].options[0].label}</div>`);
    }else if(idChat == '2'){
      span.append(`<div class="item item-text-wrap itemMargin youPmsg right">${$scope.chatResp[0].options[1].label}</div>`);
    }else if(idChat == '5'){
      span.append(`<div class="item item-text-wrap itemMargin youPmsg right">${$scope.textArea}</div>`);
      theBottom.remove();
    }else if(idChat == '6'){
      span.append(`<div class="item item-text-wrap itemMargin youPmsg right">${$scope.textArea}</div>`);
      theBottom.remove();
    }
  }

  $scope.scrollMe = function(anchor) {  
    $location.hash(anchor);
      $ionicScrollDelegate.anchorScroll();
  };
});
