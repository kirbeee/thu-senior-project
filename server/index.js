const express = require("express")
const cookieSession = require("cookie-session")
const passport = require("passport")
require("./models/User");
require("./services/passport");
const keys = require("./config/keys")
const userModel = require('./models/User'); // 根據實際目錄結構調整路徑


const app = express();

// ??
// app.use(express.json());


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/userRoutes"));

const PORT = process.env.PORT ||5000
app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});