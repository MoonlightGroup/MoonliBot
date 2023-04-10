"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = void 0;
const erine_1 = require("erine");
exports.body = {
    data: new erine_1.HybridBuilder()
        .setName('test')
        .setDescription('Testtt.')
        .setAliases('t'),
    code: async (d) => {
        console.log(d);
        return await d.send({ content: `\`\`\`${d}\`\`\`` });
    }
};
