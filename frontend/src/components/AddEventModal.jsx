import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Input, Modal, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../pages/AddTask/AddTask"
// import Modal from "react-modal";
import Datetime from 'react-datetime';


 function AddEventModal({isOpen, onClose, onEventAdded}){

    const [title,setTitle]=useState("")
    const [start,setStart]=useState(new Date())
    const [end,setEnd]=useState(new Date())

    

    function onSubmit(e){
e.preventDefault()
onEventAdded({
    title,
    start,
    end
})
onClose()


    }

    // return (
    //     <Modal isOpen={isOpen} onRequestClose={onClose}>

    //         <form action="" onSubmit={onSubmit}>
    //             <input type="text" placeholder="title"  onChange={(e)=>setTitle(e.target.value)} />
    //             <div>
    //               <label htmlFor="">Start Date </label>
    //             <Datetime value={start} onChange={date => setStart(date)} />
    //             </div>

    //             <div>
    //               <label htmlFor="">End Date </label>
    //             <Datetime value={end} onChange={date => setEnd(date)} />
    //             </div>
    //             <button type="submit">Add event</button>
                
    //         </form>

    //     </Modal>
    // )
    return (
        <>
       
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" backgroundColor={"#f4f7f8"}>
              New Event
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Flex justifyContent={"space-between"}>
                  <Input
                    id="title"
                    placeholder="New Event"
                    width="60%"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Checkbox
                    
                  >
                    Priority
                  </Checkbox>
                </Flex>
                <Flex justifyContent={"flex-start"} gap="100px">
                <Box>
                 <FormLabel htmlFor="">Start Date </FormLabel>
               <Datetime value={start} onChange={date => setStart(date)} />
               </Box>
               <Box>
                 <FormLabel htmlFor="">End Date </FormLabel>
                 <Datetime value={end} onChange={date => setEnd(date)} />
               </Box>
                
                 
                </Flex>
                <Box w="60%" alignItems={"left"}>
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username" w="25%">Created by</FormLabel>
                    <Input
                      ml="100px"
                      id="creator"
                      placeholder="Add"
                      width="80%"
                   
                    />
                  </Flex>
                </Box>
                <Box w="80%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel mt="10px">Responsible person</FormLabel>
                    <div className={styles.tagsbox}>
                     
                      <input
                        // onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="+ Add more"
                        className={styles.tagsinput}
                      />
                    </div>
                  </Flex>
                </Box>
                <Box w="60%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username">Deadline</FormLabel>
                    <Input
                      ml={"65px"}
                      type="date"
                      id="deadline"
                      width="80%"
                    //   value={deadline}
                    //   onChange={(e) => setDeadline(e.target.value)}
                    />
                  </Flex>
                </Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" width="50%">
                          More
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack spacing={"24px"}>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Project</FormLabel>
                            <Input
                              id="project"
                              placeholder="Add"
                              width="70%"
                            //   value={project}
                            //   onChange={(e) => setProject(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="time">Time tracking</FormLabel>
                            <Input
                              type="time"
                              id="time"
                              width="70%"
                            //   value={time}
                            //   onChange={(e) => setTime(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Tag</FormLabel>
                            <Input
                              id="tag"
                              placeholder="Add"
                              width="70%"
                            //   value={tag}
                            //   onChange={(e) => setTag(e.target.value)}
                            />
                          </Flex>
                        </Box>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor={"#bbed21"}
                borderRadius="3px"
                onClick={onSubmit}
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </>
    )
}

export default AddEventModal