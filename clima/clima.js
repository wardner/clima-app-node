const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=56300c96186fae573ac197dc3f86a7c3&lat=${lat}&lon=${lng}&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}