import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Luis Alfonso Molina Duque
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Student in Computer Systems Engineering & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Student with an impending diploma in Computer Systems Engineering,
        passionate about software development and committed to continuous
        learning. Throughout my studies, I've had the opportunity to work with
        various technologies across different domains. My objective is to launch
        a career in the field of software development.
        <br />
      </p>
    </div>
  );
}

export default Intro;
