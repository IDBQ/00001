let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, ππ ππ¨ ππ€π§π ππ π¦πͺπ π©π π πΎππ¨ππ¨ ππ€π£ ${toM(b)}, πππ£ππ πππ§πππ ππ*`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
