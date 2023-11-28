import https from "https";

const url = "https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif";

https.get(url, (res) => {
    let body = '';
  
    res.on("data", function (d) {
      body += d;
    });
    
    res.on('end', function () {
      console.log(body);
    })
})
.on("error", (e) => {
    console.error(e);
});
