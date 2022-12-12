import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"
import { TimeLine } from "./TimeLine.js"
import { Card, Grid,  Button, Row } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { Chrono } from "react-chrono";
export const DashboardContent = () => (
   
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    {  }
    <Grid.Container gap={4}>
      <Grid sm={12} md={12}>

      <Grid.Container gap={4}>
      <Grid >
        <Card css={{w: "500px",h: "200px" }}>
            <Card.Header css={{h:"50px" }}>
              <Text  css={{ fontSize: "30px",color: "black" }} >Next Step</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Button  width="200px" color="secondary"  css={ {py: "$13" , w:"100px", size:"xs",}} >
                  
                View Your Placement                
                
              </Button>
            
            </Card.Body>
            <Card.Divider />
          </Card>
          <Spacer></Spacer>

          <Card css={{ w: "500px",h: "200px" }}>
          <Card.Header css={{h:"50px" }}>
            <Text  css={{ fontSize: "30px",color: "black" }} >Your Coordinator</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$0" ,height:"100px"}}>
            
                <Text css={ {py: "$0" , fontSize:"30px",color: "purple"}}>
                    Can Alkan 
                    <Text css={ {py: "$0" , fontSize:"20px",color: "purple"}}>
                    calkan@cs.bilkent.edu.tr          
                    </Text>            
                </Text>
                
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
      
    </Grid.Container>
      

      <Card css={{w: "600px",h: "400px" }}>
        <Card.Header css={{h:"50px" }}>
          <Text  css={{ fontSize: "30px",color: "black" }} >Calendar</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$5",h: "300px" }}>

          <Text style={{ fontSize: 20 }}>Application Deadline
            <Text style={{ fontSize: 15, py:"$0" }}>10.09.2022</Text>
            <Card.Divider />
          </Text>

          <Text style={{ fontSize: 20 }}>Placement Announcements
            <Text style={{ fontSize: 15, py:"$0" }}>10.12.2022</Text>
            <Card.Divider />
          </Text>

          <Text style={{ fontSize: 20 }}>Placement Announcements
            <Text style={{ fontSize: 15, py:"$0"  }}>10.12.2022</Text>
            <Card.Divider />
          </Text>
        </Card.Body>
          <Card.Divider />
        </Card>

        
      </Grid>
    </Grid.Container>


   


  </Box>

);