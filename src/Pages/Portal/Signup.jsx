import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schema/registerSchema';
import {BookCopy, UserRoundSearch, UserPlus, GanttChart, HandCoins } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageOne from '@/components/signup/PageOne.jsx';
import PageTwo from '@/components/signup/PageTwo.jsx';
import PageThree from '@/components/signup/PageThree.jsx';
import PageFour from '@/components/signup/PageFour.jsx';
import PageFive from '@/components/signup/PageFive.jsx';

const Signup = () => {
  const [pageNum, setPageNum] = useState(1);
  const pageNames = [
    { title: 'Company Information', icon: <BookCopy className="m-2 inline-block" /> },
    { title: 'Primary Contact Person', icon: <UserRoundSearch className="m-2 inline-block" /> },
    { title: 'Account Information', icon: <UserPlus className="m-2 inline-block" /> },
    { title: 'Plan Information', icon: <GanttChart className="m-2 inline-block" /> },
    { title: 'Billing Information', icon: <HandCoins className="m-2 inline-block" /> }
  ]
  const [direction, setDirection] = useState(0);
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      companyName: '',
      companyIndustry: '',
      companySize: '',
      companyStreetAddress: '',
      companyCity: '',
      companyStateOrProvince: '',
      companyPostalCode: '',
      companyCountry: '',
      companyPhoneNumber: '',
      companyEmailAddress: '',
      contactPersonFirstName: '',
      contactPersonLastName: '',
      contactPersonPhoneNumber: '',
      contactPersonEmailAddress: '',
      contactPersonDesignation: '',
      accountInformationFirstName: '',
      accountInformationLastName: '',
      accountInformationPhoneNumber: '',
      accountInformationAddress: '',
      accountInformationDesignation: '',
      accountInformationPassword: '',
      accountInformationPasswordConfirm: '',
      subscriptionPlan: '',
    }
  });

  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
      width: '100%',
      height: '100%'
    }),
    animate: {
      x: 0,
      opacity: 1,
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    transition: { type: 'spring', stiffness: 400, damping: 40 },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
      width: '100%',
      height: '100%'
    }),
  };

  const onSubmit = (values) => {
    console.log("clicked");
    console.log(values);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setPageNum((prevPageNum) => prevPageNum === 1 ? 1 : prevPageNum - 1);
  };

  const handleNext = async () => {
    let isValid = true;

    if (pageNum === 1) {
      isValid = await form.trigger(['companyName', 'companyIndustry', 'companySize', 'companyStreetAddress', 'companyCity', 'companyStateOrProvince', 'companyPostalCode', 'companyCountry', 'companyPhoneNumber', 'companyEmailAddress']);
    } else if (pageNum === 2) {
      isValid = await form.trigger(['contactPersonFirstName', 'contactPersonLastName', 'contactPersonPhoneNumber', 'contactPersonEmailAddress', 'contactPersonDesignation',]);
    } else if (pageNum === 3) {
      isValid = await form.trigger(['accountInformationFirstName', 'accountInformationLastName', 'accountInformationPhoneNumber','accountInformationAddress','accountInformationDesignation','accountInformationPassword','accountInformationPasswordConfirm',]);
    } else if (pageNum === 4) {
      isValid = await form.trigger(['subscriptionPlan']);
    }

    if (isValid) {
      setDirection(1);
      setPageNum((prevPageNum) => (prevPageNum === 5 ? 5 : prevPageNum + 1));
    }

  };

  const pages = [
    <PageOne form={form} />,
    <PageTwo form={form} />,
    <PageThree form={form} />,
    <PageFour form={form} />,
    <PageFive form={form} />
  ];

  return (
    <main className="">
      <div className='w-full md:grid grid-cols-8'>
        <div className="col-span-2 mt-5 md:space-y-3 md:pr-10 pr-0 w-full flex justify-between md:inline">
          {pageNames.map((page, index) => (
              <div key={index} className="transition-all relative flex flex-col md:flex-row items-center md:gap-3 p-2">
                <div className={`z-10 ${pageNum === index + 1 ? 'text-white dark:text-foreground' : 'text-foreground'} `}>
                  {page.icon}
                </div>
                <div className="z-10">
                  <h7 className={`text-sm hidden md:block font-semibold transition-all ${pageNum === index + 1 ? 'text-white dark:text-foreground' : 'text-muted-foreground'} `}>Step {index + 1}</h7>
                  <h4 className={`md:block font-semibold transition-all ${pageNum === index + 1 ? 'text-white text-xs md:text-base block' : 'text-foreground hidden'}`}>{page.title}</h4>
                </div>

                {pageNum === index + 1 && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute md:-left-3 top-0 h-full w-full md:w-[calc(100%+12px)] bg-primary rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            ))}
        </div>
        <div className="col-span-6 pt-5 min-h-[calc(90vh-64px)] overflow-hidden px-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full">
              <div className='h-full relative flex'>
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={pageNum}
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    className="relative w-full h-full"
                  >
                    {pages[pageNum - 1]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex space-x-4 mt-2">
                {pageNum != 1 && (
                  <Button type="button" variant="secondary" onClick={handlePrevious}>Previous</Button>
                )}
                {pageNum != 5 ? (
                  <Button type="button" onClick={handleNext}>Next</Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Signup
