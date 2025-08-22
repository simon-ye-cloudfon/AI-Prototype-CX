document.addEventListener('DOMContentLoaded', function() {
    // 获取模态窗口元素
    const modal = document.getElementById('ai-details-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const closeModalX = document.getElementById('close-modal');
    
    // 获取所有"查看详情"按钮
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    
    // 打开模态窗口的函数
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 关闭模态窗口的函数
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // 恢复背景滚动
    }
    
    // 为每个"查看详情"按钮添加点击事件
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    
    // 为关闭按钮添加点击事件
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    if (closeModalX) {
        closeModalX.addEventListener('click', closeModal);
    }
    
    // 点击模态窗口外部关闭模态窗口
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 按ESC键关闭模态窗口
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 获取所有回复按钮
    const replyButtons = document.querySelectorAll('.reply-button, .secondary-button');
    
    // 为每个回复按钮添加点击事件
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取按钮文本
            const buttonText = this.textContent.trim();
            
            // 在实际应用中，这里应该触发工作流程的下一步操作
            // 目前只是显示一个提示
            alert(`用户选择了: ${buttonText}\n这将触发工作流程的下一步操作。`);
            
            // 如果需要，可以在这里添加重定向到工作流日志页面的代码
            // window.location.href = 'workflow-log.html';
        });
    });
});