export default async function voiceRecorder(): Promise<MediaStream | undefined> {
    let stream: MediaStream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({audio: true})
        return stream;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

