import userModel from '../models/userModel.js';

export const registerController = async (req, res) => {
    try {
        const { name, password, email, address,city , country, phone } = req.body;

        // Validation
        if (!name || !email || !password || !city || !address || !phone || !country) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            });
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already exists"
            });
        }

        // Create the new user
        const newUser = await userModel.create({name, password, email, address,city , country, phone });

        res.status(201).send({
            success: true,
            message: "Registration successful, please login",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error
        });
    }
};
