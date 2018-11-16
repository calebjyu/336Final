from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/drinker', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route("/api/drinker/<drinker>", methods=["GET"])
def get_drinker(drinker):
    try:
        return jsonify(database.get_drinker(drinker))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route("/api/beer/<beer>", methods=["GET"])
def get_beer(beer):
    try:
        return jsonify(database.get_beer(beer))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bartender', methods=["GET"])
def get_bartenders():
    return jsonify(database.get_bartenders())

@app.route('/api/manf', methods=["GET"])
def get_manf():
    return jsonify(database.get_manf())

@app.route('/api/transactions/<drinker>', methods=["GET"])
def get_transactions_of(drinker):
    return jsonify(database.get_transactions_of(drinker))

@app.route("/api/bar/<name>", methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/beers_cheaper_than", methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(requests.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))

@app.route("/api/beer/<beer>", methods=["GET"])
def get_manufacturers_making(beer):
    try:
        return jsonify(database.get_manf_selling(beer))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bars-selling/<beer>", methods=["GET"])
def get_bars_selling(beer):
    try:
        if beer is None:
            raise ValueError("Beer not specified")
        return jsonify(database.get_bars_selling(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/drinker/<drinker>", methods=["GET"])
def get_drinker_fav_beer(drinker):
    try:
        return jsonify(database.get_drinker_fav_beer(drinker))
    except Exception as e:
        return make_response(str(e), 500)