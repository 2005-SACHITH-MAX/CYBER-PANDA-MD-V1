import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Guru.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
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
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','command'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
