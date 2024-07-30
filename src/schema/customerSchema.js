import * as z from 'zod';

export const CustomerSchema = z.object({
    customerName: z.string().trim().min(1, { message: 'Customer name is required' }),
    customerEmail: z.string().trim().min(1, { message: "Customer's email is required" }),
    customerPhoneNumber: z.string().trim().min(1, { message: "Customer's phone number is required" }), 
    customerStreetAddress: z.string().trim().min(1, { message: "Customer's Street address is required" }),
    customerCity: z.string().trim().min(1, { message: "Customer's City is required" }),
    customerStateOrProvince: z.string().trim().min(1, { message: "Customer's State/Province is required" }),
    customerPostalCode: z.string().trim().min(1, { message: "Customer's Postal code is required" }),
    customerCountry: z.string().trim().min(1, { message: "Customer's Country is required" }),
    
    contactPerson: z.string().trim().min(1, { message: 'Contact person is required' }), 
    contactPersonEmail: z.string().trim().min(1, { message: "Contact person's email is required" }),
    contactPersonPhoneNumber: z.string().trim().min(1, { message: "Contact person's phone number is required" }),  
})