if (typeof B === 'undefined') globalThis.B = {}

export async function onRequestPost(context) {
	var { request } = context

  try {
   // await Z(request)
   await Post(request)
         return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
    //var j = await L.get("J")
   // console.info(j)
  } catch (err) {
    console.warn(err)
    return new Response({ status: 200 })
  }
  // return new Response({ status: 200 })
	//request = await request.json()
  //   finally {
  //     return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
  // }
	// await Z(request)

}

async function Post(request) {

    var re = await (request.clone()).json()
re.T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs"
B = await fetch(
      `https://ii.1l.workers.dev`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(re)
      }
    ).then( r => r.json() )


    //            await fetch("https://gleb.1l.workers.dev", {
    //             method: 'POST',
    //             headers: {
          
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //             body: JSON.stringify({location:ll,geo:null})
    //         })

    // const newRequestInit = {
    //     method: "POST",
    //     body: JSON.stringify(re),
    //     redirect: 'content-type': 'application/json'
    // }
    // const url = new URL("https://gleb.1l.workers.dev")
    // const newRequest = new Request(
    //     url.toString(),
    //     new Request(request, newRequestInit),
    // )
    // try {
    //     return await fetch(newRequest)
    // } catch (e) {
    //     console.warn(e)
    //     return new Response({ status: 200 })
    // }
}
