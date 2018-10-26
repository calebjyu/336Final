import numpy as np
import pandas as pd
from random import randint

#input csv files
drinkers = pd.read_csv("drinkers.csv")
bars = pd.read_csv("bars.csv")
beer = pd.read_csv("beers.csv")
softDrinks = pd.read_csv("soft_drinks.csv")
food = pd.read_csv("food.csv")
dates = pd.read_csv("dates2.csv")
bartenders = pd.read_csv("bartenders.csv")
days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

barNames = bars['name']
drinkerNames = drinkers['name']
beerNames = beer['name']
softDrinkNames = softDrinks['name']
foodNames = food['name']
bartenderNames = bartenders['name']

frequentsRelation = []
for drinker in drinkerNames:
	r = randint(0, 5)
	for i in range(r):
		bar = barNames[randint(0,74)]
		if (drinker,bar) not in frequentsRelation:
			frequentsRelation.append((drinker,bar))

likesRelation = []
for drinker in drinkerNames:
	br = randint(0, 5)
	sdr = randint(0, 3)
	fr = randint(0, 4)
	for i in range(br):
		item = beerNames[randint(0,25)]
		if (drinker,item) not in likesRelation:
			likesRelation.append((drinker,item))
	for i in range(sdr):
		item = softDrinkNames[randint(0,9)]
		if (drinker,item) not in likesRelation:
			likesRelation.append((drinker,item))
	for i in range(fr):
		item = foodNames[randint(0,19)]
		if (drinker,item) not in likesRelation:
			likesRelation.append((drinker,item))

sellsRelation = []
beerPrices = [None]*len(beerNames)
for bar in barNames:
	br = randint(0, 15)
	sdr = randint(0, 9)
	fr = randint(0, 15)
	usedItems = []
	for i in range(br):
		index = randint(0,24)
		item = beerNames[index]
		if beerPrices[index] is None:
			price = randint(4,11)+0.99
			beerPrices[index] = price
		else:
			price = beerPrices[index]
		if (bar,item) not in usedItems:
			usedItems.append((bar,item))
			sellsRelation.append((bar,item,price))
	for i in range(sdr):
		item = softDrinkNames[randint(0,9)]
		price = randint(1,3)+0.99
		if (bar,item) not in usedItems:
			usedItems.append((bar,item))
			sellsRelation.append((bar,item,price))
	for i in range(fr):
		item = foodNames[randint(0,19)]
		price = randint(4,11)+0.99
		if (bar,item) not in usedItems:
			usedItems.append((bar,item))
			sellsRelation.append((bar,item,price))


inventoryRelation = []
for bar in barNames:
	for beer in beerNames:
		for sell in sellsRelation:
			if sell[0] is bar and sell[1] is beer:
				amount = randint(0,50)
				i = randint(0,99)
				inventoryRelation.append(
					(bar,beer,amount,dates['date'][i]))
		
worksRelation = []
for bartender in bartenderNames:
	randbar = randint(0,len(barNames))
	randday = randint(0,6)
	bar = barNames[randbar]




#output: dataframe
#print(pd.DataFrame(frequentsRelation))
#print(pd.DataFrame(likesRelation))
#print(pd.DataFrame(sellsRelation))
#print(pd.DataFrame(inventoryRelation))