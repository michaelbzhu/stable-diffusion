from ntpath import join
import dill
import redis
import numpy as np

from sentence_transformers import SentenceTransformer
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

r = redis.Redis(host='localhost', port=6379)

def increment_counter(name, if_none=1):
    counter = r.get(name)

    if counter is None:
        counter = if_none
    else:
        counter = int(counter) + 1

    r.set(name, counter)

    return counter

def get_dict(name):
    dct = r.get(name)
    if dct is None:
        dct = {}
    else:
        dct = dill.loads(dct)

    return dct

def get_int(name, if_none=None):
    val = r.get(name)
    return int(val) if val is not None else if_none

def get_str(name, if_none=None):
    val = r.get(name)
    return val.decode() if val is not None else if_none


def create_game():
    game_id = increment_counter("num_games")

    r.set("{}:round".format(game_id), 0)

    return game_id

def join_game(game_id, username):
    if game_id is None or username is None:
        raise Exception("Inputs to join_game cannot be None!")
        
    # Update number of users
    user_id = increment_counter("{}:num_users".format(game_id))

    print(game_id, username, "{}:num_users".format(game_id))

    # Add username and score to the map
    users = get_dict("{}:users".format(game_id))
    users[user_id] = (username, 0)

    r.set("{}:users".format(game_id), dill.dumps(users))
    return user_id

def start_game(game_id):
    round_ = increment_counter("{}:round".format(game_id))

    return round_

def set_prompt(game_id, user_id, prompt, image):
    if get_int("{}:round".format(game_id), int) != int(user_id): # TODO FIX THIS
        return False

    return r.set("{}:prompt".format(game_id), prompt) and r.set("{}:image".format(game_id), image)

def compare_text(t1, t2):
    return float(np.dot(model.encode(t1), model.encode(t2)))

def set_guess(game_id, user_id, guess):
    user_id = int(user_id)
    if user_id < 1 or user_id > int(r.get("{}:num_users".format(game_id))):
        return False

    prompt = get_str("{}:prompt".format(game_id))
    score = compare_text(guess, prompt)

    round_data = get_dict("{}:round_data".format(game_id))

    if user_id not in round_data or round_data[user_id][0] < score:
        round_data[user_id] = (score, guess)

    print(r.set("{}:round_data".format(game_id), dill.dumps(round_data)))
    print(round_data)

    return guess, prompt, score

def get_state(game_id):
    return {
        'users': get_dict("{}:users".format(game_id)),
        'round_num': get_int("{}:round".format(game_id)),
        'round_data': get_dict("{}:round_data".format(game_id)),
        'prompt': get_str("{}:prompt".format(game_id)),
        'image': get_str("{}:image".format(game_id))
    }

    
if __name__ == "__main__":
    game = create_game()

    print(join_game(3, "armaan"))
    print(join_game(3, 'bob'))