import Colection from "../firebase/db/Colection";


export default class Schedulings {
    _colection = new Colection()

    async set(scheduling) {
        console.log(scheduling)
        return this._colection.set(
            `scheduling`, scheduling
        )
    }

    async delete(schedulingId) {
        return this._colection.delete(
            `scheduling`, schedulingId
        )
    }

    async search() {
        const path = `scheduling`
        return await this._colection.search(path, 'data', 'asc')
    }

    async searchByProfessionalAndDate(professional, date) {
        const path = `scheduling`
        return await this._colection.searchWithFilters(path, [
            { atribute: 'professional.id', op: "==", value: professional },
            { atribute: 'date', op: "==", value: date },
        ])
    }
    async searchByClientId(clientId) {
        const path = `scheduling`
        return await this._colection.searchWithFilters(path, [
            { atribute: 'client.id', op: "==", value: clientId },
        ], 'timeStamp', 'asc')
    }
}