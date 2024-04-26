// Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
                <div className="space-y-6">
                    
    
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-bold mb-2">Lead Engineer Developer: VEX Robotics</h3>
                        <p className="text-md mb-2">Dec 2021 - Present</p>
                        <ul className="list-disc list-inside">
                            <li>Lead engineer notebook designer and team captain for the engineering team.</li>
                            <li>Used PROS and EZ Template to create a fully autonomous robot with C++.</li>
                            <li>Tournament semifinalists and 25th/171 in the entire state of Virginia for skills.</li>
                            <li>Qualified for the state VEX competition held in Doswell, VA.</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-bold mb-2">Founder: Web and Mobile App Development</h3>
                        <p className="text-md mb-2">Dec 2022 - Present</p>
                        <ul className="list-disc list-inside">
                            <li>Founded and increased membership by 50% from 2023-2024, fostering over 20 students to pursue their passion projects.</li>
                            <li>Participated in a UVA Hackathon with 3 members winning first place in their respective category.</li>
                            <li>Helped improve the CS curriculum at Stone Bridge by integrating HTML and CSS courses.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
