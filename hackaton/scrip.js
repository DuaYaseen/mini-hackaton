// Interactivity for buttons (if required)
const hiringButton = document.getElementById("hiringButton");
const loginButton = document.getElementById("loginButton");

hiringButton.addEventListener("click", () => {
    Swal.fire({
        title: "Thank You For Showing Intrest",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
});

loginButton.addEventListener("click", () => {
    console.log("Redirecting to login/register page.");
});


//newsletter

// Newsletter Form Submission
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    if (email) {
        Swal.fire({
            title: "Thank You for subscribing with your email",
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
          });;
        emailInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid email address.");
    }
});
