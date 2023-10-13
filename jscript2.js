function submitForm() {
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked').length > 0 ? document.querySelector('input[name="gender"]:checked').value : "";
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        // Display the submitted values in the popup
        const submittedValues = document.getElementById("submitted-values");
        submittedValues.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        // Show the popup
        const popup = document.getElementById("popup");
        popup.style.display = "block";

        // Reset the form
        resetForm();
    } else {
        alert("Please fill in all required fields.");
    }
}

function resetForm() {
    document.getElementById("survey-form").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
