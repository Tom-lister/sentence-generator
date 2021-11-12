let words = new Array()
words[0] = new Array()
words[1] = new Array()
words[2] = new Array()
words[3] = new Array()

let area = document.getElementById("sentences")

function presets() {
    words[0].push("masked","unethical","idealistic","secretive","untrustworthy","bumbling","reserved","pitiful","heroic","diabolical")
    words[1].push("Jeff","Moe","Maurice","Nialliv","Cupman","Blake","Shades","Hood","Collector","Assistant")
    words[2].push("betrays","steals","throws","attacks","regrets","forgets","eats","hacks","shoots","lies")
    words[3].push("skillfully","easily","terribly","wistfully","secretly","quickly","ashamedly","strangely","selfishly","well")
}

function sentence() {
    if (words[0].length == 0 || words[1].length == 0 || words[2].length == 0 || words[3].length == 0) {
        alert("Not enough words loaded!")
    } else {
        let phrase = ("The " + words[0][Math.floor(Math.random()*words[0].length)] + " " + words[1][Math.floor(Math.random()*words[1].length)] + " " + words[2][Math.floor(Math.random()*words[2].length)] + " " + words[3][Math.floor(Math.random()*words[3].length)])
        area.append(phrase)
        area.append(document.createElement("br"))
    }
}

function submitword(e) {
    if (e.key === 'Enter') {
        newword = this.value
        newword = newword.substring(0, newword.length - 1)
        this.value = ""
        if (newword.length > 0) {
            this.nextSibling.nextSibling.innerHTML += "\xa0\xa0\xa0\xa0" + newword
            category = words[parseInt(this.id)]
            category.push(newword)
        }
    }
}

function clear() {
    area.innerHTML = ""
}

document.getElementById("genbutton").addEventListener("click",sentence)
document.getElementById("prebutton").addEventListener("click",presets)
document.getElementById("clrbutton").addEventListener("click",clear)
document.querySelectorAll(".submissions").forEach(function (textbox) {textbox.addEventListener("keyup",submitword)})