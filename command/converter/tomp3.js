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
  let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} -af apulsator=hz=0.125 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { document: buff, mimetype: 'audio/mpeg' ,contextInfo: {'externalAdReply':{'title':'🕊️𝖐𝖗𝖎𝖟','body':'𝖘𝖊𝖗🕊️','previewType':'VIDEO','thumbnailUrl':'','thumbnail':fs.readFileSync('TOXIC.jpg'),'sourceUrl':'ig.me/_toxic_kriz_'}}}, { quoted : m })
                fs.unlinkSync(ran)
                })
                } catch (e) {
                m.reply(e)
                }}
