import React from 'react'
import PropTypes from 'prop-types'
import {Card , Button, Input, Row, Col} from 'antd'
import SortableTree, {toggleExpandedForAll,addNodeUnderParent,removeNodeAtPath} from 'react-sortable-tree'
import styles from './index.less'
const jstoxml = require('jstoxml');

const maxDepth = 10
class MdlTree extends React.Component {
    constructor(props) {
        super(props)

        const renderDepthTitle = ({path}) => `Depth: ${path.length}`;

        this.state = {
            searchString: '',
            searchFocusIndex: 0,
            searchFoundCount: null,
            xml:'',
            treemdl: {
                title: 'ModelClass',
                _name: 'ModelClass',
                _attrs: {
                    name: '????Name',
                    uid: '{472F0F71-4DD6-4BE9-86CC-0C6B9BD809D1}',
                    style: 'SimpleCalculation',
                },
                noDragging: true,
                expanded: true,
                _content: [{
                        title: 'AttributeSet',
                        _name:'AttributeSet',
                        noDragging: true,
                        _content: [{
                                title: 'Categories',
                                _name:'Categories',
                                noDragging: true,
                                _content: [{
                                    title: 'Category',
                                    _name : 'Category',
                                    noDragging: true,
                                    _attrs:{
                                        principle: 'principle1',
                                        path: 'path1',
                                    },
                                }]
                            },
                            {
                                title: 'LocalAttributes',
                                _name: 'LocalAttributes',
                                noDragging: true,
                                _content: [{
                                    title: 'LocalAttribute',
                                    _name: 'LocalAttribute',
                                    _attrs:{
                                        local: 'EN_US',
                                        localName: 'name',
                                        wiki: 'http://en.njnu.edu.cn',
                                    },
                                    noDragging: true,
                                    _content: [{
                                        title: 'Keywords',
                                        _name: 'Keywords',
                                        noDragging: true,
                                        _content: 'keyword1; keyword2; keyword3',
                                    }, {
                                        title: 'Abstract',
                                        _name: 'Abstract',
                                        noDragging: true,
                                        _content: 'abstract, this is about some abstract information',
                                    }]
                                }]
                            }
                        ],
                    },
                    {
                        title: 'Behavior',
                        _name: 'Behavior',
                        noDragging: true,
                        _content: [{
                                title: 'RelatedDatasets',
                                _name: 'RelatedDatasets',
                                noDragging: true,
                                _content: [{
                                        title: 'DatasetItem',
                                        _name: 'DatasetItem',
                                        _attrs:{
                                            name: 'data item1',
                                            type: 'internal',
                                            description: 'data item1 description',
                                        },
                                        _content: [{
                                            title: 'UdxDeclaration',
                                            _name: 'UdxDeclaration',
                                            _attrs:{
                                                name: 'UdxDeclaration',
                                                description: '',
                                            },
                                            _content: [{
                                                    title: 'UdxNode',
                                                    _name: 'UdxNode',
                                                    _content: [{
                                                        title: 'UdxNode',
                                                        _name: 'UdxNode',
                                                        _attrs:{
                                                            name: 'name1',
                                                            type: 'DTKT_ANY',
                                                            description: 'description1',
                                                        },
                                                        _content: [{
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs:{
                                                                    name: 'name1_1',
                                                                    type: 'DTKT_ANY',
                                                                    description: 'description1_1',
                                                                },
                                                            },
                                                            {
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs:{
                                                                    name: 'name1_2',
                                                                    type: 'DTKT_ANY',
                                                                    description: 'description1_2',
                                                                },
                                                            }
                                                        ]
                                                    }]
                                                },
                                                {
                                                    title: 'SemanticAttachment',
                                                    _name: 'SemanticAttachment',
                                                    _content: [{
                                                            title: 'Concepts',
                                                            _name: 'Concepts',
                                                        },
                                                        {
                                                            title: 'SpatialRefs',
                                                            _name: 'SpatialRefs',
                                                        },
                                                        {
                                                            title: 'Units',
                                                            _name: 'Units',
                                                        },
                                                        {
                                                            title: 'DataTemplates',
                                                            _name: 'DataTemplates',
                                                        },
                                                    ]
                                                }
                                            ]
                                        }]
                                    },
                                    {
                                        title: 'DatasetItem',
                                        _name: 'DatasetItem',
                                        _attrs: {
                                            name: 'data item2',
                                            type: 'internal',
                                            description: 'data item2 description',
                                        },
                                        _content: [{
                                            title: 'UdxDeclaration',
                                            _name: 'UdxDeclaration',
                                            _attrs: {
                                                name: 'UdxDeclaration',
                                                description: '',
                                            },
                                            _content: [{
                                                    title: 'UdxNode',
                                                    _name: 'UdxNode',
                                                    _content: [{
                                                            title: 'UdxNode',
                                                            _name: 'UdxNode',
                                                            _attrs: {
                                                                name: 'name1',
                                                                type: 'DTKT_ANY',
                                                                description: 'description1_1',
                                                            },
                                                        },
                                                        {
                                                            title: 'UdxNode',
                                                            _name: 'UdxNode',
                                                            _attrs: {
                                                                name: 'name2',
                                                                type: 'DTKT_REAL',
                                                                description: 'description1_2',
                                                            },
                                                        },
                                                        {
                                                            title: 'UdxNode',
                                                            _name: 'UdxNode',
                                                            _attrs: {
                                                                name: 'name3',
                                                                type: 'DTKT_STRING',
                                                                description: 'description1_3',
                                                            },
                                                        },
                                                        {
                                                            title: 'UdxNode',
                                                            _name: 'UdxNode',
                                                            _attrs: {
                                                                name: 'name4',
                                                                type: 'DTKT_VECTOR2D',
                                                                description: 'description1_4',
                                                            },
                                                        },
                                                    ]
                                                },
                                                {
                                                    title: 'SemanticAttachment',
                                                    _name: 'SemanticAttachment',
                                                    _content: [{
                                                            title: 'Concepts',
                                                            _name: 'Concepts',
                                                        },
                                                        {
                                                            title: 'SpatialRefs',
                                                            _name: 'SpatialRefs',
                                                        },
                                                        {
                                                            title: 'Units',
                                                            _name: 'Units',
                                                        },
                                                        {
                                                            title: 'DataTemplates',
                                                            _name: 'DataTemplates',
                                                        },
                                                    ]
                                                }
                                            ]
                                        }]
                                    }
                                ]
                            },
                            {
                                title: 'StateGroup',
                                _name: 'StateGroup',
                                noDragging: true,
                                _content: [{
                                        title: 'States',
                                        _name: 'States',
                                        noDragging: true,
                                        _content: [{
                                                title: 'State',
                                                _name: 'State',
                                                _attrs: {
                                                    id: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                    name: 'State_1',
                                                    type: 'basic',
                                                    description: '????',
                                                },
                                                _content: [{
                                                    title: 'Event',
                                                    _name: 'State',
                                                    _attrs:{
                                                        name: '??Event',
                                                        type: 'response',
                                                        optional: '0',
                                                        description: '????',
                                                    },
                                                    _content: [{
                                                        title: 'ResponseParameter',
                                                        _name: 'ResponseParameter',
                                                        _attrs:{
                                                            datasetReference: 'data item1',
                                                            description: '????'
                                                        },
                                                    }]
                                                }]
                                            },
                                            {
                                                title: 'State',
                                                _name: 'State',
                                                _attrs:{
                                                    id: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                    name: 'State_2',
                                                    type: 'basic',
                                                    description: '????',
                                                },
                                                _content: [{
                                                    title: 'Event',
                                                    _name: 'Event',
                                                    _attrs:{
                                                        name: '??Event',
                                                        type: 'response',
                                                        optional: '0',
                                                        description: '????',
                                                    },
                                                    _content: [{
                                                        title: 'ResponseParameter',
                                                        _name: 'ResponseParameter',
                                                        _attrs:{
                                                            datasetReference: 'data item1',
                                                            description: '????'
                                                        }
                                                    }]
                                                }]
                                            },
                                        ]
                                    },
                                    {
                                        title: 'StateTransitions',
                                        _name: 'StateTransitions',
                                        noDragging: true,
                                        _content: [{
                                            title: 'Add',
                                            _name: 'Add',
                                            _attrs:{
                                                from: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                to: '{F1D3B6D9-BCB1-4439-9A4A-57876B25D66D}'
                                            }
                                        }]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Runtime',
                        _name: 'Runtime',
                        noDragging: true,
                        _content: [{
                            title: 'HardwareConfigures',
                            _name: 'HardwareConfigures',
                            noDragging: true,
                            _content: [{
                                title: 'Add',
                                _name: 'Add',
                                _attrs:{
                                    key: '?',
                                    value: '2.4',
                                }
                            }, ]
                        }, {
                            title: 'SoftwareConfigures',
                            _name: 'SoftwareConfigures',
                            noDragging: true,
                            _content: [{
                                title: 'Add',
                                _name: 'Add',
                                _attrs:{
                                    key: '?',
                                    value: '120M',
                                }
                            }, ]
                        }, {
                            title: 'Assemblies',
                            _name: 'Assemblies',
                            noDragging: true,
                            _content: [{
                                title: 'Add',
                                _name: 'Add',
                                _attrs:{
                                    name: 'dll',
                                    path: './mpi.dll',
                                }
                            }, ]
                        }, {
                            title: 'SupportiveResources',
                            _name: 'SupportiveResources',
                            noDragging: true,
                            _content: [{
                                title: 'Add',
                                _name: 'Add',
                                _attrs:{
                                    type: 'data',
                                    name: 'dsf.csv',
                                }
                            }, ]
                        }]
                    },
                ]
            },
            treeData: [
                {
                    title: 'ModelClass',
                    _name: 'ModelClass',
                    _attrs: {
                        name: '????Name',
                        uid: '{472F0F71-4DD6-4BE9-86CC-0C6B9BD809D1}',
                        style: 'SimpleCalculation',
                    },
                    noDragging: true,
                    expanded: true,
                    children: [{
                            title: 'AttributeSet',
                            _name: 'AttributeSet',
                            noDragging: true,
                            children: [{
                                    title: 'Categories',
                                    _name: 'Categories',
                                    noDragging: true,
                                    children: [{
                                        title: 'Category',
                                        _name: 'Category',
                                        noDragging: true,
                                        _attrs: {
                                            principle: 'principle1',
                                            path: 'path1',
                                        },
                                    }]
                                },
                                {
                                    title: 'LocalAttributes',
                                    _name: 'LocalAttributes',
                                    noDragging: true,
                                    children: [{
                                        title: 'LocalAttribute',
                                        _name: 'LocalAttribute',
                                        _attrs: {
                                            local: 'EN_US',
                                            localName: 'name',
                                            wiki: 'http://en.njnu.edu.cn',
                                        },
                                        noDragging: true,
                                        children: [{
                                            title: 'Keywords',
                                            _name: 'Keywords',
                                            noDragging: true,
                                            _content: 'keyword1; keyword2; keyword3',
                                        }, {
                                            title: 'Abstract',
                                            _name: 'Abstract',
                                            noDragging: true,
                                            _content: 'abstract, this is about some abstract information',
                                        }]
                                    }]
                                }
                            ],
                        },
                        {
                            title: 'Behavior',
                            _name: 'Behavior',
                            noDragging: true,
                            children: [{
                                    title: 'RelatedDatasets',
                                    _name: 'RelatedDatasets',
                                    noDragging: true,
                                    children: [{
                                            title: 'DatasetItem',
                                            _name: 'DatasetItem',
                                            _attrs: {
                                                name: 'data item1',
                                                type: 'internal',
                                                description: 'data item1 description',
                                            },
                                            children: [{
                                                title: 'UdxDeclaration',
                                                _name: 'UdxDeclaration',
                                                _attrs: {
                                                    name: 'UdxDeclaration',
                                                    description: '',
                                                },
                                                children: [{
                                                        title: 'UdxNode',
                                                        _name: 'UdxNode',
                                                        children: [{
                                                            title: 'UdxNode',
                                                            _name: 'UdxNode',
                                                            _attrs: {
                                                                name: 'name1',
                                                                type: 'DTKT_ANY',
                                                                description: 'description1',
                                                            },
                                                            children: [{
                                                                    title: 'UdxNode',
                                                                    _name: 'UdxNode',
                                                                    _attrs: {
                                                                        name: 'name1_1',
                                                                        type: 'DTKT_ANY',
                                                                        description: 'description1_1',
                                                                    },
                                                                },
                                                                {
                                                                    title: 'UdxNode',
                                                                    _name: 'UdxNode',
                                                                    _attrs: {
                                                                        name: 'name1_2',
                                                                        type: 'DTKT_ANY',
                                                                        description: 'description1_2',
                                                                    },
                                                                }
                                                            ]
                                                        }]
                                                    },
                                                    {
                                                        title: 'SemanticAttachment',
                                                        _name: 'SemanticAttachment',
                                                        children: [{
                                                                title: 'Concepts',
                                                                _name: 'Concepts',
                                                            },
                                                            {
                                                                title: 'SpatialRefs',
                                                                _name: 'SpatialRefs',
                                                            },
                                                            {
                                                                title: 'Units',
                                                                _name: 'Units',
                                                            },
                                                            {
                                                                title: 'DataTemplates',
                                                                _name: 'DataTemplates',
                                                            },
                                                        ]
                                                    }
                                                ]
                                            }]
                                        },
                                        {
                                            title: 'DatasetItem',
                                            _name: 'DatasetItem',
                                            _attrs: {
                                                name: 'data item2',
                                                type: 'internal',
                                                description: 'data item2 description',
                                            },
                                            children: [{
                                                title: 'UdxDeclaration',
                                                _name: 'UdxDeclaration',
                                                _attrs: {
                                                    name: 'UdxDeclaration',
                                                    description: '',
                                                },
                                                children: [{
                                                        title: 'UdxNode',
                                                        _name: 'UdxNode',
                                                        children: [{
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs: {
                                                                    name: 'name1',
                                                                    type: 'DTKT_ANY',
                                                                    description: 'description1_1',
                                                                },
                                                            },
                                                            {
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs: {
                                                                    name: 'name2',
                                                                    type: 'DTKT_REAL',
                                                                    description: 'description1_2',
                                                                },
                                                            },
                                                            {
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs: {
                                                                    name: 'name3',
                                                                    type: 'DTKT_STRING',
                                                                    description: 'description1_3',
                                                                },
                                                            },
                                                            {
                                                                title: 'UdxNode',
                                                                _name: 'UdxNode',
                                                                _attrs: {
                                                                    name: 'name4',
                                                                    type: 'DTKT_VECTOR2D',
                                                                    description: 'description1_4',
                                                                },
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        title: 'SemanticAttachment',
                                                        _name: 'SemanticAttachment',
                                                        children: [{
                                                                title: 'Concepts',
                                                                _name: 'Concepts',
                                                            },
                                                            {
                                                                title: 'SpatialRefs',
                                                                _name: 'SpatialRefs',
                                                            },
                                                            {
                                                                title: 'Units',
                                                                _name: 'Units',
                                                            },
                                                            {
                                                                title: 'DataTemplates',
                                                                _name: 'DataTemplates',
                                                            },
                                                        ]
                                                    }
                                                ]
                                            }]
                                        }
                                    ]
                                },
                                {
                                    title: 'StateGroup',
                                    _name: 'StateGroup',
                                    noDragging: true,
                                    children: [{
                                            title: 'States',
                                            _name: 'States',
                                            noDragging: true,
                                            children: [{
                                                    title: 'State',
                                                    _name: 'State',
                                                    _attrs: {
                                                        id: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                        name: 'State_1',
                                                        type: 'basic',
                                                        description: '????',
                                                    },
                                                    children: [{
                                                        title: 'Event',
                                                        _name: 'State',
                                                        _attrs: {
                                                            name: '??Event',
                                                            type: 'response',
                                                            optional: '0',
                                                            description: '????',
                                                        },
                                                        children: [{
                                                            title: 'ResponseParameter',
                                                            _name: 'ResponseParameter',
                                                            _attrs: {
                                                                datasetReference: 'data item1',
                                                                description: '????'
                                                            },
                                                        }]
                                                    }]
                                                },
                                                {
                                                    title: 'State',
                                                    _name: 'State',
                                                    _attrs: {
                                                        id: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                        name: 'State_2',
                                                        type: 'basic',
                                                        description: '????',
                                                    },
                                                    children: [{
                                                        title: 'Event',
                                                        _name: 'Event',
                                                        _attrs: {
                                                            name: '??Event',
                                                            type: 'response',
                                                            optional: '0',
                                                            description: '????',
                                                        },
                                                        children: [{
                                                            title: 'ResponseParameter',
                                                            _name: 'ResponseParameter',
                                                            _attrs: {
                                                                datasetReference: 'data item1',
                                                                description: '????'
                                                            }
                                                        }]
                                                    }]
                                                },
                                            ]
                                        },
                                        {
                                            title: 'StateTransitions',
                                            _name: 'StateTransitions',
                                            noDragging: true,
                                            children: [{
                                                title: 'Add',
                                                _name: 'Add',
                                                _attrs: {
                                                    from: '{EC9FD8A7-CD8B-4715-9489-907AD1B34E9D}',
                                                    to: '{F1D3B6D9-BCB1-4439-9A4A-57876B25D66D}'
                                                }
                                            }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Runtime',
                            _name: 'Runtime',
                            noDragging: true,
                            children: [{
                                title: 'HardwareConfigures',
                                _name: 'HardwareConfigures',
                                noDragging: true,
                                children: [{
                                    title: 'Add',
                                    _name: 'Add',
                                    _attrs: {
                                        key: '?',
                                        value: '2.4',
                                    }
                                }, ]
                            }, {
                                title: 'SoftwareConfigures',
                                _name: 'SoftwareConfigures',
                                noDragging: true,
                                children: [{
                                    title: 'Add',
                                    _name: 'Add',
                                    _attrs: {
                                        key: '?',
                                        value: '120M',
                                    }
                                }, ]
                            }, {
                                title: 'Assemblies',
                                _name: 'Assemblies',
                                noDragging: true,
                                children: [{
                                    title: 'Add',
                                    _name: 'Add',
                                    _attrs: {
                                        name: 'dll',
                                        path: './mpi.dll',
                                    }
                                }, ]
                            }, {
                                title: 'SupportiveResources',
                                _name: 'SupportiveResources',
                                noDragging: true,
                                children: [{
                                    title: 'Add',
                                    _name: 'Add',
                                    _attrs: {
                                        type: 'data',
                                        name: 'dsf.csv',
                                    }
                                }, ]
                            }]
                        },
                    ]
                }
            ]
        };

        this.updateTreeData = this
            .updateTreeData
            .bind(this);
        this.expandAll = this
            .expandAll
            .bind(this);
        this.collapseAll = this
            .collapseAll
            .bind(this);
    }

    updateTreeData(treeData) {
        this.setState({treeData});
    }

    expand(expanded) {
        this.setState({
            treeData: toggleExpandedForAll({treeData: this.state.treeData, expanded})
        });
    }

    expandAll() {
        this.expand(true);
    }

    collapseAll() {
        this.expand(false);
    }

    render() {
        const xml = this.state.xml
        const colProps = {
            lg: 12,
            md: 24,
        }
        const textareaStyle = {
            minHeight: 496,
            width: '100%',

            borderColor: '#F1F1F1',
            padding: '16px 8px',
          }
        const {treemdl, treeData, searchString, searchFocusIndex, searchFoundCount} = this.state;

        const getNodeKey = ({ treeIndex }) => treeIndex;

          
        const alertNodeInfo = ({node, path, treeIndex}) => {
            const objectString = Object
                .keys(node)
                .map(k => (k === 'children'
                    ? 'children: Array'
                    : `${k}: '${node[k]}'`))
                .join(',\n   ');

            global.alert('Info passed to the button generator:\n\n' + `node: {\n   ${objectString}\n},\n` + `path: [${path.join(', ')}],\n` + `treeIndex: ${treeIndex}`);
        };

        const selectPrevMatch = () => this.setState({
            searchFocusIndex: searchFocusIndex !== null
                ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
                : searchFoundCount - 1
        });

        const selectNextMatch = () => this.setState({
            searchFocusIndex: searchFocusIndex !== null
                ? (searchFocusIndex + 1) % searchFoundCount
                : 0
        });

        const createMdl = () => {
            const newtree = childRepalceContent(treeData[0])
            this.setState({
                xml : jstoxml.toXML(newtree)
            })
            console.log(this.state.xml)
            //this.myTextarea.value = this.state.xml
            //console.log(this.state.xml)
            //console.log(treeData[0])
        }

        const childRepalceContent = (treeMdl) => {
            const newtree = treeMdl;
            for (let key in newtree) {
                if (key == 'children') {
                    const o = treeMdl[key]
                    treeMdl['_content'] = o;
                    if (Object.prototype.toString.call(treeMdl[key]).slice(8, -1) == "Array") {
                        const arr = treeMdl[key];
                        for (let i = 0; i < arr.length; i++) {
                            //console.log(arr[i])
                            childRepalceContent(arr[i])
                        }
                    } else {
                        const o = treeMdl[key]
                        treeMdl['_content'] = o;
                        childRepalceContent(o)
                        delete treeMdl[key]
                    }
                    //delete treeMdl[key]
                }

            }
            return newtree
        }

        const handleXml = ()=>{
            console.log(123)
        }
        const isVirtualized = true;
        const treeContainerStyle = isVirtualized
            ? {
                height: 600
            }
            : {};

        return (
            <Row gutter={32}>
                <Col {...colProps}>
                    <Card title="Mdl Tree" style={{ overflow: 'visible' }}>
                        <section className={styles['main-content']}>
                            <Row>
                                <Button onClick={this.expandAll}>Expand All</Button>&nbsp;&nbsp;
                                <Button onClick={this.collapseAll}>Collapse All</Button>&nbsp;&nbsp;
                                <Button type="primary"  onClick={createMdl}>Create Mdl</Button>
                            </Row>
                            <br />
                            <Row>
                                <form
                                    style={{
                                    display: 'inline-block'
                                }}
                                    onSubmit={event => {
                                    event.preventDefault();
                                }}>
                                    <label htmlFor="find-box">
                                        Search:&nbsp;
                                        <Input
                                            id="find-box"
                                            type="text"
                                            value={searchString}
                                            style={{'width':'150px'}}
                                            onChange={event => this.setState({searchString: event.target.value})}/>
                                    </label>
                                    &nbsp;
                                    <Button type="button" disabled={!searchFoundCount} onClick={selectPrevMatch}>
                                        &lt;
                                    </Button>
                                    <Button type="submit" disabled={!searchFoundCount} onClick={selectNextMatch}>
                                        &gt;
                                    </Button>
                                    <span>
                                        &nbsp; {searchFoundCount > 0
                                            ? searchFocusIndex + 1
                                            : 0}
                                        &nbsp;/&nbsp; {searchFoundCount || 0}
                                    </span>
                                    &nbsp;&nbsp;
                                </form>
                            </Row>
                            <br />
                            <div style={treeContainerStyle}>
                                <SortableTree
                                    treeData={treeData}
                                    onChange={this.updateTreeData}
                                    onMoveNode={({node, treeIndex, path}) => global.console.debug('node:', node, 'treeIndex:', treeIndex, 'path:', path)}
                                    maxDepth={maxDepth}
                                    searchQuery={searchString}
                                    searchFocusOffset={searchFocusIndex}
                                    canDrag={({node}) => !node.noDragging}
                                    canDrop={({nextParent}) => !nextParent || !nextParent.noChildren}
                                    searchFinishCallback={matches => this.setState({
                                    searchFoundCount: matches.length,
                                    searchFocusIndex: matches.length > 0
                                        ? searchFocusIndex % matches.length
                                        : 0
                                    })}
                                    isVirtualized={isVirtualized}
                                    generateNodeProps={ ({node,path,treeindex}) => {
                                        let childrenNode = node.children
                                        let o = {}
                                        if(node.title == 'LocalAttributes' || node.title == 'Categories' || node.title == 'RelatedDatasets' || node.title == 'DatasetItem' || node.title == 'UdxNode' || node.title == 'States' || node.title == 'StateTransitions' || node.title == 'HardwareConfigures' || node.title == 'SoftwareConfigures' || node.title == 'Assemblies' || node.title == 'SupportiveResources' ){
                                            o = {
                                                buttons: [ 
                                                    <Button
                                                    size='small'
                                                    onClick={() =>
                                                    this.setState(state => ({
                                                        treeData: addNodeUnderParent({
                                                        treeData: state.treeData,
                                                        parentKey: path[path.length - 1],
                                                        expandParent: true,
                                                        getNodeKey,
                                                        newNode: childrenNode[0],
                                                        }).treeData,
                                                    }))}
                                                    >
                                                        Add Child
                                                    </Button>,
                                                    <Button 
                                                    size='small'
                                                    style = {{ verticalAlign: 'middle', }}
                                                    onClick = {
                                                        () => alertNodeInfo({node,path,treeindex})
                                                    } 
                                                    > 
                                                    View 
                                                    </Button>, 
                                                    <Button
                                                    size='small'
                                                    onClick={() =>
                                                        this.setState(state => ({
                                                        treeData: removeNodeAtPath({
                                                            treeData: state.treeData,
                                                            path,
                                                            getNodeKey,
                                                        }),
                                                        }))}
                                                    >
                                                    Remove
                                                    </Button>,
                                                    ]
                                                }
                                        } else {
                                            o = {
                                                buttons: [ 
                                                    <Button 
                                                    size='small'
                                                    style = {{ verticalAlign: 'middle', }}
                                                    onClick = {
                                                        () => alertNodeInfo({node,path,treeindex})
                                                    } 
                                                    > 
                                                    View 
                                                    </Button>, 
                                                    <Button
                                                    size='small'
                                                    onClick={() =>
                                                        this.setState(state => ({
                                                        treeData: removeNodeAtPath({
                                                            treeData: state.treeData,
                                                            path,
                                                            getNodeKey,
                                                        }),
                                                        }))}
                                                    >
                                                    Remove
                                                    </Button>,
                                                    ]
                                                }
                                        }
                                        return o
                                    }
                                    }
                                />
                            </div>
                        </section>
                    </Card>
                </Col>
                <Col {...colProps}>
                    <Card title="Xml" style={{ overflow: 'visible' }}>
                        <Button type="primary"  onClick={createMdl}>Download Mdl</Button>
                        <br /><br />
                        {/* <textarea style={textareaStyle} defaultValue="Waiting for Create MDL" ref={(textarea)=>{this.myTextarea = textarea}}/> */}
                        <textarea style={textareaStyle} value={xml} onChange={(e) => this.setState({ xml: e.target.value }) }/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default MdlTree