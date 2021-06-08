const channel = require('./tools/seeallchannels.js')
const messages = require('./tools/readmessagehistory.js')
const logs = require('./tools/auditlogs.js')
const userinfo = require('./tools/userinfo.js')
const channelinf = require('./tools/channelinfo.js')
const c = require('colors')


console.log(c.brightBlue(`
███████╗████████╗██╗░░██╗██╗░█████╗░░█████╗░██╗░░░░░░█████╗░░█████╗░██████╗░██████╗░
██╔════╝╚══██╔══╝██║░░██║██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔══██╗██╔══██╗
█████╗░░░░░██║░░░███████║██║██║░░╚═╝███████║██║░░░░░██║░░╚═╝██║░░██║██████╔╝██║░░██║
██╔══╝░░░░░██║░░░██╔══██║██║██║░░██╗██╔══██║██║░░░░░██║░░██╗██║░░██║██╔══██╗██║░░██║
███████╗░░░██║░░░██║░░██║██║╚█████╔╝██║░░██║███████╗╚█████╔╝╚█████╔╝██║░░██║██████╔╝
╚══════╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░
`))

console.log(c.red(`THIS TOOL WAS MADE FOR ETHICAL PURPOSES. ANY HARMFUL USE MAY LEAD INTO A BAN FROM DISCORD`))

console.log(c.green('Made by Zumo#5792'))

console.log('Insert your user token before continuing (This will allow Discord API to be usable ')
let token = prompt('Your Token ')

//let token = 'YOUR_TOKEN' << USE IF PROMPT IS NOT SHOWING / ANY OTHER ERROR

console.log(`Choose an option:

[${c.blue('1')}] See all channels from a server

[${c.blue('2')}] Get message history from a channel

[${c.blue('3')}] See a server Audit Logs (REQUIRES SEE_AUDIT_LOGS PERMISSION) (BETA)

[${c.blue('4')}] Anonymous Userinfo command

[${c.blue('5')}] Get Channel Info`)

let choice = prompt('Your choice ')

if (choice == 1) {
  let guild = prompt('Type the guild ID you want to get all the channels from ')

  channel(token, guild)
}
else if (choice == 2) {
  let channel = prompt('Type the channel ID you want to get the messages from ')

  messages(token, channel)
} else if (choice == 3) {
  let guild = prompt('Type the guild ID you want to get the logs from ')

  logs(token, guild)
} else if (choice == 4) {
  let user = prompt('Type the user ID you want to get the information from')

  userinfo(token, user)
} else if (choice == 5) {
  let channel = prompt('Type the channel ID you want to get the information from')

  channelinfo(token, channel)
}
