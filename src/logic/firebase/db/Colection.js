import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection,
    getDocs, 
    orderBy,
    deleteDoc, 
    where, 
    query} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { app } from '../config/app'

export default class Colection{
    async set(path, entity, id){
        const db = getFirestore(app)
        const idEnd = id ?? entity.id ?? uuidv4()
        const docRef = doc(db, path, idEnd)
        await setDoc(docRef, entity)

        return{
            ...entity, id: entity.id ?? idEnd
        }
    }


    async delete(path, id){
        if (!id) return false

        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const docItem = await getDoc(docRef)

        if(!docItem.exists()) return false
        
        await deleteDoc(docRef)
        return true
    }

    async search(path, order, direction){
        const db = getFirestore(app)
        const collectionRef = collection(db, path)
        const filter = []
        const newOrder = order ? [orderBy(order, direction)] : []
        const consult = query(collectionRef)
        const result = await getDocs(consult)
        return result.docs.map(this._convertData) ?? []
    }
    async getById(path, id){
        if (!id) return null
        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const result = await getDoc(docRef)
        return this._convertData(result)
    }

    async searchWithFilters(path, filters, order, direction){
            const db = getFirestore(app)
            const colectionRef = collection(db, path)
    
            const filtersWhere = filters?.map(f => where(f.atribute, f.op, f.value)) ?? []
            const newOrder = order ? [orderBy(order, direction)] : []
    
            const consult = query(colectionRef, ...filtersWhere, ...newOrder)
            const result = await getDocs(consult)
            return result.docs.map(this._convertData) ?? []
    }

    _convertData(snapshot){
        if(!snapshot.exists()) return null

        const entity = { ...snapshot.data(), id: snapshot.id }
        if (!entity) return entity
        return Object.keys(entity).reduce((obj, atributo) => {
            const value = entity[atributo]
            return { ...obj, [atributo]: value.toDate?.() ?? value }
        }, {})
    }
}