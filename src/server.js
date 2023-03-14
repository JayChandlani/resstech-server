import app from './index.js'
import connect from "./configs/db.js"
const port = process.env.PORT || 3001;

app.listen(port, async () => {
    await connect();
    console.log(`Listening to port ${port}`);
});