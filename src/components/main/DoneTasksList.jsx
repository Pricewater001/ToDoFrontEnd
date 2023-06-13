import 
{ Card,
  // CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   HStack,
  // FormErrorMessage,
//   Input,
  // FormHelperText,
} from '@chakra-ui/react';
import styles from './DoneTasksList.module.css'

function DoneTasksList() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Completed Tasks</h2>
      </div>
      <Card maxW='450px'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Task 3</Heading>
            <Text>
              Edit code
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='orange'>
              Remove
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Mark as Incomplete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

    </div>
{/* ******************************** MODAL ********************************* */}
    {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <FormLabel>Task Title</FormLabel>
            <Input type='text' />
            <FormLabel>Task Description</FormLabel>
            <Input type='text' />
            <FormLabel as='legend'>
              Task Status
            </FormLabel>
            <RadioGroup colorScheme='orange' defaultValue='Pending'>
              <HStack spacing='24px'>
                <Radio value='Pending'>Pending</Radio>
                <Radio value='Open'>Open</Radio>
                <Radio value='In Progress'>In Progress</Radio>
                <Radio value='Cancelled'>Cancelled</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='orange' mr={3} type='submit'>
              Edit
            </Button>
            <Button variant='ghost'>Mark as Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default DoneTasksList
