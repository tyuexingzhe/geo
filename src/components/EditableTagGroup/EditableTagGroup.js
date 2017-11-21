import { Tag, Input, Tooltip, Button } from 'antd';

export default class EditableTagGroup extends React.Component {
  constructor(props){
    super(props)
    var value = this.props.value
    this.state = {
      tags: value || [],
      inputVisible: false,
      inputValue: '',
    };  
    this.handleClose = this.handleClose.bind(this)
    this.handleInputConfirm = this.handleInputConfirm.bind(this)
  }

  async handleClose(removedTag) {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    // console.log(tags);
    // if (!('value' in this.props)) {
    //   this.setState({ tags: tags });
    // }
    await this.setState({ tags:tags })

    this.triggerChange({ tags });
  }

  showInput = () => {
    // if (!('value' in this.props)) {
    //   this.setState({ inputVisible: true }, () => this.input.focus());
    // }
    // this.triggerChange({ inputVisible: true }, () => this.input.focus());
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    // if (!('value' in this.props)) {
    //   this.setState({ inputValue: e.target.value });
    // }
    // this.triggerChange({ inputValue: e.target.value });
    this.setState({ inputValue: e.target.value });
  }

  async handleInputConfirm (){
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    await this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
    // if (!('value' in this.props)) {
    //   this.setState({
    //     tags:tags,
    //   });
    // }
    this.triggerChange({
      tags
    });
    // this.setState({
    //   tags,
    //   inputVisible: false,
    //   inputValue: '',
    // });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange( (this.state.tags));
    }
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 5;
          const tagElem = (
            <Tag key={tag} closable={index !== -1} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 5)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
      </div>
    );
  }
}

