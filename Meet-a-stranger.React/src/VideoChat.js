import {Col} from 'react-bootstrap';
import React from 'react';
import Peer from 'peerjs';

class VideoChat extends React.Component {

    myPeer = null;
    peers = {};
    constructor(){
        super();
        this.MyWebCam = React.createRef();
        this.StrangerWebCam = React.createRef();
    }
    componentDidMount() {    
        // this.myPeer = new Peer(this.props.id, { host: "localhost", path: "/peer", port: "3002"})  
        this.myPeer = new Peer(this.props.id)  
        this.myPeer.on('open', () => this.peerOnOpen());
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
        this.addVideoStream(this.MyWebCam.current, stream)
        this.myPeer.on('call', (call) => this.onCall(stream, call));
        this.props.socket.on('peer-connected', (userId) => this.connectToNewUser(userId, stream)); 
        })
        this.props.socket.on('user-disconnected', (userId) => this.userDisconnected(userId));

    }
    peerOnOpen() {
        console.log("peer opened")
        this.props.socket.emit('new-peer', this.props.id)    
    }
    
    onCall(stream, call) {
        call.answer(stream)
        call.on('stream', userVideoStream => {
        this.addVideoStream(this.StrangerWebCam.current, userVideoStream)
        })
    }
    
    userDisconnected(userId){
        if (this.peers[userId]) {
            console.log(userId + " disconnected");
            this.peers[userId].close();
        }
    }

    connectToNewUser(userId, stream) {
        console.log("new peer connected", userId)
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