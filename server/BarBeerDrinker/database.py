from sqlalchemy import create_engine
from sqlalchemy import sql
from BarBeerDrinker.BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    #Connect to DB and retrive a list of all the bars and stuff
    with engine.connect() as con:
        rs = con.connect("SELECT name, license, state, city, phone, addr from bars;")
        return [dict(row) for row in rs]

