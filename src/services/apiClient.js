// Thin fetch wrapper the rest of the services layer builds on.
// Once a backend exists, point VITE_API_BASE_URL at it and every
// service function below starts hitting the real API automatically.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function apiRequest(path, { method = 'GET', body, headers } = {}) {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL is not configured — no backend connected yet.');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json();
}

export default apiRequest;
