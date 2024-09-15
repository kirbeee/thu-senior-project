import express from "express";
import "./models/User.js";
import "./services/passport.js";
import keys from "./config/dev.js";
import cookieSession from "cookie-session";

const app = express();

app.use(express.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// app.use(passport.initialize());
// app.use(passport.session());

// TODO: We need to change setting from mongoDB to PostgreSQL
// app.use("/", require("./routes/authRoutes"));
// app.use("/", require("./routes/userRoutes"));

const PORT = process.env.PORT ||5000
app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});