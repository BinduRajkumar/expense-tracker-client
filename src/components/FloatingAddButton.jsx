import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FloatingAddButton() {
    const navigate = useNavigate()
    const fabStyle = {
        position: "absolute",
        bottom: 16,
        right: 16
    }
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Tooltip title="Add New Entry" arrow>
                <Fab 
                onClick={()=>navigate("/add")} 
                sx={fabStyle} size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

        </Box>
    );
}
