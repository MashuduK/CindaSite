// script.js

$(document).ready(function(){
    $('.qualification-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Optionally, you can add client-side validation here

        // Submit the form data using Fetch API or Axios (example using Fetch API)
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                displaySuccessMessage(); // Display success message
                form.reset(); // Optionally reset the form
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error scenario (e.g., display error message to the user)
        });
    });

    function displaySuccessMessage() {
        alert('Form submitted successfully!'); // Example: using an alert
    }
});
