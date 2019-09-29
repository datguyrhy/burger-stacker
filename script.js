exampleburger = []
playburger = []
ingredientlist =["mushroom" ,"cheese","patty"]
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
  pickIngredient("mushroom")
  playburger.push("mushroom");
}
function pickCheese(){
  pickIngredient("cheese")
  playburger.push("cheese");

}
function pickBeefPatty(){
  pickIngredient("beefPatty")
  playburger.push("beefPatty");

}
function pickChixPatty(){
  pickIngredient("chixPatty")
  playburger.push("chixPatty");

}
function pickFishFillet(){
  pickIngredient("fishFillet")
  playburger.push("fishFillet");

}
function pickLettuce(){
  pickIngredient("lettuce")
  playburger.push("lettuce");

}
function pickTomato(){
  pickIngredient("tomato")
  playburger.push("tomato");

}
function pickBacon(){
  pickIngredient("bacon")
  playburger.push("bacon");

}
function pickPickle(){
  pickIngredient("pickle")
  playburger.push("pickle");

}
function pickMayo(){
  pickIngredient("mayo")
  playburger.push("mayo");

}
function pickKetchup(){
  pickIngredient("ketchup")
  playburger.push("ketchup");

}
function pickMustard(){
  pickIngredient("mustard")
  playburger.push("mustard");

}
function pickHam(){
  pickIngredient("ham")
  playburger.push("ham");
}
function pickBurgerCap(){
  pickIngredient("burgerCap")
  playburger.push("burgerCap");
}
function pickIngredient(ingredient){
  if(bun){
  console.log("you cant put stuff on top of your bun!1")
  return;
}
 if(layerCounter >= maxIngredient){
    alert("Please cover your buns!")
    return;
  }
  console.log("layerCounter: " + layerCounter);
  var x = document.querySelector("#layer" + layerCounter.toString())
//ingredient push into playburger
  if (ingredient === 'mushroom'){
    x.style.backgroundColor = "green";
  }else if (ingredient === 'cheese'){
    x.style.backgroundColor = "yellow";
  }  else if (ingredient === 'beefPatty'){
      x.style.backgroundColor = "brown";
  }  else if (ingredient === 'chixPatty'){
        x.style.backgroundColor = "orange";
  }  else if (ingredient === 'fishFillet'){
          x.style.backgroundColor = "teal";
  }  else if (ingredient === 'lettuce'){
            x.style.backgroundColor = "lightgreen";
  }  else if (ingredient === 'tomato'){
              x.style.backgroundColor = "yellow";
  }  else if (ingredient === 'bacon'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'pickle'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'mayo'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'ketchup'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'mustard'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'ham'){
              x.style.backgroundColor = "yellow";
  } else if (ingredient === 'burgerCap'){
            x.style.backgroundColor = "cyan";
            alert("Bunns!")
            bun = true;
            return
}
  ++layerCounter;
}

var bun = false;

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
