import styles from "./Hero.module.css";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import heroImg from "../../assets/PwC_Geom_Illus_Bots_Ideas_OrangeGrey_RGB_cropped.png";
// import heroVid from '../../assets/PwC_Geom_Illus_11.mp4'
// import heroGif from '../../assets/PwC_Geom_Illus_57.gif'
function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Hello User, Keep Track of Your Daily Tasks!</h1>
          <h3>What do you need to do today?</h3>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search"
              colorScheme="whiteAlpha"
              variant="filled"
              focusBorderColor="white"
              _focusVisible="white"
            />
          </InputGroup>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            size="sm"
            width="40%"
          >
            Explore more services
          </Button>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </>
  );
}

export default Hero;
