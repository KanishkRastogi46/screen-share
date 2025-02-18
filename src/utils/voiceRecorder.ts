function voiceRecorder() {
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream=>{
        console.log(stream);
        stream.getTracks();
    }).catch(err=>{
        console.log(err)
    })
}

export default voiceRecorder;