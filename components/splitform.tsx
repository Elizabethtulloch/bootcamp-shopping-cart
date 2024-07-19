
import { Card, Button, CardContent, Typography, TextField,Box } from '@mui/material';
import React from 'react';
import {useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools"




type FormValues = {
    Monday: String 
    Tuesday : String 
    Wednesday: String
    Thrusday: String 
    Friday :String
    Saturday: String
    Sunday: String
   
}
const Split = () => {
        const form = useForm<FormValues>({
            defaultValues: {
                Monday : "",
                Tuesday : "",
                Wednesday: "",
                Thrusday: "" ,
                Friday :"",
                Saturday: "",
                Sunday: ""
               

            }
        })
        const {register, handleSubmit, formState ,control, getValues  } = form
        const mday = getValues("Monday")
        const tday = getValues("Tuesday")
        const wday = getValues("Wednesday")
        const rday = getValues("Thrusday")
        const fday = getValues("Friday")
        const sday = getValues("Saturday")
        const suday = getValues("Sunday")
        const {errors} = formState
        const onSubmit = (data : FormValues) =>{
           console.log(data)
        }
    
        

    return (
        <><div>
            <div className='acontent'>
                 <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <center>
                        <div
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '55ch' }
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Monday" type="Monday" variant="filled" {...register("Monday")} error={!!errors.Monday} helperText={errors.Monday?.message} />
                            <TextField label="Tuesday" type="Tuesday" variant="filled" {...register("Tuesday")} error={!!errors.Tuesday} helperText={errors.Tuesday?.message} />
                            <TextField label="Wednesday" type="Wednesday" variant="filled" {...register("Wednesday")} error={!!errors.Wednesday} helperText={errors.Wednesday?.message} />
                            <TextField label="Thrusday" type="Thrusday" variant="filled" {...register("Thrusday")} error={!!errors.Thrusday} helperText={errors.Thrusday?.message} />
                            <TextField label="Friday" type="Friday" variant="filled" {...register("Friday")} error={!!errors.Friday} helperText={errors.Friday?.message} />
                            <TextField label="Saturday" type="Saturday" variant="filled" {...register("Saturday")} error={!!errors.Saturday} helperText={errors.Saturday?.message} />
                            <TextField label="Sunday" type="Sunday" variant="filled" {...register("Sunday")} error={!!errors.Sunday} helperText={errors.Sunday?.message} />
                        </div>




                        <Button type="submit" style={{ backgroundColor: '#FB6F92' }} variant="contained"> submit </Button>
                    </center>
                </form> 
            </div>
            {/* <DevTool control={control} /> */}
            <div className='log' style={{ paddingTop: '20px' }}>
                <Box>

                    <Card>
                        <CardContent>

                            <Typography variant="h4"><center>Current Split: </center> </Typography>
                            <Typography variant="h5" gutterBottom> Monday: {mday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom> Tuesday: {tday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom> Wednesday: {wday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom>Thrusday: {rday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom>Friday: {fday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom>Saturday: {sday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>
                            <Typography variant="h5" gutterBottom> Sunday: {suday}</Typography>
                            <hr class="my-4 border-gray-300"></hr>

                        </CardContent>
                    </Card>
                </Box> 
            </div>


        </div></>

    );
};

export default Split;