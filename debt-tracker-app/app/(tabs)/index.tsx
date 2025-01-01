


import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { BellIcon, GripVerticalIcon, EditIcon, Icon, ChevronDownIcon, ChevronRightIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { CalendarIcon,ChartLineIcon, FileStackIcon, HistoryIcon } from 'lucide-react-native';
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';



export default function HomeScreen() {
  
  const data: {id: number, name: string, amount: number, date: string, status: string}[] = [
    {
      id: 1,
      name: 'Prestamo Banco Popular',
      amount: 100000,
      date: '2024-01-01',
      status: 'pendiente'
    },
    {
      id: 2,
      name: 'Tarjeta de credito',
      amount: 200000,
      date: '2024-01-01',
      status: 'pendiente'
    },
    {
      id: 3,
      name: 'Prestamo Banco Popular',
      amount: 100000,
      date: '2024-01-01',
      status: 'pendiente'
    },
    {
      id: 4,
      name: 'Prestamo Banco Popular',
      amount: 100000,
      date: '2024-01-01',
      status: 'pendiente'
    }
  ];
  return (

    <SafeAreaView>
      <HStack className="h-auto bg-white justify-between p-4">
        <Box>
            <HStack  reversed={false} className=" justify-start items-center p-4 gap-4 " >
              <Box>
                  <Avatar size="md" >
                    <AvatarFallbackText>Jessica Jones</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                      }}
                    />
                    <AvatarBadge />
                  </Avatar>
                </Box>
                <Box>
                  <Text>Hello, Jessica Jones</Text>
                </Box>
              
            </HStack>
        </Box>
       
        <Box>
             <Icon size="md" color="black"  as={BellIcon}/>
        </Box>

    </HStack>
    <VStack className="gap-4 p-4 bg-slate-800 ">
      <Box>
        <Text size="md" className="text-start text-white" >Total deudas</Text>
      </Box>
      <Box>
        <Text size="5xl" className="text-start text-white" >$450.000.00</Text>
      </Box>
      <Box className=" flex flex-row justify-between  w-full  ">
        <Button size="lg" variant="solid" action="primary" className="bg-slate-100   ">
            <ButtonText className="text-slate-800" >+ Agregar deuda</ButtonText>
        </Button>
        <Button size="lg" variant="outline" action="secondary" className="bg-slate-800 border-white w-1/2  ">
            <ButtonText className="text-white" >$ Pagar</ButtonText>
        </Button>
      </Box>
    </VStack>
    <HStack className="  p-4 justify-between bg-white">
          <Button size="xl" className="rounded-full p-3.5 bg-slate-300 w-20 h-20">
              <ButtonIcon as={ChartLineIcon} color="black" className="w-8 h-8" />
          </Button>
          <Button size="xl" className="rounded-full p-3.5 bg-slate-300 w-20 h-20">
              <ButtonIcon as={CalendarIcon} color="black" className="w-8 h-8" />
          </Button>
          <Button size="xl" className="rounded-full p-3.5 bg-slate-300 w-20 h-20">
              <ButtonIcon as={HistoryIcon} color="black" className="w-8 h-8" />
          </Button>
          <Button size="xl" className="rounded-full p-3.5 bg-slate-300 w-20 h-20">
              <ButtonIcon as={FileStackIcon} color="black" className="w-8 h-8" />
          </Button>
     
    </HStack>
     <Box className="px-4 pt-4 flex flex-row justify-start items-center ">
          <Text className="text-slate-800 text-2xl font-bold">Deudas</Text>
          <Icon as={ChevronRightIcon} />
      </Box>                 
     <FlatList data={data}
      
     renderItem={({item}) => 
      <Box className="bg-white p-4 rounded-md h-20 m-3 p-4 ">
        <HStack className="justify-between">
          <VStack>
            <Text className="text-slate-800 text-lg font-bold">{item.name}</Text>
            <Text>{item.date}</Text>
          </VStack>
          <VStack className="flex items-end">
            <Text >{item.amount.toLocaleString('es-DO', { style: 'currency', currency: 'DOP' })}</Text>
            <Text>{item.status}</Text>
          </VStack>
        </HStack>
        
     </Box>
    } />
    </SafeAreaView>
  )
}
