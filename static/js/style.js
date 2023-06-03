    $("#message").keypress(function(event) {
        if (event.keyCode === 13) {
            $("#send-btn").click();
        }
    })
      
    $("#send-btn").click(function() {
        document.getElementById("Message_Sent").innerHTML= `Message Envoyé`

    });


        $('#message').emojioneArea({
       pickerPosition: 'top'
    });