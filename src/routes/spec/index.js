import React from 'react'
import Mock from 'mockjs'
import {request, config} from 'utils'
import {
    Row,
    Col,
    Card,
    Select,
    Input,
    Button,
    Tree,
    Checkbox,
    Tabs,
    Icon,
    Table
} from 'antd'
import {Iconfont} from 'components'
import styles from './index.less'
require('./index.css')


const TabPane = Tabs.TabPane
const {api} = config
const {
    dashboard,
    users,
    resources,
    resource,
    userLogin,
    user,
    v1test,
    v2test
} = api
const TreeNode = Tree.TreeNode

export default class Spec extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          method: 'get',
          result: '',
          Filetree: { filetree: 'Loading...' },
        }
      }
    render() {
        const colProps = {
            lg: 24,
            md: 24,
        }
        const { result , Filetree } = this.state

        const columns = [{
            title: '通讯接口',
            dataIndex: 'name',
          }, {
            title: '参数',
            dataIndex: 'parameter',
          }, {
            title: '是否可修改',
            dataIndex: 'modify',
          }];
          const data = [{
            key: '1',
            name: 'enter()',
            parameter: 'null',
            modify: 'false',
          }, {
            key: '2',
            name: 'request()',
            parameter: 'null',
            modify: 'false',
          }, {
            key: '3',
            name: 'checkdata()',
            parameter: 'null',
            modify: 'false',
          }, {
            key: '4',
            name: 'calculate()',
            parameter: 'null',
            modify: 'false',
          }, {
            key: '5',
            name: 'checkres()',
            parameter: 'null',
            modify: 'false',
          }, {
            key: '6',
            name: 'end()',
            parameter: 'null',
            modify: 'false',
          }];

          const columns1 = [{
            title: '权限接口',
            dataIndex: 'name',
          }, {
            title: '参数',
            dataIndex: 'parameter',
          }, {
            title: '是否可修改',
            dataIndex: 'modify',
          }];
          const data1 = [{
            key: '1',
            name: 'changeModel()',
            parameter: 11,
            modify: 'true',
          }, {
            key: '2',
            name: 'changeConfig()',
            parameter: 22,
            modify: 'true',
          }, {
            key: '3',
            name: 'changeLicence()',
            parameter: 33,
            modify: 'true',
          }, {
            key: '4',
            name: 'Init()',
            parameter: 33,
            modify: 'true',
          }];
          
        
          return (
            <Tabs defaultActiveKey='1' >
                <TabPane tab="接口规范" key='1'>
                    <Row gutter={32}>
                        <Col {...colProps}>
                            <Card 
                            style={{
                                overflow: 'visible',
                            }}
                            >
                                <Col span={24}>
                                    <Table columns={columns} dataSource={data} size="middle" />
                                    <Table columns={columns1} dataSource={data1} size="middle" />
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="模型规范" key='2'>
                    <Row gutter={32}>
                        <Col {...colProps}>
                            <Card title="Model Structure"
                            style={{
                                overflow: 'visible',
                            }}
                            >
                            <Col span={11} className={styles.tree}>
                                {Filetree.filetree}
                            </Col>
                            <Col span={2} >
                                <Iconfont className={styles.icon} type={'setting'} />
                            </Col>
                            <Col span={11} className={styles.tree}>
                                <Tree
                                showLine
                                defaultExpandedKeys={['0-0']}
                                onSelect={this.onSelect}
                                >
                                <TreeNode title="Model Name" key="0-0"> 
                                    <TreeNode title="model(755)" key="0-0-0">
                                        <TreeNode title="exe(644)" key="0-0-0-0" />
                                        <TreeNode title="others(644)" key="0-0-0-1" />
                                    </TreeNode>
                                    <TreeNode title="supportive(755)" key="0-0-1">
                                        <TreeNode title="others(644)" key="0-0-1-0" />
                                    </TreeNode>
                                    <TreeNode title="testify(755)" key="0-0-2">
                                        <TreeNode title="demoData(644)" key="0-0-2-0" />
                                        <TreeNode title="others(644)" key="0-0-2-1" />
                                    </TreeNode>
                                        <TreeNode title="licence.txt(654)" key="0-0-3" />
                                        <TreeNode title="package.config(654)" key="0-0-4" />
                                    </TreeNode>
                                </Tree>
                            </Col>
                            </Card>
                            <Row>
                                <Col span={24}>
                                    <Card title={<span className="title">Matching</span>}
                                    style={{
                                        overflow: 'visible',
                                    }}
                                    >
                                    <div>
                                        <Checkbox className={styles.checkbox} defaultChecked={false} disabled>folder structure</Checkbox>
                                        <br />
                                        <Checkbox className={styles.checkbox} defaultChecked disabled >Software Environment</Checkbox>
                                        <br />
                                        <Checkbox className={styles.checkbox} defaultChecked disabled >isEncapsulation</Checkbox>
                                    </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="模型模板下载" key='3'>
                    <Row gutter={32}>
                        <Col {...colProps}>
                            <Card 
                            style={{
                                overflow: 'visible',
                            }}
                            >
                                <Col span={24}>
                                    <div className={styles['m-spec-d-r']} id="auto-id-1510238039726">
                                        <div className={`${styles['tool-part']} ${styles['tool-tag']}`} id="auto-id-1510238039725">
                                            <div className={styles['t-part-head']} >工具标识</div>
                                            <div className={styles['t-part-content']} id="auto-id-1510238039724">
                                                <div className={styles['desc']} >
                                                    <p>每个规范都有唯一的标识 key，
                                                        <a target="_blank" className={styles['link']} href="https://github.com/NEYouFan/nei-toolkit/">构建工具</a>可以使用这个 key 来请求规范的所有资源数据，您可以使用下面的命令来构建规范的初始工程目录结构：</p>
                                                </div>
                                                <pre className={styles['copy-txt']} id="auto-id-1510238039723"><code className={`${styles['sample-code']} ${styles['hljs']} ${styles['nginx']}`} id="auto-id-1510238039722"><span className={styles['hljs-attribute']} ></span> build  <span className={styles['key']} id="auto-id-1510238039728">08a664b97ff4bff5ab230244499152ac</span></code></pre>
                                                <div className={`${styles['tool-icon']} ${styles['u-icon-file-normal']} ${styles['copy-btn']}`} title="复制" id="auto-id-1510238039717"></div>
                                                <div className={`${styles['tool-icon']} ${styles['u-icon-refresh-normal']} ${styles['refresh-btn']} ${styles['f-dn']}`} title="重新生成key"></div>
                                                <div className={styles['desc']} id="auto-id-1510238039730">
                                                    <p id="auto-id-1510238039729">
                                                        <a target="_blank" href="https://github.com/NEYouFan/nei-toolkit/">构建工具</a>的更多指令和用法请查看它的使用文档。</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles['m-map-wrap']} ${styles['m-rule-wrap']}`} >
                                            <div className={styles['m-map-title m-rule-title']} >变量映射规则：</div>
                                            <div className={styles['m-map-list m-rule-list auto-1510238039253-parent']} >
                                                <div className={styles['m-editor m-editor-preview auto-1510238039253']} id="auto-id-1510238039712">
                                                    <div className={styles['j-editor']} >
                                                        <div className={styles['m-paramslist']} >
                                                            <div className={styles['list-body']} >
                                                                <div className={styles['fullScreen']} title="全屏" style={{display:'none'}}>
                                                                    <i className={styles['u-icon-spread-normal']} ></i>
                                                                </div>
                                                                <div className={styles['list-row list-header']} >
                                                                    <div className={styles['list-col']} >
                                                                        <em>数据模型</em>
                                                                    </div>
                                                                    <div className={styles['list-col ']} >
                                                                        <em>变量名称</em>
                                                                    </div>
                                                                    <div className={styles['list-col list-col-do']} ></div>
                                                                </div>
                                                                <div className={styles['list-row list-empty']} >
                                                                    <div>没有变量映射规则</div>

                                                                </div>

                                                            </div>
                                                            <div className={styles['action-row']} style={{display:'none'}}>
                                                                <span className={styles['add']} >
                                                                    <i className={styles['u-icon u-icon-add-editor-normal']} ></i>
                                                                    <i className={styles['u-icon u-icon-add-editor-hover']} ></i>
                                                                    <i className={styles['u-icon u-icon-add-editor-pressed']} ></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['m-map-wrap m-jar-wrap f-dn']} >
                                            <div className={styles['m-map-title m-jar-title']} >实例名和类名的映射规则：</div>
                                            <div className={styles['m-map-list m-jar-list auto-1510238039253-parent']} >
                                                <div className={styles['m-editor m-editor-preview auto-1510238039253']} id="auto-id-1510238039719">
                                                    <div className={styles['j-editor']} >
                                                        <div className={styles['m-paramslist']} >
                                                            <div className={styles['list-body']} >
                                                                <div className={styles['list-row list-header']} >
                                                                    <div className={styles['list-col']} >
                                                                        <em>实例名</em>
                                                                    </div>
                                                                    <div className={styles['list-col ']} >
                                                                        <em>类名</em>
                                                                    </div>
                                                                    <div className={styles['list-col list-col-do']} ></div>
                                                                </div>
                                                                <div className={styles['list-row list-empty']} >
                                                                    <div>没有参数信息</div>

                                                                </div>

                                                            </div>
                                                            <div className={styles['action-row']} style={{display:'none'}}>
                                                                <span className={styles['add']} >
                                                                    <i className={styles['u-icon u-icon-add-editor-normal']} ></i>
                                                                    <i className={styles['u-icon u-icon-add-editor-hover']} ></i>
                                                                    <i className={styles['u-icon u-icon-add-editor-pressed']} ></i>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="模型部署" key='4'>
                    <div className={styles['m-no-doc']}>
                        <div className={styles['u-icon-no-document']}></div>
                        <div className={styles['no-doc-tip']}>暂无部署结构</div>
                    </div>          
                </TabPane>
            </Tabs>
        )
    }
}