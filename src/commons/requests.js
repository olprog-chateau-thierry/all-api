/**
* @param {string | URL} url
* @param {HeadersInit?} headers
* @return {Promise<Object>}
* @throws {Error} Erreur si le serveur renvoie autre chose que le status 200
*/
const getRequest = async (url, headers = {}) => {
    const resp = await fetch(url, {
        method: 'GET',
        headers: headers
    })
    if (resp.ok) {
        return await resp.json()
    }
    throw new Error("Problème de serveur. Veuillez contacter l'administrateur.")
}

export {
    getRequest
};