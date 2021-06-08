const request = require('request')
const fs = require('fs')

module.exports = readmessages = function(token, channelid) {
  const options = {
    url: 'https://discord.com/api/v9/channels/'+channelid+'/messages?limit=100',
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

    let response = JSON.parse(body)

    console.log(`Writing response in 'messages.txt'`)
    for (let i = 0;i < 101;i++) {
      fs.writeFileSync('messages.txt', `${response[i].author.username}: ${response[i].content}\n`, {
        encoding: 'utf8',
        flag: 'a+',
        mode: 0o666
      })
    }
  })
}