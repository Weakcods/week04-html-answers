
document.getElementById('registration-form').addEventListener('submit', function(e)
{
    e.preventDefault();  // Prevent form from submitting

    // Get form values
    const formData = {
        lastName: document.getElementById('last_name').value,
        firstName: document.getElementById('first_name').value,
        middleName: document.getElementById('middle_name').value,
        birthdate: document.getElementById('birthdate').value,
        department: document.getElementById('department').value,
        office: document.getElementById('office').value
    };

    // Display in console
    console.log('Employee Registration Data:', formData);
});
