import React from "react";
// import { Typing } from "react-typing-effect";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWritter = () => {
  const sentenceFragmentOne = "Does your employee have";
  const sentenceFragmentMiddle = [
    "a medical bill",
    "a family emergency",
    "an unexpected travel",
    "a car repair",
    "an expense",
  ];
  const sentenceFragmentTwo = "that they can’t wait until payday?";

  const sentences = sentenceFragmentMiddle.map((sentence) => `${sentenceFragmentOne} ${sentence} ${sentenceFragmentTwo}`);

    

  return (

      <p className="text mb-20">
        {sentenceFragmentOne}
      <span className="ml-2"><TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3329a9',
          fontWeight: 700,
          fontSize: '1em',
          margin: '0 .5em'
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={sentenceFragmentMiddle}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop={true}
      /> </span> 
      {sentenceFragmentTwo}
    </p>
    
  );
};

export default TypeWritter;
