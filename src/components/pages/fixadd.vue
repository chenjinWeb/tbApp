<template>

  <div class="fix-add">

    <div class="info_bar">

      <top-title :title="title" :back="back" :length="length"></top-title>

    </div>


    <div class="fix-info">

      <div margin-tabbar="" margin-header="" class="scroll-content">

        <div class="fix-name">

          <span>收货人</span>

          <input type="text" placeholder="请输入收货人名字" v-model="name">

        </div>

        <div class="fix-name">

          <span>联系电话</span>

          <input type="text" placeholder="请输入收货人联系电话" v-model="mobile">

        </div>

        <div class="fix-name">

          <span>所在地区</span>
          <div class="mint-cell-wrapper">
          <div class="mint-cell-value">
            <div class="mint-cell-value is-link" @click="choiceArea">
              <input placeholder="请选择省市" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.areaText">
              <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
            </div>
          </div>
          <i class="cell-right"></i>
          <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
              <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
              <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
            </div>
            <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3"></mt-picker>
          </mt-popup>
          </div>
        </div>

        <div class="fix-text">

          <textarea maxlength="100" v-model="address"></textarea>

        </div>

        <div class="submit-yun">
          <div class="submit-transform no-bg">
            <div>是否设为默认地址</div>
            <div class="submit-transform-right submit-transform-btn">
              <mt-switch v-model="isFirst"></mt-switch>
            </div>
          </div>
        </div>

        <div class="fix-save" @click="saveInfo()">保存</div>

      </div>

    </div>

  </div>

</template>

<script>

  import Vue from "vue"

  import topTitle from "../common/topTitle.vue"

  import { Picker,MessageBox,Switch } from 'mint-ui';

  import areaList from "../../validators"

  Vue.component(Picker.name, Picker);

  Vue.component(Switch.name, Switch);

  export default{
    name:"fixadd",
    data(){
      return {
        title:"编辑地址",
        back:true,
        length:0,
        name:"",
        mobile:"",
        address:"",
        isFirst:false,
        userId:"",
        popupVisible: false,
        areaPicker:{},
        areaValues:[],
        data: {
          areaName:"",
          privinceName: '',
          cityName: '',
          areaText: ''
        },
        slots: [
          {
            flex: 1,
            values: areaList.areaList,
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: areaList.provinceCodeList['上海'],
            className: 'slot3',
            textAlign: 'center'
          },{
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: areaList.cityCodeList['上海市'],
            className: 'slot5',
            textAlign: 'center'
          }
        ]
      }
    },
    methods: {
      onValuesChange(picker, values) {
        this.areaPicker=picker;
        this.slots[2].values =values[0]?  areaList.provinceCodeList[values[0]] : areaList.provinceCodeList["上海"];
        this.slots[4].values = values[1]? areaList.cityCodeList[values[1]] : areaList.cityCodeList["上海市"];
        if(this.popupVisible){
          this.data.areaName=values[0]? values[0] : "上海";
          this.data.privinceName=values[1];
          this.data.cityName=values[2];
        }
      },

      //取消
      cancleaddress: function () {
        this.popupVisible = false
      },

      //确认
      selectaddress: function () {
        this.popupVisible = false;
        this.data.areaText=this.data.areaName+' '+this.data.privinceName+' '+this.data.cityName
      },

      //点击显示地区联动
      choiceArea: function () {
        this.popupVisible = true;
        // 设置默认选中
        if (this.data.areaName !== '' && this.data.privinceName !== '' && this.data.cityName !== '') {
          this.areaPicker.setSlotValue(0, this.data.areaName)
          this.areaPicker.setSlotValue(1, this.data.privinceName)
          this.areaPicker.setSlotValue(2, this.data.cityName)
        }
      },

      //保存信息
      saveInfo(){
        let _this=this;
        MessageBox.confirm('是否保存地址?').then(action => {
          const address=JSON.parse(window.localStorage.getItem("address"));
          address.forEach(function (item,index) {
            if(_this.isFirst){
              item.isFirst=false;
            }
            if(item.id==_this.userId){
              item.name=_this.name;
              item.mobile=_this.mobile;
              item.address=_this.address;
              item.isFirst=_this.isFirst;
              item.areaName=_this.data.areaName;
              item.privinceName=_this.data.privinceName;
              item.cityName=_this.data.cityName;
            }
          })
          window.localStorage.setItem("address",JSON.stringify(address))
          _this.$router.go(-1);
        },action => {
          //console.info(action)
        });
      }
    },
    mounted(){
      let _this=this;
      this.$nextTick(function (){
        const address=JSON.parse(window.localStorage.getItem("address"));
        address.forEach(function (item,index) {
          if(item.id==_this.userId){
            _this.name=item.name;
            _this.mobile=item.mobile;
            _this.isFirst=item.isFirst;
            _this.address=item.address;
            _this.data.areaName=item.areaName;
            _this.data.privinceName=item.privinceName;
            _this.data.cityName=item.cityName;
            _this.data.address=item.address;
            _this.data.areaText=item.areaName+" "+item.privinceName+" "+item.cityName;
          }
        })
      })
    },
    components:{
      topTitle
    },
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.userId=to.query.userId;
      })
    }
  }

</script>

<style scoped>
  .mint-cell{ height: 0.6rem;}
  .mint-cell-wrapper{padding: 0; flex: 1;}
  .cell-right{ background: url("../../assets/images/toRight.png") no-repeat; height: 0.2rem; width: 0.2rem; background-size: 0.12rem 0.2rem;}
  .picker{width: 100%; position: absolute; bottom: -0.4rem; z-index: 100; background: #fff;}
  .mint-popup-bottom{ width: 100%; height: 1.5rem;}
  .picker{ bottom: 0rem;}
</style>
