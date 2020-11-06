var stompClient = null;
var roomId = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

$(window).on('load', function(){
    var socket = new SockJS('/sock');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        $("#greetings").append("<tr><td>" + "Successfully connected" + "</td></tr>");
     	roomId = prompt("Which room you wanna be in??");
        stompClient.subscribe("/chat-room/" + roomId, function (payload) {
             showGreeting(payload); 
        });
    });
});

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    var chatMessage = {
        sender: "client",
        content: $("#name").val(),
        type: 'CHAT'
    };
    stompClient.send("/chat-app/chat/" + roomId + "/sendMessage", {},  JSON.stringify(chatMessage));
}

function showGreeting(payload) {
    var message = JSON.parse(payload.body);
    $("#greetings").append("<tr><td>" + message.content + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});

