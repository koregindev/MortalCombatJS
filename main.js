alert('Всплывающее окно победителя будет выведено через 15 секунд после начала игры, SetTimeout')

let arena = document.querySelector("div.arenas")
let button = document.getElementsByTagName("button")[0]

let player1 = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: "skins/kitana.gif",
  weapon: "Fan",
  attack: function() {
    console.log(this.name + " - Fight..")
  }
};

let player2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: "skins/sonya.gif",
  weapon: "Fan",
  attack: function() {
    console.log(this.name + " - Fight..")
  }
};

function playerLose(name){
  let loseTitle = document.createElement('div');
  loseTitle.classList.add('winTitle');
  loseTitle.innerText = name + " wins!";
  return loseTitle
}

function randomNum() {
  return Math.ceil(Math.random() * 20)
}

function changeHP(player){
    playerLife = document.querySelector(".player"+player.player + " .life");
    player.hp -= randomNum();
    playerLife.style.width = player.hp + "%";
    if (player.hp < 0){
        player.hp = 0;
        playerLife.style.width = player.hp + "%";
        button.disabled = true;
    }

    // if (player.hp > 0){
    //         arena.appendChild(playerLose(player.name));
    // }
    console.log(player.name + ":" + player.hp)
}

button.addEventListener('click', () => {
  const gamer1 = changeHP(player1)
  const gamer2 = changeHP(player2)
})

function createPlayer(classname, name, url, hp) {
  _classname = classname;
  _name = name;
  _url = url;
  _hp = hp;

  div_player = document.createElement('div');
  div_player.classList.add(_classname);

  div_progress = document.createElement('div');
  div_progress.classList.add("progressbar");

  div_life = document.createElement('div');
  div_life.classList.add("life");

  div_name = document.createElement('div');
  div_name.classList.add("name");
  div_name.innerText = _name;

  div_character = document.createElement('div')
  div_character.classList.add("character");

  img = document.createElement('img')
  img.src = url;
  //добавление элементов на страницу
  div_player.appendChild(div_progress);
  div_player.appendChild(div_character);
  div_progress.appendChild(div_life)
  div_progress.appendChild(div_name)
  div_character.appendChild(img)
  div_life.style.width = _hp + "%";
  //метод для добавления player на страницу
  arena.appendChild(div_player);
}

let kitana = createPlayer('player1', player1.name, player1.img, player1.hp);
let sonya = createPlayer('player2', player2.name, player2.img, player2.hp);

setTimeout(function(){
  if (player1.hp > player2.hp) {
    arena.appendChild(playerLose(player1.name))
  } else {
    arena.appendChild(playerLose(player2.name))
  }
}, 15000)
