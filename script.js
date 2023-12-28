function validateForm() {
        // Your validation logic here
        var whereTo = document.getElementById("whereTo").value;
        var numPersons = document.getElementById("numPersons").value;
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var description = document.getElementById("description").value;

        if (whereTo === "" || numPersons === "" || startDate === "" || endDate === "" || description === "") {
            alert("Please fill in all fields");
            return false;
        }

        // You can add more specific validation if needed

        alert("Booking successful!");
        return true;
    }
// Function to open the registration modal
    function openRegisterModal() {
		closeLoginModal();
        document.getElementById('registerModal').style.display = 'block';
    }

    // Function to close the registration modal
    function closeRegisterModal() {
        document.getElementById('registerModal').style.display = 'none';
    }

    // Function to validate the registration form
    function validateRegistration() {
        // Implement your validation logic here
        // Return true if the form is valid, otherwise return false
        // For example, you can use regular expressions to validate email, password strength, etc.
        return true;
    }
	 function openLoginModal() {
		closeRegisterModal();
        document.getElementById('loginModal').style.display = 'block';
    }

    // Function to close the login modal
    function closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none';
    }