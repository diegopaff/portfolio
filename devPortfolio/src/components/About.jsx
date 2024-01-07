import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center py-[50px] sm:py-[150px] items-center gap-12 max-w-[1600px] mx-auto
                    md:flex-row-reverse md:w-screen md:px-auto "
    >
      <div className="flex justify-center items-center w-full">
        <div
          className="flex justify-center items-center rounded-full border-2 h-[200px] w-[200px] overflow-hidden
                        sm:h-[300px] sm:w-[300px]
                        md:h-[450px] md:w-[450px]"
        >
          <img
            className=" object-cover md:w-[450px] translate-y-5"
            src="../../public/profile-photo-min.jpg"
          ></img>
        </div>
      </div>

      <div
        className="flex flex-col w-full gap-8 justify-center items-center text-center px-8
                      md:w-full md:items-start"
      >
        <h2
          className="font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] 
                       md:justify-self-start
                      "
        >
          About Me
        </h2>
        <div
          className="flex flex-col gap-5 font-poppins font-regular text-sm text-white 
                      md:text-left md:text-base"
        >
          <p>
            Ever since I was a kid, I've always been fascinated by technology.
            Whether it was taking apart my family's old computer or
            experimenting with different software, I couldn't get enough. As I
            grew up, my passion for technology led me down all sorts of exciting
            paths - from making music and taking photos, to working on video
            production, post-production for local films, and to be a data
            analyst for a profesional football team.
          </p>
          <p>
            Now, as a self-taught front-end developer, I'm able to combine all
            of my previous skills and passions into one cohesive career. My
            background in music and sound engineering helps me understand the
            importance of user experience and how different elements work
            together to create a seamless flow. And my experience in video
            production and post-production has given me an eye for design and
            attention to detail that I bring to every project. It's amazing how
            all of these seemingly disparate interests have come together to
            create a fulfilling and exciting career path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
