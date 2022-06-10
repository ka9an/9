// if (typeof L === 'undefined') globalThis.L = {}
//globalThis.TOKEN = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs"
import "./6cc.js"





async function errorHandler(context) {
  //var { request, env: { G } } = context
  var { request } = context
  //L = G
  try {
var t = await request.text()
console.log(t)


    // wait for the next function to finish
    return await context.next()
  } catch (err) {
    console.warn(err)
    // catch and report and errors when running the next function
    return new Response( { status: 200 })
  }
}

// Attach `errorHandler` to all HTTP requests
export const onRequest = errorHandler;
// const errorHandler = async ({ next }) => {
//   try {
//     return await next()
//   } catch (err) {
//     return new Response(`${err.message}\n${err.stack}`, { status: 500 })
//   }
// }

// const hello = async ({ next }) => {
//   const response = await next()
//   response.headers.set('X-Hello', 'Hello from functions Middleware!')
//   return response
// }

// export const onRequest = [
//   errorHandler,
//   hello
// ]