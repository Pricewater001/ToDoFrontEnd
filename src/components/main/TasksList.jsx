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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import styles from './TasksList.module.css'
import addIcon from '../../assets/PwC_Funct_Icons_Plus_Outline_Black_RGB.png'

function TasksList() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>My To-Do List</h2>
        <a href=""><span title="Add New Task"><img src={addIcon} alt="" /></span></a>
      </div>
      <Card maxW='300px'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Task 1</Heading>
            <Text>
              Create React App
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button onClick={onOpen} variant='solid' colorScheme='orange'>
              Edit
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Mark as Done
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='300px'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Task 2</Heading>
            <Text>
              Create Angular App
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='orange'>
              Edit
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Mark as Done
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi nihil eum aliquid perferendis, tempore praesentium laudantium laboriosam fugit fugiat quo impedit debitis possimus, consectetur odio cumque corporis quis. Ab!</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TasksList
