import { Grid, TextField, FormLabel, Button } from "@mui/material";
import Swal from "sweetalert2";

const LogIn = () => {
    return (
        <Grid container direction="column" sx={{
            p: 5,
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
                >כניסה</FormLabel>

                <Grid item sx={{
                    p: 1,
                    margin: 'auto',
                }}>
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
                        <Button
                            variant="contained"
                            onClick={() => {
                                Swal.fire(' **** ', '**************', 'info')
                            }}

                        >להרשמה</Button>
                    </Grid>

            </Grid>
        </Grid>
    );
}

export default LogIn;