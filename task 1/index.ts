// TASK 1

// May you improve this piece of code?

let hasSmallPizza;

const pizzas = [
  {
    id: '1',
    name: 'Greek Pizza',
    size: 'sm'
  },
  {
    id: '2',
    name: 'Neapolitan Pizza',
    size: 'xl'
  },
  {
    id: '3',
    name: 'Greek Pizza',
    size: 'md'
  }
]

for (let i=0; i < pizzas.length; i++) {
  hasSmallPizza = pizzas[i].size === 'sm'
  if (hasSmallPizza) {
    break
  }
}

console.log('Has small pizza: ', hasSmallPizza);
