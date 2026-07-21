const fetchDatas = async (endpoint) => {

    const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
        const r = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            }
        })
    if (!r.ok) {
        throw new Error(`Statut de réponse : ${r.status}`)
    }
    const datas = await r.json();
    return datas
    } catch (error) {
        console.error(error.message)
        throw error
    }
};

export const getArtisans = (query='') => fetchDatas(`/artisans${query ? `?${query}` : ''}`);
export const getTopArtisans = () => fetchDatas('/artisans/top');
export const getArtisanById = (id) => fetchDatas(`/artisans/${id}`);

export const getCategories = () => fetchDatas('/categories');

export const fetchSendContact = async (id_artisan, nom, mail, objet, message) => {
    const url = `${import.meta.env.VITE_API_URL}/contact`;
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        const r = await fetch(url, {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify({id_artisan, nom, mail, objet, message})
        })
        if (!r.ok) {
            throw new Error(`Statut de réponse : ${r.status}`)
        }
        return true
    } catch (error) {
        console.error(error.message)
        return false
    }
};