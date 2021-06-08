const request = require('request')
const fs = require('fs')

module.exports = channels = function(token, guildID) {

  const options = {
    url: 'https://discord.com/api/v9/guilds/'+guildID+'/channels',
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  request(options, (err, res, body) => {
    if (err) {
      if (err.includes('undefined')) {
        process.exit()
      }
    }

    const response = JSON.parse(body)

    console.log(`Printing response in 'response.txt'`)

    for (var i = 0; i < 501;i++) {
      console.log(`${response[i].name} (${response[i].topic}) | ${response[i].id}\n`)
      fs.writeFileSync('response.txt', `${response[i].name} (${response[i].topic}) | ${response[i].id}\n`, {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
      })
    }

  })
}