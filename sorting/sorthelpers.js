export function createNumberList(n) {
    let list = []
    for(let i = 0; i < n; i++) {
        list.push(getRandomInt(0, 1000000))
    }
	return list
}

export function createObjectList(n) {
    let list = []
    for(let i = 0; i < n; i++) {
        list.push({name: getRandomName(), age: getRandomInt(1, 99)})
    }
	return list
}

function renderList(list) {
    let element = document.querySelector(".output")
    if(!element) {
        document.body.insertAdjacentHTML("beforeend", `<div class="output"></div>`)
        document.querySelector(".output")
    }
    element.innerHTML = list.slice(0,50).map(x=>`<span> ${JSON.stringify(x)} </span>`)
    `
}

function getRandomInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}

function getRandomName() {
    const vowels = "aeiou"
    const consonants = "bcdfghjklmnprstvwxz"
    const pick = (chars) => chars[getRandomInt(0, chars.length-1)]
    return pick(consonants).toUpperCase() + pick(vowels) + pick(consonants) + pick(vowels)
}