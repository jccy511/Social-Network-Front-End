import React from 'react';
import {Form, Upload, Icon, Input} from 'antd';

class NormalCreatePostForm extends React.Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="Message"
                >
                    {getFieldDecorator('message', {
                        rules: [
                            {
                                required: true, message: 'Please input your message'
                            }
                            ],
                    })(
                        <Input placeholder = "Please input your message" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Image"
                >
                    <div className="dropbox">
                        {getFieldDecorator('image', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: [
                                {
                                    required: true, message: 'Please upload an image'
                                }

                            ]
                        })(
                            <Upload.Dragger name="files">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </Form.Item>
            </Form>
        );
    }
}

export const CreatePostForm = Form.create()(NormalCreatePostForm);