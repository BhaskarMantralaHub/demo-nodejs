new Promise(() => setTimeout(function () {
    console.log("Inside timeout")
}, 2000)).then(r => console.log('Response is ' + r));