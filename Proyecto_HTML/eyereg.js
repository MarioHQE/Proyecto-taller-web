document.addEventListener("DOMContentLoaded", function() {
    const visualizar = document.getElementById("visualizar");
    const passwordInputs = document.querySelectorAll(".password-input");

    passwordInputs.forEach(passwordInput => {
        visualizar.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                visualizar.classList.remove("fa-eye");
                visualizar.classList.add("fa-eye-slash");
            } else {
                passwordInput.type = "password";
                visualizar.classList.remove("fa-eye-slash");
                visualizar.classList.add("fa-eye");
            }
        });
    });
});