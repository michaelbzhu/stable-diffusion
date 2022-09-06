from crypt import methods
from flask import Flask, request, jsonify
import replicate
import db

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, daddy!\n"

# @app.route("/images/get-prediction")
# def getImages():
#     args = request.args
#     prompt = args.get("prompt")
#     model = replicate.models.get("stability-ai/stable-diffusion")
#     output = model.predict(prompt=prompt)
#     return output

@app.route("/create_game", methods=['POST'])
def create_game():
    return jsonify(db.create_game())

@app.route("/join_game", methods=['POST'])
def join_game():    
    username = request.form.get("username")
    game_id = request.form.get("game_id")

    return jsonify(db.join_game(game_id, username))

@app.route("/state/<game_id>", methods=['GET'])
def state(game_id):
    return jsonify(db.get_state(game_id))


@app.route("/start_game", methods=['POST'])
def start_game():
    game_id = request.form.get("game_id")
    return jsonify(db.start_game(game_id))



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)