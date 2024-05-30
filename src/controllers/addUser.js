import Users from "../models/User.js";

export const addUser = async (name, email, password) => {
	if (name !== "" && email !== "" && password !== "") {
		try {
			await Users.sync();
			await Users.create({
				name: name,
				email: email,
				password: password,
			});
			return "Registrasi Berhasil";
		} catch (err) {
			console.error("Error adding user:", err);
			return "Email sudah terdaftar";
		}
	}
};