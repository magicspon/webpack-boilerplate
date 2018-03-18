import Example from '../src/index'

describe('example', () => {
	let userRepo = new Example()

	document.body.innerHTML = '<div>' + '  <button id="btn" />' + '</div>'

	it('should set the textContent of button to gary', () => {
		userRepo.addEvents()

		const $node = document.getElementById('btn')

		$node.click()

		expect($node.textContent).toBe('gary')
	})
})
