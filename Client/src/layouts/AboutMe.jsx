import GoBackButton from '../components/Utils/Buttons/GoBackButton'

const AboutMe = () => {
    return (
        <div>

            <div className="flex items-center justify-start mt-10 ml-10 md:mt-20">
                <img 
                    src="https://avatars.githubusercontent.com/u/107652398?v=4" 
                    alt="Me!" 
                    className="w-28 h-auto rounded-full md:w-56 md:ml-10" 
                />
                <div className="ml-6 md:ml-24">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-Inter text-white">Hi! I am</p> 
                        <h2 className="text-2xl md:text-4xl font-bold font-Inter text-yellowGreen">Vir Montoya</h2> 
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold font-Inter text-yellowGreen mt-2">FullStack Web Developer</h3>
                    <p className="text-lg font-Inter text-white">PERN Stack</p> 
                </div>
                </div>
          
            <div className="mt-4 w-80 md:w-3/4 md:mt-6 mx-auto text-white font-Inter text-base mb-2">
                <span  className="block text-justify">
                    I have experience in different and varied types of projects, which have provided me with valuable knowledge.
                    Working under the Scrum methodology, I developed skills such as teamwork, effective communication, active listening and adaptability.
                    I use agile methodologies such as SCRUM and tools such as GIT, Trello or Figma. My set of technical skills includes mastery of HTML, CSS, JavaScript, React JS, Redux, Node JS, Express, PostgreSQL, Sequelize; I have experience in the use of CSS frameworks such as Boostrap, TailwindCSS and MaterialUI and I have knowledge of testing like Jest.
                    My experience in design and production in leading textile companies has taught me values ​​such as responsibility and adaptability; as well as a solid ability for interpersonal relationships, based on cordiality and empathy. In addition, my knowledge of morphology, composition and color theory have been useful tools that I have put to use in all my web projects, collaborating and/or designing the user interface (UI).
                    I am a committed, creative and resilient person, with the ability to understand people's motivations and needs. 
                    My passion is achieving goals and contributing to the common good, so I value clear communication and collaboration to achieve established objectives. 
                    My approach focuses on solving problems effectively, supported by analytical thinking and great adaptability to the different scenarios that may arise during the development of projects.
                    I enjoy learning and continuously improving.
                    Challenges motivate me!
                </span>
            </div>
           <GoBackButton /> 
        </div>

    );
};

export default AboutMe;



