const { registrationService } = require("../services")

const createregistration = async (req, res) => {
    try {
        const reqBody = req.body;

        // const registrationExists = await registrationService.getregistrationByEmail(reqBody.email);
        // if (registrationExists) {
        //     throw new Error("registration already created by this email!");
        // }

        const registration = await registrationService.createregistration(reqBody);
        if (!registration) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "registration create successfully!",
            data: { registration },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/** Get registration list */
const getregistrationList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await registrationService.getregistrationList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get registration list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//   delete registration
const deleteregistration = async (req, res) => {
    try {
        const registrationId = req.params.registrationId;
        const registrationExists = await registrationService.deleteregistration(registrationId);
        if (!registrationExists) {
            throw new Error("registration not found!");
        }

        await registrationService.deleteregistration(registrationId);

        res.status(200).json({
            success: true,
            message: "registration delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//  update registration
const updateDetails = async (req, res) => {
    try {
        const registrationId = req.params.registrationId;
        const registrationExists = await registrationService.getregistrationById(registrationId);
        if (!registrationExists) {
            throw new Error("registration not found!");
        }

        await registrationService.updateDetails(registrationId, req.body);

        res
            .status(200)
            .json({ success: true, message: "registration details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    createregistration,
    getregistrationList,
    deleteregistration,
    updateDetails
};