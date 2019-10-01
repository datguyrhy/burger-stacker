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
    if (ingredient === 'burgerCap'){
      document.querySelector("#layer" + layerCounter.toString()).style.backgroundColor = "#ec9b3b";
      document.querySelector("#layer" + layerCounter.toString()).style.backgroundColor = "#ec9b3b";
      document.querySelector("#layer" + layerCounter.toString()).style.borderTopLeftRadius = "30px";
      document.querySelector("#layer" + layerCounter.toString()).style.borderTopRightRadius = "30px";
      document.querySelector("#layer" + layerCounter.toString()).style.width = "380px";
      document.querySelector("#layer" + layerCounter.toString()).style.height = "60px";
      if(!bun){
        bun = true;
        burgerCheck();
      }
    }
    return;
  }
  console.log("layerCounter: " + layerCounter);
  var x = document.querySelector("#layer" + layerCounter.toString());

  //ingredient push into playburger
  if (ingredient === 'mushroom'){
    x.style.backgroundImage = 'linear-gradient(#672f2f, #faf5ef)';
    x.style.width = "360px";
    playburger.push("mushroom");
  } else if (ingredient === 'cheese'){
    x.style.backgroundImage = "linear-gradient(#fbe555, #f45905,#fbe555)";
    x.style.width = "360px";
    playburger.push("cheese");

  } else if (ingredient === 'beefPatty'){
    x.style.backgroundColor = "#672f2f";
    x.style.width = "360px";
    playburger.push("beefPatty");

  } else if (ingredient === 'chixPatty'){
    x.style.backgroundImage = 'linear-gradient(90deg,#eadca6,#c36a2d, #e2c275,#eadca6)';
    x.style.width = "360px";
    playburger.push("chixPatty");

  } else if (ingredient === 'fishFillet'){
    x.style.backgroundColor = "#fda77f";
    x.style.width = "360px";
    playburger.push("fishFillet");

  } else if (ingredient === 'lettuce'){
    x.style.backgroundColor = "#c9d99e";
    x.style.width = "360px";
    playburger.push("lettuce");

  } else if (ingredient === 'tomato'){
    x.style.backgroundColor = "#f66767";
    x.style.width = "360px";
    playburger.push("tomato");

  } else if (ingredient === 'bacon'){
    x.style.backgroundColor = "#b5525c";
    x.style.width = "360px";
    playburger.push("bacon");

  } else if (ingredient === 'pickle'){
    x.style.backgroundColor = "#445c3c";
    x.style.width = "360px";
    playburger.push("pickle");

  } else if (ingredient === 'mayo'){
    x.style.backgroundColor = "#ffffea";
    x.style.width = "360px";
    playburger.push("mayo");

  } else if (ingredient === 'ketchup'){
    x.style.backgroundColor = "#c70d3a";
    x.style.width = "360px";
    playburger.push("ketchup");

  } else if (ingredient === 'mustard'){
    x.style.backgroundColor = "#fbe555";
    x.style.width = "360px";
    playburger.push("mustard");

  } else if (ingredient === 'ham'){
    x.style.backgroundColor = "#fe59d7";
    x.style.width = "360px";
    playburger.push("ham");

  } else if (ingredient === 'burgerCap'){
    x.style.backgroundColor = "#ec9b3b";
    x.style.borderTopLeftRadius = "30px";
    x.style.borderTopRightRadius = "30px";
    x.style.width = "380px";
    x.style.height = "60px";
    if(!bun){
      bun = true;
      burgerCheck();
    }
    return
  }
  ++layerCounter;
}

var bun = false;

//reset function after cleared
function burgerCheck(){
  for(var i=0;i< exampleburger.length;i++){
    if(playburger[i] !== exampleburger[i]){
      alert("Please try again");
      console.log("you bring dishonor to the burger gods")
      return
    }
  }
  setTimeout(function(){
    alert("Nice burger!")}, 1000);
    console.log("where's the lamb sauce");
    clearedCounter= clearedCounter+1;
    console.log("cleared: " + clearedCounter);
    setTimeout(startGame,1200);
    setTimeout(reset,1100);
    setTimeout(score,1100);
    levelUp();

  };
  function reset(){
    playburger.length = 0;
    exampleburger.length =0;
    bun = false;
    for(var i=layerCounter;i>=0;i--){
      document.querySelector("#layer" + i.toString()).style.backgroundColor ="";
      document.querySelector("#layer" + i.toString()).style.backgroundImage = "none";
      document.querySelector("#layer" + i.toString()).style.width = "380px";
      document.querySelector("#layer" + i.toString()).style.height = "30px";
      document.querySelector("#layer" + layerCounter.toString()).style.borderTopLeftRadius = "5px";
      document.querySelector("#layer" + layerCounter.toString()).style.borderTopRightRadius = "5px";
      document.querySelector("#eglayer" + i.toString()).style.backgroundImage = "none";
      console.log(i);
    }
    layerCounter = 0;
  }
  //startgame generator changes the example burger array
  function startGame(){
    for(var i= 0; i<maxIngredient;i++){
      var rng = getRandomInt(0,ingredientList.length);
      var randomBurgerGen= ingredientList[rng];
      var x = document.querySelector("#eglayer" + i.toString());
      if (randomBurgerGen === 'mushroom'){
        x.style.backgroundImage = "linear-gradient(#672f2f, #faf5ef)";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("mushroom");

      }else if (randomBurgerGen === 'cheese'){
        x.style.backgroundImage = "linear-gradient(#fbe555, #f45905,#fbe555)";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("cheese");

      }  else if (randomBurgerGen === 'beefPatty'){
        x.style.backgroundColor = "#672f2f";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("beefPatty");

      }  else if (randomBurgerGen === 'chixPatty'){
        x.style.backgroundImage = 'linear-gradient(90deg,#eadca6,#c36a2d, #e2c275,#eadca6)';
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("chixPatty");

      }  else if (randomBurgerGen === 'fishFillet'){
        x.style.backgroundColor = "#fda77f";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("fishFillet");

      }  else if (randomBurgerGen === 'lettuce'){
        x.style.backgroundColor = "#c9d99e";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("lettuce");

      }  else if (randomBurgerGen === 'tomato'){
        x.style.backgroundColor = "#f66767";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("tomato");

      }  else if (randomBurgerGen === 'bacon'){
        x.style.backgroundColor = "#b5525c";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("bacon");

      } else if (randomBurgerGen === 'pickle'){
        x.style.backgroundColor = "#445c3c";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("pickle");

      } else if (randomBurgerGen === 'mayo'){
        x.style.backgroundColor = "#ffffea";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("mayo");

      } else if (randomBurgerGen === 'ketchup'){
        x.style.backgroundColor = "#c70d3a";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("ketchup");

      } else if (randomBurgerGen === 'mustard'){
        x.style.backgroundColor = "#fbe555";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("mustard");

      } else if (randomBurgerGen === 'ham'){
        x.style.backgroundColor = "#fe59d7";
        x.style.width = "140px";
        x.style.height = "20px";
        x.style.borderRadius = "7px";
        exampleburger.push("ham");
      }
    }

    document.querySelector("#eglayer" + maxIngredient.toString()).style.backgroundColor = "#ec9b3b";
    document.querySelector("#eglayer" + maxIngredient.toString()).style.width = "150px";
    document.querySelector("#eglayer" + maxIngredient.toString()).style.height = "35px";
    document.querySelector("#eglayer" + maxIngredient.toString()).style.borderTopLeftRadius = "18px";
    document.querySelector("#eglayer" + maxIngredient.toString()).style.borderTopRightRadius = "18px";
  }

  startGame();

  //copied a RNG function from MDN
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  //ONLY removes last selected item from the player burgerCap
  //fixed an issue where burger cap removal pops out ingredients
  function removeLastLayer(){
    var x = document.querySelector('#layer'+ layerCounter.toString());
    if(bun === true){
      x.style.backgroundColor = "";
      x.style.backgroundImage = "none";
      bun = false;
    }
    else {
      x.style.backgroundColor = "";
      x.style.backgroundImage = "none";
      playburger.pop();
    }
    layerCounter=layerCounter-1;
    if(layerCounter<0){
      layerCounter=0;
    }
  }

  function removePicked (){
    for(var i = 0 ; i<11; i++){
      document.querySelector('#layer'+i.toString()).addEventListener('click', removeLastLayer);
      console.log("listener added");
    }
  }

  removePicked();

  function resetBurger(){
    playburger.length = 0;
    for(var i=layerCounter;i>=0;i--){
      document.querySelector("#layer" + i.toString()).style.backgroundColor ="";
      document.querySelector("#layer" + i.toString()).style.backgroundImage = "none";
      document.querySelector("#layer" + i.toString()).style.width = "380px";
      document.querySelector("#layer" + i.toString()).style.height = "30px";
      document.querySelector("#layer" + i.toString()).style.borderTopLeftRadius = "5px";
      document.querySelector("#layer" + i.toString()).style.borderTopRightRadius = "5px";
      layerCounter = 0;
      bun = false;
    }
  }
  document.querySelector('#resetBurger').addEventListener('click',resetBurger);
  //difficulty level Up
  var clearedCounter=0;

  function levelUp(){
    if(clearedCounter >1){
      maxIngredient = 4;

    } if(clearedCounter >2){
      maxIngredient = 5;

    } if(clearedCounter >3){
      maxIngredient = 6;

    } if(clearedCounter >4){
      maxIngredient = 8;

    } if(clearedCounter >5){
      maxIngredient = 9;
    }
    if(clearedCounter >6){
      maxIngredient = 10;
    }
  }

  function score(){
    var score =clearedCounter*100;
    document.querySelector('#Hi-score').innerText =" " + score;
  }

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
