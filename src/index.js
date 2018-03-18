export default class Example {
	addEvents = () => {
		const $node = document.getElementById('btn')
		$node.addEventListener('click', () => {
			$node.textContent = 'gary'
		})
	}
}
