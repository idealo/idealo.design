import {app} from "./server";

const PORT = process.env.HTTP_PORT || 8080
app.listen(PORT, '0.0.0.0', () => {
    console.log(` -> 0.0.0.0:${PORT}`)
})