import Colection from "../firebase/db/Colection";


export default class Professionals {
    _colection = new Colection()

    async set(professional) {
        console.log(professional)
        return this._colection.set(
            `professional`, professional
        )
    }

    async delete(professional) {
        return this._colection.delete(
            `professional/${professional.id}`,
            
        )
    }

    async search() {
        const path = `professional`
        return await this._colection.search(path)
    }
    async searchSchedulingCount(id) {
        const path = `professional/${id}/schedulingCount`
        return await this._colection.searchWithFilters(path, [{atribute: 'schedulingCount', op: '>', value: 0}])
    }
    async searchByService(service) {
        const path = `professional`
        return await this._colection.searchWithFilters(path, [
            { atribute: 'services', op: "array-contains", value: service },
        ])
    }

}