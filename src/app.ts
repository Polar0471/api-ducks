import express from "express"
import { getDucks } from "./controllers/ducks-controllers"

function createApp() {

    const app = express()
    
    app.use(express.json())

    app.get("/", getDucks)

    return app

}

export default createApp