import React from 'react'
import { EuiInMemoryTable, EuiLink, EuiIcon } from '@elastic/eui'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Table = ({ json }) => {
  const navigate = useNavigate()
  const columns = [
    {
      field: 'id',
      name: 'ID',
      truncateText: true,
      width: '5%',
    },
    {
      field: 'postId',
      name: 'Post ID',
      truncateText: true,
      width: '5%',
    },
    {
      field: 'name',
      name: 'Name',
      truncateText: true,
    },
    {
      field: 'email',
      name: 'Email',
      truncateText: true,
      width: '20%',
    },
    {
      field: 'body',
      name: 'Body',
      truncateText: true,
    },
    {
      field: 'id',
      name: 'Link',
      render: (id) => (
        <EuiLink onClick={() => navigate(`/${id}`)} target='_blank'>
          <EuiIcon type='symlink' />
        </EuiLink>
      ),
      width: '5%',
    },
  ]

  const pagination = {
    initialPageSize: 25,
    showPerPageOptions: false,
  }

  const search = {
    box: {
      incremental: true,
    },
  }

  const handleClick = (e) => {
    console.log(e.target.id)
  }

  return (
    <>
      <EuiInMemoryTable
        tableCaption='Demo for EuiBasicTable with pagination'
        items={json}
        itemId='id'
        columns={columns}
        search={search}
        pagination={pagination}
        onClick={handleClick}
      />
    </>
  )
}

Table.propTypes = {
  json: PropTypes.array,
}

export default Table
