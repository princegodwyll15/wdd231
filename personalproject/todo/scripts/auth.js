(() => {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html"; 

  const unprotectedPages = ["login.html", "signup.html"]; 
  const user = localStorage.getItem("taskmasterUser");

  if (!unprotectedPages.includes(page)) {
    if (!user) {
      console.warn("No user found — redirecting to login.html");
      window.location.href = "login.html"; 
    } else {
      console.log("User is authenticated");
    }
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Navigation Elements
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector(".main-nav");

  if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
      navigation.classList.toggle("visible");
      console.log("Hamburger menu toggled");
    });
  } else {
    console.warn("Hamburger or navigation element not found");
  }

  // Footer Elements
  const footerYear = document.getElementById("copyright");
  const lastModified = document.getElementById("lastModified");

  const currentDate = new Date();
  if (footerYear) {
    footerYear.textContent = `© ${currentDate.getFullYear()} TaskMaster, All Rights Reserved`;
  } else {
    console.warn("Footer year element not found");
  }

  if (lastModified) {
    lastModified.textContent = `Last modified: ${new Date(document.lastModified).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  } else {
    console.warn("Last modified element not found");
  }

  // Sign Up Form Handling
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("📬 Sign-up form submitted");

      const username = document.getElementById("signupUsername").value.trim();
      const password = document.getElementById("signupPassword").value;
      const feedback = document.getElementById("formFeedback") || createFeedbackElement(signupForm);

      if (username.length < 3 || password.length < 6) {
        feedback.textContent = "Username must be at least 3 characters and password at least 6.";
        feedback.className = "error-message";
        console.warn("Validation failed on sign-up");
        return;
      }

      // Save user details to localStorage
      localStorage.setItem("taskmasterUsername", username);
      localStorage.setItem("taskmasterPassword", password);
      localStorage.setItem("taskmasterUser", username);
      console.log("Sign-up successful:", username);

      feedback.textContent = "Account created successfully! Redirecting...";
      feedback.className = "success-message";

      setTimeout(() => {
        window.location.href = "index.html"; // Redirect after successful sign-up
      }, 1500);
    });
  }

  // Login Form Handling
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Login form submitted");

      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value;
      const feedback = document.getElementById("formFeedback") || createFeedbackElement(loginForm);

      const storedUsername = localStorage.getItem("taskmasterUsername");
      const storedPassword = localStorage.getItem("taskmasterPassword");

      if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("taskmasterUser", username);
        console.log("Login successful:", username);

        feedback.textContent = "Login successful! Redirecting...";
        feedback.className = "success-message";

        setTimeout(() => {
          window.location.href = "index.html"; // Redirect to index page after login
        }, 1500);
      } else {
        console.warn("Invalid login attempt");
        feedback.textContent = "Invalid username or password.";
        feedback.className = "error-message";
      }
    });
  }

  //Utility Function to Create Feedback Element
  function createFeedbackElement(parent) {
    const div = document.createElement("div");
    div.id = "formFeedback";
    parent.insertBefore(div, parent.firstChild);
    return div;
  }
});
