import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import List from './List'

const TabPane = Tabs.TabPane

const EnumModelStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}


const Index = ({ model, dispatch, loading, location }) => {
  const { list, pagination } = model
  const { query = {}, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['model/query'],
    publish: true,
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }
  const unlistProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['model/query'],
    publish: false,
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }
  const handleTabClick = (key) => {
    dispatch(routerRedux.push({
      pathname,
      query: {
        status: key,
      },
    }))
  }

  return (<div className="content-inner">
    <Tabs activeKey={query.status === String(EnumModelStatus.UNPUBLISH) ? String(EnumModelStatus.UNPUBLISH) : String(EnumModelStatus.PUBLISHED)} onTabClick={handleTabClick}>
      <TabPane tab="Encapsulation" key={String(EnumModelStatus.PUBLISHED)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="UnEncapsulation" key={String(EnumModelStatus.UNPUBLISH)}>
        <List {...unlistProps} />
      </TabPane>
    </Tabs>
  </div>)
}

Index.propTypes = {
  model: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ model, loading }) => ({ model, loading }))(Index)
