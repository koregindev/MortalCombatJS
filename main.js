let arena = document.querySelector("div.arenas")
console.log(arena)

let player1 = {
  name: 'Kitana',
  hp: 50,
  img: "skins/kitana.gif",
  weapon: "Fan",
  attack: function() {
    console.log(this.name + " - Fight..")
  }
};

let player2 = {
  name: 'Sonya',
  hp: 100,
  img: "skins/sonya.gif",
  weapon: "Fan",
  attack: function() {
    console.log(this.name + " - Fight..")
  }
};

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
