export default async function screenRecording(video: React.RefObject<HTMLVideoElement | null>) {
    if (!navigator.mediaDevices) alert("Your browser does not support screen recording");
    
    else {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    width: {ideal: 1920},
                    height: {ideal: 1080}
                },
                audio: true});
            if (video.current) {
                video.current.srcObject = stream;
                video.current.play();
            }
            return stream;
        } catch (error) {
            console.log(error);
        }
    }    
}