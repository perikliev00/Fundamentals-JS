function fruit(fruit,weight,price) {
    let pricePerGram=price/1000;
    let officialPrice=pricePerGram*weight;
    console.log(`I need $${officialPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)