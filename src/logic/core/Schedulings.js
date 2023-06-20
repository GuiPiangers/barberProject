import { increment } from "firebase/firestore";
import Colection from "../firebase/db/Colection";
import { convertToJsDate } from "../utils/dateTimeConverter";

export default class Schedulings {
    _colection = new Colection()

    async set(scheduling) {
        const oldData = await this._colection.getById(`scheduling`, scheduling.id)

        let reduceSchedulingCount = {}

        if(oldData){
            reduceSchedulingCount = {
                path: `professional/${oldData.professional?.id}/schedulingCount`, 
                entity:{schedulingCount: increment(-1) },
                id: convertToJsDate(oldData.date)
            }
        }

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
            setSchedulingCount,
            reduceSchedulingCount
        ])
    }
    async decrementScheduling(date, id) {
        return this._colection.set(
            `professional/${id}/schedulingCount`, {schedulingCount: increment(-1)}, convertToJsDate(date)
        )
    }

    async delete(scheduling) {
        const deleteScheduling = {
            path: `scheduling`, 
            id: scheduling.id,
            method: 'delete'
        }

        const setSchedulingCount = { 
            path: `professional/${scheduling.professional}/schedulingCount`, 
            entity:{schedulingCount: increment(-1) },
            id: convertToJsDate(scheduling.date)
        }
        return this._colection.setBatch([
            deleteScheduling,
            setSchedulingCount,
        ])
    }

    async search() {
        const path = `scheduling`
        const schedulings = await this._colection.search(path, 'data', 'asc')
        return schedulings
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
    async snapSearchByClientId(clientId, fn) {
        const path = `scheduling`
        await this._colection.getSnapshot(path, [
            { atribute: 'client.id', op: "==", value: clientId },
        ], 'timeStamp', 'asc', fn)
    }
}