<template >
    <div class="newsInfoContainer">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time | dateFormate}}</span>
            <span>点击次数:{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
        <!-- 评论区域 -->
        <comment-box :id=this.id></comment-box>
    </div>
</template>
<script>
/* 导入评论子组件 */
import comment from '../../components/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:[]
        }
    },
    created(){
        this.getNewsInfo()
    },

    methods:{
        getNewsInfo(){
            this.$http.get('getnew/' +this.id).then(result =>{
                this.newsInfo=result.body.message[0]
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="less" >
    .newsInfoContainer{
        padding: 0 15px;
        .title{
            font-size: 16px;
            text-align: center;
            color: #e92322;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width:100%;
            }
        }
    }
</style>

