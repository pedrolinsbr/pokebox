const fs = require('fs')
const {join} = require('path')

const filePath = join(__dirname, 'db.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath) //Caso exista dados retorna
        :[] // caso nao exista retorna vazio
    
    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (db_pokemon) => fs.writeFileSync(filePath, JSON.stringify(db_pokemon, null, '\t'))

const userRoute = (app) => {
    app.route('/api/pokemons/:id?')
        .get((req, res) => {
            const list_pokemon = getUsers()
            res.send({list_pokemon})
        })
        .post((req, res) => {
            const list_pokemon = getUsers()
            list_pokemon.push(req.body)

            saveUser(list_pokemon)
            res.status(201).send('Pokemon criado')
        })
        .put((req, res) => {
            const users = getUsers()         
            saveUser(users.map(user =>{
                if(user.id === req.params.id){
                    return{
                        ...user,
                        ...req.body
                    }
                }
                return user
            }))
            res.status(200).send('User alterado')
        })
        .delete((req, res) => {
            const users = getUsers()         
            saveUser(users.filter(user => user.id !== req.params.id))
            res.status(200).send('User alterado')
        })
}

module.exports = userRoute