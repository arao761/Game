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
    imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQFOB8ciH1rLSQ/profile-treasury-image-shrink_1280_1280/0/1711646231721?e=1712253600&v=beta&t=ZF9V1jjKPQpGNGwOeqIcvvYM6n7tbvijDkFuM5R5gU8',
  },
  {
    title: 'VEX State Qualifiers',
    description: 'Awarded for being 25/171 in the state for the skills competition, qualifying for the state competition held in Doswell, VA.',
    imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQEzIBRlDZDErg/profile-treasury-image-shrink_800_800/0/1711646207271?e=1712253600&v=beta&t=XDX2mUD1SMXKl5J2MI0q8HnbH6m3x9mm_cXd8z6iioc',
  },
  {
    title: 'The Aerospace Corporation',
    description: 'Awarded for being one of the best Robotics and Intelligent Machine projects at an engineering competition.',
    imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQGIdlx7PJmtHw/profile-treasury-image-shrink_1280_1280/0/1711646582038?e=1712253600&v=beta&t=8PG5KMx8IjfAUyYvhY2D-DDTqeAHiOlWG_eAo19CfB4',
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
    <section id="awards" className="py-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
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
