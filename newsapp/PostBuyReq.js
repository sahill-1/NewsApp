import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    Stack,
    Container,
    Button
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const PostBuyReq = () => {
    return (
        <>

            <Stack spacing={10} m={3} direction={{ base: "column", md: "row", sm: "column" }}>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='name' placeholder='Enter Your Name' />

                </FormControl>

                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Enter Your Email Address' />
                </FormControl>

                <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type='number' placeholder='Enter Phone Number' />
                </FormControl>
            </Stack>

            <Stack spacing={10} m={3} direction={{ base: "column", md: "row", sm: "column" }}>
                <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input type='email' placeholder='Enter product name you want to buy' />
                </FormControl>

                <FormControl>
                    <FormLabel>M.O.Q</FormLabel>
                    <Input type='email' placeholder="eg: Minimum Order Quantity" />
                </FormControl>

                <FormControl>
                    <FormLabel>Quantity</FormLabel>
                    <Input type='email' placeholder='eg: Kg/Ton/Litre/ML/Piece/Bulk/As per the price' />
                </FormControl>
            </Stack>

            <Stack spacing={10} m={3} direction={{ base: "column", md: "row", sm: "column" }}>
                <FormControl>
                    <FormLabel>Requirement Frequency</FormLabel>
                    <Input type='email' placeholder='eg: Requirement Frequency' />
                </FormControl>

                <FormControl>
                    <FormLabel>Quality/Size/Specification</FormLabel>
                    <Input type='email' placeholder="eg: Quality/Size/Specification" />
                </FormControl>

                <FormControl>
                    <FormLabel>Purpose of Req</FormLabel>
                    <Input type='email' placeholder='eg: Resale/Commercial Use/Business Use/Home Use' />
                </FormControl>
            </Stack>

            <Stack spacing={10} m={3} direction={{ base: "column", md: "row", sm: "column" }}>
                <FormControl>
                    <FormLabel>Want to Buy</FormLabel>
                    <Input type='email' placeholder='eg: Immediate/After a week/ After a month' />
                </FormControl>

                <FormControl>
                    <FormLabel>Requirement Type</FormLabel>
                    <Input type='email' placeholder="eg: Regular/One-Time requirement" />
                </FormControl>

                <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input type='email' placeholder='eg: Location' />
                </FormControl>
            </Stack>
            <Checkbox p={4} defaultChecked>I agree <span style={{ color: "red" }}>Terms & Conditions</span></Checkbox>
            <Stack p={4} direction='row' align='center'>
                
                <Button colorScheme='teal' size='md'>
                    Button
                </Button>
                
            </Stack>
        </>
    )
}

export default PostBuyReq
