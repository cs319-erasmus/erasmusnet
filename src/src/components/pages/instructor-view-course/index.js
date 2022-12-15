import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";

export default function Approval() {

  return (
    <div width= '100%' layout='fill'>
    <Spacer y={0.5} /><Text h1 color="indigo" >Approval Request</Text>
    <hr color="indigo"></hr>

    <Grid.Container gap={4}>
      <Grid sm={12} md={12}>
      <div rows="6">
          <Text color="indigo">Bilkent Course Code</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue="CS465" />
        </div>
        <Spacer y={2} />
        <div>
          <Text color="indigo">Bilkent Course Name</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue="Computer Graphics" />
        </div>
        <Spacer y={2} />
        <div>
          <Text color="indigo">Bilkent Instructor</Text>
          <Spacer y={0.5} />
          <Input readOnly initialValue="Uğur Güdükbay" />
        </div>
          <Spacer y={2} />
          <div>
            <Text color="indigo">Department</Text>
            <Spacer y={0.5} />
            <Input readOnly  initialValue="CS" />
          </div>
          <Spacer y={2} />

          <div>
          <Text color="indigo">Type</Text>
          <Spacer y={0.5} />
          <Input readOnly  color="error" initialValue="Techinical Elective" />
          </div>
          <Spacer y={2} />

          <div>
          <Text color="indigo">ECTS Credits</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue="6.5" />
          </div>

      </Grid>
      <Spacer y={2} />

      <Grid sm={12} md={12}>
      <div rows="6">
          <Text color="indigo">Erasmus Course Code</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue="1TD388" />
        </div>
        <Spacer y={2} />
        <div>
          <Text color="indigo">Erasmus Course Name</Text>
          <Spacer y={0.5} />
          <Input readOnly  initialValue="Computer Graphics" />
        </div>
        <Spacer y={2} />
        
          <div>
            <Text color="indigo">Syllabus</Text>
            <Spacer y={0.5} />
            <Input readOnly  initialValue="Syllabus.pdf" />
          </div>
          <Spacer y={2} />

          <div>
          <Text color="indigo">ECTS Credits</Text>
          <Spacer y={0.5} />
          <Input readOnly  color="error" initialValue="6.5" />
          </div>
          <Spacer y={2} />

      </Grid>
      
        
      </Grid.Container>
       
    </div>
    
  )
}