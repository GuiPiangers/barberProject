import Colection from "../firebase/db/Colection";


export default class ServicosTransacao {
    _colection = new Colection()

    async save(scheduling) {
        console.log(scheduling)
        return this._colection.save(
            `scheduling`, scheduling
        )
    }

    async delete(scheduling) {
        return this._colection.delete(
            `scheduling/${scheduling.id}`,
            
        )
    }

    async search() {
        const path = `scheduling`
        return await this._colection.search(path, 'data', 'asc')
    }

}