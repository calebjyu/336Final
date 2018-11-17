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

@app.route("/api/beer/sold_most/<beer>",methods=["GET"])
def where_beer_is_sold_most(beer):
    return jsonify(database.where_beer_is_sold_most(beer))

@app.route("/api/beer/drinks_most/<beer>",methods=["GET"])
def who_drinks_beer_most(beer):
    return jsonify(database.who_drinks_beer_most(beer))

@app.route("/api/beer/time/<beer>", methods=["GET"])
def get_when_is_beer_consumed_most(beer):
    try:
        return jsonify(database.get_when_is_beer_consumed_most(beer))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bartender', methods=["GET"])
def get_bartenders():
    return jsonify(database.get_bartenders())

@app.route('/api/manf', methods=["GET"])
def get_manfs():
    return jsonify(database.get_manfs())

@app.route('/api/manf/<manf>', methods=["GET"])
def get_manf(manf):
    return jsonify(database.get_manf())

@app.route('/api/manf/cities/<manf>', methods=["GET"])
def city_where_sales_best(manf):
    return jsonify(database.city_where_sales_best(manf))

@app.route('/api/manf/live/<manf>',methods=["GET"])
def where_top_drinkers_of_manf_live(manf):
    return jsonify(database.where_top_drinkers_of_manf_live(manf))

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

@app.route("/api/drinker/spends/<drinker>", methods=["GET"])
def get_drinker_spend(drinker):
    try:
        return jsonify(database.get_drinker_spend(drinker))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bar/spend/<bar>", methods=["GET"])
def get_largest_spenders(bar):
    try:
        return jsonify(database.top_10_spenders_in_bars(bar))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/addDrinker",methods=["POST"])
def insert_into_drinkers():
    try:
        body = json.loads(request.data)
        name = body["name"]
        state = body["state"]
        city = body["city"]
        phone = body["phone"]
        address = body["address"]
        return jsonify(database.insert_into_drinkers(name,state,city,phone,address))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/deleteDrinker/<drinker>",methods=["GET"])
def delete_drinker(drinker):
    try:
        return jsonify(database.delete_drinker(drinker))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bills",methods=["GET"])
def get_bills():
    try:
        return jsonify(database.get_bills())
    except Exception as e:
        return make_response(str(e), 500)   

@app.route("/api/items",methods=["GET"])
def get_items():
    try:
        return jsonify(database.get_items())
    except Exception as e:
        return make_response(str(e), 500)  

@app.route("/api/addBar",methods=["POST"])
def insert_into_bars():
    try:
        body = json.loads(request.data)
        name = body["name"]
        licens = body["license"]
        state = body["state"]
        city = body["city"]
        phone = body["phone"]
        address = body["address"]
        return jsonify(database.insert_into_bars(name,licens,state,city,phone,address))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteBar/<bar>",methods=["GET"])
def delete_bar(bar):
    try:
        return jsonify(database.delete_bar(bar))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addItem",methods=["POST"])
def insert_into_items():
    try:
        body = json.loads(request.data)
        name = body["name"]
        typ=body["type"]
        attr=body["attr"]
        return jsonify(database.insert_into_items(name,typ,attr))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteItem/<item>",methods=["GET"])
def delete_item(item):
    try:
        return jsonify(database.delete_item(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addBartender",methods=["POST"])
def insert_into_bartenders():
    try:
        body = json.loads(request.data)
        name = body["name"]
        licens = body["bartender_license"]
        return jsonify(database.insert_into_bartenders(name,licens))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteBartender/<bartender>",methods=["GET"])
def delete_bartender(bartender):
    try:
        return jsonify(database.delete_bartender(bartender))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addBill",methods=["POST"])
def insert_into_bills():
    try:
        body = json.loads(request.data)
        transaction_id = body["transaction_id"]
        time = body["time"]
        subtotal = body["subtotal"]
        tip = body["tip"]
        t = body["total"]
        d = body["date"]
        return jsonify(database.insert_into_bills(transaction_id,time,subtotal,tip,t,d))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteBill/<bill>",methods=["GET"])
def delete_bill(bill):
    try:
        return jsonify(database.delete_bill(bill))
    except Exception as e:
        return make_response(str(e), 500)