
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
┌─•✧𝑩𝑶𝑻 𝑰𝑵𝑭𝑶✧•──┐
┊ 🤖  *𝘽𝙊𝙏 𝙉𝘼𝙈𝙀:*${botname}
└─── •✧✧• ────┘ 
┌──•✧❊❊❊✧•── ─┐
┃𝐒𝐋│𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀
└─── •✧✧• ────┘
┌─•✧𝑰𝑵𝑭𝑶 𝑼𝑺𝑬𝑹✧•─┐
┊ 👨‍💻  *𝑼𝑺𝑬𝑹:* ${taguser}
┊ 👨‍💻  *𝙉𝘼𝙈𝙀:* ${name}
┊ 🎩  𝙊𝙒𝙉𝙀𝙍 𝙉𝘼𝙈𝙀 :${author}
└─── •✧✧• ────┘

┌──•✧𝑻𝒐𝒅𝒂𝒚✧•─────┐
┊ 📅   *𝘿𝘼𝙏𝙀:* ${date}
┊ ⏲️   *𝙏𝙄𝙈𝙀:* ${wib}
└── •✧✧• ───────┘ 

┌─•✧𝑩𝑶𝑻 𝑰𝑵𝑭𝑶✧•──┐
┊ 𝐂𝐘𝐁𝐄𝐑 𝐏𝐀𝐍𝐃𝐀 𝐌𝐃 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 
┊ 𝐒𝐀𝐂𝐇𝐈𝐓𝐇.
≻───── ⋆✩⋆ ─────≺
`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Guru.jpg' 
    conn.sendButton(m.chat, m2, '▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Groups', `${usedPrefix}gpguru`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'help2', 'h2'] 

export default handler
