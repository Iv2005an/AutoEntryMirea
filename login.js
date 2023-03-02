chrome.storage.local.get(["enable", "login", "password"], result => {
    if (window.location.href === "https://online-edu.mirea.ru/" && document.getElementById("login") !== undefined) {
        document.getElementById("login_username").value = result.login !== undefined ? result.login : ''
        document.getElementById("login_password").value = result.password !== undefined ? result.password : ''
        document.getElementById("login").submit()
    } else {
        document.getElementById("id_login").value = result.login !== undefined ? result.login : ''
        document.getElementById("id_password").value = result.password !== undefined ? result.password : ''
        if (document.getElementsByClassName("errorlist")[0] === undefined
            && result.enable && result.password !== '' && result.password !== '') {
            document.getElementById("mirea-users-loginform").submit()
        }
    }
})