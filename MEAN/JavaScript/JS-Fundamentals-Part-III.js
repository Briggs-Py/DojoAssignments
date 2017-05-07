function personConstructor(names){
    var person = {
      name : names,
      distance_traveled : 0,
      say_name : function(){
        console.log(person.name);
      },
      say_something : function(phrase){
        console.log(`${person.name} says: ${phrase}`);
      },
      walk : function(){
        console.log(`${person.name} is walking`);
        person.distance_traveled += 3;
        return person;
      },
      run : function(){
        console.log(`${person.name} is running`);
        person.distance_traveled += 10;
        return person;
      },
      crawl : function(){
        console.log(`${person.name} is crawling`);
        person.distance_traveled += 1;
        return person;
      }
    }
}

function ninjaConstructor(name, cohort){
    var ninja = {}
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = "Yellow Belt";
    ninja.say_name = function(){
    console.log(ninja.name);
    }
    ninja.say_cohort = function(){
    console.log(ninja.cohort);
    }
    ninja.levelUp = function(){
        if (ninja.beltLevel === "Yellow Belt"){
          ninja.beltLevel = "Red Belt";
          console.log("You are now a Red belt");
          return ninja
        }
        else if (ninja.beltLevel === "Red Belt"){
          ninja.beltLevel = "Black Belt";
          console.log("You are now a Black belt");
          return ninja
        }
        else{
          console.log("You are a Black belt");
          return ninja
        }
    }
    return ninja
}

var x = ninjaConstructor("Briggs", "MEAN")
x.levelUp()
x.levelUp()
x.levelUp()
