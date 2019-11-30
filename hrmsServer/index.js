const express = require('express')
require('./src/config/db/mongoose')
const departmentSeed=require('./src/config/seed/departmentseeder')
const userRouters = require('./src/api/users/user.routers')
const departmentRouter= require('./src/api/department/department.router')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(departmentSeed)
app.use(userRouters)
app.use(departmentRouter)
app.listen(port, () => {
    console.log('Server is running at port ' + port)
})

