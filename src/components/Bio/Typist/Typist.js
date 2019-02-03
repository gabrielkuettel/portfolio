import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
   <Typing>
         Hi!
         <Typing.Delay ms={1000} />
         <Typing.Backspace count={3} />
         I'm Gabriel
         <Typing.Delay ms={1000} />
         <Typing.Backspace count={7} />
         a web developer
         <Typing.Delay ms={1000} />
         <Typing.Backspace count={13} />
         graphic designer
         <Typing.Delay ms={1000} />
         <Typing.Backspace count={16} />
         {`1337 hacker... ;)`}
         <Typing.Delay ms={1000} />
         <Typing.Backspace count={24} />
         How can I <a href="/">help?</a>
   </Typing>
);

export default AnimatedTypingComponent;
