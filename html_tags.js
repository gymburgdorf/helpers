document.addEventListener("DOMContentLoaded", enhance)

function enhance() {
	sections = document.querySelectorAll("section")
	for(let s of sections) {
		heading = s.querySelector("h2").outerHTML
		code = s.innerHTML.slice(s.innerHTML.indexOf("</h2>") + 5)
		s.innerHTML = `
			<details open>
				<summary>${heading}</summary>
					${code}
				<h3>Code:</h3>
				<code></code>
			</details>
		`
		s.querySelector("code").textContent = code
	}
}