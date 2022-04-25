import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, CardHeader } from '@mui/material';
import swal from 'sweetalert2'

const SignIn = () => {

    const [value, setValue] = useState('lookingForJob');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    }

    return (

        <Grid container direction="column" sx={{ p: 5 }}>
            <Grid item sx={{
                p: 1,
                margin: 'auto',
            }}>
                <Grid
                    sx={{
                        p: 4,
                        border: '2px solid lightGrey',
                        borderRadius: '1vw',
                        margin: 'auto',
                    }}>

                    <FormLabel
                        sx={{
                            fontSize: '20px',
                            color: '#1976d2',
                        }}
                    >הרשמה</FormLabel>
                    
                    <Grid>
                        <TextField name="name" id="name" label="שם" variant="standard" />
                    </Grid>

                    <Grid item sx={{
                        p: 1,
                        margin: 'auto',
                    }}>
                        <TextField id="password" type="password" label="סיסמא" variant="standard" />
                    </Grid>

                    <Grid item sx={{
                        p: 1,
                        margin: 'auto',
                    }}>
                        <TextField id="email" type="email" label="אימייל" variant="standard" />
                    </Grid>

                    <Grid item sx={{
                        p: 2,
                        margin: 'auto',
                    }}>
                        <FormControl>
                            <FormLabel>סמן סטטוס</FormLabel>
                            <RadioGroup
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="employer" control={<Radio />} label="מעסיק" />
                                <FormControlLabel value="lookingForJob" control={<Radio />} label="מחפש עבודה" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item sx={{
                        p: 1,
                        margin: 'auto',
                    }}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                swal.fire(' שלום ', '!!! פרטיך נקלטו בהצלחה במערכת', 'success')
                            }}

                        >להרשמה</Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignIn;