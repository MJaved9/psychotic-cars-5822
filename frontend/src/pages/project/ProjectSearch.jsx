import React from 'react';

import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftAddon, InputRightElement, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';


const Projectsearch = () => {
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
                     My Projects
                    </TagLabel>
                    
                  </Tag>
                  
                }
              />
              <Input type="tel" placeholder="+search" color="white" />
   
    </InputGroup>

   
}


export default Projectsearch;