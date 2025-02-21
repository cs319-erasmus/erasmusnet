import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input,Spacer} from "@nextui-org/react";
import { Link} from "@nextui-org/react";
import { useNavigate, Route } from "react-router-dom";
import InstructorView from '../instructorViewCourse';

import  { useState, useRef } from "react";


export default function InstructorApprove() {
  const navigate = useNavigate();

  const coordinatorView = () => {
    navigate("/coordinatorAppointmentApproval");
  };

  const students = [ 
    { name: "John M. Doe" } ,
    { name: "Jane Doe"}, 
    { name: "Jay Doe" } ];

    const viewItems = students.map((item) => {
      return (
        <Grid.Container gap={4}>
      <Grid sm={12} md={12}>
        <Grid sm={3} md={3}>
          <Text  b color="indigo">{item.name}</Text>
        </Grid>
        <Spacer x={4} />
        <Grid sm={3} md={3}>
        <Button onClick={coordinatorView} color="secondary" ><Text color="white">View</Text></Button> 
        </Grid>

        </Grid>
        </Grid.Container>
 
      );
    });
  
  return (
    <div>
      <Grid.Container gap={4}><Text b size="$2xl"  color="indigo" css={ {paddingLeft: "$10"}}>Student Names</Text> </Grid.Container> 
      <hr color="indigo"></hr>
     {viewItems}
       
    </div>
  );
  
}