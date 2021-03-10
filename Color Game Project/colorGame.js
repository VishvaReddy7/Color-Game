 var numberSquares = 6;
 var colors = [];
 var pickedColor;
 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 //var easyBtn = document.querySelector("#easyBtn");
 //var hardBtn = document.querySelector("#hardBtn");
 var modeButtons = document.querySelectorAll(".mode");

 init();

 function init(){
 	 //mode buttons event listeners
 	 setUpModeButtons();
 	 setUpSquares();
     reset();

 }

 function setUpModeButtons(){
	 	for(var i=0;i<modeButtons.length;i++){
	 	 modeButtons[i].addEventListener("click", function(){
	 		modeButtons[0].classList.remove("selected");
	 		modeButtons[1].classList.remove("selected");
	 		this.classList.add("selected");

	 		this.textContent === "Easy" ? numberSquares=3: numberSquares=6;
	 		/*if(this.textContent === "Easy"){
	 			numberSquares = 3;
	 		}
	 		else{
	 			numberSquares = 6;
	 		}*/
	 		reset();

	 		//figure out how many sqaures to show
	 		//pick new colors
	 		//pick a new pickedColor
	 		//update page to reflect changes
	 	})
	 }

 }

 function setUpSquares(){
 	  for(var i=0;i<squares.length;i++){
	 	     //adding colors to sqaures
	 	     //squares[i].style.backgroundColor = colors[i]; 
	 	     /*adding event listeners to squares.
	 	     We can use the same loop as we are doing it to all squares */
	 	     squares[i].addEventListener("click", function(){
	         //grab color of picked sqare
	         var clickedColor = this.style.backgroundColor;
	         //compare color to picked color
	         if(clickedColor === pickedColor){
	             messageDisplay.textContent = "Correct!";
	             resetButton.textContent = "Play Again?";
	             changeColors(clickedColor);
	             h1.style.backgroundColor = clickedColor;
	         }
	         else{
	         	this.style.backgroundColor = "#232323";
	         	messageDisplay.textContent = "Try Again";
	         }
	 	});
	   }
}

 


/*we are replacing this button functions with class mode . deletting button id's in html doc.
  easyBtn.addEventListener("click", function(){
 	easyBtn.classList.add("selected");
 	hardBtn.classList.remove("selected");
 	numberSquares = 3;
 	colors = generateRandomColors(numberSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i=0;i<squares.length;i++){
 		if(colors[i]){
 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			squares[i].style.display = "none";
 		}
 	}

 });

 hardBtn.addEventListener("click", function(){
 	easyBtn.classList.remove("selected");
 	hardBtn.classList.add("selected");
 	numberSquares = 6;
 	colors = generateRandomColors(numberSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i=0;i<squares.length;i++){
 			squares[i].style.backgroundColor = colors[i];
 			squares[i].style.display = "block";
 		}
 }); */

 function reset(){
 	colors = generateRandomColors(numberSquares);
 	//pick a new random color from array
 	pickedColor = pickColor();
 	//display the picked color in h1
 	colorDisplay.textContent = pickedColor;

 	resetButton.textContent = "New Colors";
 	messageDisplay.textContent = "";
 	//change colors of sqaures
 	for(var i=0;i<squares.length;i++){
 		if(colors[i]){
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			squares[i].style.display="none";
 		}
 		
 	}
 	h1.style.backgroundColor = "steelblue";

 }

 resetButton.addEventListener("click", function(){
    reset();
 });


 

function changeColors(color){
	//looping through the squares
	for(var i=0;i<squares.length;i++){
		//changing the color of each sqaure to the picked color which is the answer
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0;i<num;i++){
         //get random colors and push them into array
         arr.push(randomColor());
	}
	//return that array
    return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}