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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_39_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJRMVRBZFYvc1N6TkVBRHJlRlg5WVRXZll6SExiS005UktRc25KQStkNmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkViVlM0RUx3U1A2QktxU055VTRqdVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGFmOTNkM2ItZWZkMi00YzdiLTg1ZGUtZGNjNTVhOWM4YjdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDc0LFxuICAgICAgMTI2LFxuICAgICAgMCxcbiAgICAgIDMzLFxuICAgICAgMjAzLFxuICAgICAgMTM0LFxuICAgICAgMTA2LFxuICAgICAgMTk3LFxuICAgICAgNDUsXG4gICAgICAyMDYsXG4gICAgICAxODksXG4gICAgICAyNyxcbiAgICAgIDEwMyxcbiAgICAgIDk1LFxuICAgICAgMTgwLFxuICAgICAgOTksXG4gICAgICAxOCxcbiAgICAgIDIzMSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAzLFxuICAgICAgMjEsXG4gICAgICA1OSxcbiAgICAgIDU5LFxuICAgICAgMzQsXG4gICAgICAyNDcsXG4gICAgICA4OSxcbiAgICAgIDIwNSxcbiAgICAgIDE2MSxcbiAgICAgIDIzNyxcbiAgICAgIDQwLFxuICAgICAgMTAzLFxuICAgICAgMzcsXG4gICAgICA0LFxuICAgICAgMzQsXG4gICAgICAyMjksXG4gICAgICAxNjQsXG4gICAgICA0NixcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktORzkxUUJLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzI1OTE5NDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4NDMyOTgwNTAwNzA3OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi77y077yv77y477yp77yjX19fX1/vvKLvvK/vvLnqlKpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbndwUGNCRUtDZWliUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5VRDdTNFh3YUQzZ1FnTzk1WGFBbXI2NlNSNkZ2RzNOMlh1enh4TkEyVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU3hpRUlDNGI2S2pqSFJ1VTkxbTBPV1JsQytzeTdNeVhKNlFxSVB0ZkR5OTB3dDFROWxOTlFCdW1nYXR0Ympoa2UwNlcyTFFacVRwM0Q5d2QxRGJCRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDdzQUU1SzBNUElDZkJldmxOWDFKQjZFTmhaV00zZUZSeUxuRitkejZ0RytSQ0xyazFleXg4a3NKWXh1d3FDbmZWZHZNR2ZQR1gwYjFXUGNMeDg4aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzMyNTkxOTQzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODE1OTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0VkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDRWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6UUNzMnJYMVhwd0IvVnR1bVZXbitmVFJ0ZjBlN3BDU0hLTXFtSHpnVFpFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxODYwMDgwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


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
