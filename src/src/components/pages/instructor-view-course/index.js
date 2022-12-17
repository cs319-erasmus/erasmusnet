import { Table } from '@nextui-org/react';
import { Button,Link } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
const course1={
  code:"CS 465",
  name:"Computer Graphics",
  instructor:"Uğur Güdükbay",
  deparment:"CS",
  type:"Technical Elective",
  credits:"6.5",

  Ecode:"1TD388",
  Ename:"Computer Graphics",
  Esyllabus:"syllabus.pdf",
  Ecredits:"6.5",
}
export default function InstructorView() {
  return (
    <div width= '100%' layout='fill' id="ViewCourse">
     <Grid.Container gap={4}><Text h1 color="indigo" css={ {paddingLeft: "$10",}}>Approval Request</Text> </Grid.Container> 
    <hr color="indigo"></hr>
    <Grid.Container gap={4}>
      <Grid sm={12} md={12}>
      <div rows="6">
          <Text color="indigo">Bilkent Course Code</Text>
          
          <Input readOnly  initialValue={course1.code} />
        </div>
        <Spacer y={1} />
        <div>
          <Text color="indigo">Bilkent Course Name</Text>
       
          <Input readOnly  initialValue={course1.name} />
        </div>
        <Spacer y={1} />
        <div>
          <Text color="indigo">Bilkent Instructor</Text>
          <Input readOnly initialValue={course1.instructor} />
        </div>
          <Spacer y={1} />
          <div>
            <Text color="indigo">Department</Text>
            <Input readOnly  initialValue={course1.deparment} />
          </div>
          <Spacer y={1} />
         
      </Grid>

      <Grid sm={12} md={12}>
      <div>
          <Text color="indigo">Type</Text>
          <Input readOnly  color="error" initialValue={course1.type} />
          </div>
          <Spacer y={1} />

          <div>
          <Text color="indigo">ECTS Credits</Text>
          <Input readOnly  initialValue={course1.credits} />
       </div>

      </Grid>
     
      <Grid sm={12} md={12}>
      <div rows="6">
          <Text color="indigo">Erasmus Course Code</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue={course1.Ecode}/>
        </div>
        <Spacer y={1} />
        <div>
          <Text color="indigo">Erasmus Course Name</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue={course1.Ename} />
        </div>
        <Spacer y={1} />
        
          <div>
            <Text px={"$3"} color="indigo">Syllabus</Text>
            <Spacer y={0.5} />
            <Input readOnly  initialValue={course1.Esyllabus} />
          </div>
          <Spacer y={1} />

          <div>
          <Text  px={"$3"} color="indigo">ECTS Credits</Text>
          <Spacer y={0.5} />
          <Input readOnly  color="error"  initialValue={course1.Ecredits} />
          </div>
          <Spacer y={1} />

      </Grid>
     
      </Grid.Container>
      <Grid  css={ {paddingLeft: "$10",}} sm={6} md={6}>
            <Grid >
                <Spacer y={0.75} />
                <Button color="secondary" css={ {paddingLeft: "$10",}}>Back</Button>
            </Grid>
        </Grid>
       
    </div>
    
  )
}