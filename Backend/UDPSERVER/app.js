import dgram from "node:dgram";

const socket = await dgram.createSocket("udp4")

const PORT = 3000;

socket.on("message", (message, remoteAddress) => {
    console.log(message.toLocaleString());
    console.log(remoteAddress);
})


socket.bind(PORT, () => {
    console.log(socket.address());
    const address = socket.address()
    console.log(`Server is running on port ${address.port}`)
})


// console.log(socket)