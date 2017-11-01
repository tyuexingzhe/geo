import React from 'react'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  console.log(tableProps.publish)
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      className: styles.image,
      width: 64,
      render: text => <img alt="Feture" width={26} src={text} />,
    }, {
      title: 'Model Name',
      dataIndex: 'title',
      render: (text, record) => <Link to={`model/${record.id}`}>{text}</Link>,
    }, {
      title: 'Author',
      dataIndex: 'author',
    }, {
      title: 'Categories',
      dataIndex: 'categories',
    }, {
      title: 'Tags',
      dataIndex: 'tags',
    }, {
      title: 'Visibility',
      dataIndex: 'visibility',
    }, {
      title: 'Environment',
      dataIndex: 'environment',
      render: (text, record) => <Link to={`model/${record.id}`}>{text}</Link>,
    }, {
      title: 'Date',
      dataIndex: 'date',
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        if (tableProps.publish === true) {
          return <Button type="primary" size="small" ghost>Match</Button>
        } else {
          return <Button type="primary" size="small" ghost>Encapsulation</Button>
        }
      },
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
