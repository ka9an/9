//import db from './db'
function transliterate(word){
    var aa = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"","б":"b","ю":"yu"};

  return word.split('').map(function (char) { 
    return aa[char] || char; 
  }).join("");
}

// var B
// var TOKEN = "539805226:AAGmVlRRvaGQsgSNZO5P8L4kkmArc4lw1FE"

exports.app = async function (re) {


//re = await re.json()


 
  
        var type = Object.keys(re)[1]
    re = re[type]
    re.type = type
    re.from = re.chat || re.from
    re.chat = re.from.id
    re.from = re.from.username || re.from.title || re.from.first_name



      B = {
        "method": "deleteMessage",
       
        "chat_id": re.chat
    }


// B.reply_markup = {
//     "inline_keyboard": [
//         [
//         // {
//         //     "text": "↑",
//         //     "callback_data":  "↑" 
//         // },
//         // {
//         //     "text": "↓",
//         //     "callback_data":  "↓" 
//         // },
//          {
//             "text": ":TO",
//             "switch_inline_query_current_chat": ""
//         },
//                  {
//             "text": "Q",
//             "switch_inline_query": ""
//         },
//                  {
//             "text": "♾",
//             "url": "https://hunt.wwv.workers.dev/map"
//         } ,                {
//             "text": "↓",
//             "callback_data": "↓"
//         },
//         //  {
//         //     "text": "⓪ ① ② ③",
//         //     "callback_data": "⓪ ① ② ③"
//         // }
//         ]
//     ]
// }
B.reply_markup = {
    "inline_keyboard": [
        [
        // {
        //     "text": "↑",
        //     "callback_data":  "↑" 
        // },
        // {
        //     "text": "↓",
        //     "callback_data":  "↓" 
        // },

         {
            "text": ":TO",
            "switch_inline_query_current_chat": ""
        },
                 {
            "text": "🅿️",
            "callback_data": "🅿️"
        },
                         {
            "text": "🅰️",
            "callback_data": "🅰️"
        },
                         {
            "text": "✳️",
            "callback_data": "✳️"
        },
                 {
            "text": "♾",
            "url": "https://03.surge.sh/"
       } //,                {
        //     "text": "↓",
        //     "callback_data": 1
        // },
        //                 {
        //     "text": "⓪",
        //     "callback_data": "⓪"
        // },
        //  {
        //     "text": "⓪ ① ② ③",
        //     "callback_data": "⓪ ① ② ③"
        // }
        ]
    ]
}
    re.in = []


// if(re.from === "papaswin") B.reply_markup.inline_keyboard.push(
//                          {
//             "text": "X",
//             "switch_inline_query_current_chat": "Xx"
//         })
    //     re.entities = re.entities || re.caption_entities
    // re.text = re.text || re.caption

            //return ERR
  //  var txt = re//[ CACHE.get(re.chat), CACHE.get(re.from) ]

//

        if(re.text === "/start") {
        B.method = 'sendMessage'
          B.text = `
/settings - 🔎
/help - ❓
/start - 🥕
`
            B.reply_markup = {
                "resize_keyboard": true,
                "keyboard": [
                    [{
                        "request_location": true,
                        "text": "📍"
                         }]
                  //  }, "#l", '�','⛔️', "$S"]
                ]
            }
    }
    
    
//    console.log(re.text)
//    delete re.caption
    if(re.via_bot) re.via_bot = re.via_bot.username




    if(re.photo && !re.via_bot) {
   //  x.text = txt
    re.type = "photo"
    re.photo = re.photo[re.photo.length - 1].file_id
    if(re.media_group_id) re.type = "media"
    // re.geo = CACHE.get(re.chat)
   // if(!re.geo) return "ok"
    // re.ref = CACHE.get("ref")
    // re.ref = re.ref || ""
    // var geo = await E.get("ll")
    // geo = await geo.join(",")
    // var ref = await E.get("ref")
    re.cap = " "
    if(re.caption) re.cap = transliterate(re.caption)
    re.caption = re.caption||'по-стрелке'

    var getfile = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.photo)
    getfile = await getfile.json()
    var path = 'https://api.telegram.org/file/bot' + TOKEN + '/' + getfile.result.file_path
    path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&image=' + path);
    path = await path.json()
    // path.from = B.text.from
    // path.geo = B.text.geo
    // path.cap = B.text.caption || "по-стрелке"


   // var x = ["_"+e.data.id,e.data.url_viewer.replace("https://", ""),Date.now(),e.geo,e.data.thumb.url,true,e.cap,e.from,e.data.display_url]

//removeDuplicates()
// var it = 0
// var rrr = "Серый пак"
// if(ref && ref === "🅿️") {it = 2; rrr = "Желтый пак"}
//   if(ref && ref === "🅰️") {it = 1; rrr = "Зеленый пак"}
// //await E.set(path.data.id,{it:it,ico:ref,msg:(1+re.message_id),key:path.data.id,is:true,from:re.from,ll:geo,img:path.data.url_viewer.replace("https://", ""),th:path.data.thumb.url,url:path.data.display_url,cap:re.caption,ref:rrr,day:Date.now()})
// // B.method = 'sendPhoto'
// // B.photo = path.data.thumb.url
// // B.parse_mode = "HTML"

// var ref = await E.get("ref")
// var col = "80ffa2"
// if(ref && ref === "🅿️") col = "85bfc5"
//   if(ref && ref === "🅰️") col = "ff67ab"

       


var caption = [path.data.url_viewer.replace("https://", ""),"🚩 www.google.com/maps?q=",re.caption].join("\n")
    B.method = 'sendMediaGroup'
  B.media = [
   {
      "type":"photo",
      "media": `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=18&size=640,320@2x&locations=50,30|marker-lg`
      
   },
   {
      "type":"photo",
      
      "media": path.data.display_url,
      "caption": caption
   }
]
        
         //await fetch(`https://api.telegram.org/bot${TOKEN}/sendmediagroup?chat_id=${re.chat}&media=${encodeURIComponent(JSON.stringify(me))}`)

    }


     if (re.entities || re.caption_entities) {
      re.text = re.text || re.caption
      re.entities = re.entities || re.caption_entities
            re.entities.forEach((element) => {
         
                   if(element.type === "text_link") { re.url = element.url } else {
                    re[element.type] = re.text.substring(element.offset, (element.offset + element.length))
                    if(re.text === re[element.type]) {
//re.type = element.type
                      delete re.text
                    }
                       if(re[element.type].split("__")[1]) {
                        re.split = re[element.type].split("__")
                        re.split.shift()
                      }
         }
            })
            delete re.entities
            delete re.caption_entities
        }
      
       // delete re.message
        delete re.forward_from
        delete re.forward_date
        delete re.chat_instance

//var txt = CACHE.get(re.chat) || "NULL"

     //    if(re.reply_to_message && re.reply_to_message.caption) {

     //      var rr = ''
     //      rr += re.reply_to_message.caption.split("\n")[0]
     //      rr += "\n"
     //      rr += re.text
     //      B.caption = rr
     //     B.method = "editMessageCaption"
     //     B.message_id = re.reply_to_message.message_id
     // await E.put("ref",re.text)
     //    }
         
if(re.text && re.text.startsWith("$")) B.text = "$"
if(re.text > 1000){
B.method = "sendmessage"
         B.reply_markup = {
    "inline_keyboard": [
        [
        {
            "text": "↑",
            "callback_data":  "↑" 
        },
        {
            "text": "↓",
            "callback_data":  "↓" 
        },
         {
            "text": ":TO",
            "switch_inline_query_current_chat": ""
        }
        //  {
        //     "text": "⓪ ① ② ③",
        //     "callback_data": "⓪ ① ② ③"
        // }
        ]
    ]
}
//B.message_id = await E.get("msg")
B.text = re.text
}
        if (re.location) {
          var lll = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&location="+[re.location.latitude , re.location.longitude].join(","))
    .then( r => r.json() )
  .then( r => {r = r.results[0].locations[0].street.replace(/вулиця/gi,'').replace(/проспект/gi,'').trim()
    

            return r || "--"
  })  .catch( err => {
    console.error(err)
  })
  //await E.put({"title":(lll||'-'),"msg":(1+re.message_id),"ll":[re.location.latitude.toFixed(6) , re.location.longitude.toFixed(6)]})
//await E.put("msg",(1+re.message_id))
//await E.put("ll",[re.location.latitude.toFixed(6) , re.location.longitude.toFixed(6)])

re.location = re.location.latitude.toFixed(6) + "," + re.location.longitude.toFixed(6)
//var ref = await E.get("ref")
// ref = ref || ''
// var col = "80ffa2"
// if(ref && ref === "🅿️") col = "85bfc5"
//   if(ref && ref === "🅰️") col = "ff67ab"

       var mq = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=18&size=640,320@2x&locations=${re.location}|marker-lg`





re.type = "location"
B.method = 'sendPhoto'
B.photo = mq
B.caption = ["🚩 www.google.com/maps?q="+re.location].join("\n")
var t = `.
/settings - 🔎
/help - ❓
/start - 🥕

`

        }

if(re.data){
// console.warn(re)
if(re.data === "🅿️" || re.data === "🅰️" || re.data === "✳️"){
  // var geo = await E.get("ll")
  //  geo = await geo.join(",")
  //  geo = "🚩 www.google.com/maps?q="+geo
 ///await E.put("ref",re.data)

          B.caption = re.data
         B.method = "editMessageCaption"
         B.message_id = re.message.message_id

}
// B = {
// method: "answerCallbackQuery",
// callback_query_id: re.id,
// text: await w(),
// show_alert: true
// }
if(re.data === "↑"){
B = {
method: "pinChatMessage",
chat_id: re.chat,
message_id: re.message.message_id
}
}
if(re.data === "↓"){
B = {
method: "unPinChatMessage",
chat_id: re.chat,
message_id: re.message.message_id
}
}
//CACHE.put(re.from, re.message.message_id, 21600)
delete re.message
}
// if(re.result_id){
//   if(re.query.includes("/")) { await E.del(re.result_id) } else {
//   await E.set(re.result_id,{is:false})
// }
  

//  //if(re.query.includes("+"))  await E.set(re.result_id,{is:true})

 
  

  
//   }
if(re.query != null){
  
 var rs = await db.list()
 //console.warn(rs)

//      

//        if(re.query.endsWith("-")) {

//      if(re.query && re.query.startsWith("-") ){
//  rs = rs.filter(item => !item.is)
//   //rs = rs.filter(item => item.from === re.from)
// }
  // rs = rs.map((el,i) => { el.title = el.title+" #"+i})
// } 
// if(re.query && re.query.startsWith("+")) {
//   rs = rs.filter(item => item.is)
// }  
//   } else { 

// rs = rs.filter(item => item.from === re.from)
    
//   } 
//console.warn(rs)
  rs = Object.values(rs).map((el,i) => ({
      type: 'photo',
      id: i,
    //  title: el.pic,

      thumb_url: el.url,
   photo_url: el.url
    })
         )

 
B = {
          method: "answerInlineQuery",
      //    switch_pm_text:"🚩"+ll,
          cache_time: 0,
          is_personal: true,
     //     switch_pm_parameter: ll,
          inline_query_id: re.id,
          results: rs
          //[{"type":"article","id":"x0001","title":"OBO2X","description":"x000150.4969,30.6067","thumb_url":"https://i.ibb.co/Z2V4Sg3/file-62.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0002","title":"OBO2X","description":"x000250.4958,30.6082","thumb_url":"https://i.ibb.co/qRJN7Q1/file-331.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0003","title":"OBO2X","description":"x000350.4843,30.5915","thumb_url":"https://i.ibb.co/yFZ0rwL/file-112.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0004","title":"OBO2X","description":"x000450.4832,30.5939","thumb_url":"https://i.ibb.co/R2vRgF7/file-351.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0005","title":"OBO2X","description":"x000550.4832,30.5933","thumb_url":"https://i.ibb.co/jTdfbt4/file-77.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0006","title":"OBO1S","description":"x000650.4825,30.5277","thumb_url":"https://i.ibb.co/SvRpQVP/file-195.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0007","title":"OBO1S","description":"x000750.4825,30.4889","thumb_url":"https://i.ibb.co/svPsZR1/file-210.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0008","title":"OBO1S","description":"x000850.4825,30.4887","thumb_url":"https://i.ibb.co/1s7Dd0B/file-209.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0009","title":"OBO1S","description":"x000950.4823,30.5702","thumb_url":"https://i.ibb.co/VLvwQFx/file-71.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0010","title":"OBO1S","description":"x001050.4822,30.4889","thumb_url":"https://i.ibb.co/wyMph2M/file-204.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0011","title":"DVO2S","description":"x001150.5313,30.5990","thumb_url":"https://i.ibb.co/bNVstCC/file-108.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0012","title":"DVO2S","description":"x001250.5224,30.6079","thumb_url":"https://i.ibb.co/gMs3xgb/file-68.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0013","title":"DVO2S","description":"x001350.5224,30.6076","thumb_url":"https://i.ibb.co/3fCWRy4/file-85.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0014","title":"DVO2S","description":"x001450.5208,30.5861","thumb_url":"https://i.ibb.co/xz2qvQZ/file-345.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0015","title":"DVO2S","description":"x001550.5172,30.5943","thumb_url":"https://i.ibb.co/PcRM0wb/file-87.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0016","title":"DVO2S","description":"x001650.5165,30.6159","thumb_url":"https://i.ibb.co/Wykb5Rv/file-325.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0017","title":"DVO2S","description":"x001750.5165,30.6153","thumb_url":"https://i.ibb.co/4M1gKNW/file-65.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0018","title":"DVO2S","description":"x001850.5147,30.5934","thumb_url":"https://i.ibb.co/S0BJjBc/file-79.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0019","title":"DVO2S","description":"x001950.5138,30.6209","thumb_url":"https://i.ibb.co/BsgnQYR/file-298.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0020","title":"DVO2S","description":"x002050.5138,30.6202","thumb_url":"https://i.ibb.co/kD6dq2F/file-105.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0021","title":"OBO1S","description":"x002150.4492,30.6331","thumb_url":"https://i.ibb.co/TmmTpdj/file-91.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0022","title":"OBO1S","description":"x002250.4485,30.5894","thumb_url":"https://i.ibb.co/8Djw5MQ/file-354.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0023","title":"OBO1S","description":"x002350.4484,30.6349","thumb_url":"https://i.ibb.co/mq6wmFR/file-78.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0024","title":"OBO1S","description":"x002450.4484,30.6345","thumb_url":"https://i.ibb.co/n0pWXky/file-287.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0025","title":"OBO1S","description":"x002550.4459,30.6187","thumb_url":"https://i.ibb.co/JpNVRgc/file-64.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0026","title":"OBO1S","description":"x002650.4458,30.6206","thumb_url":"https://i.ibb.co/gMs3xgb/file-68.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0027","title":"OBO1S","description":"x002750.4450,30.6430","thumb_url":"https://i.ibb.co/7GfNM6c/file-66.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0028","title":"OBO1S","description":"x002850.4411,30.6199","thumb_url":"https://i.ibb.co/c1srNLL/file-67.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0029","title":"OBO1S","description":"x002950.4411,30.6198","thumb_url":"https://i.ibb.co/JyMjsMN/file-63.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0030","title":"OBO1S","description":"x003050.4411,30.6033","thumb_url":"https://i.ibb.co/4M1gKNW/file-65.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0031","title":"DVO2X","description":"x003150.5119,30.5955","thumb_url":"https://i.ibb.co/hB0V7KH/file-61.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0032","title":"DVO2X","description":"x003250.5099,30.6069","thumb_url":"https://i.ibb.co/nBzP1WN/file-57.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0033","title":"DVO2X","description":"x003350.5099,30.6062","thumb_url":"https://i.ibb.co/8NS4T2S/file-60.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0034","title":"DVO2X","description":"x003450.5092,30.6049","thumb_url":"https://i.ibb.co/Z2V4Sg3/file-62.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0035","title":"DVO2X","description":"x003550.5080,30.6094","thumb_url":"https://i.ibb.co/1fd9hfg/file-79.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0036","title":"DVO2X","description":"x003650.5058,30.5808","thumb_url":"https://i.ibb.co/rQZRyFz/file-78.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0037","title":"DVO2X","description":"x003750.5040,30.6175","thumb_url":"https://i.ibb.co/jTdfbt4/file-77.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0038","title":"DVO2X","description":"x003850.5039,30.6046","thumb_url":"https://i.ibb.co/XD0m5tx/file-76.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0039","title":"DVO2X","description":"x003950.5030,30.5863","thumb_url":"https://i.ibb.co/GWNCzHn/file-75.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0040","title":"DVO2X","description":"x004050.4972,30.6066","thumb_url":"https://i.ibb.co/Gv4gLwX/file-74.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0041","title":"OBO2X","description":"x004150.4097,30.6189","thumb_url":"https://i.ibb.co/Qd70tpp/file-73.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0042","title":"OBO2X","description":"x004250.4097,30.6182","thumb_url":"https://i.ibb.co/9hH12kB/file-72.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0043","title":"OBO2X","description":"x004350.4085,30.6343","thumb_url":"https://i.ibb.co/VLvwQFx/file-71.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0044","title":"OBO2X","description":"x004450.4073,30.6804","thumb_url":"https://i.ibb.co/fXH5qZM/file-70.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0045","title":"OBO2X","description":"x004550.4072,30.6668","thumb_url":"https://i.ibb.co/L0Wf603/file-69.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0046","title":"OBO2X","description":"x004650.4046,30.5730","thumb_url":"https://i.ibb.co/bLVM06p/file-68.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0047","title":"OBO2X","description":"x004750.4030,30.6528","thumb_url":"https://i.ibb.co/GPMGKQH/file-67.jpg","input_message_content":{"message_text":"TRUE"}},{"type":"article","id":"x0048","title":"OBO2X","description":"x004850.4028,30.6534","thumb_url":"https://i.ibb.co/yFZ0rwL/file-112.jpg","input_message_content":{"message_text":"FALSE"}},{"type":"article","id":"x0049","title":"OBO2X","description":"x004950.4020,30.5723","thumb_url":"https://i.ibb.co/8xPVKr8/file-111.jpg","input_message_content":{"message_text":"TRUE"}}]

}
//if(re.query === 0) B.cache_time = 1
}

// O[re.from] = O[re.from] || {}

// O[re.from] = {...O[re.from],...re}

//if(re.split && re.split[1]) B.text = re; B.reply_to_message_id = (1+re.split[0])
//console.info(x)


  
     // return B
    }



