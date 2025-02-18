function screenRecording(video: React.RefObject<HTMLVideoElement | null>) {
    navigator.mediaDevices.getDisplayMedia({video: true, audio: true})
    .then(stream=>{
        if (video.current) {
            video.current.srcObject = stream;
            video.current.play();
        } 
    }).catch(err=>{
        console.log(err)
    })
}

export default screenRecording;