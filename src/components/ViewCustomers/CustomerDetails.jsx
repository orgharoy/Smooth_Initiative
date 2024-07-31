import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { DialogTitle } from "@/components/ui/dialog"
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerSchema } from '@/schema/customerSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CustomerDetails = ({rowData}) => {
    const form = useForm({
        resolver: zodResolver(CustomerSchema),
        defaultValues: {
            customerName: '',
            customerEmail: '',
            customerPhoneNumber: '',
            customerStreetAddress: '',
            customerCity: '',
            customerStateOrProvince: '',
            customerPostalCode: '',
            customerCountry: '',
            contactPerson: '',
            contactPersonEmail: '',
            contactPersonPhoneNumber: '',
        }
    });

    const onSubmit = (values) => {
        console.log("clicked");
        console.log(values);
    };
    
    return (
        <div className='p-5 md:p-0 flex flex-col justify-start'>
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
                                    <Input placeholder="Company Name" {...field} />
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
                                <Input placeholder="customer@mail.com" {...field} />
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
                                <Input placeholder="+8801767476903" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
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
                                <Input placeholder="" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                    />
                </div>
                <div className="col-span-6 md:col-span-6 flex justify-center items-center mt-7">
                    <Button type="submit" className={cn('text-white')}>Submit</Button>
                </div>

                </form>
            </Form>


        </div>
    )
}

export default CustomerDetails