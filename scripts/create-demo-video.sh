#!/bin/bash
# GetAutoReply Demo Video Generator
# Creates promotional videos using screenshots + TTS

OUTPUT_DIR="/Users/virendra/.openclaw/workspace/projects/getautoreply/videos"
mkdir -p "$OUTPUT_DIR"

# Hindi TTS using macOS (or can switch to ElevenLabs)
create_audio() {
    local text="$1"
    local output="$2"
    # Using macOS say command (English voice, Hindi text works okay)
    say -v Samantha -r 150 -o "$output" --data-format=LEF32@22050 "$text"
    # Convert to mp3
    ffmpeg -y -i "$output" -acodec libmp3lame "${output%.aiff}.mp3" 2>/dev/null
}

echo "Demo video script ready. Run with actual content to generate."
echo "For better Hindi TTS, use ElevenLabs API or Google Cloud TTS"
