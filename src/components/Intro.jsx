import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Luis Alfonso Molina Duque
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Graduate student of Computer Systems Engineering with a passion for
        software development and constant learning, throughout my studies I have
        had the opportunity to work with different technologies in different
        areas. My goal is to start a career in the field of software
        development.
        <br />
      </p>
    </div>
  );
}

export default Intro;
