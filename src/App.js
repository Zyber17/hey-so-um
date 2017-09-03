import React from 'react'

const Messages = () => (
	<div id="messages">
		<ul>
			<li>Hey, it's Z.</li>
			<li>This site is coming soon.</li>
			<li>Yay!~</li>
		</ul>
	</div>
)

const Suggestions = () => (
	<div id="suggestions">
		<ul>
			<li>Exciting!</li>
			<li>See you soon.</li>
			<li>Yay!~</li>
		</ul>
	</div>
)

const Dialogue = () => (
	<div id="dialogueWindow">
		<Messages />
		<Suggestions />
	</div>
)

const App = () => <Dialogue />

export default App
