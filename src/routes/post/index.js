import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import List from './List'

const TabPane = Tabs.TabPane

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}


const Index = ({ post, dispatch, loading, location }) => {
  const { list, pagination } = post
  const { query = {}, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['post/query'],
    publish: true,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          status: 2,
          page: page.current,
          pageSize: page.pageSize,
          total:page.total
        },
      }))
    },
  }

  const unlistProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['post/query'],
    publish: true,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          status: 1,
          page: page.current,
          pageSize: page.pageSize,
          total:page.total
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
    <Tabs defaultActiveKey={query.status === String(EnumPostStatus.UNPUBLISH) ? String(EnumPostStatus.UNPUBLISH) : String(EnumPostStatus.PUBLISHED)} onTabClick={handleTabClick}>
      <TabPane tab="Encapsulation" key={String(EnumPostStatus.PUBLISHED)}>
        <List {...listProps} />
      </TabPane>
      <TabPane tab="UnEncapsulation" key={String(EnumPostStatus.UNPUBLISH)}>
        <List {...unlistProps} />
      </TabPane>
    </Tabs>
  </div>)
}

Index.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ post, loading }) => ({ post, loading }))(Index)
