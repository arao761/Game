import React from 'react';

type SkillTagProps = {
  skill: string;
};

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <div className="bg-purple-200 text-purple-800 py-2 px-4 rounded-md shadow-md m-2 hover:bg-purple-300 cursor-default transition duration-300">
    {skill}
  </div>
);

const skills: string[] = [
  'Python', 'JavaScript', 'React', 'React Native', 'Node.js', 'HTML', 'CSS',
  'Next.js', 'Git', 'Tailwind', 'TensorFlow', 'OpenAI',
  'C++', 'Java'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
