//import { cn } from "./chucknorris"

var ki = JSON.stringify({
            "inline_keyboard": [
                [{
                    "text": "L",
                    "callback_data": "LLLL"
                },{
                    "text": ":RE",
                    "callback_data": "re"
                }]
            ]
        })
var kk = JSON.stringify({
            "inline_keyboard": [
                [{
                    "text": "L",
                    "callback_data": "LLLL"
                },{
                    "text": ":RE",
                    "switch_inline_query_current_chat": ""
                },{
                    "text": "LL",
                    "callback_data": "LL"
                },{
                    "text": "D",
                    "switch_inline_query_current_chat": "D"
                }]
            ]
        })

var kg = JSON.stringify({ "resize_keyboard":true, "keyboard": [
                    [{
                        "request_location": true,
                        "text": "GEO"
                    },"#M","$LLL","@IIIII","X.co"]

                ]})

export async function bot(update) {
 
    var bot = new Bot(TOKEN, update)
    var bus = new CommandBus()
    bus.on(/\/add/, function() {
      B.reply_markup = JSON.stringify({ "remove_keyboard":true})
        this.replyToSender("wova.1l.workers.dev")
    })
        bus.on(/\/help/, function() {

     B.reply_markup = JSON.stringify({
            "inline_keyboard": [
                [{
                    "text": "LINK",
                    "url": `https://t.me/wo_vabot?start=${req.chat}`
                }]
            ]
        })
        this.replyToSender(req.from + " " + req.chat)
    })
    // bus.on(/photo/, function() {
    //     this.replyToSender("PHOTO")
    // })
    // bus.on(/data/, function() {
    //     this.replyToSender("cc")
    // })
    // bus.on(/query/, function() {
    //     this.replyToSender("Q")
    // })
    // bus.on(/reply_t/, function() {
    //     this.replyToSender("rep")
    // })
        // try {

        //     bus.on(/^\s*([A-Za-z0-9_]+)?/, raJ)
        // // bus.on(/^(?=.*LL).*$/, replyData)
        // } catch (err) {
        //     console.warn(err)
        // }
        //     try {

        //     bus.on(/^\s*([A-Za-z0-9_]+)?/, raJ)
        // // bus.on(/^(?=.*LL).*$/, replyData)
        // } catch (err) {
        //     console.warn(err)
        // }
    bus.on(/^(?=.*photo)(?=.*reply_to).*$/, reply)
    bus.on(/\/_\s*([A-Za-z0-9_]+)?_\s*([A-Za-z0-9_]+)?/, randomJoke)
      bus.on(/\/start \s*([A-Za-z0-9_]+)?/, deep)
      bus.on(/#\s*([A-Za-z0-9_]+)?/, rH)
     bus.on(/\/_\s*([A-Za-z0-9_]+)?/, randomJ)
    bot.register(bus)
    if (update) {
        bot.process()
    }
}
async function rH(x) {
//console.info(x)
await L.put({x: x}, req.from)
    B.reply_markup = kg
    this.replyToSender(x)
}
async function deep(x) {
//await console.info(x)
    B.reply_markup = kg
    this.replyToSender(x)
}
async function replyData(x) {
//ERR
  // await console.info(x)
    this.replyToSender(x)
}
async function reply(x) {

    B.reply_markup = kg
    this.replyToSender(x)
}
async function randomJ(x) {
//console.info(req)
B.text = x
    B.reply_markup = kg
    this.replyToSender(x)
}
async function randomJoke(name, surname) {

    var firstName = name || null
    var lastName = surname || null
    var url = 'https://api.icndb.com/jokes/random?escape=javascript'
    if (firstName) url = url + '&firstName=' + firstName
    if (lastName) url = url + '&lastName=' + lastName
    //console.info(url)
    return await fetch(url).then( async r => {
       r = await r.json()
       r = r.value.joke
//console.info(r)
B.reply_markup = kk
        return await this.replyToSender(r) })
//     .then( r =>{
//         r = r.joke
// console.info(r)
//         return r })
    // console.info(vv)
   
  // .then( data => 
  //   data.value.joke
  // )
// console.warn(v)
 
    
}

function Bot(token, update) {
    this.token = token
    this.update = update
    this.handlers = []
}
Bot.prototype.register = function(handler) {
    this.handlers.push(handler)
}
Bot.prototype.process = function() {
    for (var i in this.handlers) {
        var event = this.handlers[i]
        return event.handle(this)
    }
}
Bot.prototype.request = async function(method, data) {

    // return await fetch('https://api.telegram.org/bot' + TOKEN + '/' + method, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
}
Bot.prototype.replyToSender = function(text) {

B.text = text// || cn()
if(B.text) B.method = 'sendMessage'
    // return this.request('sendMessage', {
    //     'chat_id': req.chat,
    //     'text': text,
    //     'reply_markup': ki
    // })
}

function CommandBus() {
    this.commands = []
}
CommandBus.prototype.on = function(regexp, callback) {
    this.commands.push({
        'regexp': regexp,
        'callback': callback
    })
}
CommandBus.prototype.handle = function(bot) {
    for (var i in this.commands) {
        var cmd = this.commands[i]
        var x = JSON.stringify(bot.update)
        var tokens = cmd.regexp.exec(x)
        if (tokens != null) {
            return cmd.callback.apply(bot, tokens.splice(1))
        }
    }
    return bot.replyToSender(tokens)
}
