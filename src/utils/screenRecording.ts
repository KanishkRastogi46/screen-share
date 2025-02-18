function screenRecording() {
    navigator.mediaDevices.getDisplayMedia({video: true, audio: true})
    .then(stream=>{
        
    }).catch(err=>{
        console.log(err)
    })
}

export default screenRecording;