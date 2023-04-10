import { ErineClient } from 'erine';
import { Client as PgClient } from 'pg';

const pool = new PgClient()
pool.connect()
    .then(() => console.log('Connected PostgreSQL.\n'))

const bot = new ErineClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    prefix: ['moon', '!'],
});

bot.load_commands('./src/commands')
    .then(() => console.log('Commands loaded!\n'));

bot.on('ready', () => {
    bot.skyfold.sync(bot.token!, bot.user!.id).then(() => console.log('Slash commands uploaded to the Discord API.'));
    console.log('Client started.');
});

export { pool, bot }

bot.login(process.env.TOKEN);