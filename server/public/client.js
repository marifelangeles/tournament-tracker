console.log('js');

$(document).ready(docReady);

function docReady() {
    console.log('jq');

    // get players list on load
    getNewPlayer(); 
    
    // when add player is clicked
    $('#addPlayerButton').on('click', handleAddNewPlayer);

    

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
    
    // make get request
    $.ajax({
        url: '/players',
        method: 'GET'
    }).then(function(response){
        console.log('response', response);
        // empty list
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