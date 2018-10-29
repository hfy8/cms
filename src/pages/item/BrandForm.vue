<template>
  <div>
    <Button type="primary" @click="addGood">品牌新增</Button>
    <Modal v-model="modal"
           title="品牌新增"
           @on-ok="ok" @on-cancel="cancel">
      <Steps :current="current">
        <Step title="基本信息" ></Step>
        <Step title="商品信息" ></Step>
        <Step title="规格参数" ></Step>
      </Steps>
      <Form :model="formItem" :label-width="80" :style="{'margin-top':'10px'}">
        <Card v-show="current==0">
          <FormItem label="Input" v-show="current==0">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="Select" v-show="current==0">
            <Select v-model="formItem.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem label="DatePicker" v-show="current==0">
            <Row>
              <Col span="11">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
              </Col>
              <Col span="2" style="text-align: center">-</Col>
              <Col span="11">
                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
              </Col>
            </Row>
          </FormItem>
        </Card>
        <Card v-show="current==1">
          <FormItem label="Radio" v-show="current==1">
            <RadioGroup v-model="formItem.radio">
              <Radio label="male">Male</Radio>
              <Radio label="female">Female</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="Checkbox" v-show="current==1">
            <CheckboxGroup v-model="formItem.checkbox">
              <Checkbox label="Eat"></Checkbox>
              <Checkbox label="Sleep"></Checkbox>
              <Checkbox label="Run"></Checkbox>
              <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="Switch" v-show="current==1">
            <i-switch v-model="formItem.switch" size="large">
              <span slot="open">On</span>
              <span slot="close">Off</span>
            </i-switch>
          </FormItem>
          <FormItem label="Slider" v-show="current==1">
            <Slider v-model="formItem.slider" range></Slider>
          </FormItem>
        </Card>
        <Card v-show="current==2">
          <FormItem label="Text" v-show="current==2">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem v-show="current==2">
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
          </FormItem>
        </Card>
      </Form>
      <Button type="primary" v-show="current!=2" @click="next">下一步<Icon icon="md-arrow-forward" /></Button>
      <Button type="primary" v-show="current==2" @click="back"><Icon icon="md-arrow-back" />上一步</Button>
    </Modal>
  </div>
</template>
<script>

export default {
  name: 'brand-form',
  data () {
    return {
      modal: false,
      current: 0,
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }

    }
  },
  methods: {
    ok () {
      this.$Message.info('提交表单')
    },
    cancel () {
      this.$Message.info('关闭表单')
    },
    addGood () {
      this.modal = true
      this.$Message.info('打开表单')
    },
    next () {
      if (this.current === 2) {
        this.current = 2
      } else {
        this.current += 1
      }
    },
    back () {
      if (this.current === 0) {
        this.current = 0
      } else {
        this.current -= 1
      }
    }
  }}
</script>
