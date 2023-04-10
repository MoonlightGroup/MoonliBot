"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const erine_1 = require("erine");
const bot = new erine_1.ErineClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    prefix: 'e!',
});
bot.load_commands('./src/commands').then(() => console.log('Commands loaded!'));
bot.on('ready', function () {
    bot.skyfold.sync(bot.token, bot.user.id).then(() => console.log('Slash commands uploaded to the Discord API.'));
    console.log('Client started.');
});
bot.login(process.env.TOKEN);
