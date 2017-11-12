// Make a get request to our api route that will return every "review with a rating of 7 or more
$.get("/api/review/high", function(data) {

  // For each review that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold review data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our review data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#book-well-" + i).append("<h4>Brewery: " + data[i].brew_name + "</h4>");
    $("#book-well-" + i).append("<h4>Comment: " + data[i].comment + "</h4>");
    $("#book-well-" + i).append("<h4>Rating: " + data[i].rating + "</h4>");
  }
});
