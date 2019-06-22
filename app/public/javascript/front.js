$("#submit").on("click", function(event) {
    event.preventDefault();

    var input = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q1").val(),
            $("#q1").val(),
            $("#q1").val(),
            $("#q1").val(),
            $("#q1").val()
        ]
    }

    $.POST("/api/friends", input, function(data){
        console.log(data)
    })
})


    // Make an AJAX call to post object based on submitted information
    // Make a get request to compare scores to current score  
