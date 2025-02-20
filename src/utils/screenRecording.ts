export default async function screenRecording(video: React.RefObject<HTMLVideoElement | null>) {
    if (navigator.mediaDevices.getDisplayMedia) {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    width: {ideal: 1920},
                    height: {ideal: 1080},
                    frameRate: {ideal: 30},
                },
                audio: true});
            if (video.current) {
                video.current.srcObject = stream;
                video.current.play();
            }
            return stream;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    } else {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: {ideal: 1080},
                    height: {ideal: 1920},
                    frameRate: {ideal: 60},
                },
                audio: true
            })
            if (video.current) {
                video.current.srcObject = stream;
                video.current.play();
            }
            return stream;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }  
}