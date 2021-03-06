// const electron = require('electron')
// const tool = document.querySelector('#tool')
tool.onclick = function() {
    
}

document.querySelector('#print').onclick = (e) => {
    console.log('打印啦')
    try {
        window.print()
    } catch (err) {
        throw err
    }

}

function notifyMe() {
    // 先检查浏览器是否支持
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // 检查用户是否同意接受通知
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
    }

    // 否则我们需要向用户获取权限
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            // 如果用户同意，就可以向他们发送通知
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }


    // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
    // 出于尊重，我们不应该再打扰他们了
}

const Notification = window.Notification

let myNotification = new Notification('标题', {
    body: '通知正文内容'
})

myNotification.onshow = () => {
    console.log('通知显示')
}