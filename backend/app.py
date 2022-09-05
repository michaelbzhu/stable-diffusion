from flask import Flask, request
import replicate
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, daddy!"


@app.route("/images/get-prediction")
def getImages():
    args = request.args
    prompt = args.get("prompt")
    model = replicate.models.get("stability-ai/stable-diffusion")
    output = model.predict(prompt=prompt)
    return output