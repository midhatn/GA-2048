// MOVE OBJECT DIAGONALLY
$(document).ready(function(){

	var movementSpeed = 20;
	var intervalSpeed = 60;
	var runAnimation = false;
	var animationSpeed = 10;

	var leftMarginLimit = parseInt($('.pic').parent().css('width')) - parseInt($('.pic').css('width'));
	var topMarginLimit = parseInt($('.pic').parent().css('height')) - parseInt($('.pic').css('height'));
	var leftMargin = parseInt($('.pic').css('margin-left'));
	var topMargin = parseInt($('.pic').css('margin-top'));
	var animationComplete = true;

	// flags
	var left = false;
	var right = false;
	var up = false;
	var down = false;

	$(document).keyup(function(key) {

		if (key.which == 37){left = false;}
		if (key.which == 39){right = false;}
		if (key.which == 38){up = false;}
		if (key.which == 40){down = false;}
	});
	
	$(document).keydown(function(key) {

		if (key.which == 37){left = true;}
		if (key.which == 39){right = true;}
		if (key.which == 38){up = true;}
		if (key.which == 40){down = true;}
	});


	

	setInterval(runMovement,intervalSpeed);
	
	function runMovement() {

		if (animationComplete){

			// LEFT
			if (left){
				leftMargin -=movementSpeed;
				if (leftMargin < 0){leftMargin = 0;}
				if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
			}
			
			// RIGHT
			if (right){
				leftMargin +=movementSpeed;
				if (leftMargin < 0){leftMargin = 0;}
				if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
			}
			
			// UP
			if (up){
				topMargin -=movementSpeed;
				if (topMargin < 0){topMargin = 0;}
				if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
			}
			
			// DOWN
			if (down){
				topMargin +=movementSpeed;
				if (topMargin < 0){topMargin = 0;}
				if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
			}

				// ANIMATION?
				if (runAnimation){
					animationComplete = false;
					$('.pic').animate({'margin-left': leftMargin+'px','margin-top': topMargin+'px'},animationSpeed,function(){
						animationComplete = true;
					});
				}
					else{
						$('.pic').css({'margin-left': leftMargin+'px','margin-top': topMargin+'px'});
					}
					
		}
	}
});
