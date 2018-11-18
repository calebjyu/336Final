from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route("/api/addfrequents",methods=["POST"])
def insert_frequents():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        return jsonify(database.insert_frequents(attr1,attr2))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deletefrequents/<item>",methods=["GET"])
def delete_frequents(item):
    try:
        return jsonify(database.delete_frequents(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addhours",methods=["POST"])
def insert_hours():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        attr3 = body["attr3"]
        attr4 = body["attr4"]
        return jsonify(database.insert_hours(attr1,attr2,attr3,attr4))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deletehours/<item>",methods=["GET"])
def delete_hours(item):
    try:
        return jsonify(database.delete_hours(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addinventory",methods=["POST"])
def insert_inventory():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        attr3 = body["attr3"]
        attr4 = body["attr4"]
        return jsonify(database.insert_inventory(attr1,attr2,attr3,attr4))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteinventory/<item>",methods=["GET"])
def delete_inventory(item):
    try:
        return jsonify(database.delete_inventory(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addlikes",methods=["POST"])
def insert_likes():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        return jsonify(database.insert_likes(attr1,attr2))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deletelikes/<item>",methods=["GET"])
def delete_likes(item):
    try:
        return jsonify(database.delete_likes(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addoperates",methods=["POST"])
def insert_operates():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        return jsonify(database.insert_operates(attr1,attr2))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteoperates/<item>",methods=["GET"])
def delete_operates(item):
    try:
        return jsonify(database.delete_operates(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addprinted_on",methods=["POST"])
def insert_printed_on():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        return jsonify(database.insert_printed_on(attr1,attr2))
    except Exception as e:
        alert("Violates foreign key constraints.");
        return make_response(str(e), 500)
@app.route("/api/deleteprinted_on/<item>",methods=["GET"])
def delete_printed_on(item):
    try:
        return jsonify(database.delete_printed_on(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addsells",methods=["POST"])
def insert_sells():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        attr3 = body["attr3"]
        return jsonify(database.insert_sells(attr1,attr2,attr3))
    except Exception as e:
        alert("Violates foreign key constraints.");
        return make_response(str(e), 500)
@app.route("/api/deletesells/<item>",methods=["GET"])
def delete_sells(item):
    try:
        return jsonify(database.delete_sells(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addtransacts",methods=["POST"])
def insert_transacts():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        attr3 = body["attr3"]
        return jsonify(database.insert_transacts(attr1,attr2,attr3))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deletetransacts/<item>",methods=["GET"])
def delete_transacts(item):
    try:
        return jsonify(database.delete_transacts(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/addworks",methods=["POST"])
def insert_works():
    try:
        body = json.loads(request.data)
        attr1 = body["attr1"]
        attr2 = body["attr2"]
        attr3 = body["attr3"]
        attr4 = body["attr4"]
        attr5 = body["attr5"]
        return jsonify(database.insert_works(attr1,attr2,attr3,attr4,attr5))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/deleteworks/<item>",methods=["GET"])
def delete_works(item):
    try:
        return jsonify(database.delete_works(item))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/frequents', methods=["GET"])
def get_frequents():
    return jsonify(database.get_frequents())
@app.route('/api/hours', methods=["GET"])
def get_hours():
    return jsonify(database.get_hours())
@app.route('/api/inventory', methods=["GET"])
def get_inventory():
    return jsonify(database.get_inventory())
@app.route('/api/likes', methods=["GET"])
def get_likes():
    return jsonify(database.get_likes())
@app.route('/api/operates', methods=["GET"])
def get_operates():
    return jsonify(database.get_operates())
@app.route('/api/printed_on', methods=["GET"])
def get_printed_on():
    return jsonify(database.get_printed_on())
@app.route('/api/sells', methods=["GET"])
def get_sells():
    return jsonify(database.get_sells())
@app.route('/api/transacts', methods=["GET"])
def get_transacts():
    return jsonify(database.get_transacts())
@app.route('/api/works', methods=["GET"])
def get_works():
    return jsonify(database.get_works())

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

@app.route('/api/bartender/<bartender>', methods=["GET"])
def get_bartender(bartender):
    return jsonify(database.get_bartender(bartender))

@app.route('/api/bartender/<bartender>/<bar>', methods=["GET"])
def get_shift(bartender, bar):
    return jsonify(database.get_shift(bartender,bar))

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
@app.route("/api/bar/<bar>/<day>", methods=["GET"])
def top_10_beers_of_bar_on_dow(bar,day):
    try:
        return jsonify(database.top_10_beers_of_bar_on_dow(bar,day))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/busyDay/<bar>", methods=["GET"])
def busiest_time_of_the_day(bar):
    try:
        return jsonify(database.busiest_time_of_day(bar))
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/busy/<bar>", methods=["GET"])
def busiest_time_of_the_week(bar):
    try:
        return jsonify(database.busiest_times_of_week(bar))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bar/anal/<manf>/<day>", methods=["GET"])
def top_ten_bars_for_manf_per_day(manf,day):
    try:
        return jsonify(database.top_ten_bars_for_manf_per_day(manf,day))
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