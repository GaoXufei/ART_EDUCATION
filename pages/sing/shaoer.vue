<template>
  <div class="container">
    <Swiper :banner="sing" />
    <SummaryNew />
    <main class="detail">
      <div class="title">
        <span>{{ info.title }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import Swiper from '~/components/swiper';
import SummaryNew from '~/components/summaryNew';
export default {
	data() {
		return {
			sing: {
				infos: [{ src: require('~/assets/images/sing/banner.jpg') }],
			},
			info: {
				title: '少儿·声乐',
				be_propitious_to: '3岁至16岁青少儿，零基础，有基础，兴趣爱 好提升，声乐考级，才艺提成。',
				course_style: ['1对1', '1对2', '精品小班'],
				course_introduce: {
					explain:
						'少儿歌唱教育有别于成人声乐教育，其根 本在于少儿的生理、心理、理解力都与成人存在差异。 因此艺启学教学目标、教学手法',
					superiority: [
						'A.进阶闯关式学习模式 趣味性强；',
						'B.以孩子的嗓音条件、性格、学员之需为本、针对性强;',
						'C.创新的教学模式 、让孩子学唱歌更加通俗易懂、专业性强；',
						'D.培养儿童良好的上课纪律、礼节和意识；',
						'E.启迪孩子的心灵；',
						'F.立足于中华民族文化；',
					],
				},
			},
		};
	},
	components: {
		Swiper,
		SummaryNew,
	},
};
</script>

<style lang="scss" scoped>
.container {
	.detail {
		background: #fff;
		padding: 40px 0;

		.title {
			text-align: center;
			position: relative;

			&::before {
				content: '';
				display: block;
				width: 100%;
				height: 6px;
				background: $background;
				position: absolute;
				top: 50%;
				transform: translateY(-50);
			}

			& span {
				background: #fff;
				color: $background;
				font-size: 55px;
				font-weight: 700;
				position: relative;
				z-index: 2;
				padding: 0 20px;
			}
		}
	}
}
</style>
