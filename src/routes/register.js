import express from "express";
const router = express.Router();
const views = { root: "src/views" };
import { addUser } from "../controllers/addUser.js";


// Base on '/register'

router.get("/", (req, res) => {
	res.sendFile("register.html", views);
});

router.post("/process-registration", async (req, res) => {
	const { name, email, password } = req.body;

	console.log(req.body);
	console.log(name);

	try {
		const result = await addUser(name, email, password);
		res.send(JSON.stringify({ data: result }));
	} catch (err) {
		console.log(err);
		res.status(500).send("Internal Server Error");
	}
});

export default router;