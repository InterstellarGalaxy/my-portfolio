function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";

    // Show the popup with a success message
    showPopup(true);
  } else {
    // Optionally, you can add logic to handle when the input is empty
    console.log("Please enter a recommendation.");
  }
}

function showPopup(bool) {
  if (bool) {
    // Update the popup message text
    document.getElementById('popup').innerHTML = "Recommendation added successfully!";
    // Make the popup visible
    document.getElementById('popup').style.visibility = 'visible';

    // Optionally hide the popup after a few seconds
    setTimeout(function() {
      document.getElementById('popup').style.visibility = 'hidden';
    }, 3000); // Hide after 3 seconds
  } else {
    // Hide the popup if it's not needed
    document.getElementById('popup').style.visibility = 'hidden';
  }
}