document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the form inputs
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Perform login validation
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        saveLoginDetails(username, password); // Save login details
        // Redirect to a new page or perform any other actions upon successful login
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });

    function saveLoginDetails(username, password) {
      var loginDetails = {
        username: username,
        password: password
      };

      // Store login details in localStorage
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
    }