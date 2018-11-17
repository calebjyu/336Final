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

def get_drinker(drinker):
    with engine.connect() as con:
        query = sql.text("SELECT name FROM drinkers where name = :drinker;")
        rs = con.execute(query, drinker=drinker)
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

def get_beer(beer):
    with engine.connect() as con:
        query = sql.text("SELECT name, attr FROM items where type = 'beer' and name = :beer;")
        rs = con.execute(query, beer=beer)
        return [dict(row) for row in rs]

def get_bartenders():
    with engine.connect() as con:
        query = con.execute("SELECT * FROM bartenders;")
        return [dict(row) for row in query]

def get_manf():
    with engine.connect() as con:
        query = con.execute("SELECT DISTINCT attr FROM items where type = 'beer';")
        return [dict(row) for row in query]

def get_manf_selling(beer):
    with engine.connect() as con:
        if beer is None:
                query = con.execute("SELECT DISTINCT attr FROM items where type = 'beer';")
                return [dict(row) for row in query]
        query = sql.text("SELECT attr FROM items where type = 'beer' and name = :beer;")
        return [dict(row) for row in query]

def get_bars_selling(beer):
        with engine.connect() as con:
                query = sql.text(
                        'SELECT a.bar, a.price\
                        FROM sells as a, items as b\
                        WHERE a.item = b.name and b.name = :beer\
                        ORDER BY a.price;'
                )
                rs = con.execute(query,beer=beer)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['price']=float(results[i]['price'])
                return results

def get_transactions_of(drinker):
        with engine.connect() as con:
                query = sql.text(
                        "select * from\
                        (select b1.transaction_id, t1.bar, b1.time, b1.date from bills b1, transacts t1 \
	                where (t1.drinker = :drinker and t1.bill = b1.transaction_id) \
                        order by b1.time, b1.date) as s1\
                        group by s1.bar;")
                rs = con.execute(query, drinker=drinker)
                return [dict(row) for row in rs]

def get_drinker_fav_beer(drinker):
        with engine.connect() as con:
                query = sql.text(
                        "select f1.item, count(f1.item) as count from \
                        (select p1.item from printed_on p1, transacts t1, items i1 \
                        where (t1.drinker = :drinker and p1.bill = t1.bill) \
                        and (p1.item = i1.name and i1.type = 'beer')) f1 group by f1.item")
                rs = con.execute(query, drinker=drinker)
                return [dict(row) for row in rs]

def get_drinker_spend(drinker):
        with engine.connect() as con:
                query = sql.text(
                        "select b1.total, t1.bar, b1.date\
                        from bills b1, transacts t1\
                        where (t1.drinker = :drinker and t1.bill = b1.transaction_id) \
                        group by t1.bar")
                rs = con.execute(query, drinker=drinker)
                return [dict(row) for row in rs]

def get_largest_spenders(bar):
        with engine.connect() as con:
                query = sql.text(
                        "")
                rs = con.execute(query, bar=bar)
                return [dict(row) for row in rs]

def get_when_is_beer_consumed_most(beer):
    with engine.connect() as con:
        query = sql.text(
            "Select hour(str_to_date(b1.time, '%l:%i $p')) as hour, count(p1.item)\
            from bills b1, printed_on p1\
            where p1.item = :beer and p1.bill = b1.transaction_id\
            group by hour(str_to_date(b1.time, '%l:%i $p'))")
        rs = con.execute(query, beer=beer)
        return [dict(row) for row in rs]
#Query for above
#select hour(str_to_date(b1.time, '%l:%i %p')) as hour, count(p1.item)
#from bills b1, printed_on p1
#where p1.item = 'Busch' and p1.bill = b1.transaction_id
#group by hour(str_to_date(b1.time, '%l:%i %p'))


def where_beer_is_sold_most(beer):
    with engine.connect() as con:
        query = sql.text(
            "select * from \
            (select distinct t1.bar, count(p1.item) as count_of_beers \
            from printed_on p1, transacts t1 \
            where p1.item = :beer and p1.bill = t1.bill \
            group by t1.bar) f1\
            order by f1.count_of_beers desc")
        rs = con.execute(query, beer=beer)
        return [dict(row) for row in rs]
#query for above
#select * from
#(select distinct t1.bar, count(p1.item) as count_of_beers
#from printed_on p1, transacts t1
#where p1.item = 'Busch' and p1.bill = t1.bill
#group by t1.bar) f1
#order by f1.count_of_beers desc

def who_drinks_beer_most(beer):
    with engine.connect() as con:
        query = sql.text(
            "select * from \
            (select distinct t1.drinker, count(p1.item) as count_of_beers\
            from printed_on p1, transacts t1\
            where p1.item = :beer and p1.bill = t1.bill \
            group by t1.drinker) f1 \
            order by f1.count_of_beers")
        rs = con.execute(query, beer=beer)
        return [dict(row) for row in rs]
#query for above for error checking
#select hour(str_to_date(b1.time, '%l:%i %p')) as hour, count(p1.item)
#from bills b1, printed_on p1
#where p1.item = 'Busch' and p1.bill = b1.transaction_id
#group by hour(str_to_date(b1.time, '%l:%i %p'))


