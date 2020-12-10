import Vue from 'vue'
import com from './message.vue'

let MyMessage = Vue.extend(com)
let id = 0
let isMsg = false
const Message = (options = {}) => {
    if(isMsg) return
    isMsg = true
    if(typeof options === "string") {
        options = { message: options }
    }
    let myMessage = new MyMessage({
        data: options
    })
    myMessage.id = id ++
    myMessage.$mount()
    document.body.appendChild(myMessage.$el)
    myMessage.visible = true
    myMessage.close = Message.close
    return myMessage
}

Message.close = function() {
    setTimeout(()=>isMsg = false, 500) 
};

['success', 'error', 'warning'].forEach(e=>{
    Message[e] = options => {
        if(typeof options === "string") {
            options = { message: options }
        }
        options.type = e
        return Message(options)
    }
})


export default Message