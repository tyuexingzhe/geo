import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader, Select, Tag, Tooltip, Button  } from 'antd'
import city from '../../utils/city'
import linuxVersion from '../../utils/linuxVersion'
import {EditableTagGroup} from 'components'

const { Option, OptGroup } = Select;
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      data.location = data.location.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  // Just show the latest item.
  const displayRender = (label) => {
    return label[label.length - 1];
  }

  const selectHandleChange =(value) => {
    console.log(`selected ${value}`);
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="Name" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="HardWare" hasFeedback {...formItemLayout}>
          {getFieldDecorator('hardware', {
            initialValue: item.hardware,
            rules: [
              {
                required: true,
              },
            ],
          })(<Select
              style={{ width: 200 }}
              onChange={selectHandleChange}
              >
              <OptGroup label="Ubuntu">
                <Option value="Ubuntu16.04">Ubuntu16.04</Option>
                <Option value="Ubuntu14.04">Ubuntu14.04</Option>
              </OptGroup>
              <OptGroup label="CentOS">
                <Option value="CentOS6">CentOS6</Option>
                <Option value="CentOS7">CentOS7</Option>
              </OptGroup>
              <OptGroup label="Debian">
                <Option value="Debian7">Debian7</Option>
                <Option value="Debian8">Debian8</Option>
                <Option value="Debian9">Debian9</Option>
              </OptGroup>
            </Select>)}
        </FormItem>
        <FormItem label="SoftWare" hasFeedback {...formItemLayout}>
          {getFieldDecorator('software', {
            initialValue:  item.software && item.software.split(','),
            rules: [
              {
                required: true,
              },
            ],
          })(<EditableTagGroup />)}
        </FormItem>
        <FormItem label="Use" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isUsed', {
            initialValue: item.isUsed,
            rules: [
              {
                required: true,
                type: 'boolean',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>True</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="IP" hasFeedback {...formItemLayout}>
          {getFieldDecorator('ip', {
            initialValue: item.ip,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Port" hasFeedback {...formItemLayout}>
          {getFieldDecorator('port', {
            initialValue: item.port,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Phone" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: 'The input is not valid E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Location" hasFeedback {...formItemLayout}>
          {getFieldDecorator('location', {
            initialValue: item.location && item.location.split(' '),
            rules: [
              {
                required: true,
              },
            ],
          })(<Cascader
            size="large"
            style={{ width: '100%' }}
            options={city}
            placeholder="Pick an location"
          />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
