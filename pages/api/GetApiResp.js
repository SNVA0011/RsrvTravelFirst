export const getApiData = async (url, requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }) => {
    try {
        const res = await fetch(url, requestOptions); 
        const data = await res.json();
        return data;
    }
     catch (error) {
        console.log("error", error.message);
        return [];
    }
};
