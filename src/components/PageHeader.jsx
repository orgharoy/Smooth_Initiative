import React from 'react'

const PageHeader = ({heading}) => {
  return (
    <div className="mb-10 space-y-3">
        <h3 className="font-semibold text-2xl">{heading.header}</h3>
        {
            heading.description && 
            <p className="text-muted-foreground text-sm font-normal">{heading.description}</p>
        }
    </div>
  )
}

export default PageHeader