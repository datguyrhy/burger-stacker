exampleburger = []
playburger = []
ingredientList =["mushroom" ,"cheese","beefPatty","chixPatty","fishFillet","lettuce", "tomato", "bacon", "pickle","mayo","ketchup","mustard","ham"]


document.querySelector('#btn-0').addEventListener('click', pickMushroom);
document.querySelector('#btn-1').addEventListener('click', pickCheese);
document.querySelector('#btn-2').addEventListener('click', pickBeefPatty);
document.querySelector('#btn-3').addEventListener('click', pickChixPatty);
document.querySelector('#btn-4').addEventListener('click', pickFishFillet);
document.querySelector('#btn-5').addEventListener('click', pickLettuce);
document.querySelector('#btn-6').addEventListener('click', pickTomato);
document.querySelector('#btn-7').addEventListener('click', pickBacon);
document.querySelector('#btn-8').addEventListener('click', pickPickle);
document.querySelector('#btn-9').addEventListener('click', pickMayo);
document.querySelector('#btn-10').addEventListener('click', pickKetchup);
document.querySelector('#btn-11').addEventListener('click', pickMustard);
document.querySelector('#btn-12').addEventListener('click', pickHam);
document.querySelector('#btn-13').addEventListener('click', pickBurgerCap);

layerCounter = 0;
maxIngredient = 3;

function pickMushroom(){
  pickIngredient("mushroom");
}
function pickCheese(){
  pickIngredient("cheese");
}
function pickBeefPatty(){
  pickIngredient("beefPatty");
}
function pickChixPatty(){
  pickIngredient("chixPatty");
}
function pickFishFillet(){
  pickIngredient("fishFillet");
}
function pickLettuce(){
  pickIngredient("lettuce");
}
function pickTomato(){
  pickIngredient("tomato");
}
function pickBacon(){
  pickIngredient("bacon");
}
function pickPickle(){
  pickIngredient("pickle");
}
function pickMayo(){
  pickIngredient("mayo");
}
function pickKetchup(){
  pickIngredient("ketchup");
}
function pickMustard(){
  pickIngredient("mustard");
}
function pickHam(){
  pickIngredient("ham");
}
function pickBurgerCap(){
  pickIngredient("burgerCap");
}

///////places ingredient from the pick list into the player burger)//////
function pickIngredient(ingredient){
  if(bun){
  console.log("you cant put stuff on top of your bun!1")
  return;
}
 if(layerCounter >= maxIngredient){
    alert("Please cover your burger!");
    if (ingredient === 'burgerCap'){
             document.querySelector("#layer" + layerCounter.toString()).style.backgroundColor = "cyan";
             if(!bun){
             bun = true;
            burgerCheck();
           }
    }
    return;
  }
  console.log("layerCounter: " + layerCounter);
  var x = document.querySelector("#layer" + layerCounter.toString())
//ingredient push into playburger
  if (ingredient === 'mushroom'){
    x.style.backgroundColor = "green";
      playburger.push("mushroom");
  }else if (ingredient === 'cheese'){
    x.style.backgroundColor = "yellow";
    playburger.push("cheese");

  }  else if (ingredient === 'beefPatty'){
      x.style.backgroundColor = "brown";
      playburger.push("beefPatty");

  }  else if (ingredient === 'chixPatty'){
        x.style.backgroundColor = "orange";
        playburger.push("chixPatty");

  }  else if (ingredient === 'fishFillet'){
          x.style.backgroundColor = "teal";
          playburger.push("fishFillet");

  }  else if (ingredient === 'lettuce'){
            x.style.backgroundColor = "lightgreen";
            playburger.push("lettuce");

  }  else if (ingredient === 'tomato'){
              x.style.backgroundColor = "lightred";
              playburger.push("tomato");

  }  else if (ingredient === 'bacon'){
              x.style.backgroundColor = "yellow";
              playburger.push("bacon");

  } else if (ingredient === 'pickle'){
              x.style.backgroundColor = "darkgreen";
              playburger.push("pickle");

  } else if (ingredient === 'mayo'){
              x.style.backgroundColor = "yellow";
              playburger.push("mayo");

  } else if (ingredient === 'ketchup'){
              x.style.backgroundColor = "grey";
              playburger.push("ketchup");

  } else if (ingredient === 'mustard'){
              x.style.backgroundColor = "yellow";
              playburger.push("mustard");

  } else if (ingredient === 'ham'){
              x.style.backgroundColor = "yellow";
              playburger.push("ham");

  } else if (ingredient === 'burgerCap'){
            x.style.backgroundColor = "cyan";
            if(!bun){
            bun = true;
            burgerCheck();
          }
            return
}
  ++layerCounter;
}

var bun = false;

function burgerCheck(){
for(var i=0;i< exampleburger.length;i++){
  if(playburger[i] !== exampleburger[i]){
  console.log("you bring dishonor to the burger gods")
  return
  }
  }
  alert("you won!")
  console.log("where's the lamb sauce");
};

//startgame generator changes the example burger array
function startGame(){
  for(var i= 0; i<maxIngredient;i++){
    var rng = getRandomInt(0,ingredientList.length);
    var randomBurgerGen= ingredientList[rng];
    var x = document.querySelector("#eglayer" + i.toString());
    if (randomBurgerGen === 'mushroom'){
      x.style.backgroundColor = "green";
        exampleburger.push("mushroom");
    }else if (randomBurgerGen === 'cheese'){
      x.style.backgroundColor = "yellow";
      exampleburger.push("cheese");

    }  else if (randomBurgerGen === 'beefPatty'){
        x.style.backgroundColor = "brown";
        exampleburger.push("beefPatty");

    }  else if (randomBurgerGen === 'chixPatty'){
          x.style.backgroundColor = "orange";
          exampleburger.push("chixPatty");

    }  else if (randomBurgerGen === 'fishFillet'){
            x.style.backgroundColor = "teal";
            exampleburger.push("fishFillet");

    }  else if (randomBurgerGen === 'lettuce'){
              x.style.backgroundColor = "lightgreen";
              exampleburger.push("lettuce");

    }  else if (randomBurgerGen === 'tomato'){
                x.style.backgroundColor = "lightred";
                exampleburger.push("tomato");

    }  else if (randomBurgerGen === 'bacon'){
                x.style.backgroundColor = "yellow";
                exampleburger.push("bacon");

    } else if (randomBurgerGen === 'pickle'){
                x.style.backgroundColor = "darkgreen";
                exampleburger.push("pickle");

    } else if (randomBurgerGen === 'mayo'){
                x.style.backgroundColor = "yellow";
                exampleburger.push("mayo");

    } else if (randomBurgerGen === 'ketchup'){
                x.style.backgroundColor = "grey";
                exampleburger.push("ketchup");

    } else if (randomBurgerGen === 'mustard'){
                x.style.backgroundColor = "yellow";
                exampleburger.push("mustard");

    } else if (randomBurgerGen === 'ham'){
                x.style.backgroundColor = "yellow";
                exampleburger.push("ham");
}
  }

    document.querySelector("#eglayer" + maxIngredient.toString()).style.backgroundColor = "cyan";
}

startGame();

//copied a RNG function from MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//remove last selected item from the player burgerCap
function removeLastLayer(){
  layerCounter=layerCounter-1;
  console.log("Counter: " + layerCounter);
  var x = document.querySelector('#layer'+ layerCounter.toString());
  x.style.backgroundColor = "";
  playburger.pop();
  if(bun === true){
    bun = false;
  x.style.backgroundColor = "";
  }
}

function removePicked (){
for(var i = 0 ; i<11; i++){
 document.querySelector('#layer'+i.toString()).addEventListener('click', removeLastLayer);
  console.log("listener added");
}
}

removePicked();
//
// //weird stuff
// var test = { "mushroom" : pickMushroom };
// var imgList = { "mushroom" : "mushroom.png" }
//
// function initButtons()
// {
//   for(var elem in test)
//   {
//     var btn = document.querySelector('#' + elem);
//     btn.addEventListener('click', test[elem]);
//     console.log(btn);
//   }
// }
// initButtons();
//
// function pickMushroom() {
//   ingredientLayer().style.backgroundColor = "brown";
//   layerCounter++;
// }
//
// function ingredientLayer()
// {     return document.querySelector("#layer" + layerCounter.toString());
// }

// function pickIngredient2 (){
//   var pickCheese = style.backgroundColor = "yellow";
//   playerburger.push("cheese");
// }
// //
// };


//create 3 arrays
//startbutton to populate array
