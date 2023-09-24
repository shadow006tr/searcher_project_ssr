import React from 'react'
import { EuiButtonGroup } from '@elastic/eui'
import PropTypes from 'prop-types'

const Switch = ({ basicButtonGroupPrefix, mode, setMode }) => {
  const onChange = (optionId) => {
    setMode(optionId)
  }

  const toggleButtons = [
    {
      id: `${basicButtonGroupPrefix}__0`,
      label: 'Json',
    },
    {
      id: `${basicButtonGroupPrefix}__1`,
      label: 'Table',
    },
  ]

  return (
    <EuiButtonGroup
      legend='This is a basic group'
      options={toggleButtons}
      idSelected={mode}
      onChange={(id) => onChange(id)}
      color='primary'
    />
  )
}

Switch.propTypes = {
  basicButtonGroupPrefix: PropTypes.string,
  mode: PropTypes.string,
  setMode: PropTypes.func,
}
export default Switch
