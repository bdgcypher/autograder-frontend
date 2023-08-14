import React from 'react'
import CreateRubric from './CreateRubric'
import CreateDescription from './CreateDescription'

export default function CreateAssignment({ setBreadcrumbData, }) {
  return (
    <div className="mt-10 lg:col-span-11">
        <CreateDescription />
        <CreateRubric setBreadcrumbData={setBreadcrumbData} />
    </div>
  )
}

