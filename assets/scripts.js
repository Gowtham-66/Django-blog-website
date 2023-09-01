document.addEventListener('DOMContentLoaded', function() {
    const blogLinks = document.querySelectorAll('.blog-link');
    const blogContent = document.getElementById('blog-content');
    const showButton = document.getElementById('show-button');

    blogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the description from the data-desc attribute
            const description = link.getAttribute('data-desc');

            // Update the blog content with the fetched description
            blogContent.style.display = 'block';
            blogContent.innerHTML = description;

            // Show the button
            showButton.style.display = 'block';
        });
    });

    // Add event listener to the show button
    showButton.addEventListener('click', function() {
        // Handle button click event here
        console.log('Button clicked');
    });
});
