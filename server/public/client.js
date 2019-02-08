console.log('js');

$(document).ready(docReady);

function docReady() {
    console.log('jq');

    // get players list on load
    getNewPlayer(); 

    // when add player is clicked
    $('#addPlayerButton').on('click', handleAddNewPlayer);

    // when add game is clicked
    $('#addGameButton').on('click', addGameResults);
    

}// end docReady

function handleAddNewPlayer(){
    console.log('addNewPlayer is clicked');
    // target input field val
    console.log($('#newPlayerInput').val());
         
    // post new player on server
    $.ajax({
        url: '/players',
        method: 'POST',
        data: {
            name: $('#newPlayerInput').val() 
        }
    }).then( function(){
        // get new player from server
        getNewPlayer();
    });

    

}// end addNewPlayer

function getNewPlayer() {
    console.log('in getNewPlayer');

    //empty new player input field
    $('#newPlayerInput').val('');

    // get players from server
    $.ajax({
        url: '/players',
        method: 'GET'
    }).then(function(response){
        console.log('response', response);
        // empty new player and dropdown lists
        $('#newPlayersList').empty();
        $('.gamesInput').empty();
        // loop through response, for each player...
        response.forEach(function(player) {
            // display new player on list
            $('#newPlayersList').append(`
            <li>${player}</li>
            `);
            // append to player and dropdown classes
            $('.gamesInput').append(`
            <option>${player}</option>
            `);
        });
    })
} // end getNewPlayer

function addGameResults() {
    console.log('in addGameResults');
    
    // target scores input values and create object
    const newGame = {
        playerNameInput: $('#playerNameInput').val(),
        playerScoreInput: $('#playerScoreInput').val(),
        opponentNameInput: $('#opponentNameInput').val(),
        opponentScoreInput: $('#opponentScoreInput').val()
    }
    console.log('newGame:', newGame);
    
    // push object to server
    $.ajax({
        url:'/gameResults',
        method: 'POST',
        data: {
            newGame
        }
    });

}// end addGameResults