import myListenForNewBtnClick from '../spaghetti/spaghetti';

export default function myMutationObserver() {
	// Select the node that will be observed for mutations
	const targetNode = document.getElementById('myContentWrapper');

	// Options for the observer (which mutations to observe)
	const config = { attributes: true, childList: true, subtree: true };

	// Callback function to execute when mutations are observed
	const callback = function (mutationsList, observer) {
		// Use traditional 'for loops' for IE 11
		for (const mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				// console.log(
				// 	'The ' + mutation.attributeName + ' attribute was modified.'
				// );
				// myListenForNewBtnClick();
			}
		}
	};

	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(targetNode, config);
}
