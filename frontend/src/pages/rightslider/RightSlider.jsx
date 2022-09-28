import React,{useState} from "react";
import { BiHelpCircle, BiMessageSquareCheck } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { MailLogo } from "../MailLogo";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Button,
  } from "@chakra-ui/react";
import classes from "./RightSlider.module.css";
export const RightSlider = () => {
//   const user = localStorage.getItem("email");
// const data = user.charAt(1);

const [size, setSize] = useState("");
const { isOpen, onOpen, onClose } = useDisclosure();

const handleClick = (newSize) => {
  setSize(newSize);
  onOpen();
}
  return (
    <div>
        
      <div className={classes.rightIcon}>
      <button onClick={() => handleClick("xl")}>Shweta</button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

        
        <div className={classes.logoBorder}>
          <BiHelpCircle
            onClick={() => console.log("hello")}
            style={{ paddingTop: "5px", margin: "auto" }}
          />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <IoIosNotificationsOutline
            style={{ paddingTop: "5px", margin: "auto" }}
          />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <BsChatDots style={{ paddingTop: "5px", margin: "auto" }} />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <BiMessageSquareCheck style={{ paddingTop: "5px", margin: "auto" }} />
        </div>
      </div>
      <div className={classes.rightIcon}>
        {/* <MailLogo style={{ paddingTop: "5px" }} /> */}
        {/* <div className={classes.mailLogo}>{data.toUpperCase()}</div> */}
      </div>
    </div>
  );
};
