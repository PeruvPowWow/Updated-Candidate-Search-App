export interface Candidate {
    login: string;        // The GitHub username of the candidate
    avatar_url: string;   // The URL of the candidate's avatar image
    name: string;         // The full name of the candidate
    location?: string;    // The location of the candidate (optional field)
    email?: string;       // The email address of the candidate (optional field)
    html_url: string;     // The URL to the candidate's GitHub profile
    company?: string;     // The company the candidate works for (optional field)
  }
