// USER PROFILE FORM
document.getElementById("submitProfile").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("profile", JSON.stringify({ name, email }));
    document.getElementById("profileData").textContent = `Saved ${name} - ${email}`;
});

// LIVE WORD AND CHARACTER COUNT
document.getElementById("bio").addEventListener("input", () => {
    const text = document.getElementById("bio").value;
    document.getElementById("charCount").textContent = text.length;
    document.getElementById("wordCount").textContent = text.trim().split(/\s+/).length;
});

// STAR RATING SYSTEM
const stars = document.querySelectorAll(".star");
stars.forEach(star => {
    star.addEventListener("click", () => {
        let rating = star.dataset.value;
        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("active");
        }
        document.getElementById("ratingValue").textContent = rating;
        localStorage.setItem("rating", rating);
    });
});

// TO-DO LIST
document.getElementById("addTask").addEventListener("click", () => {
    const taskText = document.getElementById("taskName").value;
    if (!taskText) return;

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="taskCheck">${taskText}<button class="deleteTask">X</button>`;
    taskList.appendChild(li);
});

document.addEventListener("change", (event) => {
    if (event.target.classList.contains("taskCheck")) {
        event.target.parentElement.classList.toggle("completed");
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteTask")) {
        event.target.parentElement.remove();
    }
});

// Random Shape Generator
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("generate-shapes").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.fillRect(x, y, 40, 40);
    }
});

// Quiz System
document.getElementById("submit-quiz").addEventListener("click", () => {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="q1"]:checked')?.value;
    document.getElementById("quiz-result").textContent = userAnswer === correctAnswer ? "Correct!" : "Wrong!";
});

// Keyboard Shortcuts
document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() === "C") document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    if (event.key.toUpperCase() === "S") document.getElementById("taskList").classList.toggle("hidden");
    if (event.key.toUpperCase() === "M") document.querySelector(".image").style.transform = "translateX(50px)";
});