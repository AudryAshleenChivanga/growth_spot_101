document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the actual form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Here you could add code to actually send the form data to a server
        console.log('Form submitted', { name, email, message });
        alert('Thank you for your message. We will get back to you soon!');

        // Reset form fields after submission for demonstration purposes
        form.reset();
    });
});
