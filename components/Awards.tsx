'use client'

import React, { useState, FC } from 'react';

type Award = {
  title: string;
  description: string;
  imageUrl: string;
};

const awards: Award[] = [
  {
    title: 'Most Improved Musician',
    description: 'Awarded for being the most improved member in Wind Symphony.',
    imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQE-iJdcXHMjrg/profile-treasury-image-shrink_1280_1280/0/1711646390212?e=1714705200&v=beta&t=S-k3xEFe4gJxGUASDEjLN_zws-hiM-CQe5bUJ9eZpnQ',
  },
  {
    title: 'VEX State Qualifiers',
    description: 'Awarded for being 25/171 in the state for the skills competition, qualifying for the state competition held in Doswell, VA.',
    imageUrl: 'https://www.robotevents.com/uploads/events/52164/736d5a920f9524cfa718cfb072f94835.png',
  },
  {
    title: 'The Aerospace Corporation',
    description: 'Awarded for being one of the best Robotics and Intelligent Machine projects at an engineering competition.',
    imageUrl: 'https://www.ee.ucla.edu/wp-content/uploads/ee/aerospace-general-contractor001.png',
  },
];

interface AwardModalProps {
  award: Award | null;
  onClose: () => void;
}

const AwardModal: FC<AwardModalProps> = ({ award, onClose }) => {
  if (!award) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-purple-800">{award.title}</h2>
        <img src={award.imageUrl} alt={award.title} className="w-full h-auto mb-2" />
        <p className="mb-4">{award.description}</p>
        <button onClick={onClose} className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600">Close</button>
      </div>
    </div>
  );
};

const Awards: FC = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <section id="awards" className="py-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedAward(award)}>
              <img src={award.imageUrl} alt={award.title} className="w-full h-64 object-cover object-center rounded-lg transition duration-300 hover:opacity-75" />
            </div>
          ))}
        </div>
        {selectedAward && <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />}
      </div>
    </section>
  );
};

export default Awards;
