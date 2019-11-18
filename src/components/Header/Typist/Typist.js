import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = ({ pathname, phrases }) => {
	return (
		<Typing>
			{pathname === `${__PATH_PREFIX__}/` ? (
				<>
					{phrases.map((phrase, index) => {
						return (
							<div key={phrase}>
								{phrase}
								<Typing.Delay ms={1000} />
								<Typing.Backspace count={phrase.length} />
							</div>
						);
					})}
					How can I <a href="mailto:gkdesigndev@gmail.com">help?</a>
				</>
			) : (
				<>{pathname}</>
			)}
		</Typing>
	);
};

export default AnimatedTypingComponent;
