

//post
// Select DOM elements
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const addPostButton = document.getElementById("addPostButton");
const postsContainer = document.getElementById("postsContainer");

// Event listener for adding posts
addPostButton.addEventListener("click", () => {
    const title = postTitle.value.trim();
    const content = postContent.value.trim();

    // Validate input
    if (title === "" || content === "") {
        Swal.fire({
            title: "Please fill out both the title and content fields",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
        return;
    }

    // Create a new post element
    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Add the new post to the container
    postsContainer.appendChild(post);

    // Clear input fields
    postTitle.value = "";
    postContent.value = "";

    // Add delete functionality to the delete button
    const deleteButton = post.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "Question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success"
              });
            }
          });
        postsContainer.removeChild(post);
    });
});
