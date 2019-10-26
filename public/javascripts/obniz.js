
// Change this to your Obniz ID
var obniz = new Obniz("0087-6879");
var playerArr = ["ジョバン", "シュウヘイ", "ハルカ", "オヤナギ"];
var quizArr = ["「し」で始まるアンパンマンに新しい仲間が増えました。 その名前は？","「め」で始まる人として大切なことは？","「び」で始まる言われたらうれしい言葉（セリフ）は？", "1+1は？"];
obniz.onconnect = async function () {

obniz.display.clear();
obniz.display.print("Obniz Ready");

obniz.ble.security.setAuth(['bonding']);
obniz.ble.security.setModeLevel(1, 2);

obniz.ble.security.onerror = function() {
  console.error('security set params error');
  obniz.reboot();
};

  // Javascript Example
  var button1 = obniz.wired("Button",  {signal:0, gnd:1});
  var button2 = obniz.wired("Button",  {signal:2, gnd:3});
  var button3 = obniz.wired("Button",  {signal:4, gnd:5});
  var button4 = obniz.wired("Button",  {signal:6, gnd:7});

  var answerFlag = false;
  var playerNum;


  const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  var quizIndex = 0;

  button1.onchange = function(pressed){
    if(pressed){
//           console.log("pressed1:" + pressed)
      nominateRespondent(1);
    }
  };

  button2.onchange = function(pressed){
    if(pressed){
//           console.log("pressed2:" + pressed)
        nominateRespondent(2);
    }
  };

  button3.onchange = function(pressed){
    if(pressed){
//           console.log("pressed3:" + pressed)
        nominateRespondent(3);
    }
  };

  button4.onchange = function(pressed){
    if(pressed){
//           console.log("pressed4:" + pressed)
        nominateRespondent(4);
    }
  };

  function nominateRespondent(playNum) {
//         console.log(answerFlag);
    if(answerFlag  == false) {
//           console.log(playNum)
      answerFlag = true;
      playerNum = playNum;
      console.log(playerNum);
      $(".user_id").text(playerArr[playerNum-1]);

//           console.log("answer is " + playNum);
    }
  }

  function changeQuiz(){

  }
var StartTimer, StopTimer, Timer, time, timerID, loopp, total;

time = 0;
timerID = 0;
loopp = 0;
total = 0;

StartTimer = function() {
  // 30分ごとの処理
  // timerID = setInterval(Timer, 1800000);
  timerID = setInterval(Timer, 100);
}

StopTimer = function() {
  clearInterval(timerID);
}

Timer = async function() {
  if(100 < loopp) {
    answerFlag = false;
    $(".rest_time").text("");
    $(".user_id").text("");
    loopp = 0;
  } else if ( 40 < loopp) {
    restTime = 10 - loopp / 10;
    $(".rest_time").text(restTime);
    loopp++;
  } else {
    loopp++;
  }
  console.log(quizArr[quizIndex]);
  if(200 < total){

    quizIndex++;
    if(3 < quizIndex){
      quizIndex = 0;
    }
    $(".quiz").text(quizArr[quizIndex]);
    total = 0;

  }
  total++;

}

StartTimer();
// $(".quiz").text(quizIndex[quizIndex]);
}
