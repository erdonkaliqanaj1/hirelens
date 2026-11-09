import { useState, useEffect } from "react";
import { getHealthStatus } from "../services/api";

function HealthStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHealth() {
      try {
        setLoading(true);
        setError(null);
        const data = await getHealthStatus();
        setStatus(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHealth();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-sm w-full text-center">
      <h2 className="text-xl font-semibold mb-2">Server Status</h2>
      <p className="text-green-600 font-medium">Status: {status.status}</p>
      <p className="text-gray-600 text-sm mt-1">
        Timestamp: {new Date(status.timestamp).toLocaleString()}
      </p>
      <p className="text-red-500">
    Unable to connect to the server. Please try again later.
  </p>
    </div>
  );
}

export default HealthStatus;
