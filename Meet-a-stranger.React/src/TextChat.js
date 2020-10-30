import {Form, Row, Col, Button} from 'react-bootstrap';
import React from 'react';
import SockJsClient from 'react-stomp';

class TextChat extends React.Component {
    constructor() {
        super();
        this.state = {roomId: 3, messages: [], myMessage: null};
      }

      componentDidUpdate(){
        document.getElementById('data').scrollTop = document.getElementById('data').scrollHeight;
      }

      onMessage(msg){
          console.log(msg);
          this.setState({
            messages: [...this.state.messages, msg]
          })
      }

      onConnected(){
          console.log("Connected to server");
          var msg = {
            sender: "System",
            content: "Client Connected Successfully",
            type: 'JOIN'
          };
          this.clientRef.sendMessage("/chat-app/chat/" + this.state.roomId + "/sendMessage", JSON.stringify(msg));
      }

      sendMessage = () => {
        if(this.myMessage.value !== "") {
        var msg = {
            sender: "client",
            content: this.myMessage.value,
            type: 'CHAT'
        };
        this.myMessage.value = "";
        this.clientRef.sendMessage("/chat-app/chat/" + this.state.roomId + "/sendMessage", JSON.stringify(msg));
       }
    }

     renderChatData() {
        return this.state.messages.map((msg) => {
           if(msg === null) return <tr></tr>;
           const { content, sender, /*client, type, */ } = msg 
           return (
              <tr>
                 <td><b>{sender}: </b>{content}</td>
              </tr>
           )
        })
     }

     onInputEnter = (event) => {
        if(event.key === 'Enter'){
            console.log("passed function enter");
          this.sendMessage();
        }
    }

    render() {
        return(
            <Col xs={12} sm={12} md={7}>
                <Row className="p-1">
                     <Col xs={12}>
                <div className="w-100 h-100">
                    <div id="data" style={{height: "40vh"}} className="border overflow-auto">
                    <table className="table table-striped">
                        <tbody ref={ (chatBox) => { this.chatBox = chatBox }}>
                            {this.renderChatData()}          
                        </tbody>
                    </table> 
                    </div>
                </div>
                    </Col>
                </Row>
                <Row className="p-1">
                    <SockJsClient url={this.props.serverIp} topics={['/chat-room/' + this.state.roomId]}
                    onMessage={(msg) => { this.onMessage(msg); }}
                    onConnect={() => { this.onConnected(); }}
                    onConnectFailure={()=> { alert("Connection failed"); window.location.reload(false);}}
                    ref={ (client) => { this.clientRef = client }} />
                    <Col xs={9}><Form.Control ref={ (myMessage) => { this.myMessage = myMessage }} onKeyPress={this.onInputEnter} type="text" placeholder="Message..." /></Col>
                    <Col xs={3}><Button className="w-100" onClick={this.sendMessage}>Send</Button></Col> 
                </Row>
            </Col>
        )
    }
}
export default TextChat;