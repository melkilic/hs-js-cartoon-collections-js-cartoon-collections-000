var dwarves=["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  var empty= '';
for(var i=0;i<dwarves.length;i++){
  empty += (`${i+1}. ${dwarves[i]} `)
  }
return empty
}

function summonCaptainPlanet(planeteerCalls){
var calls=[];
for(var i=0;i<planeteerCalls.length;i++){

 calls.push(planeteerCalls[i].toUpperCase() + "!")
}
  return calls
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if(words.length>4){
  return true
    }
  }
  return false
}


function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if(foods[i]=== "cheddar"
  ||foods[i]==="gouda"
<<<<<<< HEAD
  ||foods[i]==="camembert"){
=======
  ||foods[i]==="thyme"){
>>>>>>> 9aa4408508cc3a144b85091d13f051c860e791de
  return foods[i];
  }
  }
   return "no cheese!"
}
