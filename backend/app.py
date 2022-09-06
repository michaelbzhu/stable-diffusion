from crypt import methods
from flask import Flask, request, jsonify
import replicate
from db import set_guess
import db

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, daddy!\n"

@app.route("/create_game", methods=['POST'])
def create_game():
    return jsonify(db.create_game())

@app.route("/join_game", methods=['POST'])
def join_game():    
    username = request.form.get("username")
    game_id = request.form.get("game_id")

    return jsonify(db.join_game(game_id, username))

@app.route("/state", methods=['GET'])
def state():
    game_id = request.form.get("game_id")
    return jsonify(db.get_state(game_id))


@app.route("/start_game", methods=['POST'])
def start_game():
    game_id = request.form.get("game_id")
    return jsonify(db.start_game(game_id))

@app.route("/prompt", methods=['POST'])
def prompt():
    game_id = request.form.get("game_id")
    user_id = request.form.get("user_id")
    prompt = request.form.get("prompt")

    model = replicate.models.get("stability-ai/stable-diffusion")
    image = model.predict(prompt=prompt)[0]

    return jsonify(db.set_prompt(game_id, user_id, prompt, image))

@app.route("/guess", methods=['POST'])
def guess():
    game_id = request.form.get("game_id")
    user_id = request.form.get("user_id")
    guess = request.form.get("guess")

    return jsonify(set_guess(game_id, user_id, guess))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)