class Item {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
    // Calculate the value-to-weight ratio
    this.ratio = value / weight;
  }
}

function fractionalKnapsack(capacity, items) {
    // Sort items by their value-to-weight ratio in descending order
//    console.log(items);
  items.sort((a, b) => b.ratio - a.ratio);
  //   console.log(items);
  let totalValue = 0;
  let remainingCapacity = capacity;
  const itemsTaken = [];

    for (const item of items) {
	console.log(item);
    // If the whole item fits, take it
    if (item.weight <= remainingCapacity) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
      itemsTaken.push({ item: item, quantity: 1 });
    } else {
      // If only a fraction fits, take that fraction
      const fraction = remainingCapacity / item.weight;
      totalValue += item.value * fraction;
      remainingCapacity = 0; // Knapsack is full
      itemsTaken.push({ item: item, quantity: fraction });
      break; // Stop once the knapsack is full
    }
  }

  return { totalValue, itemsTaken };
}

// Example usage in Node.js
const items = [
  new Item(10, 60),
  new Item(20, 100),
  new Item(30, 120),
];
const capacity = 50;

const result = fractionalKnapsack(capacity, items);
console.log(`Maximum value achievable: ${result.totalValue.toFixed(2)}`);
console.log('Items taken:', result.itemsTaken);
