// config.cjs
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "GWM-XMD~H4sIAAAAAAAAA5VVXZOiOBT9L3nVmkZAEKu6agG/UFARUOmteYgQMHwECEHFKf/7FPb0zDzszvbyFJLUueeeew58A6TANVqhFoy/gZLiC2SoW7K2RGAMtCaKEAV9EEIGwRhAdWCvo1MzswZK68fDbaPULwONk4XF6JBgj9yTJp6oGcrSV/Dog7I5ZTj4AyAZYtqKRB95seke9GNjDv3DDLlLUza3rXs7R8d5uAog5cVX8OgQIaaYxNPyjHJEYbZC7RZi+jn6nrZY43T3UstCYpRZI9kw1EpLqWaRW4tp0VtxmupXujO1P0ffu925Mu8x3j8LIyisBg4N8BRupLcj16v8eilWSZi/EHPqv9OvcUxQaISIMMzaT+teT5VoYPPnKGETkmlxydAxaDAND9ZibrLhCXlylLrFPvM+RzxrLsNJr7b46I4507K8dmaxQDnsDU3d0eSaJtvN7U1rr/z0d+Jb+uGV9P/obljWlkvM2yhTtNimt/vaX3kFOk3bvJSHunBenDwlF9NFanyO/qlypnLvjOexFeWRnYwcbsb5VyqtLQo1nJ5ioW4HTc+OjV/0IWvon1hu2rLWZQIjb3pJ3oKDKhZ4qRW8eFxyd7laackq2CE67BWk4W986OJaPoq7HREV06+ciRqftCMX8wLkRWzNDmdKTU19fXaUotYIwXjw6AOKYlwzChkuSLcnjvoAhhcHBRSxp7pAI2ux6OV78rby73feVxIbve1ub9U+pUFLkT3yw61ZbGTsv4I+KGkRoLpG4QLXrKCtheoaxqgG47+/9gFBN/Y+t66aMOiDCNOaeaQpswKGH0P9OIRBUDSEOS0J9G6BKBhzv7YRY5jEdSdjQyANzviC9DNkNRhHMKvRzwYRRSEYM9qgn6HVi7DTXedMzxFGS9AH+XMeOARjoIjyUJRHymigjAXpr/rLtUOFZfmFIAb6IHve4iVJ4Ucip3BDRZQH3c3u4PGTYIcXIgZxVnelNk521lM7WW9CTvV9FavqSlU70T4a+jDGu/LbmVROipee2LpH/pKr24YGek8qdl6827T29WxAK3W5cIb/EQSMQQTdGRXFYbYzFvcBTa6N6sSLoTqp3Emw46W50hBp6pv+NfLmR7MkdnttY8lz50LLa/u5iSI406XFcmHVehutaR672vW1qxaiCw7Q78Xs67WJHCKKm4A7nOzVZhQ4GZ8d4+He8g5LpFxWvXKrm8KbFvUcS6hmJxRsNSmvZpnuLAV9Q6TIms0VbztxqsY/BNCY/LDsMzLZj08VfrqpG1X3GmH0TD6B3QD/c3TvvDuDcY/+bxA/PiX/EkfNvaHKlrYvjZUOFDqMJ3IlqJemmu6NqVunluHMk+VUWez8GDweX/ugzCCLCpp3PyoS0gKHoA9o0XSONUhU/KGYrnqGrsZ613gGa6b+SoGLc1QzmJdgPJDl0UjmJFnug7xVy9JhkH2EB6jPJ9DA4zsCb602VwcAAA==",
  PREFIX: process.env.PREFIX || '/',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'true',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : true,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  BOT_NAME: process.env.BOT_NAME || "Misty",
  BOT_VERSION: process.env.BOT_VERSION || "1.0.0",
  REPO_URL: process.env.REPO_URL || "https://github.com/Njabulo/GWM-XMD",
  REPO_OWNER: process.env.REPO_OWNER || "Misty's bug",
  REPO_NAME: process.env.REPO_NAME || "Misty's bug roject",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/vy8uyv.jpg",
  URL_CHANNEL: process.env.URL_CHANNEL || "https://whatsapp.com/channel/0029VbCZ6JNLY6dBhDfmCY1K", 
  DESCRIPTION: process.env.DESCRIPTION || "njabulo",
  OWNER_NAME: process.env.OWNER_NAME || "Misty",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94754789819",
  ID_CHANNEL: process.env._CHANNEL || "120363424849971461@newsletter",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
  
  // ========== GROUP & ADMIN FEATURES ==========
  ADMIN_LOG_GROUP: process.env.ADMIN_LOG_GROUP || "",
  NOTIFY_ADMIN_CHANGES: process.env.NOTIFY_ADMIN_CHANGES !== undefined ? process.env.NOTIFY_ADMIN_CHANGES === 'true' : false,
  SEND_RULES_DM: process.env.SEND_RULES_DM !== undefined ? process.env.SEND_RULES_DM === 'true' : false,
  AUTO_MUTE_SUSPICIOUS: process.env.AUTO_MUTE_SUSPICIOUS !== undefined ? process.env.AUTO_MUTE_SUSPICIOUS === 'true' : false,
  UPDATE_GROUP_STATS: process.env.UPDATE_GROUP_STATS !== undefined ? process.env.UPDATE_GROUP_STATS === 'true' : false,
  NOTIFY_BOT_ADMIN_STATUS: process.env.NOTIFY_BOT_ADMIN_STATUS !== undefined ? process.env.NOTIFY_BOT_ADMIN_STATUS === 'true' : false,
  CACHE_BOT_ADMIN_STATUS: process.env.CACHE_BOT_ADMIN_STATUS !== undefined ? process.env.CACHE_BOT_ADMIN_STATUS === 'true' : false,
  DEBUG_MODE: process.env.DEBUG_MODE !== undefined ? process.env.DEBUG_MODE === 'true' : false,
  LOG_ALL_EVENTS: process.env.LOG_ALL_EVENTS !== undefined ? process.env.LOG_ALL_EVENTS === 'true' : false,
};


module.exports = config;
