$("#submit").on("click", function(event) {
    event.preventDefault();
    // console.log("click")
    var input = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    }

    $.post("/api/friends", input, function(data){
        console.log(data);
        var lover = data[0].friend
    });
})


    // Make an AJAX call to post object based on submitted information
    // Make a get request to compare scores to current score  
