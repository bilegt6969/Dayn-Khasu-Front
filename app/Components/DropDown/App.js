
import React from "react";
import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

export default function App() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
                    <GlobeAsiaAustraliaIcon className="h-6 w-6"/>

            <p>ENG</p>
            <ChevronDownIcon className="h-4 w-4"/>

        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="edit">MNG</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

