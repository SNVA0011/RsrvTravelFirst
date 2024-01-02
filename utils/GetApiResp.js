export const getApiData = async (url, requestOptions = null) => {
    try {
        const res = await fetch(url, requestOptions);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error.message);
        return [];
    }
};
