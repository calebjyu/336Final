#1) Transactions/bills  cannot be issued  at times when the given bar is closed
SELECT transacts.bill
FROM transacts, operates, hours
WHERE transacts.bar = operates.bar AND hours.bar = operates.bar
	AND time(transacts.bill.time) not between time(hours.open) and time(hours.close);
    
#2) Drinkers cannot frequent bars in different state that they live.
select f.drinker, f.bar 
from frequents f, bars b, drinkers d
where f.drinker = d.name and f.bar = b.name and d.state != b.state;

#3)  For every two beers, b1 and b2, different bars may charge differently for b1 and b2 but b1 should either be less expensive than b2 in ALL bars or more expensive than b2 in ALL bars.  Cannot be the case that in one bar Corona is more expensive than Bud and in another Bud is more expensive than Corona.  But Corona may be more expensive than Bud in one bar, and have the same price as Bud in another.

    
#4)  Bar cannot sell more beers of specific brand, than it has in its inventory
SELECT COUNT(transacts), inventory.amount
FROM inventory, transacts, printed_on, sells
WHERE transacts.bar = 

#5)  A bartender cannot work more  than one shift a day.