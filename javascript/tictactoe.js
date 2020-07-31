// This variable keeps track of who's turn it is.
let activePlayer = 'X';
// this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];

function placeXorO(squareNumber) {
  // this condition ensures a square hasn't been selected already.
  //the .some() method is used to check each element of selectedSquare array to
  // see if it contains the square number clicked on.
    if (!selectectedSquares.some(element => element.includes(squareNumber))) {
          // this variable retrieves the html element id that was clicked.
          let select = document.getElementById(squareNumber);
          // this condition checks who's turn it is.
          if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage ='url("images/x.png")';
            //active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
          } else {
            //if active player is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url(images/o.png")';
          }
          //squareNumber and activePlayer are concatenated together and added to array.
          selectedSquares.push(squareNumber + activePlayer);
          //this call a function to check for any win conditions.
          checkWinConditions();
          //this condition is for changing the active player.
          if(activePlayer === 'X') {
            //if active player is 'X' change it to 'O'.
              activePlayer = 'O';
            //if active player is anything other than 'X'.
          } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
          }
          //this function plays placement sound.
          audio('./media/place.mp3');
          //this condition checks to see if it is computers turn.
          if(activePlayer==='O') {
            //this function disables clicking for computer choice.
              disableClick();
            //this function waits 1 second before placing the image and enabling click.
            setTimeout(function() { computersTurn(); }, 1000);
          }
          //returning true is needed for our computersTurn() function to work.
          return true;
      }

      //this function results in a random square being selected.
      function computersTurn() {
        //this boolean is neededd for our while loop.
        let success = false;
        //this varible sores a random number 0 - 8
        let pickASquare;
        //this condition allows our while loop to keep
        //trying if a square is selected already.
        while(!success) {
          //a random number between 0 and 8 is selected
          pickASquare = String(Math.floor(Math.random() * 9));
          //if the randome number evaluates returns true, the square hasn't been selected et
          if (placeXorO(pickASquare)) {
            //this line calls the function.
            placeXorO(pickASquare);
            //this changes our boolean and ends the loops
            success=true;
          };
        }
      }
}