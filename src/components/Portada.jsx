import React, { useState } from 'react';
import { Box, Avatar, Tag, TagLabel, Icon, Stack } from '@chakra-ui/react';
import { MdOutlineLogout, MdPalette} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { getRandomUserQuery } from '../redux/rootCreators'
import { randomColors } from '../utils/functions/RandomBgColor';

const Portada = props => {

  const dispatch = useDispatch()
  const [bgColor, setBgColor] = useState('gray.600')

  const fetchNewRandom = () => {
    dispatch(getRandomUserQuery())
  }

  const changeBg = () => {
    const color = randomColors()
    setBgColor(color)
  }

  return (  
    <Box py='4' h='25vh' bgColor={bgColor} borderBottomRadius={{base: '0px', sm: '0px', md: '20px'}} position='relative'>
      <Stack position='absolute' direction='row' align='center' color='white' right='10' spacing='5'>
        <Tag size='lg' colorScheme='blue' borderRadius='full'>
          <TagLabel>{props.userName}</TagLabel>
        </Tag>
        <Icon as={MdPalette} fontSize='24' cursor='pointer' onClick={() => changeBg()}/>
        <Icon as={MdOutlineLogout} fontSize='24' onClick={fetchNewRandom} cursor='pointer'/>
      </Stack>

      <Avatar src={props.avatar} size='2xl' position='absolute' bottom='-50' left='50'/>
    </Box>
  );
}

export default Portada;