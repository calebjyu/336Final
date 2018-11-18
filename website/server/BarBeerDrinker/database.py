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

def get_manfs():
    with engine.connect() as con:
        query = con.execute("SELECT DISTINCT attr FROM items where type = 'beer';")
        return [dict(row) for row in query]
def get_manf(manf):
    with engine.connect() as con:
        query = sql.text("SELECT DISTINCT attr FROM items where type = 'beer' and attr=:manf;")
        rs = con.execute(query, manf=manf)
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

def insert_into_drinkers(name,state,city,phone,address):
        with engine.connect() as con:
                query = sql.text(
                        'INSERT INTO drinkers (name,state,city,phone,address) \
                        VALUES (:name,:state,:city,:phone,:address)'
                )
                rs = con.execute(query, name=name,state=state,city=city,phone=phone,address=address)
                return 
def delete_drinker(drinker):
        with engine.connect() as con:
                query = sql.text(
                        "DELETE FROM drinkers WHERE name=:drinker;"
                )
                rs = con.execute(query, drinker=drinker)
                return
def insert_into_bars(name,licens,state,city,phone,address):
        with engine.connect() as con:
                query = sql.text(
                        'INSERT INTO bars (name,license,state,city,phone,address) \
                        VALUES (:name,:licens,:state,:city,:phone,:address)'
                )
                rs = con.execute(query, name=name,licens=licens,state=state,city=city,phone=phone,address=address)
                return 
def delete_bar(bar):
        with engine.connect() as con:
                query = sql.text(
                        "DELETE FROM bars WHERE name=:bar;"
                )
                rs = con.execute(query, bar=bar)
                return
def insert_into_items(name,type,attr):
        with engine.connect() as con:
                query = sql.text(
                        'INSERT INTO items (name,type,attr) \
                        VALUES (:name,:type,:attr)'
                )
                rs = con.execute(query, name=name,type=type,attr=attr)
                return 
def delete_item(item):
        with engine.connect() as con:
                query = sql.text(
                        "DELETE FROM items WHERE name=:item;"
                )
                rs = con.execute(query, item=item)
                return
def insert_into_bartenders(name,licens):
        with engine.connect() as con:
                query = sql.text(
                        'INSERT INTO bartenders (name,bartender_license) \
                        VALUES (:name,:licens)'
                )
                rs = con.execute(query, name=name,licens=licens)
                return 
def delete_bartender(name):
        with engine.connect() as con:
                query = sql.text(
                        "DELETE FROM bartenders WHERE name=:name;"
                )
                rs = con.execute(query, name=name)
                return
def insert_into_bills(name,time,subtotal,tip,total,date):
        with engine.connect() as con:
                query = sql.text(
                        'INSERT INTO bills (transaction_id,time,subtotal,tip,total,date) \
                        VALUES (:name,:time,:subtotal,:tip,:total,:date)'
                )
                rs = con.execute(query, name=name,time=time,subtotal=subtotal,tip=tip,total=total,date=date)
                return 
def delete_bill(bill):
        with engine.connect() as con:
                query = sql.text(
                        "DELETE FROM bills WHERE transaction_id=:bill;"
                )
                rs = con.execute(query, bill=bill)
                return

def get_bills():
        with engine.connect() as con:
                query = con.execute("SELECT * FROM bills LIMIT 1000;")
                return [dict(row) for row in query]


def get_items():
        with engine.connect() as con:
                query = con.execute("SELECT * FROM items;")
                return [dict(row) for row in query]
                
def get_when_is_beer_consumed_most(beer):
    with engine.connect() as con:
        query = sql.text(
            "Select hour(str_to_date(b1.time, '%l:%i %p')) as hour, count(p1.item) as amount\
            from bills b1, printed_on p1\
            where p1.item = :beer and p1.bill = b1.transaction_id\
            group by hour(str_to_date(b1.time, '%l:%i %p'))\
            order by hour")
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
            order by f1.count_of_beers desc limit 10")
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
            order by f1.count_of_beers desc limit 10")
        rs = con.execute(query, beer=beer)
        return [dict(row) for row in rs]
#query for above for error checking
#select hour(str_to_date(b1.time, '%l:%i %p')) as hour, count(p1.item)
#from bills b1, printed_on p1
#where p1.item = 'Busch' and p1.bill = b1.transaction_id
#group by hour(str_to_date(b1.time, '%l:%i %p'))


def city_where_sales_best(manf):
    with engine.connect() as con:
        query = sql.text(
            "select * from\
            (select b2.city, count(p1.item) as count_of_beers\
            from printed_on p1, transacts t1, bars b2, items i1 where \
            ((i1.attr = :manf and p1.bill = t1.bill) and i1.name = p1.item) and \
            (t1.bar = b2.name) group by b2.city) f1 \
            order by f1.count_of_beers desc")
        rs = con.execute(query, manf=manf)
        return [dict(row) for row in rs]
#Working query for above in case there's a formatting issue
#select * from
#(select b2.city, count(p1.item) as count_of_beers
#from printed_on p1, transacts t1, bars b2, items i1
#where
#((i1.attr = 'Anheuser-Busch' and p1.bill = t1.bill)
# and i1.name = p1.item)
#and
#(t1.bar = b2.name)
#group by b2.city) f1
#order by f1.count_of_beers desc


def where_top_drinkers_of_manf_live(manf):
    with engine.connect() as con:
        query = sql.text(
            "select distinct d1.name, d1.address, d1.city, d1.state\
            from likes l1, drinkers d1, items i1 \
            where (l1.drinker = d1.name and l1.item = i1.name)\
            and i1.attr = :manf")
        rs = con.execute(query, manf=manf)
        return [dict(row) for row in rs]
#Query for the above function in case there's a formatting error
#select distinct d1.name, d1.address, d1.city, d1.state
#from likes l1, drinkers d1, items i1
#where (l1.drinker = d1.name and l1.item = i1.name)
#and i1.attr = 'Anheuser-Busch'


def top_10_spenders_in_bars(bar):
    with engine.connect() as con:
        query = sql.text(
                "select * from\
                (select t1.drinker, sum(b1.total) as total_spent\
                from bills b1, transacts t1\
                where t1.bill = b1.transaction_id and t1.bar = 'Batz Group'\
                group by t1.drinker) f1\
                order by f1.total_spent desc limit 10")
        rs = con.execute(query, bar=bar)
        return [dict(row) for row in rs]
#query for above in case of formatting issues

#select * from
#(select t1.drinker, sum(b1.total) as total_spent
#from bills b1, transacts t1
#where (t1.bill = b1.transaction_id and t1.bar = 'Batz Group')
#group by t1.drinker) f1
#order by f1.total_spent desc limit 10


def top_10_beers_of_bar_on_dow(bar, day):
    with engine.connect() as con:
        query = sql.text(
            "select * from \
            (select i1.attr, count(p1.item) as tot_beers \
            from printed_on p1, bills b1, transacts t1, items i1 \
            where ((b1.transaction_id = p1.bill and t1.bill = p1.bill)\
             and t1.bar = :bar) and ((p1.item = i1.name and i1.type = 'beer')\
             and dayname(STR_TO_DATE(b1.date,'%d/%m/%Y')) = :day) \
             group by dayname(STR_TO_DATE(b1.date, '%d/%m/%Y')), i1.attr) f1 \
             order by f1.tot_beers desc limit 10")
        rs = con.execute(query, bar=bar, day = day)
        return [dict(row) for row in rs]
#query for above in case of potential formatting issue

#select * from
#(select i1.attr, count(p1.item) as tot_beers
from printed_on p1, bills b1, transacts t1, items i1
#where ((b1.transaction_id = p1.bill and t1.bill = p1.bill) and
 #      t1.bar = 'Dicki-Kuphal') and ((p1.item = i1.name and i1.type = 'beer')
#                                     and dayname(STR_TO_DATE(b1.date, '%d/%m/%Y')) = 'Monday')
#group by dayname(STR_TO_DATE(b1.date, '%d/%m/%Y')), i1.attr) f1
#order by f1.tot_beers desc limit 10

def busiest_time_of_day(bar):
    with engine.connect() as con:
        query = sql.text(
            "select * from \
            (select hour(str_to_date(b1.time), '%l:%i %p')) as hour, count(b1.transaction_id) as total_orders\
            from bills b1, transacts t1\
            where t1.bill = b1.transaction_id\
            and t1.bar = :bar  \
            group by hour(str_to_date(b1.time), '%l:%i %p'))) f1 \
            order by total_orders desc")
        rs = con.execute(query, bar=bar)
        return [dict(row) for row in rs]

#Query for above for potential future formatting errors
#select * from
#(select hour(str_to_date(b1.time, '%l:%i %p')) as hour, count(b1.transaction_id) as total_orders
#from bills b1, transacts t1
#where t1.bill = b1.transaction_id
#                and t1.bar = 'Abshire Group'
#group by hour(str_to_date(b1.time, '%l:%i %p'))) f1
#order by total_orders desc


