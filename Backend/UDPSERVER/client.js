import dgram from "node:dgram";

const socket = await dgram.createSocket("udp4")


socket.on("message", (message, remoteAddress) => {
    console.log(message.toLocaleString());
    console.log(remoteAddress);
})

socket.send("Hi kaise ho, If messaged deliver then confirm me", 3000, "192.168.29.168")