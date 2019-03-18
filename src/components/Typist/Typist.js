import React from "react";
import Typing from "react-typing-animation";

const AnimatedTypingComponent = ({ pathname }) => (
  <Typing>
    {pathname === `${__PATH_PREFIX__}/` ? (
      <>
        Hi!
        <Typing.Delay ms={2000} />
        <Typing.Backspace count={3} />
        I'm Gabriel
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={7} />
        a frontend developer
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={18} />
        backend developer
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={17} />
        motion designer
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={22} />
        How can I <a href="mailto:gabrielkuettel@gmail.com">help?</a>
      </>
    ) : (
      <>{pathname}</>
    )}
  </Typing>
);

export default AnimatedTypingComponent;
