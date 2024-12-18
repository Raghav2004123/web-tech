$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            dob: $("#dob").val(),
            address: $("#address").val()
        };

        // Display the data in a formatted way
        let outputHtml = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Date of Birth:</strong> ${formData.dob}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
        `;

        // Show the output
        $("#output").html(outputHtml).fadeIn();
    });
});
