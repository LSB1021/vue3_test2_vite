import {customRef} from 'vue'

export default function(initValue:string,delay:number){
    //使用Vue提供的customRef定义响应式数据
    let timer:any

    //track（跟踪）、trigger（触发）
    let msg = customRef((track,trigger)=>{
        return {
            //get在msg被读取的时候调用
            get(){
                track()  //告诉Vue数据msg很重要，要对msg进行持续关注，一旦msg变化就更新
                return initValue
            },
            //set在msg被修改时调用
            set(value){
                clearTimeout(timer)
                timer = setTimeout(() => {
                    initValue = value
                    trigger() //通知Vue一下数据msg变化了
                }, delay);
            }
        }
    })

    return{msg}
}