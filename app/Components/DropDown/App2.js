import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';



export default function App2() {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >

          <p>Servives</p>
          <ChevronDownIcon className="h-4 w-4"/>

        </Button>
      </DropdownTrigger>
      <DropdownMenu  aria-label="Static Actions">
        <DropdownItem href="#" key="edit">Mining</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}
