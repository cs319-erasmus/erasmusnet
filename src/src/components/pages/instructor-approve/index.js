import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Input,Spacer} from "@nextui-org/react";
import { Link} from "@nextui-org/react";

import {SSRProvider} from '@react-aria/ssr';

export default function Home() {
  const columns = [
    {
      key: "name",
      label: "STUDENT NAME",
    },
    {
      key: "col2",
      label: "",
    },
    {
      key: "col3",
      label: "",
    },
    {
      key: "col4",
      label: "",
    },
  ];
  const rows = [
    {
      key: "1",
      name: "Alperen Toprak",
      col2: "",
      col3: "",
      col4: "",

    },
    {
      key: "2",
      name: "Eda Yılmaz",
      col2: "",
      col3: "",
      col4: "",

    },
    {
      key: "3",
      name: "Melis Titiz",
      col2: "",
      col3: "",
      col4: "",

    },
    {
      key: "4",
      name: "Ali Dalaslan",
      col2: "",
      col3: "",
      col4: "",
    },
  ];
  return (
    <div width= '100%' height= '100%'layout='fill'>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: '600px',
          width: '100%',
          px: "$5",
          margin:"$5",
          layout:'fill'
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>  <Text css={{
              fontSize:"15px",color:"indigo"
            }}>{column.label} </Text></Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.key}>
            
            <Table.Cell><Text  b color="indigo">{item.name}</Text></Table.Cell>
            <Table.Cell><Button color="indigo" ><Link href="/instructor-view-course" color="secondary">View</Link> </Button> </Table.Cell>
            <Table.Cell><Button color="success">Approve</Button></Table.Cell>
            <Table.Cell ><Button color="error" >Reject</Button></Table.Cell>
          </Table.Row>
          )}
        
        </Table.Body>
      </Table>
  );
    
  </div>

  )
}