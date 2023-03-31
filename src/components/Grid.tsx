'use client'

import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import '@/styles/Grid.css'

// Row Data interface
interface ICar {
  make: string
  model: string
  price: number
}

const Grid = () => {
  const gridRef = useRef<AgGridReact<ICar> | null>(null) // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState([]) // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' },
  ])

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  )

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event: any) => {
    console.log('cellClicked', event)
  }, [])

  // Example load data from server
  // useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/row-data.json')
  //     .then((result) => result.json())
  //     .then((rowData) => setRowData(rowData))
  //     console.log(rowData)

  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://www.ag-grid.com/example-assets/row-data.json'
      )
      const rowData = result.data
      setRowData(rowData)
    }
    fetchData()
    console.log('hello')
  }, [])

  // Example using Grid's API
  const buttonListener = useCallback((e: any) => {
    gridRef.current?.api.deselectAll()
  }, [])

  console.log(rowData)

  const rowClass = [
    'bg-white',
    'text-slate-700',
    'dark:text-slate-300',
    'dark:bg-slate-900',
    'border-slate-300',
    'dark:border-slate-700',
    'backdrop-blur-sm/75',
  ]

  return (
    <div>
      {/* Example using Grid's API */}
      <button onClick={buttonListener}>Push Me</button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div
        className='flex-1 ag-theme-alpine'
        style={{ width: 500, height: 500 }}
      >
        <AgGridReact<ICar>
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={false} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          rowClass={rowClass}
        />
      </div>
    </div>
  )
}

export default Grid
