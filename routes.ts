import express from  "express"

import v1 from './src/contex/v1'

const routes = express.Router()
routes.use('/v1', v1)

export default routes