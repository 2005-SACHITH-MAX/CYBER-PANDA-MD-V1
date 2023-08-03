let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Guru.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀° ┄──•••───╮
      *𝘽𝙊𝙏 𝙈𝙀𝙉𝙐*  
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊🎩 _${usedPrefix}ping_
⎪❊🎩 _${usedPrefix}uptime_
⎪❊🎩 _${usedPrefix}bot_
⎪❊🎩 _${usedPrefix}owner_
⎪❊🎩 _${usedPrefix}script_
⎪❊🎩 _${usedPrefix}runtime_
⎪❊🎩 _${usedPrefix}infobot_
⎪❊🎩 _${usedPrefix}donate_
⎪❊🎩 _${usedPrefix}groups_
⎪❊🎩 _${usedPrefix}blocklist_
⎪❊🎩 _${usedPrefix}listprem_
⎪❊ 🎩ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ-ᴠ1🎩
┗━━━ʕ•❊•ʔ━━━┛

❀° ┄──•••───╮
     *𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐*  
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊🎩 _${usedPrefix}banchat_
⎪❊🎩 _${usedPrefix}unbanchat_
⎪❊🎩 _${usedPrefix}banuser_
⎪❊🎩 _${usedPrefix}unbanuser_
⎪❊🎩 _${usedPrefix}Broadcast_
⎪❊🎩 _${usedPrefix}Broadcastgc_
⎪❊🎩 _${usedPrefix}join_
⎪❊🎩 _${usedPrefix}setppbot_
⎪❊🎩 _${usedPrefix}setprefix_
⎪❊🎩 _${usedPrefix}resetprefix_
⎪❊🎩 _${usedPrefix}getfile_
⎪❊🎩 _${usedPrefix}getplugin_
┗━━━ʕ•❊•ʔ━━━┛
${readMore}
❀° ┄──•••───╮
      𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊❄_${usedPrefix}kick *<@tag>*_
⎪❊❄_${usedPrefix}promote *<@tag>*_
⎪❊❄ _${usedPrefix}demote *<@tag>*_
⎪❊❄ _${usedPrefix}infogroup_
⎪❊❄ _${usedPrefix}resetlink_
⎪❊❄ _${usedPrefix}link_
⎪❊❄ _${usedPrefix}setpp *<image>*_
⎪❊❄ _${usedPrefix}setname *<text>*_
⎪❊❄ _${usedPrefix}setdesc *<text>*_
⎪❊❄ _${usedPrefix}setwelcome *<text>*_
⎪❊❄ _${usedPrefix}setbye *<text>*_
⎪❊❄ _${usedPrefix}hidetag *<text/image/audio/vid>*_
⎪❊❄ _${usedPrefix}warn *<@tag>*_
⎪❊❄ _${usedPrefix}unwarn *<@tag>*_
⎪❊❄ _${usedPrefix}group *<open/close>*_
⎪❊❄ _${usedPrefix}enable
┗━━━ʕ•❊•ʔ━━━┛

❀° ┄──•••───╮
       𝘿𝙇 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊❄_${usedPrefix}play_
⎪❊❄_${usedPrefix}song_
⎪❊❄ _${usedPrefix}yta <link>_
⎪❊❄ _${usedPrefix}ytv <link>_
⎪❊❄ _${usedPrefix}ytmp3 <link>_
⎪❊❄ _${usedPrefix}ytmp4 <link>_
⎪❊❄ _${usedPrefix}gimage_
⎪❊❄ _${usedPrefix}pinterest_
⎪❊❄ _${usedPrefix}mediafire <link>_
⎪❊❄ _${usedPrefix}gdrive <link>_
⎪❊❄ _${usedPrefix}gitclone <link>_
⎪❊❄ _${usedPrefix}twitter <link>_
⎪❊❄ _${usedPrefix}tiktok <link>_
⎪❊❄ _${usedPrefix}tiktokstalk_
⎪❊❄ _${usedPrefix}instagram <link>_
⎪❊❄ _${usedPrefix}spotify_
⎪❊❄ _${usedPrefix}facebook <link>_
┗━━━ʕ•❊•ʔ━━━┛

❀° ┄──•••───╮
      𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊🎩 _${usedPrefix}character_
⎪❊🎩 _${usedPrefix}truth_
⎪❊🎩 _${usedPrefix}dare_
⎪❊🎩 _${usedPrefix}flirt_
⎪❊🎩 _${usedPrefix}gay_
⎪❊🎩 _${usedPrefix}shayeri_
⎪❊🎩 _${usedPrefix}ship_
⎪❊🎩 _${usedPrefix}waste_
⎪❊🎩 _${usedPrefix}simpcard_
⎪❊🎩 _${usedPrefix}hornycard_
⎪❊🎩 _${usedPrefix}ytcomment_
⎪❊🎩 _${usedPrefix}stupid_
⎪❊🎩 _${usedPrefix}lolicon_
┗━━━ʕ•❊•ʔ━━━┛

❀° ┄──•••───╮
     𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•❊•ʔ━━━┓
⎪❊🎩 _${usedPrefix}sticker_
⎪❊🎩 _${usedPrefix}take_
⎪❊🎩 _${usedPrefix}scircle_
⎪❊🎩 _${usedPrefix}smaker_
⎪❊🎩 _${usedPrefix}sremovebg_
⎪❊🎩 _${usedPrefix}getsticker_
⎪❊🎩 _${usedPrefix}emojimix_
⎪❊🎩 _${usedPrefix}toimg_
⎪❊🎩 _${usedPrefix}tovid_
⎪❊🎩 _${usedPrefix}ttp_
⎪❊🎩 _${usedPrefix}telesticker_
⎪❊🎩 _${usedPrefix}attp_
⎪❊🎩 _${usedPrefix}attp2_
⎪❊🎩 _${usedPrefix}attp3_
┗━━━ʕ•❊•ʔ━━━┛

❀° ┄──•••───╮
     𝙇𝙊𝙂𝙊 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀
┏━━━ʕ•❊•ʔ━━━┓
° 📝 .logo seametal
° 📝 .logo Americanflag
° 📝 .logo scifi
° 📝 .logo calligraphy
° 📝 .logo 3D-water-pipe
° 📝 .logo Halloween-skeleton
° 📝 .logo a-spooky-Halloween
° 📝 .logo a-cinematic-horror
° 📝 .logo a-sketch
° 📝 .logo blue-circuit-style
° 📝 .logo space
° 📝 .logo a-metallic
° 📝 .logo Creat-glossy-metalic
° 📝 .logo a-Captain-America
° 📝 .logo science-fiction
° 📝 .logo Video-game-classic-8-bit
° 📝 .logo green-horror-style
° 📝 .logo a-transformer
° 📝 .logo berry
° 📝 .logo layered
° 📝 .logo Online-thunder--generator
° 📝 .logo a-magma-hot
┗━━━ʕ•❊•ʔ━━━┛`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
