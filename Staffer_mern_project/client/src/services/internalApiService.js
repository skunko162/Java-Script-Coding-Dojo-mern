import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const getAllStaffMembers = async () => {
    const res = await http.get('/staffmembers');
    return res.data;
}

export const getStaffMemberById = async (id) => {
    const res = await http.get(`/staffmembers/${id}`);
    return res.data;
}

export const createStaffMember = async (data) => {
    const res = await http.post('/staffmembers', data);
    return res.data;
}

export const updateStaffMember = async (id, data) => {
    const res = await http.put(`/staffmembers/${id}`, data);
    return res.data;
}

export const deleteStaffMember = async (id) => {
    const res = await http.delete(`/staffmembers/${id}`);
    return res.data;
}
