import React from 'react'
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from '../ui/form'
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { cn } from '@/lib/utils'

const PageFour = ({ form }) => {
  const plans = [
    {
        value: 'oneMonth',
        title: '1 Month',
        description: 'Basic access for 1 month.',
        price: '$10',
    },
    {
        value: 'sixMonth',
        title: '6 Months',
        description: 'Standard access for 6 months.',
        price: '$50',
    },
    {
        value: 'twelveMonth',
        title: '12 Months',
        description: 'Premium access for 12 months.',
        price: '$90',
    },
    
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-5 h-full pb-10">
            <FormField
                control={form.control}
                name="subscriptionPlan"
                render={({ field }) => (
                    <FormItem className="space-y-3 h-full">
                        <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid gap-4 grid-cols-3 h-full">
                                {plans.map((plan) => (
                                    <FormItem key={plan.value} onClick={() => field.onChange(plan.value)} className={cn('h-full flex flex-col justify-between p-5 border rounded-lg w-full', field.value === plan.value ? 'bg-blue-500 text-white' : 'bg-white text-black','hover:bg-blue-500 hover:text-white')}>
                                        <div>
                                            <FormControl>
                                                <RadioGroupItem value={plan.value} className="hidden"/>
                                            </FormControl>
                                            <FormLabel className="font-bold text-lg">{plan.title}</FormLabel>
                                            <div className="text-sm">{plan.description}</div>
                                        </div>
                                        <div className="font-semibold">{plan.price}</div>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />

      </div>
  );
}

export default PageFour