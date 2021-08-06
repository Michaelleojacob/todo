export default function MakeDiv({ elementName, text, parentEl }) {
	let name = elementName;
	elementName = document.createElement('div');
	elementName.classList.add(name);
	elementName.textContent = text;
	parentEl.appendChild(elementName);
	return elementName;
}
