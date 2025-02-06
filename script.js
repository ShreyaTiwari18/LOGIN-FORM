document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Hardcoded credentials (For testing only)
            if (username === "admin" && password === "1234") {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "students.html"; // Redirect to students page
            } else {
                message.textContent = "Invalid username or password!";
                message.style.color = "red";
            }
        });
    }

    // Redirect unauthorized users
    if (window.location.pathname.includes("students.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "index.html"; // Redirect to login
        } else {
            showStudents();
        }
    }
});

function showStudents() {
    const students = ["Shreya", "Sidra", "Soniya"];
    const studentList = document.getElementById("studentList");

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = student;
        studentList.appendChild(li);
    });
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html"; // Redirect to login
}