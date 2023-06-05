import Colection from "../firebase/db/Colection";


export default class Services {
    _colection = new Colection()

    async set(service) {
        console.log(service)
        return this._colection.set(
            `service`, service, service.name
        )
    }

    async delete(service) {
        return this._colection.delete(
            `service/${service.name}`,
            
        )
    }

    async search() {
        const path = `service`
        return await this._colection.search(path)
    }

}