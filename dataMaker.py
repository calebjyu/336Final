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
originalBills = pd.read_csv("billsIncomplete.csv")
days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
start=['1','9','5']
end=['9','5','1']
barNames = bars['name']
drinkerNames = drinkers['name']
beerNames = beer['name']
softDrinkNames = softDrinks['name']
foodNames = food['name']
bartenderNames = bartenders['name']

def test():
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
	for bar in barNames:
		for day in days:
			randList=[]
			counter = 0
			while counter < len(start):
				randBT=randint(0,len(bartenderNames)-1)
				bt=bartenderNames[randBT]
				e=end[counter]
				s=start[counter]
				if (bar,bt,day,s,e) not in worksRelation and randBT not in randList:
					worksRelation.append((bar,bt,day,s,e))
					randList.append(randBT)
					counter+=1
				else:
					continue


	bills = []
	transactsRelation = []
	printedOnRelation = []
	count = 0
	for ID in originalBills['trans_id']:
		#choose a bar, choose a drinker, choose how many items and which items, find price
		barNum = randint(0,len(barNames)-1)
		drinkerNum = randint(0,len(drinkerNames)-1)
		itemNum = randint(1,5)
		barSells = []
		subtotal = 0
		for x in sellsRelation:
			if x[0] is barNames[barNum] and (x[1],x[2]) not in barSells:
				barSells.append((x[1],x[2]))
		items = []
		for i in range(itemNum):
			rand = randint(0,len(barSells)-1)
			item = barSells[rand][0]
			items.append(item)
			price = barSells[rand][1]
			subtotal += price
		time = originalBills['time'][count]
		count += 1
		tip = subtotal * 0.15
		tax = subtotal * 0.06
		bills.append((ID,time,subtotal,tip,subtotal+tip+tax))
		for i in items:
			printedOnRelation.append((i,ID))
		transactsRelation.append((drinkerNames[drinkerNum],ID,barNames[barNum]))

	operatesRelation = []
	for bar in barNames:
		num = randint(4,7)
		for i in range(num):
			day = days[i]
			operatesRelation.append((bar,day))

items = []
for i in range(len(beerNames)):
	b = beerNames[i]
	manf = beer['manf'][i]
	items.append((b,'beer',manf))
for i in range(len(softDrinkNames)):
	s = softDrinkNames[i]
	brand = softDrinks['brand'][i]
	items.append((s,'soft_drink',brand))
for i in range(len(foodNames)):
	f = foodNames[i]
	calories = food['calories'][i]
	items.append((f,'food',calories))

hours = []
for bar in barNames:
	for day in days:
		start = "12:01 AM"
		end = "11:59 PM"
		a = (day,bar,start,end)
		if a not in hours:
			hours.append(a)

#output: dataframe
#print(pd.DataFrame(frequentsRelation))
#print(pd.DataFrame(likesRelation))
#print(pd.DataFrame(sellsRelation))
#print(pd.DataFrame(inventoryRelation))
#print(pd.DataFrame(bills))
#print(pd.DataFrame(printedOnRelation))
#print(pd.DataFrame(transactsRelation))
#print(pd.DataFrame(worksRelation))
#print(pd.DataFrame(operatesRelation))
#print(pd.DataFrame(hours))
#print(pd.DataFrame(items))

#pd.DataFrame(frequentsRelation).to_csv("frequents.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(likesRelation).to_csv("likes.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(sellsRelation).to_csv("sells.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(inventoryRelation).to_csv("inventory.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(bills).to_csv("bills.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(printedOnRelation).to_csv("printed_on.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(transactsRelation).to_csv("transacts.csv",sep=',', index = False, encoding='utf-8')
#pd.DataFrame(worksRelation).to_csv("works.csv",sep=',', index = False, encoding='utf-8')
pd.DataFrame(hours).to_csv("hours.csv",sep=',',index=False,encoding='utf-8')
#pd.DataFrame(operatesRelation).to_csv("operates.csv",sep=',',index=False,encoding='utf-8')
pd.DataFrame(items).to_csv("items.csv",sep=',',index=False,encoding='utf-8')