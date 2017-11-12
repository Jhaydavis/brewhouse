// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the review they typed into the review-search input
  var reviewSearched = $("#book-search").val().trim();

  // Make an AJAX get request to our api, including the user's review in the url
  $.get("/api/" + reviewSearched, function(data) {

    console.log(data);
    // Call our renderReviews function to add our reviews to the page
    renderReviews(data);

  });

});

// When user hits the brewery-search-btn
$("#brewery-search-btn").on("click", function() {

  // Save the brewery typed into the input
  var brewerySearched = $("#brewery-search").val().trim();

  // Make an AJAX get request to our api, including the user's brewery in the url
  $.get("/api/brew_name/" + brewerySearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderReviews function to add our review to the page
    renderReviews(data);

  });

});



function renderReviews(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");
      div.append("<h3>" + data[i].brew_name + "</h3>");
      div.append("<p>Review Title: " + data[i].title + "</p>");
      //div.append("<p>Brewery: " + data[i].brew_name + "</p>");
      div.append("<p>Comment: " + data[i].comment + "</p>");
      div.append("<p>Rating: " + data[i].rating + "</p>");
     // div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE REVIEW</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .done(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
