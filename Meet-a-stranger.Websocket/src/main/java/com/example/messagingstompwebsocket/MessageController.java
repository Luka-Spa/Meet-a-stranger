package com.example.messagingstompwebsocket;

import static java.lang.String.format;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;



@Controller
public class MessageController {

   @Autowired
    private SimpMessageSendingOperations messagingTemplate;
	   
	@CrossOrigin
    @MessageMapping("/chat/{roomId}/sendMessage")
    public void sendMessage(@DestinationVariable String roomId, @Payload Message chatMessage) {
    	if(!chatMessage.getContent().isEmpty()) {
        messagingTemplate.convertAndSend(format("/chat-room/%s", roomId), chatMessage);
    	}
    }

}
