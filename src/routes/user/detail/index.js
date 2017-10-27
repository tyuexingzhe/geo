import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Cpu } from '../../dashboard/components'
import { Card } from 'antd'

const Detail = ({ userDetail, cpu }) => {
  const { data } = userDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  const bodyStyle = {
    bodyStyle: {
      height: 432,
      background: '#fff',
    },
  }
  return (<div className="content-inner">
    <div className={styles.content}>
      {content}
    </div>
    <div>
      <Card bordered={false} {...bodyStyle}>
        <Cpu {...cpu} />
      </Card>
    </div>
  </div>)
}

Detail.propTypes = {
  userDetail: PropTypes.object,
  cpu: PropTypes.object,
}

export default connect(({ userDetail, loading }) => ({ userDetail, loading: loading.models.userDetail }))(Detail)
