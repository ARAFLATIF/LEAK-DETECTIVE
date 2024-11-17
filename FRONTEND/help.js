document.addEventListener('DOMContentLoaded', function() {
    
    // Handle support form submission
    const supportForm = document.getElementById('supportForm');
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const issue = document.getElementById('issue').value;
 
        // Here you would typically send this data to your server
        console.log('Support request submitted:', { name, email, issue });
 
        // Show a success message (in a real app, do this after successful submission to server)
        showAlert('Thank you for your message. We will get back to you soon!', 'success');
        supportForm.reset();
    });
 
    // Function to show alerts
    function showAlert(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
            </button>`;
        document.querySelector('.container').prepend(alertDiv);
 
        // Auto dismiss alert after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
 
    // Simulate loading forum posts
    const forumPosts = [
        { title: "Water saving tips for summer", author: "JohnD", date: "2 days ago", excerpt: "Here are some great tips for saving water during hot summer months..." },
        { title: "Question about leak detection sensitivity", author: "SarahM", date: "1 week ago", excerpt: "I'm wondering if anyone knows how to adjust the sensitivity of the leak detection system..." },
        { title: "Success story: How I reduced my water bill by 30%", author: "MikeR", date: "2 weeks ago", excerpt: "I want to share my experience of how I managed to significantly reduce my water consumption..." }
    ];
 
    function loadForumPosts() {
        const forumContainer = document.getElementById('forumPosts');
        forumContainer.innerHTML = ''; // Clear existing content
 
        forumPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'forum-post';
            postElement.innerHTML = `
                <h4>${post.title}</h4>
                <p>Posted by: ${post.author} | ${post.date}</p>
                <p>${post.excerpt}</p>`;
            forumContainer.appendChild(postElement);
        });
 
        const viewAllButton = document.createElement('a');
        viewAllButton.href = '#';
        viewAllButton.className = 'btn btn-primary';
        viewAllButton.textContent = 'View All Posts';
        forumContainer.appendChild(viewAllButton);
    }
 
    loadForumPosts();
 
    // Open chat button functionality
    document.getElementById('open-chat-btn').addEventListener('click', () => {
        window.botpressWebChat.sendEvent({ type: 'show' });
    });
 
    // Add event listeners for troubleshooting guide modals
    document.querySelectorAll('[data-toggle=\'modal\']').forEach(element => {
       element.addEventListener('click', function(e) {
           e.preventDefault();
           const targetModal = document.querySelector(this.getAttribute('data-target'));
           $(targetModal).modal('show');
       });
    });
 });
