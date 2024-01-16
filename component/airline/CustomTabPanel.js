import React from 'react' 
import { Typography } from '@mui/material';

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"  
            className={`tabpanel fade ${value === index ? "show" : "visually-hidden"}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        > 
            {value === index && (
                <>{children}</>
            )}
        </div>
    )
}

export default CustomTabPanel