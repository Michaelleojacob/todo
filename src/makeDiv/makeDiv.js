export default function MakeDiv({
	elementName,
	type = 'div',
	text = null,
	parentEl,
}) {
	let name = elementName;
	elementName = document.createElement(type);
	elementName.classList.add(`${name}`);
	elementName.innerHTML = text;
	parentEl.appendChild(elementName);
	return elementName;
}
