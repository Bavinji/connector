var socket = io.connect("http://localhost:3000");

const output = document.getElementById("output");
const message = document.getElementById("message");
const btn = document.getElementById("send");
const handle = document.getElementById("handle");
const feedback = document.getElementById("feedback");

if(btn && message){
    btn.addEventListener("click",function(){
        socket.emit("chat",{
            message:message.value,
            handle:handle.value
        });
    });

    message.addEventListener("keypress",()=>{
        socket.emit("typing",handle.value);
    
    });    
}

socket.on("chat",(data)=>{
    output.innerHTML+="<p><strong>" + data.handle  +  ":</strong>"  +  data.message + "</p>";
});

socket.on("typing",(data)=>{
    feedback.innerhtml += "<p><em>" + data.handle + "is typing...</em></p>";
});
