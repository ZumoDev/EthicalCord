const request = require('request')
const fs = require('fs')

module.exports = channelinfo = function(token, channel) {
  const options = {
    url: 'https://discord.com/api/v9/channels/'+channel,
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  request(options, (err, res, body) => {
    if (err) return err

    fs.writeFile('channelinfo.txt', body, (err) => {
      if (err) return err

      console.log('Printed channel information in channelinfo.txt')
    })
  })
}