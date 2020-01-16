//to use
//ctrl + shift + k from the browser
//then copy pasta into the prompt and hit enter

//new york times
let appNode = document.getElementById('app')
let middleNode = appNode.children[0]
let hiddenNode = middleNode.children[0]
hiddenNode.style = "overflow-y: scroll"
let paywallNode = document.getElementById('gateway-content')
paywallNode.remove()

//bloomberg
let ps = document.getElementsByTagName('p')
for (let p of ps) {
	p.style = 'display: block'
}
