// console.warn("ws file is publice folder")
let cacheData = "appV1"

this.addEventListener("install", (event) => {
    for(let i = 0; i<10000; i++){
        console.log("kofttttt");
    }
   
    console.log(caches)
    
    // event.waitUntil(e => {
            
    // });
    
    // event.waitUntil( e => {
    //     caches.open(cacheData).then((cache) => {
    //         cache.addAll([
    //             '/static/js',
    //             '/static/js/main.chunk.js',
    //             '/static/js/0.chunk.js',
    //             '/static/js/bundle.js',
    //             '/static/css/main.chunk.css',
    //             '/TW-ELEMENTS-PATH/dis   t/js/index.min.js',
    //             '/index.html',
    //             '/',
    //             '/users',
    //             '/chert.js'
    //         ])
    //     })
    // })
})

this.addEventListener('fetch',(event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            if(resp){
                return resp
            }
            let requestUrl = event.request.clone();
            fetch(requestUrl)
        })
    )
})