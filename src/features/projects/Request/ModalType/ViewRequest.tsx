import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface RequestDetails {
  name?: string;
  message?: string;
  amount?: number;
  id?: number;
}

const ViewRequest: React.FC<RequestDetails> = ({ id }) => {
    console.log(id)
  return (  
    <Box 
    >
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Request Details
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
            Request Name:
            </Typography>
            <Typography variant="body1">Auxillary Doors</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
            Request Message:
            </Typography>
            <Typography variant="body1">Approved package of aux doors and cars for all staffs</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle1" fontWeight="bold">
            Request Amount:
            </Typography>
            <Typography variant="body1">$20,0000</Typography>
        </Box>
    </Box>
  );
};

export default ViewRequest;
