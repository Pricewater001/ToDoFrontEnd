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
  ButtonGroup
} from '@chakra-ui/react'
import styles from './TasksList.module.css'
import addIcon from '../../assets/PwC_Funct_Icons_Plus_Outline_Black_RGB.png'

function TasksList() {
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
            <Button variant='solid' colorScheme='orange'>
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
    </>
  )
}

export default TasksList
