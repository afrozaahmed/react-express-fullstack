import {defaultState} from  './defaultState'
import {connectDB} from './connect-db'

async function initializeDB(){
    let db = await connectDB();
    for(let connectionName in defaultState){
        let collection = db.collection(connectionName)
        await collection.insertMany(defaultState[connectionName]);
    }
}

initializeDB();