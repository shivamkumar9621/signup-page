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

function validateInputs(){
    const password1 = document.querySelector("#password").value
    const rePassword = document.querySelector("#re-password").value
    
    if(password1.length < 3){
        alert('Password must be greater than 6 charchters')
    }

    if(rePassword==password1){
        return true
    }else {
        alert("password must be same")
    }
}
