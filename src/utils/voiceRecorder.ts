function voiceRecorder() {
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream=>{

    }).catch(err=>{
        console.log(err)
    })
}

export default voiceRecorder;