import { increment } from "firebase/firestore";
import Colection from "../firebase/db/Colection";
import { convertToJsDate } from "../utils/dateTimeConverter";

export default class Schedulings {
    _colection = new Colection()

    async set(scheduling) {
        console.log(scheduling)
        const setScheduling = {
            path: `scheduling`, 
            entity: scheduling, 
            id: scheduling.id
        }
        const setSchedulingCount = { 
            path: `professional/${scheduling.professional?.id}/schedulingCount`, 
            entity:{schedulingCount: increment(1) },
            id: convertToJsDate(scheduling.date)
        }
        return this._colection.setBatch([
            setScheduling,
            setSchedulingCount
        ])
    }
    async decrementScheduling(date) {
        return this._colection.set(
            `professional/schedulingCount`, {schedulingCount: increment(-1)}, convertToJsDate(date)
        )
    }

    async delete(scheduling) {

        this.decrementScheduling(scheduling.date)
        return this._colection.delete(
            `scheduling`, scheduling.id
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