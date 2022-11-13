
function login(loginForm){
    if(loginForm.username.value && loginForm.password.value && loginForm.email.value && loginForm.email.value.includes("@") && /^[\w-\.]+@+[\w-]/.test(loginForm.email.value) && document.getElementById('guidelines').checked){
        alert("Username: "+loginForm.username.value+"\n"+"Email: "+loginForm.email.value)
    }
}