const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')

let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'rpgabsen': 'Rpg-Absen',
  'rpg': 'Rpg',
  'game': 'Game',
  'xp': 'Exp, Limit & Pay',
  'sticker': 'Sticker',
  'main': 'Main',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'downloader': 'Downloader',
  'berita': 'Berita',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database', 
  'vote': 'Voting',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'jadian': 'Jadian',
  'islami': 'Islami',
  'owner': 'Owner',
  'advanced': 'Advanced',
  'info': 'Info',
  'audio': 'Audio',
  'maker': 'Maker',
}
/* 
 Rpg-Absen
• .daily (Ⓛ)
• .gethadiah
• .hadiah
• .monthly (Ⓛ)
• .weekly (Ⓛ)


 Rpg
• .adventure (Ⓛ)
• .pull <jumlah> (Ⓛ)
• .pullall (Ⓛ)
• .atm <jumlah> (Ⓛ)
• .atmall (Ⓛ)
• .berbisnis (Ⓛ)
• .berkebon (Ⓛ)
• .feed [pet type] (Ⓛ)
• .open <crate> (Ⓛ)
• .heal (Ⓛ)
• .inv (Ⓛ)
• .kolam (Ⓛ)
• .leaderboard [jumlah user]
• .membunuh @tag (Ⓛ)
• .meracik [type] (Ⓛ)
• .merampok @tag (Ⓛ)
• .mulung (Ⓛ)
• .nambang (Ⓛ)
• .nebang (Ⓛ)
• .ramuan [pet type] (Ⓛ)
• .shop <sell|buy> <args> (Ⓛ)
• .shopfish <sell|buy> <args> (Ⓛ)
• .transfer (Ⓛ)


 Game
• .asahotak (Ⓛ)
• .caklontong (Ⓛ)
• .delttt (Ⓛ)
• .dungeon [nama room]
• .family100 (Ⓛ)
• .fighting (Ⓛ)
• .hunter (Ⓛ)
• .pancing <type> (Ⓛ)
• .judi <jumlah> (Ⓛ)
• .lengkapikalimat (Ⓛ)
• .math <mode> (Ⓛ)
• .siapakahaku (Ⓛ)
• .suit (Ⓛ)
• .suitpvp @tag (Ⓛ)
• .susunkata (Ⓛ)
• .tebakanime (Ⓛ)
• .tebakbendera (Ⓛ)
• .tebakgambar (Ⓛ)
• .tebakgame (Ⓛ)
• .tebakkata (Ⓛ)
• .tebakkimia (Ⓛ)
• .tebaklagu (Ⓛ)
• .tebaklirik (Ⓛ)
• .tekateki (Ⓛ)
• .tictactoe [custom room name] (Ⓛ)
• .ttt [custom room name] (Ⓛ)


 Exp, Limit & Pay
• .buy <jumlah limit>
• .buyall
• .cupon [@user] (Ⓛ)
• .dompet [@user]
• .exp [@user]
• .levelup
• .limit [@user]


 Sticker
• .attp <teks> (Ⓛ)
• .emojimix (Ⓛ)
• .getexif (Ⓛ)
• .semoji (Ⓛ)
• .smeme (Ⓛ)
• .stickercry (Ⓛ)
• .stickerhug (Ⓛ)
• .stickerkiss (Ⓛ)
• .stiker (caption|reply media) (Ⓛ)
• .stiker <url> (Ⓛ)
• .stikergif (caption|reply media) (Ⓛ)
• .stikergif <url> (Ⓛ)
• .stikertelegram <url> (Ⓛ) (Ⓟ)
• .triggered (Ⓛ)
• .ttp <teks>
• .wanted (Ⓛ)
• .wm <packname>|<author> (Ⓛ)


 Main
• .afk [alasan] (Ⓛ)
• .ceksn (Ⓛ)
• .menu
• .ref
• .daftar <nama>.<umur>
• .sewa
• .unreg <SERIAL NUMBER>


 Kerang Ajaib
• .apakah <teks>? (Ⓛ)
• .kapan <text>? (Ⓛ)
• .kapankah <text>? (Ⓛ)
• .siapa <teks> (Ⓛ)
• .siapakah <teks> (Ⓛ)


 Quotes
• .quotesanime (Ⓛ)
• .bucin (Ⓛ)
• .kata <opsi> (Ⓛ)
• .quotes (Ⓛ)


 Admin
• .demote <@user>
• .kick @user (Ⓛ)
• .promote <@user>


 Group
• .add 628xx
• .enable <option>
• .disable <option>
• .cekexpired
• .infogrup
• .grouplist
• .grouptime <open/close> <number>
• .group open / close
• .kick @user
• .gc
• .group
• .link
• .listadmin
• .hidetag [teks] (Ⓛ)
• .readviewonce
• .revoke
• .setdeskgroup <text>
• .setppgroup
• .setwelcome <teks>
• .tagall <pesan>
• .tagme


 Internet
• .anime <judul> (Ⓛ)
• .brainly <soal> (Ⓛ)
• .cecan (Ⓛ)
• .cerpen (Ⓛ)
• .cogan (Ⓛ)
• .drakor [text] (Ⓛ)
• .get <url> (Ⓛ)
• .gimage <search> (Ⓛ)
• .githubstalk (Ⓛ)
• .google <search> (Ⓛ)
• .igstalk <username> (Ⓛ)
• .kbbi <kata> (Ⓛ)
• .loli (Ⓛ)
• .lirik <teks> (Ⓛ)
• .peta <wilayah> (Ⓛ)
• .neko (Ⓛ)
• .pinterest <text> (Ⓛ)
• .playstore (Ⓛ)
• .ppcouple (Ⓛ)
• .puisi (Ⓛ)
• .ss <url> (Ⓛ)
• .ssf <url> (Ⓛ)
• .translate <lang> <teks> (Ⓛ)
• .waifu (Ⓛ)
• .wikipedia <text> (Ⓛ)


 Anonymous Chat
• .start,skip,stop,next
• .sendkontak


 Downloader
• .fb <url> (Ⓛ)
• .fb2 <url> (Ⓛ)
• .gitclone <url> (Ⓛ)
• .ig <url> (Ⓛ)
• .igstory <username> (Ⓛ)
• .joox <judul> (Ⓛ)
• .lirplay (Ⓛ)
• .lirplay2 (Ⓛ)
• .mediafire <url> (Ⓛ)
• .play <search> (Ⓛ)
• .play2 <search> (Ⓛ)
• .tiktok <url> (Ⓛ)
• .twitter <url> (Ⓛ)
• .ytmp3 <url> [server: id4, en60, en61, en68] (Ⓛ)
• .yta <url> [server: id4, en60, en61, en68] (Ⓛ)
• .ytmp4 <url> [server: id4, en60, en61, en68] (Ⓛ)
• .ytv <url> [server: id4, en60, en61, en68] (Ⓛ)
• .yt <url> [server: id4, en60, en61, en68] (Ⓛ)
• .zippyshare <url> (Ⓛ) (Ⓟ)


 Berita
• .cnnnews (Ⓛ)
• .kompasnews (Ⓛ)
• .liputan6 (Ⓛ)
• .metronews (Ⓛ)
• .tribunnews (Ⓛ)


 Tools
• .calc <expression> (Ⓛ)
• .carigrup <pencarian> (Ⓛ)
• .del (Ⓛ)
• .delete (Ⓛ)
• .githubsearch <pencarian> (Ⓛ)
• .kalkulator <soal> (Ⓛ)
• .mycontact (Ⓛ)
• .ocr (Ⓛ)
• .totext (Ⓛ)
• .qr <teks> (Ⓛ)
• .qrcode <teks> (Ⓛ)
• .readmore <teks>|<teks> (Ⓛ)
• .q (Ⓛ)
• .spamcall <nomor> (Ⓛ) (Ⓟ)
• .tinyurl <link> (Ⓛ)
• .totalfitur (Ⓛ)
• .tourl (Ⓛ)
• .tts <lang> <teks> (Ⓛ)
• .upload (caption|reply media) (Ⓛ)
• .yts <pencarian> (Ⓛ)
• .ytsearch <pencarian> (Ⓛ)


 Fun
• .alay (Ⓛ)
• .artinama [name] (Ⓛ)
• .alay (Ⓛ)
• .dare (Ⓛ)
• .halah <teks> (Ⓛ)
• .hilih <teks> (Ⓛ)
• .huluh <teks> (Ⓛ)
• .heleh <teks> (Ⓛ)
• .holoh <teks> (Ⓛ)
• .jadian (Ⓛ)
• .namaninja <teks> (Ⓛ)
• .rate (Ⓛ)
• .reaction <reply> (Ⓛ)
• .truth (Ⓛ)


 Database
• .delcmd <teks>  (Ⓟ)
• .infocmd <text>
• .listcmd
• .unlockcmd
• .lockcmd
• .setcmd <teks>  (Ⓟ)


 Voting
• .cekvote
• .hapusvote
• .mulaivote [alasan] (Ⓛ)
• .upvote
• .devote


 Absen
• .absen
• .cekabsen
• .hapusabsen
• .mulaiabsen [teks]


 Catatan
• .buatcatatan <title|isi>
• .hapuscatatan title
• .lihatcatatan <title>


 Jadian
• .cekpacar (Ⓛ)
• .ikhlasin (Ⓛ)
• .putus (Ⓛ)
• .tembak @tag (Ⓛ)
• .terima @tag (Ⓛ)
• .tolak @tag (Ⓛ)


 Islami
• .alquran <114> <1>
• .asmaulhusna [nomor]
• .hadis
• .kisahnabi <name> (Ⓛ)
• .jadwalsalat <kota> (Ⓛ)


 Owner
• .prem @tag|days
• .banchat
• .ban @tag|days
• .block <@user>
• .blocklist
• .broadcast <teks>
• .bc <teks>
• .broadcastchats <teks>
• .bcchats <teks>
• .broadcastgroup <teks>
• .bcgc <teks>
• .debounce
• .unprem
• .enable <option>
• .disable <option>
• .delexpired
• .expired <hari>
• .getdatabase
• .getplugin <teks>
• .getsessi
• .cleartmp
• .resetlimit
• .reset
• .savefile <path>
• .sf <path>
• .setmenu <teks>
• .setmenubefore <teks>
• .setmenuheader <teks>
• .setmenubody <teks>
• .setmenufooter <teks>
• .setmenuafter <teks>
• .setppbot
• .simulate <event> [@mention]
• .otransfer
• .unbanchat
• .unban
• .unblock <@user>


 Advanced
• >
• =>


 Info
• .allprofile [@user] (Ⓛ)
• .listbanned
• .infocovid <country>
• .owner
• .creator
• .infocuaca <city> (Ⓛ)
• .database (Ⓛ)
• .user (Ⓛ)
• .donasi
• .infogempa (Ⓛ)
• .listpremium (Ⓛ)
• .profile [@user] (Ⓛ)
• .report <fitur> (Ⓛ)
• .ping
• .speed
• .speedtest


 Audio
• .tomp3
• .tovn
• .bass [vn] (Ⓛ)
• .blown [vn] (Ⓛ)
• .deep [vn] (Ⓛ)
• .earrape [vn] (Ⓛ)
• .fast [vn] (Ⓛ)
• .fat [vn] (Ⓛ)
• .nightcore [vn] (Ⓛ)
• .reverse [vn] (Ⓛ)
• .robot [vn] (Ⓛ)
• .slow [vn] (Ⓛ)
• .smooth [vn] (Ⓛ)
• .tupai [vn] (Ⓛ)
• .vibra [vn] (Ⓛ)


 Maker
• .tahta <teks> (Ⓛ)
• .lolice
• .nulis <teks> (Ⓛ)
• .togif (reply)
• .toimg (reply) (Ⓛ)


 premium
• .delcmd <teks>  (Ⓟ)
• .listcmd
• .setcmd <teks>  (Ⓟ)
*/
const defaultMenu = {
  before: `
Hai, %ucapan %name! 👋
  
Author sc: Ridwan
*Waktu:* 
%wib WIB
%wita WITA
%wit WIT
*Hari:* %week
*Tanggal:* %date
*Uptime:* %uptime (%muptime)

*Limit:* %limit
*Level:* %level
*XP:* %exp
%readmore`.trimStart(),
  header: ' *%category*',
  body: ' • %cmd %islimit %isPremium',
  footer: '\n',
  after: `*Made with ♡ by Ade-Dev*
*NaisaBot* | %version
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
	  const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    //text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
    }
   // text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
   /* conn.sendHydrated(m.chat, text.trim(), 'Ⓟ premium | Ⓛ limit', null, 'https://aiinne.github.io/', 'Website', '', '', [
      ['Donate', '/donasi'],
      ['Sewa Bot', '/sewa'],
      ['Owner', '/owner']
    ], m)*/
	var who = m.sender
	let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
	let { pasangan, money, bank } = global.db.data.users[who]
	//let ucapann = ucapan()
	let jenennge = conn.getName(m.sender)
	let jodoh = `Berpacaran @${pasangan.split`@`[0]}`
	let miskiin = `Rp${money}`
	let miskiin2 = `Rp${bank}`
	let menunya = `
Hai, ${jenennge}! 👋
  
Author sc: Ridwan
-=[ *INGFO* ]=-
*Indonseia Time:* 
${wib} *WIB*
${wita} *WITA*
${wit} *WIT*
*Hari:* ${week}
*Tanggal:* ${date}
*Uptime:* ${uptime} (${muptime})

-=[ *USER INGFO* ]=-
*STATUS:* ${pasangan ? jodoh : 'Jomblo' }
*Limit:* ${limit}
*Level:* ${level}
*XP:* ${exp}
*Dompet*: ${money ? miskiin : 'Rp0 ,Yahaha miskin'} 
*BRI:* ${bank ? miskiin2 : 'Rp0 , Yahaha miskinn'}
${readMore}
Menunya kaming Sunn Deck`
    let url = `https://i.ibb.co/FJZ0hTv/wp8629994-2.png`.trim()
    let res = await fetch(url)
    let buffer = await res.buffer()
    let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: menunya,
                            hydratedFooterText:`Ga subrek youtube.com/ ${jenennge} mandul.`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://beban.my.id'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: '/donasi'
                                }
								
                            }
						, {
                                quickReplyButton: {
                                    displayText: 'BUYPREM',
                                    id: '/sewa'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: '/owner'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (e) {

    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(pler)$/i

handler.exp = 3

module.exports = handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan () {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
