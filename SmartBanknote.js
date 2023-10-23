class Banknote
{
    constructor(arg)
    {
        this.nominal = arg;
    }

    processAmount(amount)
    {
        let result = {};
        result.count = Math.floor(amount / this.nominal);
        result.amount = this.nominal * result.count;
        return result;
    }
 }


 let nominals = 
 	[
 		new Banknote(50),
 		new Banknote(20),
 		new Banknote(10),
 		new Banknote(5),
 		new Banknote(2),
 		new Banknote(1),
 	];

let amount = 25; // some random amount

for (let index = 0; index < nominals.length; index++)
{
    let b = nominals[index];
 	let r = b.processAmount(amount);
    if (r.count > 0)
    {
        console.log(`nominal: ${b.nominal} count: ${r.count}`);
        amount = amount - r.amount;
    }
 	if (amount <= 0)
 	{
 		break;
 	}
 }

console.log("Hello");
