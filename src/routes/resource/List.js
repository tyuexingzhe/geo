import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
  location.query = queryString.parse(location.search)

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: text => <img alt={'avatar'} width={24} src={text} />,
    }, {
      title: 'Owner',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`resource/${record.id}`}>{text}</Link>,
    }, {
      title: 'HardWare',
      dataIndex: 'hardware',
      key: 'hardware',
    }, {
      title: 'SoftWare',
      dataIndex: 'software',
      key: 'software',
      className: styles.software,
      render: (text, record) => <Link to={`resource/${record.id}`}>{text}</Link>,
    }, {
      title: 'Used',
      dataIndex: 'isUsed',
      key: 'isUsed',
      render: text => (<span>{text
        ? 'Use'
        : 'unUse'}</span>),
    }, {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },{
      title: 'Port',
      dataIndex: 'port',
      key: 'port',
    },{
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    }, {
      title: 'CreateTime',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
      },
    },
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = (body) => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
