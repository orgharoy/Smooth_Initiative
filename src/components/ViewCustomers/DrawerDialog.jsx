import React from 'react'
import { cn } from "@/lib/utils"
import { MoreHorizontal } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import CustomerDetails from './CustomerDetails'

const DrawerDialog = ({rowData}) => {

    return (
        <>
            <div className="hidden md:block">
                <Dialog>
                    <DialogTrigger className={cn('cursor-pointer')}>
                        <MoreHorizontal />
                    </DialogTrigger>
                    <DialogContent>
                        <CustomerDetails rowData = {rowData}/>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="block md:hidden">
                <Drawer>
                    <DrawerTrigger className={cn('cursor-pointer')}>
                        <MoreHorizontal />
                    </DrawerTrigger>
                    <DrawerContent className='fixed bottom-0 left-0 right-0 max-h-[90dvh]'>
                        <ScrollArea className='overflow-auto'>
                            <CustomerDetails rowData = {rowData}/>
                        </ScrollArea>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )

}

export default DrawerDialog