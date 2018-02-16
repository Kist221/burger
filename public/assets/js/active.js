// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // ADD NEW
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#newBurger").val().trim()
    };
    // Send the POST request.
    $.ajax("/add", {
      type: "POST",
      data: newBurger
    }).then( function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // EAT BURGER
  $(".delBurger").on("click", function(event) {
    console.log("WORKING!!!!!!!");
    let eat = {
      id: $(this).data("burgerid")
    };
    // Send PUT request
    $.ajax("/eat", {
      type: "PUT",
      data: eat
    }).then( function() {
      console.log("YOU ATE THE BURGER!");
      location.reload();
    });
  });
});
