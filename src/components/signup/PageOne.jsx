import React from 'react'
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from '../ui/form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

const pageOne = ({ form }) => {
  const industries = ["Agriculture", "Automotive", "Banking & Financial Services", "Biotechnology", "Construction", "Consumer Goods",  "Education",  "Energy",  "Entertainment & Media",  "Environmental Services", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Information Technology", "Insurance", "Manufacturing", "Mining", "Non-Profit", "Pharmaceuticals", "Real Estate", "Retail", "Telecommunications", "Transportation & Logistics", "Travel & Tourism"];
  const companySizes = ["5-9", "10-50", "51-100", "101-500", "501 and above"];
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda"]; 

  return (
    <>
        <div className="mb-5">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Company Name<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <FormControl>
                          <Input placeholder="Jahed International Corp" {...field} />
                      </FormControl>

                  </FormItem>
              )}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <FormField
              control={form.control}
              name="companyIndustry"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Industry<span className="text-red-600 ml-1">*</span></FormLabel>
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
                              {industries.map((industry, index) => (
                                  <SelectItem key={index} value={industry}>
                                  {industry}
                                  </SelectItem>
                              ))}
                          </SelectContent>
                      </Select>
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Company Size<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                          <SelectTrigger>
                              <SelectValue placeholder="Company Size" />
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                              {companySizes.map((companySize, index) => (
                                  <SelectItem key={index} value={companySize}>
                                  {companySize}
                                  </SelectItem>
                              ))}
                          </SelectContent>
                      </Select>
                    </FormItem>
              )}
            />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <FormField
              control={form.control}
              name="companyStreetAddress"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Street Address<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      <FormControl>
                          <Input placeholder="Street Address" {...field} />
                      </FormControl>
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyCity"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>City<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <FormControl>
                          <Input placeholder="City" {...field} />
                      </FormControl>
                  </FormItem>
              )}
            />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            <FormField
              control={form.control}
              name="companyStateOrProvince"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>State/Province<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <FormControl>
                          <Input placeholder="State/Province" {...field} />
                      </FormControl>
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyPostalCode"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Postal Code<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <FormControl>
                          <Input placeholder="Postal Code" {...field} />
                      </FormControl>
                  </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyCountry"
              render={({ field }) => (
                  <FormItem>
                      <div className="w-full flex items-center justify-between h-4">
                          <FormLabel>Country<span className="text-red-600 ml-1">*</span></FormLabel>
                          <div>
                              <FormMessage/>
                          </div>
                      </div>
                      
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                          <SelectTrigger>
                              <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                              {countries.map((country, index) => (
                                  <SelectItem key={index} value={country}>
                                  {country}
                                  </SelectItem>
                              ))}
                          </SelectContent>
                      </Select>
                  </FormItem>
              )}
            />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <FormField
              control={form.control}
              name="companyPhoneNumber"
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
              name="companyEmailAddress"
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
    </>
)
}

export default pageOne