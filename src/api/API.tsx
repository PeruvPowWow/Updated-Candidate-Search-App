// src/api/API.tsx

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,  // Ensure the token is used here
        },
      }
    );
    if (!response.ok) {
      throw new Error('Invalid API response');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,  // Ensure the token is used here
      },
    });
    if (!response.ok) {
      throw new Error('Invalid API response');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('An error occurred:', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
