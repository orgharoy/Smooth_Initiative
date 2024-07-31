import React from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"
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
                        <DialogTitle className={cn('mb-5')}>
                            Customer Details
                        </DialogTitle>
                        <CustomerDetails rowData = {rowData}/>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="block md:hidden">
                <Drawer>
                    <DrawerTrigger className={cn('cursor-pointer')}>
                        <MoreHorizontal />
                    </DrawerTrigger>
                    <DrawerContent>
                        <CustomerDetails rowData = {rowData}/>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )

}

export default DrawerDialog