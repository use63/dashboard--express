import Users from "../models/User.js";

const authLogin = async (email, password) => {
	try {
        let result;
		const user = await Users.findOne({
			where: {
				email: email,
			},
        });

		if (user && user.get().password === password) {
			result = "berhasil login";
		} else {
			result = "Unauthorized Access";
		}

		return result;
	} catch (err) {
		console.error("Error: ", err);
		return "error 24f"; // Or handle the error differently
	}
};

export default authLogin;
