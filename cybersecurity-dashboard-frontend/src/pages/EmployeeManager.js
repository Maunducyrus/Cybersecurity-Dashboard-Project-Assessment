import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Grid, 
  Button,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const EmployeeManager = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      initials: 'AJ',
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '(555) 123-4567',
      role: 'IT Security Manager',
      department: 'Information Technology',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      initials: 'SW',
      name: 'Sam Williams',
      email: 'sam.williams@example.com',
      phone: '(555) 234-5678',
      role: 'Network Administrator',
      department: 'Information Technology',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      initials: 'TB',
      name: 'Taylor Brown',
      email: 'taylor.brown@example.com',
      phone: '(555) 345-6789',
      role: 'Security Analyst',
      department: 'Information Technology',
      lastActive: '3 days ago'
    }
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    phone: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.email) {
      const initials = newEmployee.name.split(' ').map(n => n[0]).join('').toUpperCase();
      const employee = {
        id: employees.length + 1,
        initials,
        name: newEmployee.name,
        email: newEmployee.email,
        phone: newEmployee.phone,
        role: newEmployee.role,
        department: newEmployee.department,
        lastActive: 'Just now'
      };
      setEmployees([employee, ...employees]);
      setNewEmployee({
        name: '',
        email: '',
        role: '',
        department: '',
        phone: ''
      });
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Typography variant="h2" gutterBottom>
        Employee Manager
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your organization's employee records
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
        <TextField 
          variant="outlined" 
          placeholder="Search employees..." 
          size="small"
          sx={{ width: '300px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Add New Employee Form */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Add New Employee
      </Typography>
      <Paper elevation={0} sx={{ p: 2, mb: 4, border: '1px solid #e0e0e0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Role"
              name="role"
              value={newEmployee.role}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Department"
              name="department"
              value={newEmployee.department}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              onClick={handleAddEmployee}
              sx={{ mt: 1 }}
            >
              Add Employee
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 3 }} />

      {/* Employees Table */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        DEPARTMENT
      </Typography>
      
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>CONTACT</TableCell>
              <TableCell>ROLE</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>LAST ACTIVE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ 
                      bgcolor: '#e3f2fd', 
                      color: '#1976d2',
                      width: 32,
                      height: 32,
                      fontSize: '0.875rem',
                      mr: 2
                    }}>
                      {employee.initials}
                    </Avatar>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {employee.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon sx={{ mr: 1, fontSize: '1rem', color: 'text.secondary' }} />
                    <Typography variant="body2">
                      {employee.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ mr: 1, fontSize: '1rem', color: 'text.secondary' }} />
                    <Typography variant="body2">
                      {employee.phone}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {employee.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {employee.department}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {employee.lastActive}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeManager;