import express from 'express'
const router = express.Router()
const views = { root: "src/views" };

// Base on '/'

router.get("/", (req, res) => {
	res.sendFile("home.html", views);
});

export default router;