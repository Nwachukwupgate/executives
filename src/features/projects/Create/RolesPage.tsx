import React, { useState } from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import RoleModal from './modals/RoleModal';
import EditRoleModal from './modals/EditRoleModal';

interface Role {
  id: string;
  name: string;
  jobDescription: string;
  roleCode: string;
  department: string;
}

const mockRoles: Role[] = [
  { id: '1', name: 'Account Officer', jobDescription: 'Handles accounts', roleCode: 'AO01', department: 'Finance' },
  { id: '2', name: 'Driver', jobDescription: 'Drives company vehicles', roleCode: 'DR02', department: 'Transport' },
  { id: '3', name: 'Brokers', jobDescription: 'Manages brokerage', roleCode: 'BR03', department: 'Sales' },
];

const RolesPage: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentRole, setCurrentRole] = useState<Role | null>(null);

  const handleDelete = (id: string) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Roles Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowRoleModal(true)}
        sx={{ mb: 3 }}
      >
        Create Role
      </Button>
      {roles.length ? (
        roles.map(role => (
          <Card key={role.id} sx={{ mb: 2, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">{role.name}</Typography>
              <Typography variant="body2">Department: {role.department}</Typography>
            </Box>
            <Box>
              <IconButton
                color="primary"
                onClick={() => {
                  setCurrentRole(role);
                  setShowEditModal(true);
                }}
              >
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(role.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No roles created yet.</Typography>
      )}
      {showRoleModal && <RoleModal onClose={() => setShowRoleModal(false)} onAddRole={setRoles} />}
      {showEditModal && currentRole && (
        <EditRoleModal
          role={currentRole}
          onClose={() => setShowEditModal(false)}
          onEditRole={setRoles}
        />
      )}
    </Box>
  );
};

export default RolesPage;
