import React from 'react';
import styled from './taskserch.module.css';
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftAddon, InputRightElement, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { ChevronDownIcon, SmallCloseIcon, SearchIcon } from "@chakra-ui/icons";

const TaskSerch = () => {
    return <InputGroup size='md' w='650' h="40px">
         <InputLeftAddon
                // pointerEvents="none"
                // size="sm"
                w="130px"
                backgroundColor="rgb(0,34,83)"
                children={
                  <Tag size={"xxl"} backgroundColor="#00BAF299" w="120px">
                    <TagLabel
                      w="95px"
                      h="30px"
                      color="white"
                      fontSize="13px"
                      pt="5px"
                      pl="8px"
                      fontWeight="0"
                    >
                      In progress
                    </TagLabel>
                    
                  </Tag>
                  
                }
              />
              <Input type="tel" placeholder="search" color="white" />
   
    </InputGroup>

   
}


export default TaskSerch;