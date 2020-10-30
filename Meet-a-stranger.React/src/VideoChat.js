import {Col} from 'react-bootstrap';
import React from 'react';
import Peer from 'peerjs';
import io from 'socket.io-client';

class VideoChat extends React.Component {

    socket = null;
    myPeer = null;
    peers = {};
    constructor(){
        super();
        this.MyWebCam = React.createRef();
        this.StrangerWebCam = React.createRef();
    }
    componentDidMount() {
        this.socket = io(this.props.serverIp);
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
        this.addVideoStream(this.MyWebCam.current, stream)
        this.myPeer = new Peer(undefined )
        this.myPeer.on('open', id => {
            this.socket.emit('join-room', 3, id)
        })  
        this.myPeer.on('call', call => {
            call.answer(stream)
            call.on('stream', userVideoStream => {
            this.addVideoStream(this.StrangerWebCam.current, userVideoStream)
        })
        })       
        this.socket.on('user-connected', userId => {
            console.log("new user connected", userId)
            this.connectToNewUser(userId, stream)
        })
        }).catch(error=>{
            console.log("Error: ",error)
        })
        
        this.socket.on('user-disconnected', userId => {
            if (this.peers[userId]) {
                console.log(userId + " disconnected")
                this.peers[userId].close()
            }
        })
        
    }
    connectToNewUser(userId, stream) {
        const call = this.myPeer.call(userId, stream)
        call.on('stream', userVideoStream => {
            this.addVideoStream(this.StrangerWebCam.current, userVideoStream)
        })
        call.on('close', () => {
        console.log("call closed");
        })
        this.peers[userId] = call
    }

    addVideoStream(video, stream) {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
        video.play()
        })
    }

    render() {
        return(
            <Col xs={12} sm={12} md={5} className="h-100">
                <video muted className="w-100 h-50 rounded bg-light" ref={this.MyWebCam}></video>
                <video className="w-100 h-50 rounded bg-light" ref={this.StrangerWebCam}></video>    
            </Col>
        )
    }
}

export default VideoChat;