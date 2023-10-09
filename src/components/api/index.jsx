export const fetchVans = async () => {
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
};
