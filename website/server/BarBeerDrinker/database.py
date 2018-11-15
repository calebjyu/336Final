from sqlalchemy import create_engine
from sqlalchemy import sql
from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    #Connect to DB and retrive a list of all the bars and stuff
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM bars;")
        return [dict(row) for row in rs]

def get_drinkers():
        with engine.connect() as con:
                rs = con.execute("SELECT * FROM drinkers;")
                return [dict(row) for row in rs]

def find_bar(name):
        with engine.connect() as con:
                query = sql.text("SELECT * FROM bars WHERE name = :name;")

                rs = con.execute(query, name=name)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def filter_beers(max_price):
        with engine.connect() as con:
                query = sql.text("SELECT * FROM sells WHERE price < :max_price;")

                rs = con.execute(query, max_price=max_price)
                results = [dict(row) for row in rs]
                for r in results:
                        r['price'] = float(r['price'])
                return results

def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.bar, a.beer, a.price, a.manf, coalesce(c.like_count), 0 as likes \
              FROM sells as a \
              JOIN beers as b \
              on a.beer = b.name \
              LEFT OUTER JOIN (SELECT beer, count(*) as like_count FROM likes GROUP by beer) as c \
              ON a.beer = c.beer \
              WHERE a.bar = :bar; \
            ')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def get_beers():
    with engine.connect() as con:
        query = con.execute("SELECT * FROM items where type = 'beer';")
        return [dict(row) for row in query]

def get_bartenders():
    with engine.connect() as con:
        query = con.execute("SELECT * FROM bartenders;")
        return [dict(row) for row in query]

def get_manf():
    with engine.connect() as con:
        query = con.execute("SELECT DISTINCT attr FROM items where type = 'beer';")
        return [dict(row) for row in query]


