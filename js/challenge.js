
//setting our timer
//let mycounter = 0;
let displayCounter = document.querySelector("#counter")
let displayCounterText = Number(displayCounter.textContent)
function increaseTimer(){
	
	displayCounter.textContent = displayCounterText ++;
	
}

let counterControl = setInterval(increaseTimer, 1000)

//clearInterval(counterControl); // activate to switch off counter

//decrease counter on click
let minus = document.getElementById("minus");
function decreaseCounter(){
	minus.addEventListener("click", function(){
		displayCounter.textContent = displayCounterText --;
	})
	
}
decreaseCounter()

// increase counter on button click
let plus = document.getElementById("plus");
function addCounter(){
	plus.addEventListener("click", function(){
		displayCounter.textContent = displayCounterText ++;
	})
}
addCounter()

// heart buttton prints counter on screen
let heart = document.getElementById("heart");
let likesList = document.querySelector("ul.likes");
function printLikes(){
	heart.addEventListener("click", function(){
		likesList.innerHTML += `<li>${displayCounterText} has been liked 1 time</li>`
	})
}
printLikes()

// adds comment when submitted
let commentsList = document.getElementById("list");
let commentForm = document.getElementById("comment-form");
let userComment = document.getElementById("comment-input")
function displayComment(){
	commentForm.addEventListener("submit", function(event){
		event.preventDefault();
		commentsList.innerHTML += `<p>${userComment.value}</p>`
	})
}
displayComment()

// setting the pause and resume 
let pause = document.getElementById("pause");
let submitButton = document.getElementById("submit");
function pauseAndResume(){
	let isPause = false; // set to false since the timer is running
	pause.addEventListener("click", function(){
		if (!isPause){
			clearInterval(counterControl);
			heart.setAttribute("disabled", "");
			minus.setAttribute("disabled", "");
			plus.setAttribute("disabled", "");
			submitButton.setAttribute("disabled", "");
			pause.textContent = "resume";
			isPause = true;
		}	
		else{
			heart.removeAttribute("disabled");
			minus.removeAttribute("disabled");
			plus.removeAttribute("disabled");
			submitButton.removeAttribute("disabled");
			counterControl = setInterval(increaseTimer, 1000)
			pause.textContent = "pause";
			isPause = false;		
		}
	})

}
pauseAndResume();






