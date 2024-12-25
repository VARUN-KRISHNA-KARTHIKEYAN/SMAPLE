document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Redirect to a new HTML page with the entered data as query parameters
    window.location.href = `display.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&gender=${encodeURIComponent(gender)}`;
});
