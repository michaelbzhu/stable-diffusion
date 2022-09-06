from ntpath import join
import dill
import redis

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

def get_val(name, type):
    val = r.get(name)
    return type(val) if val is not None else None


def create_game():
    game_id = increment_counter("num_games")

    r.set("{}:round".format(game_id), 0)

    return game_id

def join_game(game_id, username):
    # Update number of users
    user_id = increment_counter("{}:num_users".format(game_id))

    # Add username and score to the map
    users = get_dict("{}:users".format(game_id))
    users[user_id] = (username, 0)

    print(user_id)

    return r.set("{}:users".format(game_id), dill.dumps(users))

def start_game(game_id):
    round_ = increment_counter("{}:round".format(game_id))

    return round_

def set_prompt(game_id, user_id, prompt, image):
    if int(r.get("{}:round".format(game_id))) != user_id: # TODO FIX THIS
        return False

    return r.set("{}:prompt".format(game_id), prompt) and r.set("{}:image".format(game_id), image)

def set_guess(game_id, user_id, guess, score):
    if user_id < 1 or user_id > int(r.get("{}:num_users".format(game_id))):
        return False
    
    round_data = get_dict("{}:round_data".format(game_id))

    if user_id not in round_data or round_data[user_id][0] < score:
        round_data[user_id] = (score, guess)

    return r.set("{}:round_data", dill.dumps(round_data))

def get_state(game_id):
    return {
        'users': get_dict("{}:users".format(game_id)),
        'round_num': get_val("{}:round".format(game_id), int),
        'round_data': get_dict("{}:round_data".format(game_id)),
        'prompt': get_val("{}:prompt".format(game_id), str),
        'image': get_val("{}:image".format(game_id), str)
    }
    
    
if __name__ == "__main__":
    game = create_game()

    print(join_game(3, "armaan"))
    print(join_game(3, 'bob'))