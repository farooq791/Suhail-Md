const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "Wa.me/923123681151";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ";
global.website=process.env.GURL || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923123681251" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923123681251";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "𝗡𝗨𝗠𝗕𝗘𝗥 𝗡𝗢 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 𝗨𝗦𝗜𝗡𝗚";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_49_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU1lUWlhOSkpTejEyQlVsdDJ2WTNSOXpLN3dsSklnVzZncTAxT09wZXlyaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGQ5ZGs1dmNUTmV3d0hmbjk2Q1pPZ1wiLFxuICBcInBob25lSWRcIjogXCIyMDdmMjI3MS0yYTMzLTRjN2ItOWE4Ni1jYTllYWYwMzNlNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDEyMixcbiAgICAgIDgzLFxuICAgICAgNjQsXG4gICAgICAxODUsXG4gICAgICAzMSxcbiAgICAgIDU1LFxuICAgICAgMjM3LFxuICAgICAgMTc5LFxuICAgICAgMjQsXG4gICAgICAxMzEsXG4gICAgICAyMDIsXG4gICAgICAyMjksXG4gICAgICAxNzYsXG4gICAgICAyNDIsXG4gICAgICA3NSxcbiAgICAgIDIxNCxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxOCxcbiAgICAgIDEyOCxcbiAgICAgIDI0NCxcbiAgICAgIDU0LFxuICAgICAgNzksXG4gICAgICAxMjcsXG4gICAgICAxMDgsXG4gICAgICAxNjUsXG4gICAgICAxMjAsXG4gICAgICAxMDUsXG4gICAgICAyMjUsXG4gICAgICAzOSxcbiAgICAgIDEwNixcbiAgICAgIDIzNCxcbiAgICAgIDQ0LFxuICAgICAgMjUwLFxuICAgICAgMjA2LFxuICAgICAgMTE4LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlYxRFI2TVYxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzI1OTE5NDM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4NDMyOTgwNTAwNzA3OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3J3cFBjQkVLVGdtYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuVUQ3UzRYd2FEM2dRZ085NVhhQW1yNjZTUjZGdkczTjJYdXp4eE5BMlVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFENmVEVHFlcDJQVkZJSGFBcDdqNGFvZDljc1p2MlBxUm1qOHVKVFY3Uy9aVUp0ZUgxNFBLMCsxV0J6OVRHZDh3dWJmbnpheldBKytNdk1ZT1pkckR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjN2SG4vR3ZwYnBzSjIyOVZyYklxN1k3aFFTNEVWd3U2ZWkzQ0ovU1lORUFvMkxQVDRxZ2pIZkErcnNaUDRVQzV6VERIaHRrMVErdGhaYVBDc0xUZ2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMzMjU5MTk0Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4NjU2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU41c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjVzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXpDajlMdi9mK3ZsSnE0S3F2U2kzRU5zVzIwOVhyUDJFcGlpV29mK0pXbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTg2MDA4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜" , // ```『 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 』```", //*『𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜』*Wa.me/923123681251"),
 
  author : process.env.PACK_AUTHER|| "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  packname: process.env.PACK_NAME || "♥️𝗟𝗢𝗩𝗘 𝗜𝗦 𝗟𝗜𝗙𝗘",
  botname : process.env.BOT_NAME  || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  ownername:process.env.OWNER_NAME|| "It'x 𝗙𝗔𝗥𝗢𝗢𝗤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "FAROOQ"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
