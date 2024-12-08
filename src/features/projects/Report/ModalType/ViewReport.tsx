import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface RequestDetails {
  id?: string;
}

const ViewReport: React.FC<RequestDetails> = ({ id }) => {
    console.log(id)
  return (  
    <Box 
    >
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Report Details
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
                Weekly Engagement:
            </Typography>
            <Typography variant="body1">Week 1</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
                Achievement:
            </Typography>
            <Typography variant="body1">Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle1" fontWeight="bold">
                Challenges:
            </Typography>
            <Typography variant="body1">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle1" fontWeight="bold">
                Comment:
            </Typography>
            <Typography variant="body1">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle1" fontWeight="bold">
                Grade:
            </Typography>
            <Typography variant="body1">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle1" fontWeight="bold">
                Suggestion:
            </Typography>
            <Typography variant="body1">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content</Typography>
        </Box>
    </Box>
  );
};

export default ViewReport;
