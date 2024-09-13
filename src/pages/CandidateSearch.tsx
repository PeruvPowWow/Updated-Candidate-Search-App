import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API';  // Use searchGithub function

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch candidates using the GitHub API on component mount
  useEffect(() => {
    const getCandidates = async () => {
      setLoading(true);
      try {
        const fetchedCandidates = await searchGithub(); // Fetch from GitHub API
        setCandidates(fetchedCandidates); // Set the fetched candidates
      } catch (error) {
        setError('Failed to fetch candidates.');
      } finally {
        setLoading(false);
      }
    };
    getCandidates();
  }, []);

  const currentCandidate = candidates[currentIndex]; // Get the current candidate

  // Handle saving the candidate
  const handleSaveCandidate = () => {
    if (!currentCandidate) return;  // Ensure there is a current candidate
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    setCurrentIndex(currentIndex + 1);  // Move to next candidate
  };

  // Handle skipping the candidate
  const handleSkipCandidate = () => {
    setCurrentIndex(currentIndex + 1);
  };

  // If still loading candidates
  if (loading) {
    return <p>Loading candidates...</p>;
  }

  // If an error occurred
  if (error) {
    return <p>{error}</p>;
  }

  // If there are no more candidates
  if (!currentCandidate) {
    return <p>No more candidates available to review.</p>;
  }

  // Display current candidate
  return (
    <div>
      <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name}'s avatar`} />
      <h2>{currentCandidate.name}</h2>
      <p>Username: {currentCandidate.login}</p>
      <p>Location: {currentCandidate.location || 'N/A'}</p>
      <p>Email: {currentCandidate.email || 'N/A'}</p>
      <p>Company: {currentCandidate.company || 'N/A'}</p>
      <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <br />
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleSkipCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;