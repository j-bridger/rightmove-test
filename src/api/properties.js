export const getAllProperties = async () => {
  return fetch('http://localhost:3000/api/properties')
    .then(res => res.json());
};