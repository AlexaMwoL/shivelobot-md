const { toAudio } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
 
module.exports = {
	name: "tomp3",
	alias: ["tomp3"],
	category: "converter",
	desc: "converter sticker to img", 
	wait: true,
	async run({ msg, conn }) {
    try {
	  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m
  })  
		}
	},
};
