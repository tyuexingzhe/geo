import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
const Detail = ({ resourceDetail }) => {
  const { data } = resourceDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className="content-inner">
    <div className={styles.content}>
      {content}
    </div>
    <Button className={styles.button} type='primary'><Link to={`/mdltree/${data.id}`} >Create Model</Link></Button>
  </div>)
}

Detail.propTypes = {
  resourceDetail: PropTypes.object,
}

export default connect(({ resourceDetail, loading }) => ({ resourceDetail, loading: loading.models.resourceDetail }))(Detail)
