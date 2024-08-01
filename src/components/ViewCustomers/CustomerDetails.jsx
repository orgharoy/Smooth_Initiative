import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { DrawerTitle, } from "@/components/ui/drawer"
import { DialogTitle} from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerSchema } from '@/schema/customerSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CustomerDetails = ({rowData}) => {
    const [isEditable, setIsEditable] = useState(false)

    const form = useForm({
        resolver: zodResolver(CustomerSchema),
        defaultValues: {
            customerName: rowData.customerName,
            customerEmail: rowData.customerEmail,
            customerPhoneNumber: rowData.customerPhoneNumber,
            customerStreetAddress: rowData.customerStreetAddress,
            customerCity: rowData.customerCity,
            customerStateOrProvince: rowData.customerStateOrProvince,
            customerPostalCode: rowData.customerPostalCode,
            customerCountry: rowData.customerCountry,
            contactPerson: rowData.contactPerson,
            contactPersonEmail: rowData.contactPersonEmail,
            contactPersonPhoneNumber: rowData.contactPersonPhoneNumber,
        }
    });

    const onSubmit = (values) => {
        console.log("clicked");
        console.log(values);
    };
    
    return (
        <div className='p-5 md:p-0 flex flex-col justify-start'>
            <DrawerTitle className={cn('block md:hidden mb-5 pb-5')}>
                Customer Details
            </DrawerTitle>
            <DialogTitle className={cn('hidden md:block mb-5 pb-5')}>
                Customer Details
            </DialogTitle>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 grid-cols-6">
                <div className='col-span-6'>
                    <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                            <FormItem>
                                <div className="w-full flex items-center justify-between h-4">
                                    <FormLabel>Customer Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                    <div>
                                        <FormMessage/>
                                    </div>
                                </div>
                                
                                <FormControl>
                                    <Input disabled={!isEditable} placeholder="Company Name" {...field} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                </div>
                
                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer Email<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} type='email' placeholder="customer@mail.com" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>
                
                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer Phone<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="+8801767476903" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />  
                </div>
                
                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerStreetAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer Street Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerCity"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer City<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerStateOrProvince"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer State/Province<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerPostalCode"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer Postal Code<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="customerCountry"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Customer Country<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Contact Person's Full Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="contactPersonEmail"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Contact Person's Email<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} type='email' placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>

                <div className="col-span-6">
                    <FormField
                    control={form.control}
                    name="contactPersonPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Contact Person's Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input disabled={!isEditable} placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>
                <div className="col-span-6 md:col-span-6 flex justify-center items-center mt-7 gap-3">
                    {
                        isEditable && 
                        <>
                            <Button type="submit" className={cn('text-white')}>Submit</Button>
                            <Button type="button" variant="outline" onClick={() => setIsEditable(false)}>Cancel</Button>
                        </>
                    }
                </div>

                </form>
            </Form>
            
            <div className="col-span-6 md:col-span-6 flex justify-center items-center gap-3">
                {
                    !isEditable &&
                    <>
                        <Button type="button" className={cn('text-white')} onClick={() => setIsEditable(true)}>Edit Customer</Button>
                        
                        <AlertDialog>
                            <AlertDialogTrigger><Button type="button" variant="destructive">Delete</Button></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className={cn('text-white')}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        
                    </> 
                }
            </div>

        </div>
    )
}

export default CustomerDetails