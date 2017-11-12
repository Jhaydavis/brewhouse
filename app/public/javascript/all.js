
// Make a get request to our api route that will return every review
$.get("/api/all", function(data) {
  // For each review that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our review data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". "+ data[i].brew_name + "</h2>");
    $("#book-well-" + i).append("<h4>Review Title: " + data[i].title + "</h4>");
    //$("#book-well-" + i).append("<h4>Brewery: " + data[i].brew_name + "</h4>");
    $("#book-well-" + i).append("<p>Comment: " + data[i].comment + "</p>");
    $("#book-well-" + i).append("<p>Rating: " + data[i].rating + "</p>");
  }
});
