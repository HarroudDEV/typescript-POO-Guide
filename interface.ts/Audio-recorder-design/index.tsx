export interface Recorder {
  startRecording(): void;

  pauseRecording(): void;

  resumeRecording(): void;

  stopRecording(): void;
}

export interface AudioProcessor {
  readAudioData(): void;

  setAudioData(): void;
}

export class AudioDataProcessor implements AudioProcessor {
  private readonly audioChunks: Array<Blob> = [];

  readAudioData() {}
  setAudioData() {}
}

export class AudioRecorder implements Recorder {
  private mediaRecorder: MediaRecorder;

  startRecording() {}
  stopRecording() {}
  resumeRecording() {}
  pauseRecording() {}
}
