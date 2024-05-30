// Import Dependensi
import express from "express";

// Import Router
import indexRoutes from './routes/index.js';
import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";

// Import Controller
import connDB from "./controllers/connDB.js";

// constantand variable
const app = express();

// Controllers Function
connDB

// Middleware
app.use(express.json());

// Router
app.use("/", indexRoutes)
app.use("/register", registerRoutes);
app.use("/login", loginRoutes)

// Running Application
app.listen(3000, () => {
	console.log("Server running on port 3000");
});
