import { FAKEdb } from "../db/FAKEdb";

let id = 2
class BurgersService {
    getAll() {
        return FAKEdb.burgers
    }

    create(newBurger) {
        newBurger.id = id++
        FAKEdb.burgers.push(newBurger)
        return newBurger
    }
    delete(id) {
        let foundBurger = findBurger(id)
        FAKEdb.burgers = FAKEdb.burgers.filter(b => b.id != id)
        return foundBurger
    }

    edit(editedBurger, id) {
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(b => {
            foundBurger[b] = editedBurger[b]
        })
        return foundBurger
    }
}

function findBurger(id) {
    let foundBurger = FAKEdb.burgers.find(b => b.id == id)
    if (!foundBurger) { throw new Error('invalid ID') }
    return foundBurger
}

export const burgersService = new BurgersService();