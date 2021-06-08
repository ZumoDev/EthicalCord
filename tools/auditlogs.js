const requst = require('request')
const fs = require('fs')

module.exports = logs = function(token, guild) {
  let options = {
    url: 'https://discord.com/api/v9/guilds/'+guild+'/audit-logs',
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  request(options, (err, res, body) => {
    if (err) return err

    fs.writeFile('logs.txt', body, (err) => {
      if (err) return err

      console.log('Writed Server Logs into logs.txt')
    })
  })

}