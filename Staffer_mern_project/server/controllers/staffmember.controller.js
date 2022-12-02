const {
    createStaffMember,
    getAllStaffMembers,
    getStaffMemberById,
    deleteStaffMemberById,
    getStaffMemberByIdAndUpdate,
    createManyStaffMembers
} = require('../services/staffmember.service');


const handleCreateStaffMember = async (req, res) => {
    console.log('controller: handleCreateStaffMember req.body:', req.body);
    try {
        const staffmember = await createStaffMember(req.body);
        return res.json(staffmember)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllStaffMembers = async (req, res) => {
    console.log('controller: handleGetAllStaffMembers');
    try {
        const staffmembers = await getAllStaffMembers();
        return res.json(staffmembers)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetStaffMemberById = async (req, res) => {
    console.log('controller: handleGetStaffMemberById req.params: ', req.params.id);
    try {
        const staffmember = await getStaffMemberById(req.params.id);
        return res.json(staffmember)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteStaffMemberById = async (req, res) => {
    console.log('controller: handleDeleteStaffMemberById req.params: ', req.params.id);
    try {
        const staffmember = await deleteStaffMemberById(req.params.id);
        return res.json(staffmember)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateStaffMemberById = async (req, res) => {
    console.log('controller: handleUpdateStaffMemberById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const staffmember = await getStaffMemberByIdAndUpdate(req.params.id, req.body);
        return res.json(staffmember)
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManyStaffMembers = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new Error('The request body must be an array.');
        }

        const settledOutcomes = await createManyStaffMembers(req.body);
        return res.json(settledOutcomes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

    module.exports = {
        handleCreateStaffMember: handleCreateStaffMember,
        handleGetAllStaffMembers,
        handleGetStaffMemberById,
        handleDeleteStaffMemberById,
        handleUpdateStaffMemberById,
        handleCreateManyStaffMembers
    }