var game = {
  players: [],
  addPlayer: function(){
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
  player.hand = $.get('http://pokeapi.co/api/v1/pokemon/' + j + '/', function(res){
    console.log(res);
    self.attack = res.attack;
    console.log(attack)
    namestr = "<h1>Player: " + self.name + "</h1>";
  $('#namesss').html(namestr);
  var htmlstr = '';
  htmlstr += '<h1>Your Pokemon: ' + res.name + " Attack: " + res.attack + '</h1>' + "<img src='http://pokeapi.co/media/img/" + j + ".png'>";
    $('#pokemon2').html(htmlstr);
    })
  player.aihand = [];
  player.aihand = $.get('http://pokeapi.co/api/v1/pokemon/' + i + '/', function(res){
    console.log(res);
    self.defense = res.defense;
    console.log(defense)
  var htmlstr = '';
  htmlstr += '<h1>' + res.name + " Defense: " + res.defense +'</h1>' + "<img src='http://pokeapi.co/media/img/" + i + ".png'>";
    $('#pokemon').html(htmlstr);
    })
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  console.log("self" + attack)
  if( attack > defense ){
    var shit = '<h1>You Lost! Your Pokemon is dead!</h1>'
    console.log(shit)
    $('#result').html(shit)
  }
  else {
    var shit = '<h1>You won! You killed your enemy!</h1>'
    $('#result').html(shit);
  };
  return player;
};

$(document).ready(function(){
    $('button.newgame').click(function() {
        name = $('#name').val();
        game.addPlayer(name);
        console.log(name)
    })
});
