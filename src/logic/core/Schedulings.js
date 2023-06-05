import Colection from "../firebase/db/Colection";


export default class Services {
    _colection = new Colection()

    async set(scheduling) {
        console.log(scheduling)
        return this._colection.set(
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

    async searchByProfessionalAndDate(professional, date) {
        const path = `scheduling`
        return await this._colection.searchWithFilters(path, [
            { atribute: 'professional.id', op: "==", value: professional },
            { atribute: 'date', op: "==", value: date },
        ])
    }
}