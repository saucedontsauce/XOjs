const server = io('https://profound-sundae-898452.netlify.app:3000/socket.io')

server.on('connect', ()=>{
    console.log(server.id)
})

server.on('list_users',(e)=>{
    console.log(e)
})