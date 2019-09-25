<template>
<!-- <div id="app"> -->
  <el-row class="container">
		<h-section :collapsed="collapses" @choose_menu_child="choose_menu"></h-section>
		<el-col :span="24" class="main">
			<left-slide :collapses="collapses"></left-slide>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
<!-- </div>  -->
</template>
<script>
import hSection from '@/components/hsection.vue'
import leftSlide from '@/components/leftSlide.vue'

export default {
  name: 'app',
  components: {
	hSection,
	leftSlide
  },
  data() {
			return {
				// sysName:'VUEADMIN',
				collapses:false
				// sysUserName: '',
				// sysUserAvatar: '',
				// form: {
				// 	name: '',
				// 	region: '',
				// 	date1: '',
				// 	date2: '',
				// 	delivery: false,
				// 	type: [],
				// 	resource: '',
				// 	desc: ''
				// }
			}
		},
		methods: {
			choose_menu:function(item){
				console.log(item)
				this.collapses = item
			},
			// showMenu(i,status){
			// 	this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			// }
		},
}
</script>

<style scoped lang="scss">


.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.toolbar {
	background: #f2f2f2;
	padding: 10px;
	//border:1px solid #dfe6ec;
	margin: 10px 0px;
	.el-form-item {
		margin-bottom: 10px;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
// .container {
// 		position: absolute;
// 		top: 0px;
// 		bottom: 0px;
// 		width: 100%;
// }		

// .main {
// 			display: flex;
// 			// background: #324057;
// 			position: absolute;
// 			top: 60px;
// 			bottom: 0px;
// 			overflow: hidden;
// }			
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
		
			// .menu-collapsed{
			// 	flex:0 0 60px;
			// 	width: 60px;
			// }
			// .menu-expanded{
			// 	flex:0 0 230px;
			// 	width: 230px;
			// }
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>


