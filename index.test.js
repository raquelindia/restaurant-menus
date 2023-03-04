const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testRestaurant = await Restaurant.create({ name: "Katz", location: "New York", cuisine: "Deli"})
        expect(testRestaurant.name).toBe("Katz")
        expect(testRestaurant.location).toBe("New York")
        expect(testRestaurant.cuisine).toBe("Deli")
    });

    test('can create a Menu', async () => {
        // TODO - write test
       const testMenu = await Menu.create({ title: "Menu"})
       expect(testMenu.title).toBe("Menu")
   });

    test('can find Restaurants', async () => {
        // TODO - write test
        const findRestaurant = await Restaurant.findAll();
        expect(Restaurant).toBeDefined;
        
      
    });

    test('can find Menus', async () => {
        // TODO - write test
        const findMenus = await Menu.findAll();
       expect(Menu).toBeDefined();
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const newRestaurant = await Restaurant.create({ name: "Two Bros Pizza", location: "New York", cuisine: "Pizza"});
        const deleteRestaurant = await Restaurant.destroy({ where: { id: newRestaurant.id}});
        const deletedRestaurant = await Restaurant.findByPk(newRestaurant.id);
        expect(deletedRestaurant).toBeNull(); 

    });
    
})