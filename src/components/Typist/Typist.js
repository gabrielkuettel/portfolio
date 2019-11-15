import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = ({ pathname, phrases }) => {
   return (
      <Typing>
         {pathname === `${__PATH_PREFIX__}/` ? (
            <>
               {phrases.map((phrase, index) => {
                  if (index === 0) {
                     return (
                        <div key={phrase}>
                           {phrase}
                           <Typing.Delay ms={2000} />
                           <Typing.Backspace count={phrase.length} />
                        </div>
                     );
                  } else {
                     return (
                        <div key={phrase}>
                           {phrase}
                           <Typing.Delay ms={1000} />
                           <Typing.Backspace count={phrase.length} />
                        </div>
                     );
                  }
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
