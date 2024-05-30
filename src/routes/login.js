import express from "express";
const router = express.Router();
const views = { root: "src/views" };
import authLogin from "../controllers/authLogin.js";

// Base on '/login'

router.get("/", (req, res) => {
	res.sendFile("login.html", views);
});

router.post("/auth", async (req, res) => {
	const { email, password } = req.body;
	
	try {
		const result = await authLogin(email, password)
		console.log(result)
		res.send(JSON.stringify({ data: result }));
	} catch (err) {
		console.log(err)
	}
})

export default router;