const MenuController = require('./controllers/MenuController')
<<<<<<< HEAD
const isAuthenController = require('./controllers/isAuthenController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    // ===== Auth =====
    app.post('/login', UserAuthenController.login)
    // optional: สร้าง admin (ถ้าอยากใช้)
    app.post('/register', UserAuthenController.register)

    // ===== Public (ดูเมนูได้สาธารณะ) =====
    app.get('/menus', MenuController.index)
    app.get('/menu/:id', MenuController.show)

    // ===== Protected (ต้องมี Token) =====
    app.post('/menu', isAuthenController, MenuController.create)
    app.put('/menu/:id', isAuthenController, MenuController.update)
    app.delete('/menu/:id', isAuthenController, MenuController.delete)

    // Alias ตามโจทย์ (coffee)
    app.get('/coffees', MenuController.index)
    app.get('/coffee/:id', MenuController.show)
    app.post('/coffee', isAuthenController, MenuController.create)
    app.put('/coffee/:id', isAuthenController, MenuController.update)
    app.delete('/coffee/:id', isAuthenController, MenuController.delete)
=======

module.exports = (app) => {
    app.get('/menus', MenuController.index)
    app.get('/menu/:id', MenuController.show)
    app.post('/menu', MenuController.create)
    app.put('/menu/:id', MenuController.update)
    app.delete('/menu/:id', MenuController.delete)
>>>>>>> e781e81b4e96e404962983f97dc2a8a5e084729f
}
