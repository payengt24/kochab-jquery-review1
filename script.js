//our first callback function
$(document).ready(onReady);

console.log ('Jquery intro lecture');

function onReady () {
    console.log('Jquery is working!');
    $('h1').css('color', 'red');
    $('h1').addClass('funny');

    //getters and setters
    console.log($('h2').text()); //get text vaule of h2
    $('h2').text('You have been set!!!');

    //inputs (also, getter and setter)
    $('#nameInput').val('Pa Yeng'); //setter
    console.log($('#nameInput').val()); //getter

    //events
    $('#clickMe').on('click', function(){
        let newPersonName = $('#nameInput').val();
        console.log(newPersonName);
        $('#personList').append('<li>' + newPersonName + '' + '<button class="deleteButton">Delete</button></li>');
    });

    $('#personlist').on('click', '.deleteButton', function() {
        console.log('delete button was clicked');
        $(this).parent().remove();
    });   
    


    $('#clickMeToo').on('click', function (){
        console.log('I was clicked');
    });

}