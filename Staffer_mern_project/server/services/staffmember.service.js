const { StaffMember } = require("../models/staffmember.model");

const createStaffMember = async (data) => {
    console.log('services: createStaffMember');
    const destination = await StaffMember.create(data);
    return destination;
}

const getAllStaffMembers = async () => {
    console.log('services: getAllStaffMembers');
    const destinations = await StaffMember.find();
    return destinations;
}

const getStaffMemberById = async (id) => {
    console.log('services: getStaffMemberById');
    const destination = await StaffMember.findById(id);
    return destination;
}

const deleteStaffMemberById = async (id) => {
    console.log('services: deleteStaffMemberById');
    const destination = await StaffMember.findByIdAndDelete(id);
    return destination;
}

const getStaffMemberByIdAndUpdate = async (id, data) => {
    console.log('services: getStaffMemberByIdAndUpdate');
    const destination = await StaffMember.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated destination.
        new: true
    });
    return destination;
}

const createManyStaffMembers = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        createStaffMember(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};

module.exports = {
    createStaffMember: createStaffMember,
    getAllStaffMembers,
    getStaffMemberById,
    deleteStaffMemberById,
    getStaffMemberByIdAndUpdate,
    createManyStaffMembers
};