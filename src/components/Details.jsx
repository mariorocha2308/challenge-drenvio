import React from 'react';
import { Box, Icon, Stack, Text } from '@chakra-ui/react';
import { MdPhone, MdCake, MdPeople, MdLocationPin, MdOutlineMap } from 'react-icons/md'
import moment from 'moment'

const Details = props => {
  
  return (  
    <Box p='2rem'>
      <Text fontWeight='bold' fontSize='21'>Details</Text>

      <Stack spacing='2' mt='3' fontWeight='semibold' fontSize='15'>
        <Box display='flex' alignItems='center'>
          <Icon as={MdPhone} mr='2' fontSize='20'/>
          <Text>{props.phone}</Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Icon as={MdCake} mr='2' fontSize='20'/>
          <Text>{moment(props.birthday).format('DD MMM YYYY h:mm A')}</Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Icon as={MdPeople} mr='2' fontSize='20'/>
          <Text>Join us: {moment(props.registered).format('DD MMM YYYY h:mm A')}</Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Icon as={MdLocationPin} mr='2' fontSize='20'/>
          <Text>{props.street}</Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Icon as={MdOutlineMap} mr='2' fontSize='20'/>
          <Text>{props.location}</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default Details;