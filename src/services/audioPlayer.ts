export class AudioPlayer {
  static audio: HTMLAudioElement | undefined;
  

  static play() {
    this.audio?.play();
  }

  static pause() {
    this.audio?.pause();
  }

  static stop() {
    this.audio?.pause();
    if(this.audio){
        this.audio.currentTime = 0;  
    }
  }

  static async changeAudioFile(audioFile : string)  {
    this.stop();
    this.audio = new Audio('audio/' + audioFile);
    await this.audio?.play();
  }
}