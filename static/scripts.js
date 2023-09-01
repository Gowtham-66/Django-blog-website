document.addEventListener('DOMContentLoaded', function() {
    const blogLinks = document.querySelectorAll('.blog-link');
    const blogContent = document.getElementById('blog-content');
    const showButton = document.getElementById('show-button');

    blogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the description and image URL from the data attributes
            const description = link.getAttribute('data-desc');
            const imageUrl = link.getAttribute('data-image-url'); // Replace with your data attribute name

            // Update the blog content with the fetched description
            blogContent.style.display = 'block';
            blogContent.innerHTML = description;

            // Show the button and store the image URL
            showButton.style.display = 'block';
            showButton.setAttribute('data-image-url', imageUrl);
        });
    });

    // Add event listener to the show button
    showButton.addEventListener('click', function() {
        // Get the stored image URL
        const imageUrl = showButton.getAttribute('data-image-url');

        // Open the image in a new tab
        window.open(imageUrl, '_blank');
    });
});
