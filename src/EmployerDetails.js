import { Grid, TextField, FormLabel, Button } from "@mui/material";
import Swal from "sweetalert2";


const EmployerDetails = () => {
    return (
<>
        <Grid container direction="column" sx={{
            p: 5
        } }>    
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
                >פרטי מעסיק</FormLabel>
</Grid>
            <Grid item sx={{
                p: 1,
                margin: 'auto',
            }}>
                    <TextField name="name" id="name" label="שם העסק" variant="standard" />
            </Grid>

            <Grid item sx={{
        p: 1,
        margin: 'auto',
    }}>
                    <TextField name="tel" type="text" id="tel" label="טלפון" variant="standard" />
    </Grid>

    <Grid item sx={{
        p: 1,
        margin: 'auto',
    }}>
                    <TextField name="email" type="email" id="email" label="email" variant="standard" />
    </Grid>

    <Grid item sx={{
        p: 1,
        margin: 'auto',
    }}>
                    <TextField name="password" id="password" type="password" label="סיסמא" variant="standard" />
    </Grid>

    <Grid item sx={{
        p: 1,
        margin: 'auto',
    }}>
                    <Button
            variant="contained"
            onClick={() => {
                Swal.fire(' **** ', '**************', 'info')
                
            }}
            
            >להרשמה</Button>
                </Grid >

            </Grid >
            );
}

export default EmployerDetails;