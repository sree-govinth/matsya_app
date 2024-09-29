// Placeholder for future JavaScript functionality
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Generate a unique Fisherman ID (for demonstration purposes, just a random number)
    const fishermanId = 'FISH' + Math.floor(Math.random() * 10000);
    
    // Display the Fisherman ID
    alert('Registration successful! Your Fisherman ID is ' + fishermanId);
});
