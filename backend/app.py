from flask import Flask, request
import replicate
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, daddy!\n"

@app.route("/images/get-prediction")
def getImages():
    args = request.args
    prompt = args.get("prompt")
    model = replicate.models.get("stability-ai/stable-diffusion")
    output = model.predict(prompt=prompt)
    return output

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)