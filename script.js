// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); // Debugging statement

    // Get the form element
    const form = document.querySelector('form');
    
    if (form) {
        console.log('Form element found'); // Debugging statement

        // Add an event listener for form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            console.log('Form submitted'); // Debugging statement

            // Get the values of the input fields
            const email = document.getElementById('email-address').value;
            const fullName = document.getElementById('full-name').value;

            console.log('Email:', email); // Debugging statement
            console.log('Full Name:', fullName); // Debugging statement

            // Validate the inputs (basic validation)
            if (email === '' || fullName === '') {
                alert('Please fill in both fields.');
                return;
            }

            // Log the form data to the console (replace with your actual form handling logic)
            console.log('Email:', email);
            console.log('Full Name:', fullName);
            
            // Display a success message
            alert('Thank you for subscribing!');
            
            // Optionally, you can reset the form
            form.reset();
        });
    } else {
        console.log('Form element not found'); // Debugging statement
    }
});
