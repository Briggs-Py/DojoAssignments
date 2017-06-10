var game = {
  players: [],
  addPlayer: function(name){
    playerConstructor(name);
    var pokemon = '';
    var htmlstr = '';
    htmlstr += '<h1>' + name + '</h1>'
    $('div.pokemons').html(pokemon);
  }
};

function playerConstructor(name){

  player = {};
  player.name = name;
  var i = Math.floor(Math.random() * 152);
  var j = Math.floor(Math.random() * 152);

  var playerOne = $.get('http://pokeapi.co/api/v1/pokemon/' + i + '/', function(res){
    console.log(res);
    var attack = res.attack;
    console.log(attack)
    var namestr = "<h1>Player: " + player.name + "</h1>";
    $('#namesss').html(namestr);
    var htmlstr = '<h1>Player Pokemon: ' + res.name + " Attack: " + res.attack + '</h1>' + "<img src='http://pokeapi.co/media/img/" + i + ".png'>";
    $('#pokemon').html(htmlstr);
    return attack
  });

  console.log(playerOne);

  $.get('http://pokeapi.co/api/v1/pokemon/' + j + '/', function(res){
    console.log(res);
    var defense = res.defense;
    console.log(defense);
    var htmlstr = '<h1>AI: ' + res.name + " Defense: " + res.defense +'</h1>' + "<img src='http://pokeapi.co/media/img/" + j + ".png'>";
    $('#pokemon2').html(htmlstr);

  })

  console.log("self " + playerOne)
  if( this.attack < this.defense ){
    var loss = '<h1>You Lost! Your Pokemon is dead!</h1>'
    console.log(loss)
    $('#result').html(loss)
  }
  else {
    var win = '<h1>You won! You killed your enemy!</h1>'
    $('#result').html(win);
  };
  return player;
};

$(document).ready(function(){
    $('.newgame').click(function() {
        var name = $('#name').val();
        game.addPlayer(name);
        console.log(name)
    })
});
