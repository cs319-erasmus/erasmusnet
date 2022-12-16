import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input,Spacer} from "@nextui-org/react";
import { Link} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Textarea  } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';

export default function CoordinatorViewAppointment() {
    const request1={
        studentName:"John Doe",
        message:"Can we have a meeting to discuss about my application?"
    }
  return (
    <div width= '100%' layout='fill' id="ViewCourse">
        
        <Text h1 color="indigo" css={ {paddingLeft: "$10",}}>Appointment Request</Text>
        
        <hr color="indigo"></hr>
        <Grid.Container gap={4}>
            <Grid sm={12} md={12}>
            <div >
                <Text color="indigo">Student Name</Text>
                <Input readOnly  fullWidth	rows={10} initialValue={request1.studentName} />
            </div>
            </Grid>


        </Grid.Container> 
        
        <Grid  css={ {paddingLeft: "$10",}} sm={6} md={6}>
            <div>
                <Text color="indigo">Message</Text>
                <Textarea readOnly  fullWidth  rows={10} initialValue={request1.message} />
            </div>
            <Grid >
                <Spacer y={2} />
                <Button color="secondary" css={ {paddingLeft: "$3",}}>Back</Button>
            </Grid>
        </Grid>
        
   </div>
  )
}