import whisper
import sys
import json

model = whisper.load_model("base")  # you can also use "tiny", "small", "medium", "large"

audio_path = sys.argv[1]
result = model.transcribe(audio_path)
print(json.dumps(result))
