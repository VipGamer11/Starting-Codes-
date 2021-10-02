const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "bot token", //Discord Bot Token
prefix: "$getServerVar[prefix]" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.variables({
prefix: "PREFIX"
  })

bot.status({
  text: "TEXT",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code
});

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.loadCommands(`./commands/`) //Create commands Folder
