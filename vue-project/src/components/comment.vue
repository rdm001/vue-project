<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="别瞎逼逼(最多逼逼120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key=item.add_time>
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormate}}
                </div>
                <div class="cmt-body">
                   {{item.content}}
                </div>
            </div>
        </div>
 
        <mt-button type="danger" size="large" plain @click=getMore>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:''
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){
            this.$http.get("getcomments/"+ this.id +"?pageindex=" + this.pageIndex)
            .then(result=>{
                this.comments=this.comments.concat(result.body.message)
            })
        },
        getMore(){
            this.pageIndex++
            this.getComment()
        },
        postComments(){
            if(this.msg.trim().length==0){
                return Toast('评论内容不能为空')
            }
            this.$http.post('postcomment/'+this.$route.params.id,{content:this.msg.trim()})
            .then(result=>{
                var cmt = {
                    user_name:'匿名用户',
                    add_time:Date.now(),
                    content:this.msg.trim()
                }
                this.comments.unshift(cmt)
                this.msg = ''
            })
        }
    },
    props:['id']
}
</script>

<style lang="less" scoped>
    .cmt-container{
        h3{
            font-size: 16px;
        }
        textarea{
            height: 85px;
            font-size: 14px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
           .cmt-item{
               font-size: 14px;
              .cmt-title{
                  background-color: #ccc;
                  line-height: 30px;
              }
              .cmt-body{
                  line-height: 35px;
                  text-indent: 2em;
              } 
           } 
        }
    }
</style>

