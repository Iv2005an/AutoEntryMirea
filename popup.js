chrome.storage.local.get(["login", "password", "enable"], result => {
    document.getElementById("login").value = result.login !== undefined ? result.login : ''
    document.getElementById("password").value = result.password !== undefined ? result.password : ''
    if (result.enable) document.getElementById('onOff').innerHTML = "Выключить"
    else document.getElementById('onOff').innerHTML = "Включить"
})

document.getElementById('saveButton').addEventListener("click", () => {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    chrome.storage.local.set({ login: login })
    chrome.storage.local.set({ password: password })

})

document.getElementById('onOff').addEventListener("click", () => {
    if (document.getElementById('onOff').innerHTML === "Выключить") {
        chrome.storage.local.set({ enable: false })
        document.getElementById('onOff').innerHTML = "Включить"
    }
    else if (document.getElementById('onOff').innerHTML === "Включить") {
        chrome.storage.local.set({ enable: true })
        document.getElementById('onOff').innerHTML = "Выключить"
    }
})