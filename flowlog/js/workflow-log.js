document.addEventListener('DOMContentLoaded', function() {
    // 获取所有步骤行
    const stepRows = document.querySelectorAll('.step-row');
    
    // 为每个步骤行添加点击事件
    stepRows.forEach(row => {
        row.addEventListener('click', function() {
            const stepId = this.getAttribute('data-step');
            const detailsElement = document.getElementById(`details-${stepId}`);
            const iconElement = document.getElementById(`icon-${stepId}`);
            
            // 切换详情的显示/隐藏
            detailsElement.classList.toggle('expanded');
            
            // 切换图标的旋转
            iconElement.classList.toggle('expanded');
        });
    });
    
    // 为AI聊天行添加闪烁效果
    const aiChatRow = document.querySelector('.ai-chat-row');
    if (aiChatRow) {
        // 初始闪烁效果
        setTimeout(() => {
            aiChatRow.classList.add('highlight-animation');
            setTimeout(() => {
                aiChatRow.classList.remove('highlight-animation');
            }, 1000);
        }, 500);
        
        // 每隔一段时间重复闪烁效果
        setInterval(() => {
            aiChatRow.classList.add('highlight-animation');
            setTimeout(() => {
                aiChatRow.classList.remove('highlight-animation');
            }, 1000);
        }, 10000); // 每10秒闪烁一次
    }
});