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

export function renderList(list, max=100) {
    let element = document.querySelector(".output")
    if(!element) {
        document.body.insertAdjacentHTML("beforeend", `<div class="output"></div>`)
        element = document.querySelector(".output")
    }
    element.innerHTML = list.slice(0,max).map(x=>`<span>${JSON.stringify(x)}</span>`).join("")
}

export function swap(list, i, j) {
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
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