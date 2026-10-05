/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioService {
  private ctx: AudioContext | null = null;
  private isSoundEnabled = true;

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound() {
    this.isSoundEnabled = !this.isSoundEnabled;
    return this.isSoundEnabled;
  }

  public getSoundState() {
    return this.isSoundEnabled;
  }

  // Play a beautiful woody "click" sound representing a physical Tasbih bead sliding
  public playBeadClick() {
    if (!this.isSoundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      // We combine short bandpass/triangle sweep to mimic wood clicking
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

      gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      console.warn("Failed to play bead click audio", e);
    }
  }

  // Play a light metallic chime chord when counter reaches the goal
  public playCompletionChime() {
    if (!this.isSoundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 major chord

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        // Soft attack, long ring decaying out
        gainNode.gain.setValueAtTime(0.0, now + idx * 0.06);
        gainNode.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.6);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.7);
      });
    } catch (e) {
      console.warn("Failed to play chime audio", e);
    }
  }

  // Play an ambient, peaceful harmonic wave sound representing the call/reminder
  public playPeacefulCall() {
    if (!this.isSoundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Synthesize a rich organic organ/wind pad chime
      const baseFreqs = [329.63, 440.00, 554.37, 659.25]; // E4, A4, C#5, E5 (A major Add9 feel)

      baseFreqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const subOsc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.connect(oscGain);
        subOsc.connect(oscGain);
        oscGain.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(freq / 2, now); // Add depth with sub-octave

        // Long swell and smooth release
        oscGain.gain.setValueAtTime(0.0, now);
        oscGain.gain.linearRampToValueAtTime(0.08, now + 0.5 + idx * 0.1);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

        osc.start(now);
        subOsc.start(now);
        
        osc.stop(now + 2.2);
        subOsc.stop(now + 2.2);
      });
    } catch (e) {
      console.warn("Failed to play call audio", e);
    }
  }
}

export const audio = new AudioService();
export default audio;
