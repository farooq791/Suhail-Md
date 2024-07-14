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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_49_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICA0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmtWU2Z6NEVWWnhCVzBzL1IrWlZTa0NTNXlYMmVGUU1WcXB4Um9jMGJmUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDNaUkI4dHNTSUd0OGpsZVdrVlh2Z1wiLFxuICBcInBob25lSWRcIjogXCJjMmFkODRlNS1mZjU1LTQyMzYtOTZiZS1lNzZjYzI2NTc1NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgNTgsXG4gICAgICAyMTksXG4gICAgICAxODYsXG4gICAgICA5MSxcbiAgICAgIDI0LFxuICAgICAgMTk1LFxuICAgICAgNDMsXG4gICAgICA0MCxcbiAgICAgIDEzOCxcbiAgICAgIDE2MCxcbiAgICAgIDM1LFxuICAgICAgNzMsXG4gICAgICAxNzEsXG4gICAgICAxMzUsXG4gICAgICAxMjYsXG4gICAgICA2LFxuICAgICAgMTg3LFxuICAgICAgMzAsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTE2LFxuICAgICAgMTAyLFxuICAgICAgNCxcbiAgICAgIDIzLFxuICAgICAgMTYyLFxuICAgICAgNTEsXG4gICAgICAxODksXG4gICAgICAyMzcsXG4gICAgICA0NixcbiAgICAgIDExNixcbiAgICAgIDM0LFxuICAgICAgMjUwLFxuICAgICAgNDEsXG4gICAgICAxMzAsXG4gICAgICAyNTUsXG4gICAgICA3NixcbiAgICAgIDIyLFxuICAgICAgNDEsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlZZWFhCU0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzMjU5MTk0MzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZhcm9vcXNpbmRoaTQxOVwiLFxuICAgIFwibGlkXCI6IFwiMjU4NDMyOTgwNTAwNzA3OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B5QXA5TUJFT2pwemJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHM4Q0JaOUVRY0NMN1Jyd2w2RjB3cjREOEJyY0IxVGNZeEJ5MzdCYVZGdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJES2VYcHR0M2NaOUJnVmdFTkNyeGRvOU1YM3BxbGlTZS9uMXN2dGxUY1YzdVNDMmZVRlVkd0ZZbkZJajRvNzdjK2F4ZWJYV2FoM0hrc0hMajNSVWxEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOempCTTMyN2EzbDJPdzVtUmNZVkp4Zzcxa21IVFBlcTBxKzFPOSthbllqaTUxTXFqRDRpMmlqbFVPQnEyZEpzWUxqaXMrN1BhTUgxZDhXbzY3SmRDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzI1OTE5NDM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5Mzk3NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPK1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8rUS5qc29uIjogIntcImtleURhdGFcIjpcInFSUDhIUHJqd2F0dVhnSTlGdFNoNXlXdWQzWUh6cUpHanRYbUpPQzgxMDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQzMTM4MTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5Mzk3NjI1NDBcIn0iCn0=" ;


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
