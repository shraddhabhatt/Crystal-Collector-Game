$(document).ready(function(){
	//random number generator
	var randomnumber = Math.floor(Math.random()*101+19);

	$('#random_number').text(randomnumber);
	// random crystal value generator
	console.log(randomnumber);
	var crystalval1= Math.floor(Math.random()*11+1);
  	var crystalval2= Math.floor(Math.random()*11+1);
  	var crystalval3= Math.floor(Math.random()*11+1);
  	var crystalval4= Math.floor(Math.random()*11+1);

  	var wins = 0;
	var losses = 0;
	var userscore = 0;

	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#current_score').text(userscore);

	// reset the variables and text to start a new game
	function reset(){

	  $('#wins').text(wins);
	  $('#losses').text(losses);
      
      randomnumber=Math.floor(Math.random()*101+19);
      console.log(randomnumber)
      $('#random_number').text(randomnumber);
      
      crystalval1= Math.floor(Math.random()*11+1);
      crystalval2= Math.floor(Math.random()*11+1);
      crystalval3= Math.floor(Math.random()*11+1);
      crystalval4= Math.floor(Math.random()*11+1);

      userscore= 0;
      $('#current_score').text(userscore);
    } 
    //crystal click events
    $(".crystal").on("click", function() {
    	
    	var button_clicked = $(this).attr("value");

    	console.log(button_clicked);

        // add the value of crystal to the user score
        if (button_clicked == "crystal1") {
        	userscore += crystalval1;
        } else if (button_clicked == "crystal2") {
        	userscore += crystalval2;
        } else if (button_clicked == "crystal3") {
        	userscore += crystalval3;
        } else if (button_clicked == "crystal4") {
        	userscore += crystalval4;
        }

        //update the score on screen
        $('#current_score').text(userscore);

        // show the bootstrap dialog for win or loss
        if(userscore > randomnumber)
        {
        	losses++;
        	$('.modal-body').text("Oops you LOST :( ");
        	$('#myModal').modal('show');
        	reset();
        }
        else if(userscore == randomnumber)
        {
        	wins++;
        	$('.modal-body').text("Hurray you WON !!!");
        	$('#myModal').modal('show');
        	reset();
        }
    });
});