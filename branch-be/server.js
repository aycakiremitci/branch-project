const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");

const app = express();

dotenv.config();

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()

require("./routes/routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
