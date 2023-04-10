import { Context, HybridBuilder, ParamsBuilder, Plugins } from 'erine';
import { pool } from '../index'

export const body = {
    data: new HybridBuilder()
        .setName('setprefix')
        .setDescription('Set a prefix for this server'),
    params: new ParamsBuilder()
        .addString({
          name: 'prefix',
          description: 'Set a new prefix',
          required: true
        }),
    //plugins: [Plugins.hasPerms('ManageGuild')],
    code: async (d: Context): Promise<any> => {
        let param = d.get('prefix');
        if((<any>param).length >= 5) return await d.send('The prefix cannot exceed 5 characters');
        await pool.query(`UPDATE "Guilds" SET prefix = $1 WHERE id = $2`, [param, d.guild!.id])
            .then(async () => {
                return await d.send(`Prefix changed to \`${param}\` nia`);
            })
            .catch(console.log)
    }
}
