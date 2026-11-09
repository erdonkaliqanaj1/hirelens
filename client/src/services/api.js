export async function getHealthStatus() {
    const response = await fetch("http://localhost:5000/api/health");

    if(!response.ok){
        throw new Error("Failed to fetch health status");
    }
    return response.json();
    
}