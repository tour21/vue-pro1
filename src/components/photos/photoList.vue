<template>
    <div>
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item, index) in cates" :key="index" >
						{{item.title}}
					</a>
				</div>
			</div>
		</div>

		<ul class="photo-list">
			<li v-for="(item, index) in list" :key="index">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</li>
		</ul>
    </div>
</template>

<script>
import Vue from "vue"
import mui from "../../assets/mui/js/mui.min.js"

Vue.prototype.mui = mui

export default {
	data() {
		return {
			cates: [],
			list: []
		}
	},
	created() {
		this.getImg()
		this.getImgID(0)
	},
	mounted() {
		this.mui(".mui-scroll-wrapper").scroll({
			deceleration: 0.0005
		})
	},
	methods: {
		getImg(){
			this.$http.get('api/getimgcategory').then(result=> {
				// console.log(result)
				if (result.body.status == 0) {
					result.body.message.unshift({title:'全部', id: 0})
					this.cates = result.body.message
				}
			})
		},
		getImgID(cateid){
			this.$http.get('api/getimages/' + cateid).then(result => {
				if (result.body.status == 0) {
					this.list = result.body.message
				}
			})
		}
	}
}


</script>

<style lang="scss" scoped>
* {
	touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>