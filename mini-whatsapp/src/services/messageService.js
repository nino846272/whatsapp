const BASE_URL = 'https://6814ab3a225ff1af1629a17d.mockapi.io/messages';

export const fetchMessages = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const sendMessageToApi = async (message) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  return await res.json();
};
