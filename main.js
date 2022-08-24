/* 
check url vailed or not sent respones there is error

https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

{
    "ok": true,
    "result": {
        "code": "KCveN",
        "short_link": "shrtco.de/KCveN",
        "full_short_link": "https://shrtco.de/KCveN",
        "short_link2": "9qr.de/KCveN",
        "full_short_link2": "https://9qr.de/KCveN",
        "share_link": "shrtco.de/share/KCveN",
        "full_share_link": "https://shrtco.de/share/KCveN",
        "original_link": "http://example.org/very/long/link.html"
    }
}
    
*/
/* Start show Menu Mobile */
const linkMobile = document.querySelector(".links-mobile");
const floatingLinks = document.querySelector(".floating-menu");

linkMobile.addEventListener("click", () => {
    floatingLinks.classList.toggle("show");
})
/* End show Menu Mobile */


/* check url vailed or not sent respones there is error 
*/

const btn = document.querySelector("#shorten");
const input = document.querySelector("#urlInput");
const errorSpan = document.querySelector(".error")
const resultDiv = document.querySelector(".shorten");
const re = /(https?:\/\/)?(www)?(.\w+)+((:\d{4})?((\/|\?|\/\?|&|=|-)(\w+.?=?\w+)*))*/ig;
let i = 0;

btn.addEventListener("click", () => {

    if (re.test(input.value) && input.value.match(re).length == 1) {
        resultDiv.classList.remove("none")
        fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {

                    resultDiv.innerHTML += `
                        <div class=' Link-shorten'>
                        <p class='Main-url'>${data.result.original_link}</p>
                        <p class='shorten-url'>${data.result.full_short_link}</p>
                        <span class='Copy' id="link${i}" onclick="CopyFunction('${data.result.full_short_link}',${i})">Copy</span>
                        </div>  `
                    input.value = ""
                }
                else {
                    resultDiv.innerHTML += `
                    <div class=' Link-shorten'>
                    <p class='Main-url'>${input.value}</p>
                    <p class='shorten-url error-link'>Error</p>
                    <span class='Copy' id="${i}"  onclick="gotoinput()">Try Agin</span>
                    </div>  `
                    input.value = ""
                }
                i++
            })



    } else {
        input.classList.add("input-error")
        errorSpan.style.display = "block"
    }
    // ? resultDiv.innerHTML = "valid" : resultDiv.innerHTML = "Invalid"
})

input.addEventListener("keydown", (e) => {


    if (re.test(input.value) && input.value.match(re).length == 1) {
        input.classList.remove("input-error")
        errorSpan.style.display = "none"
    } else {
        input.classList.remove("input-error")
        errorSpan.style.display = "none"
    }
})

function CopyFunction(e, i) {
    let copyed = document.querySelector(`#link${i}`);
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        copyed.classList.add("copyed");
        copyed.textContent = "Copied!"
        return navigator.clipboard.writeText(e);
    }
    return Promise.reject('The Clipboard API is not available.');
}

function gotoinput() {

    input.focus();


}