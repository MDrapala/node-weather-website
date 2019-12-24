const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/db9366634a8c0968f90291a0efbc7227/'+ latitude + ',' + longitude +'?units=si&lang=fr'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' / ' + body.currently.temperature + '°c / ' + body.currently.precipProbability + '%')
        }
    })
}

module.exports = forecast