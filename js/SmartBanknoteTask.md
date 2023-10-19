Smart Banknote Task
-------------------

There is a template for this Task

```
class Banknote
{
// constructor that initialize varable nominal with specified argument

// "processAmount" function
// {
// let dictionalry result
// result.change - calculate how many banknotes in this amount with this banknote nominal
// result.amount = this.nominal * result.change;
// return result;
//}
}


let denominals = 
	[
		new Banknote(50),
		new Banknote(20),
		new Banknote(10),
		new Banknote(5),
		new Banknote(2),
		new Banknote(1),
	];

let amount = 25; // some random amount

for (let b: denominals)
{
	let r = b.processAmount(amount);
	console.log(`nominal: ${b.nominal} change: ${r.change}`);
	amount = amount - r.amount;
	if (amount <= 0)
	{
		break;
	}
}

```