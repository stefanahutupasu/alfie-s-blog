// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.querySelector('.row');

    const posts = [
        { id: 'post1', title: 'Hello', date: 'December 6, 2023', image: 'images/alfie.jpg' },
        { id: 'post2', title: 'Chilling', date: 'December 7, 2023', image: 'images/alfie2.jpg' },
        { id: 'post3', title: 'Donuts', date: 'December 7, 2023', image: 'images/alfie3.jpg' },
        // { id: 'post11', title: 'Hello', date: 'December 6, 2023', image: 'images/alfie.jpg' },
        // { id: 'post11', title: 'Hello', date: 'December 6, 2023', image: 'images/alfie.jpg' },
        // { id: 'post11', title: 'Hello', date: 'December 6, 2023', image: 'images/alfie.jpg' }
        
        
    ];


    // Function to fetch and display blog posts
    function fetchAndDisplayPosts(page = 1, postsPerPage = 3) {
        // For simplicity, let's assume posts are statically added here
        

        // Calculate the starting index for the current page
        const startIndex = (page - 1) * postsPerPage;

        // Get the posts for the current page
        const currentPagePosts = posts.slice(startIndex, startIndex + postsPerPage);

        // Clear the existing content
        postsContainer.innerHTML = '';

        // Display posts on the page
        currentPagePosts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('col-md-4', 'mb-0'); // Bootstrap classes for column layout
            postDiv.innerHTML = `
                <div class="post-preview">
                    <div class="post-image" style="background-image: url('${post.image}')">
                        <div class="overlay">
                            <h2>${post.title}</h2>
                            <p>${post.date}</p>
                        </div>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postDiv);
        });
    }

    // Call the function to fetch and display posts for the first page
    fetchAndDisplayPosts();

    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination', 'd-flex', 'justify-content-center',); // Added classes for centering

    document.body.appendChild(paginationContainer);

    // Add event listeners to handle pagination
    paginationContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const page = parseInt(event.target.dataset.page);
            fetchAndDisplayPosts(page);
        }
    });

    // Add pagination links based on the number of pages
    const totalPosts = posts.length;
    console.log("totalPosts:", totalPosts);
    const totalPages = Math.ceil(totalPosts / 3); // 3 posts per page
    console.log("totalPosts, totalPages:", totalPosts, totalPages);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('btn', 'btn-success', 'mr-2'); // Bootstrap button classes
        button.dataset.page = i;
        paginationContainer.appendChild(button);
    }
});
