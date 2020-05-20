const {userService} = require('../../service');
const {passwordHashed} = require('../../helpers');
const {USER_STATUS} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const creatingData = req.body;
        const appRoot = global.appRoot;

        creatingData.password = await passwordHashed(creatingData.password);

        const userToCreate = req.body;
        const {user_id} = req.body;
        userToCreate.statusId = USER_STATUS.NOTFRIEND;

        await userService.createUser(userToCreate, user_id);

        res.json('created');

    } catch (e) {
        res.status(400).json(e.message);
    }
};


