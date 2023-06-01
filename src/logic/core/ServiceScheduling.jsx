import Colection from "../firebase/db/Colection";


export default class ServicosTransacao {
    _colection = new Colection()

    async save(scheduling, user) {
        return this._colection.save(
            `financas/${user.email}/transacoes`,
            scheduling
        )
    }

    async delete(scheduling, user) {
        return this._colection.delete(
            `financas/${user.email}/transacoes`,
            scheduling.id
        )
    }

    async search(user) {
        const path = `financas/${user.email}/transacoes`
        return await this._colection.search(path, 'data', 'asc')
    }

}