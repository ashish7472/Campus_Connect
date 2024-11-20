import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const usersWithSimilarInterests = [
    { name: 'John Doe', department: 'CSE', graduationYear: '2025' },
    { name: 'Jane Smith', department: 'ECE', graduationYear: '2024' },
  ];

  const events = [
    'Hackathon - Nov 25',
    'AI Workshop - Nov 27',
    'Coding Contest - Nov 30',
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Users with Similar Interests</h2>
          {usersWithSimilarInterests.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-4">
              <p>Name: {user.name}</p>
              <p>Department: {user.department}</p>
              <p>Graduation Year: {user.graduationYear}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          {events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-4">
              <p>{event}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
