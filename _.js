( async ()=>{
    require('isomorphic-unfetch')

        return await fetch("https://api.logflare.app/api/logs?api_key=iqrq8HGRJJ_K&source=78832ad7-a4ae-43c2-8418-4c5f2f8b67b2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
      "log_entry": "x123",
      "metadata": {n:999}
    })
        })  .then( r => r.json() )
  .then( data => {
    console.log(data);
  })

})()
console.log(1)