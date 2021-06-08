const request = require('request')
const fs = require('fs')

module.exports = userinfo = function(token, user) {

  let options = {
    url: 'https://discord.com/api/v9/users/'+user,
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  request(options, (err, res, body) => {
    if (err) return err

    let response = JSON.parse(body)


    fs.writeFile('userinfo.txt', `${response.username}#${response.discriminator} | ${response.id} (${body})`, (err) => {
      if (err) return err

      console.log('Printing response in userinfo.txt')
    })
  })
}