const { loginService } = require("../services")

const ogin = async (req, res) => {
    try {
        const reqBody = req.body;

        const loginExists = await loginService.getloginByEmail(reqBody.email);
        if (!loginExists) {
            throw new Error("your email is not valid");
        }

        const login = await loginService.ogin(reqBody);
        if (!login) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "login  successfully!",
            data: { login },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/** Get login list */
const getuser = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { email: { $regex: search, $options: "i" } },
                { password: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await loginService.getuser(filter, options);

        res.status(200).json({
            success: true,
            message: "Get login list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//   delete login
const deleteuser = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const loginExists = await loginService.deleteuser(loginId);
        if (!loginExists) {
            throw new Error("user not found!");
        }

        await loginService.deleteuser(loginId);

        res.status(200).json({
            success: true,
            message: "user delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//  update login
const updateDetails = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const loginExists = await loginService.getloginById(loginId);
        if (!loginExists) {
            throw new Error("user not found!");
        }

        await loginService.updateDetails(loginId, req.body);

        res
            .status(200)
            .json({ success: true, message: "login details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    login,
    getuser,
    deleteuser,
    updateDetails
};