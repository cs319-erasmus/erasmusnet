import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Divider } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { ErasmusLogo } from "./ErasmusLogo.js";
import { DashboardContent } from "./DashboardContent.js";

export default function App({className}) {
 

  
  return (
    <Layout>

      <Navbar isBordered variant={variant}>
        <Navbar.Brand>

          <Text b color="purple" hideIn="sm">
            ErasmusNET
          </Text>
        
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="#">Dashboard</Navbar.Link>
          <Navbar.Link  href="#">Student Stories</Navbar.Link>
          <Navbar.Link href="#">Knowledge Library</Navbar.Link>
          <Navbar.Link href="#">Document Templates</Navbar.Link>
          <Navbar.Link href="#">Past Applications</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link auto flat as={Link}  href="#">
            Appointments
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Profile
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
    </Layout>
  )
}