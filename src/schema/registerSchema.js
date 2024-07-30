import * as z from 'zod';

export const RegisterSchema = z.object({
    companyName: z.string().trim().min(1, { message: 'Company name is required' }),
    companyIndustry: z.string().trim().min(1, { message: 'Industry is required' }),
    companySize: z.string().trim().min(1, { message: 'Company size is required' }),
    companyStreetAddress: z.string().trim().min(1, { message: 'Street address is required' }),
    companyCity: z.string().trim().min(1, { message: 'City is required' }),
    companyStateOrProvince: z.string().trim().min(1, { message: 'State/Province is required' }),
    companyPostalCode: z.string().trim().min(1, { message: 'Postal code is required' }),
    companyCountry: z.string().trim().min(1, { message: 'Country is required' }),
    companyPhoneNumber: z.string().trim().min(1, { message: 'Phone number is required' }),
    companyEmailAddress: z.string().trim().min(1, { message: 'Email is required' }),

    contactPersonFirstName: z.string().trim().min(1, { message: "Contact person's first name is required"}),
    contactPersonLastName: z.string().trim().min(1, { message: "Contact person's last name is required" }),
    contactPersonPhoneNumber: z.string().trim().min(1, { message: "Contact person's phone number is required" }),
    contactPersonEmailAddress: z.string().trim().min(1, { message: "Contact person's email address is required" }),
    contactPersonDesignation: z.string().trim().min(1, { message: "Contact person's designation is required" }),

    accountInformationFirstName: z.string().trim().min(1, { message: 'Required' }),
    accountInformationLastName: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPhoneNumber: z.string().trim().min(1, { message: 'Required' }),
    accountInformationAddress: z.string().trim().min(1, { message: 'Required' }),
    accountInformationDesignation: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPassword: z.string().trim().min(1, { message: 'Required' }),
    accountInformationPasswordConfirm: z.string().trim().min(1, { message: 'Required' }),

    subscriptionPlan: z.string().trim().min(1, { message: 'Required' }),

})


