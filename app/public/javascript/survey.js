$(document).ready(function () {
    // Questions array
    var questions = [
        'I prefer brewhouses with a traditional look feel.',
        'I prefer brewhouses with a modern contemporary feel',
        'I would perfer a larger selection over low prices.',
        'I prefer having many small samples as opposed to few larger.',
        'I know exactly what a snakebite is.'
    ];

    // Choices .
    var choices = [
        '1 (Strongly Disagree)',
        '2 (Disagree)',
        '3 (Neutral)',
        '4 (Agree)',
        '5 (Strongly Agree)'
    ];


    var questionDiv = $('#questions');
    i = 0;

    questions.forEach(function (question) {
        i++;

        var item = $('<div class="question">');
        var headline = $('<h4>').text('Question ' + i);
        var questionText = $('<p>').text(question);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        // Create an option for each choice.
        choices.forEach(function (choice) {
            var option = $('<option>').text(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        // Add the dropdown to the item, then add the item to the questions div.
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        var br = $('<br>');
        questionDiv.append(item, br);
    });

    $('#submit').on('click', function (event) {

        event.preventDefault();

        // Capture username and image link values.
        var userName = $('#userName').val();
        var imageLink = $('#imageLink').val();

        // If both of those items were filled out, gather other answers and submit.
        if (userName.length > 0   
            /*&& imageLink.length > 0 */) {
            var answers = [];

            // Add the response for each selector to the array of answers.
            Object.keys($('.selector')).forEach(function (key) {
                if (answers.length < questions.length) {
                    // Take only the first character of the answer, which is the number.
                    answers.push($('.selector')[key].value.charAt(0));
                }
            });

            var surveyData = {
                name: userName,
                photo: imageLink,
                answers: answers
            };

            $.post('/api/brewhouses', surveyData, function (data) {

                if (data) {

                    // Empty out modal and username and link fields.
                    $('#modalContent').empty();
                    $('#userName').val('');
                    $('#imageLink').val('');

                    data.forEach(function (profile) {
                        var profileDiv = $('<div class="profile">');
                        var name = profile.name;
                        var location = profile.location;
                        var photoURL = profile.photo;
                        var map = profile.map;
                        // Put the name in a header.
                        var nameHeader = $('<h3>').text(name);
                        // Add a photo with an 'src' of the photoURL submitted.
                        //var myPhoto = $('<img>').attr('src', imageLink);
                        var photo = $('<img>').attr('src', photoURL);
                        //profileDiv.append(myPhoto, nameHeader,  photo);
                        profileDiv.append(nameHeader, photo);

                        // Add these items to the modal.
                        $('#modalContent').append(profileDiv);
                        $('#modalContent').append(profileDiv);
                        $('#modalContent').append(location);
                       
                    });


                    if (data.length > 1) {
                        // header is plural.
                        $('.modal-title').text(userName + ', your best brewery matches would be:');
                    } else {
                        // header is singular.
                        $('.modal-title').text(userName + ', your best brewery match is:');
                       
                    }

                    $('#resultModal').modal();
                }
            });

        } else {
            $('#errorModal').modal();
            setTimeout(function () {
                $('#errorModal').modal('hide');
            }, 4000);
        }
    });
});
