import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input,Spacer} from "@nextui-org/react";
import { Link} from "@nextui-org/react";

import {SSRProvider} from '@react-aria/ssr';

export default function Home() {
  // const columns = [
  //   {
  //     key: "name",
  //     label: "STUDENT NAME",
  //   },
  //   {
  //     key: "view",
  //     label: "",
  //   },
  //   {
  //     key: "approve",
  //     label: "",
  //   },
  //   {
  //     key: "reject",
  //     label: "",
  //   },
  // ];
  // const rows = [
  //   {
  //     key: "1",
  //     name: "",
  //     view: "",
  //     approve: "",
  //     reject: "",
  //   },
  //   {
  //     key: "2",
  //     name: "",
  //     view: "",
  //     approve: "",
  //     reject: "",
      
  //   },
  //   {
  //     key: "3",
  //     name: "",
  //     view: "",
  //     approve: "",
  //     reject: "",
  //   },
  //   {
  //     key: "4",
  //     name: "",
  //     view: "",
  //     approve: "",
  //     reject: "",
  //   },
  // ];

  return (
    <div width= '100%' layout='fill'>
     
        <Table
        css={{
        height: "600px",
        width: '100%',
        px: "$5",
        margin:"$5",
        layout:'fill'

      }}
    >
      <Table.Header width="100%"  layout='fill'>
        <Table.Column><Text css={{
       fontSize:"15px",color:"indigo"
      }}>STUDENT NAME</Text></Table.Column>
        <Table.Column></Table.Column>
        <Table.Column></Table.Column>
        <Table.Column></Table.Column>
      </Table.Header>
  

      <Table.Body>
        <Table.Row width="100%" key="1">
          <Table.Cell><Text b color="indigo" >Alperen Toprak</Text></Table.Cell>

          <Table.Cell><Button color="indigo" ><Link href="/approvalinfo" color="secondary">View</Link> </Button> </Table.Cell>
            {/* <a href="/approvalinfo"color="white" >View</a> */}
            <Table.Cell><Button color="success">Approve</Button></Table.Cell>
          <Table.Cell ><Button color="error" >Reject</Button></Table.Cell>
        </Table.Row>
    

        <Table.Row key="2">
          <Table.Cell><Text b color="indigo">Eda Yılmaz</Text></Table.Cell>
          <Table.Cell><Button color="indigo" ><Link href="/approvalinfo" color="secondary">View</Link> </Button> </Table.Cell>
          <Table.Cell><Button color="success">Approve</Button></Table.Cell>
          <Table.Cell ><Button color="error" >Reject</Button></Table.Cell>
        </Table.Row>
      

        <Table.Row key="3">
          <Table.Cell><Text  b color="indigo">Melis Titiz</Text></Table.Cell>
          <Table.Cell><Button color="indigo" ><Link href="/approvalinfo" color="secondary">View</Link> </Button> </Table.Cell>
          <Table.Cell><Button color="success">Approve</Button></Table.Cell>
          <Table.Cell ><Button color="error" >Reject</Button></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

  {/* <Table
        css={{
        height: "600px",
        width: '100%',
        px: "$5",
        margin:"$5",
        layout:'fill'

      }}
    >
      <Table.Header width="100%"  layout='fill' columns={columns}> {(column) => (
        <Table.Column  key={column.key}><Text css={{
       fontSize:"15px",color:"primary"
      }}>{column.label}</Text></Table.Column>
      )}</Table.Header>
      <Table.Body items={rows}>  {(item) => (
        <Table.Row width="100%" key={item.key}>
          <Table.Cell><Text  b h4>{item[columnKey]}</Text></Table.Cell>
  
        </Table.Row>
       )}
      </Table.Body>
    </Table> */}
    
    </div>
  
  
    
  )
}