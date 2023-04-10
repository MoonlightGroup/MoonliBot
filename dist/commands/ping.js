"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = void 0;
const erine_1 = require("erine");
exports.body = {
    data: new erine_1.HybridBuilder()
        .setName('ping')
        .setDescription('Returns the client websocket latency.')
        .setAliases('latency'),
    code: async (d) => {
        return (await d.send({ content: `Websocket latency: \`${d.bot.ws.ping} ms\`` }));
    }
};
