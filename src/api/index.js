const API_URL = 'http://swapi.co/api';

export const fetchSwapi = async (endpoint) => {
  const result = await fetch(`${API_URL}/${endpoint}`);
  return result.json();
};

export const getCategories = async () => fetchSwapi('');

export const getPeople = async () => fetchSwapi('people');

export const getVehicles = async () => fetchSwapi('vehicles');
