const express = require('express');

const {
    handleCreateStaffMember,
    handleGetAllStaffMembers,
    handleGetStaffMemberById,
    handleDeleteStaffMemberById,
    handleUpdateStaffMemberById,
    handleCreateManyStaffMembers
} = require('../controllers/staffmember.controller')


const router = express.Router();


router.get('/', handleGetAllStaffMembers)
router.post('/', handleCreateStaffMember)
router.get('/:id', handleGetStaffMemberById)
router.delete('/:id', handleDeleteStaffMemberById)
router.put('/:id', handleUpdateStaffMemberById)
router.post('/many', handleCreateManyStaffMembers)


module.exports = { staffmemberRouter: router }