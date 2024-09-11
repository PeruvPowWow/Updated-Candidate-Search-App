import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from local storage
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved)); // Parse and set the saved candidates
    }
  }, []);

  return (
    <div className="saved-candidates">
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.login} className="candidate">
              <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
              <h3>{candidate.name}</h3>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location ? candidate.location : 'N/A'}</p>
              <p>Company: {candidate.company ? candidate.company : 'N/A'}</p>
              <p>Email: {candidate.email ? candidate.email : 'N/A'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been saved.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
