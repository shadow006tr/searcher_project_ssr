import React from 'react'
import { EuiText } from '@elastic/eui'
import JSONPretty from 'react-json-pretty'
import PropTypes from 'prop-types'
const TextBox = ({ json }) => {
  // const stringJson = JSON.stringify(json, null, 2)

  return (
    <EuiText grow={true}>
      {json && (
        <div className='TextBox eui-yScrollWithShadows'>
          {/*<pre>{stringJson}</pre>*/}
          <JSONPretty id='json-pretty' className='JSONText' data={json} />
        </div>
      )}
    </EuiText>
  )
}

TextBox.propTypes = {
  json: PropTypes.array,
}

export default TextBox
