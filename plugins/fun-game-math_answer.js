global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^ð¾ðªðð¡ ðð¨ ð§ðð¨ðªð¡ð©ððð¤ ðð/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, `${mg}ðð¼ ðð ððððððð¿ðð ðððð¼ ðððððððð¼`, wm, null, [['ðð¤ð¡ð«ðð§ ð ððªððð§ ð§®', `/math`], ['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ âï¸', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
conn.sendButton(m.chat, `ð ððððððððð¼ ð¾ððððð¾ðð¼\nððð ððð ð\nâââââââââââââââââ\nðð¼ðð¼ððð ð *_${math.bonus}_* ðð\nâââââââââââââââââ\nð½ððð \nð *_$500_* Lolið¾ð¤ðð£ð¨\nâââââââââââââââââ\nðð ð¿ððððð ðµ *_$${gatacoins}_* Lolið¾ð¤ðð£ð¨`, wm, null, [['ðð¤ð¡ð«ðð§ ð ððªððð§ ð§®', `/math ${math.mode}`], ['ððð£ðª ððªððð¤ð¨ ð¡', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `${ag}ðð ð¼ð¾ð¼ð½ð¼ððð ððð ððððððððð¿ð¼ð¿ðð\nðð¼ ððððððððð¼ ðð *${math.result}`, wm, null, [['ðð¤ð¡ð«ðð§ ð ððªððð§ ð§®', `/math ${math.mode}`], ['ðð¤ð¥ð¨ ð', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${fg}ððððððððð¼ ððð¾ððððð¾ðð¼!!\nðð ðððð¿ð¼ð *${global.math[id][2]}* ððððððððð¿ð¼ð¿ðð ð±`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
