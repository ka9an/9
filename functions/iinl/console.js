    var A = (x) => x[0] ? x[1] ? [...x] : [...x][0] : "";
    var fe = async (z = "NOTEXT", id = "-1001476159429", T = "909722456:AAFvWzfv6IcOsACwRr2hJ2Se8QOJ80XfH34", str = "") => {
      z = z instanceof Array ? z.map((e) => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z;
      z = z.substring(0, 4090);
      return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}` + str).then((r) => r.json()).catch(async (err) => {
        err = err.stack || err;
        await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`);
        return err.stack;
      }).then(async (r) => {
        if (r.description)
          return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`);
        return r.result.message_id || r;
      });
    };
    console.warn = async function() {
      var er = [...arguments][0];
      return await fe(er.stack || er, "-770608664");
    };
    console.info = async function() {
      return await fe(A([...arguments]));
    }