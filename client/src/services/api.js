const API_URL = import.meta.env.VITE_API_URL;



export async function getHealthStatus() {
  const response = await fetch(`${API_URL}/api/health`);
  

  if (!response.ok) {
    throw new Error("Failed to fetch health status");
  }
  return response.json();
}
