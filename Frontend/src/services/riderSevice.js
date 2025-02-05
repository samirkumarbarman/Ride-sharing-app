export const fetchAvailableRides = async () => {
    try {
      const response = await fetch("https://api.example.com/rides");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching rides:", error);
      return [];
    }
  };