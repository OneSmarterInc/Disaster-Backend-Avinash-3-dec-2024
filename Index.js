const express = require("express");
const cors = require("cors");
const main = require("./Config/db");
const UserRouter = require("./Routes/user.route");
const AllSimsRouter = require("./Routes/allsims.route");
const StartSimRouter = require("./Routes/startsim.route");
const JoinGroupRouter = require("./Routes/joingroup.route");
const JoinLobbyRouter = require("./Routes/joinlobby.route");
const EntryRouter = require("./Routes/entry.route");
const AccessRouter = require("./Routes/access.route");
require("dotenv").config();

const PORT = 8010;


const app = express();
app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/disaster/user",UserRouter);
app.use("/disaster/allsim", AllSimsRouter);
app.use("/disaster/startsim",StartSimRouter);
app.use("/disaster/joingroup",JoinGroupRouter);
app.use("/disaster/joinlobby",JoinLobbyRouter);
app.use("/disaster/entry",EntryRouter);
app.use("/disaster/access",AccessRouter);


app.listen(PORT, ()=>{
    main();
    console.log(`Connected to server at port ${PORT}`);
})