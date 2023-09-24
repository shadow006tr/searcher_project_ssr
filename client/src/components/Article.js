import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import getJson from '../utils/getJson'
import { EuiPanel, EuiSpacer, EuiTitle, EuiText } from '@elastic/eui'
import baseUrl from '../utils/baseUrl'

const Article = ({ uuid }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    getJson(setData, baseUrl + uuid)
  }, [])
  return (
    <>
      <EuiPanel className='BasePanel'>
        {data && (
          <>
            <EuiTitle size='l'>
              <h1>{data.name}</h1>
            </EuiTitle>
            <EuiSpacer size='s' />
            <EuiTitle size='s'>
              <h3>By {data.email}</h3>
            </EuiTitle>
            <EuiSpacer size='xl' />
            <EuiText grow={true}>
              <p>{data.body}</p>
            </EuiText>
          </>
        )}
      </EuiPanel>
    </>
  )
}

Article.propTypes = {
  uuid: PropTypes.string,
}
export default Article
