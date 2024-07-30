import * as z from 'zod';

export const CustomerSchema = z.object({
    customer: z.string().trim().min(1, { message: 'Customer name is required' }),
    projectType: z.string().trim().min(1, { message: 'Project type is required' }),
    woPoReference: z.string().trim().min(1, { message: 'Work-order/Pay-order reference is required' }),
    woPoValue: z.string().trim().min(1, { message: 'Work-order/Pay-order value is required' }),
    woPoDate: z.string().trim().min(1, { message: 'Work-order/Pay-order date is required' }),
    woPoReceivedDate: z.string().trim().min(1, { message: 'Work-order/Pay-order received date is required' }),
})