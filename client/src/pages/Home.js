import React, { useEffect, useState } from 'react'
import Switch from '../components/Switch'
import { EuiPanel, useGeneratedHtmlId, EuiLoadingSpinner } from '@elastic/eui'
import TextBox from '../components/TextBox'
import Table from '../components/Table'
import getJson from '../utils/getJson'
import baseUrl from '../utils/baseUrl'

const Home = () => {
  const basicButtonGroupPrefix = useGeneratedHtmlId({
    prefix: 'buttonGroup',
  })
  const [mode, setMode] = useState(`${basicButtonGroupPrefix}__0`)
  const [isLoading, setIsLoading] = useState(true)
  const [json, setJson] = useState([])

  useEffect(() => {
    getJson(setJson, baseUrl).then(() => setIsLoading(false))
  }, [])
  return (
    <>
      <Switch
        basicButtonGroupPrefix={basicButtonGroupPrefix}
        mode={mode}
        setMode={setMode}
      />
      <EuiPanel className='BasePanel'>
        {isLoading ? (
          <EuiLoadingSpinner className='Spinner' size='xl' />
        ) : mode === `${basicButtonGroupPrefix}__0` ? (
          <TextBox json={json} />
        ) : (
          <Table json={json} />
        )}
      </EuiPanel>
    </>
  )
}

export default Home
