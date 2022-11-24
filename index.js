var canvas, g;
var characterPosX, characterPosY, characterimage;
var speed, acceleration;

////サイト接続時のパスワード入力
//let master = "2525";
//let word = "";
//let number ="0123456789";
//for (let o = 0; o < 4; o++) {
//    word += number[Math.floor(Math.random() * number.length)];
//}
//console.log(word);
//
//let i = 0;
//do{
//    let pas = prompt('パスワードを入力してください');
//    if(pas == word || pas == master) {
//        i = i+1;
//    } else {
//        alert("パスワードが違います");
//    }
//}while(i == 0)

onload = function () {
  // 描画コンテキストの取得
  canvas = document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  // 初期化
  init();
  // 入力処理の指定
  document.onkeydown = keydown();
  // ゲームループの設定 60FPS
  setInterval("gameloop()", 16);
};

function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function init() {
  characterPosX = 230;
  characterPosY = 400;
  characterimage = new Image();
  characterimage.src = "./hori.png";
  console.log("堀参戦");
}

addEventListener("keydown", keydown);
  function keydown() {
    speed = 0;
    acceleration = 0.1;
  }

addEventListener("keydown", jump);
  function jump(e) {
    if(e.key === 's' || e.key === "ArrowUp") {
      console.log("jump");
      speed = -20;
      acceleration = 1.5;
      audio();
    }
  }
  
addEventListener("keydown", wasd);
  function wasd(e) {
    if(e.key === 'd' || e.key === 'D' || e.key === "ArrowRight") {
      console.log("right");
      speed = 0;
      acceleration = 0.1;
      characterPosX = characterPosX + 15;
      }else{if (e.key === 'a' || e.key === 'A' || e.key === "ArrowLeft"){
        console.log("left");
        speed = 0;
        acceleration = 0.1;
        characterPosX = characterPosX - 15;
      }else{
        return;
      }    
      }
  }

function gameloop() {
  update();
  draw();
}

function update() {
  speed = speed + acceleration;
  characterPosY = characterPosY + speed;

  if(characterPosX > 500) {
    characterPosX = -15;
  }
  if(characterPosX < -15) {
    characterPosX = 500
  }
  if (characterPosY > 400) {
    characterPosY = 400;
    speed = 0;
    acceleration = 0;
  }
  if(characterPosY < 30) {
    characterPosY = 35;
    acceleration = 1.5;
  }
}


function draw() {

  g.fillStyle = "rgb(0,0,0)";
  g.fillRect(0, 0, 480, 480);


  g.drawImage(
    characterimage,
    characterPosX - characterimage.width / 2,
    characterPosY - characterimage.height / 2
  );
}