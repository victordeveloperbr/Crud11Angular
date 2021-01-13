// employees.js
var faker = require('faker')
function generateTutorial () {
  var tutorial = []
  for (var id = 0; id < 50; id++) {
    tutorial.push({
        id: id,
        title: faker.commerce.productMaterial(),
        description: faker.commerce.productDescription(),
        published: faker.random.boolean()      
    })
  }
  return { "tutorial": tutorial }
}
module.exports = generateTutorial
