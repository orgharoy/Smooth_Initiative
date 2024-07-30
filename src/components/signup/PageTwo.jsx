import React from 'react'
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from '../ui/form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

const PageTwo = ({ form }) => {
    const designations = ["Administration", "Finance", "Marketing", "Sales", "Human Resources", "Information Technology", "Customer Service", "Operations",  "Legal", "Research and Development", "Quality Assurance", "Product Management", "Procurement", "Supply Chain Management",  "Logistics", "Training and Development", "Compliance", "Public Relations", "Engineering", "Design",  "Business Development", "Facilities Management", "Security", "Corporate Strategy", "Investor Relations"];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonFirstName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>First Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="John" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="contactPersonLastName"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Last Name<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="Doe" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonPhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Phone Number<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="contactPersonEmailAddress"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Email Address<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <FormField
                    control={form.control}
                    name="contactPersonDesignation"
                    render={({ field }) => (
                        <FormItem>
                            <div className="w-full flex items-center justify-between h-4">
                                <FormLabel>Designation<span className="text-red-600 ml-1">*</span></FormLabel>
                                <div>
                                    <FormMessage/>
                                </div>
                            </div>
                            
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {designations.map((designation, index) => (
                                        <SelectItem key={index} value={designation}>
                                        {designation}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

            </div>
        </>
    )
}

export default PageTwo