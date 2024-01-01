const server = io('https://profound-sundae-898452.netlify.app:3000/')

server.on('connect', ()=>{
    console.log(server.id)
})