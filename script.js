const forms = document.querySelector(".forms")
const pwShowHide = document.querySelectorAll(".eye-icon")
const links = document.querySelectorAll(".link")

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.closest("form").querySelectorAll("#password")

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text"
                eyeIcon.classList.replace("bxs-hide", "bxs-show")
                return;
            }
            password.type = "password"
            eyeIcon.classList.replace("bxs-show", "bxs-hide")

        })
    })    
})

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        forms.classList.toggle("show-signup")
    })
})

forms.addEventListener("submit", e => {
    e.preventDefault()
    validateInputs()
})
