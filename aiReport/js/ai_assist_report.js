// AI Assist 报表数据和配置
const aiAssistData = {
    // Key metrics data
    metrics: {
        webChatClicks: 3250,        // One Click generation
        webChatQuestions: 1850,     // Manual Search
        totalCalls: 5100,          // Total usage (One Click + Manual Search)
        adoptionRate: 78.5
    },
    
    // Time dimension data
    timeTypes: {
        day: {
            labels: ['1/10', '1/11', '1/12', '1/13', '1/14', '1/15', '1/16'],
            data: {
                webChatClicks: [420, 380, 450, 520, 480, 510, 490],      // One Click generation
                webChatQuestions: [240, 220, 280, 310, 290, 320, 300]    // Manual Search
            }
        },
        week: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: {
                webChatClicks: [2800, 3100, 3250, 3400],
                webChatQuestions: [1600, 1750, 1850, 1950]
            }
        },
        month: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan'],
            data: {
                webChatClicks: [12500, 13200, 14800, 15600],
                webChatQuestions: [7200, 7800, 8500, 8900]
            }
        }
    },
    
    // Channel distribution data
    channelData: [
        { name: 'Webchat', value: 2800, color: '#165DFF' },
        { name: 'Tickets - Messages', value: 1650, color: '#0FC6C2' },
        { name: 'Tickets - Voice', value: 650, color: '#00B42A' }
    ],
    
    // RAG resource hit type data
    ragData: [
        { name: 'CX Knowledge Base', value: 35.8, color: '#165DFF' },
        { name: 'External Content', value: 28.3, color: '#0FC6C2' },
        { name: 'Uploaded Documents', value: 22.4, color: '#00B42A' },
        { name: 'Inbox Suggestions', value: 13.5, color: '#FF7D00' }
    ]
};

// Chart configuration
const CONFIG = {
    colors: ['#165DFF', '#0FC6C2', '#00B42A', '#FF7D00', '#F53F3F'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
    }
};

// Chart state
let chartState = {
    currentTimeType: 'week',
    currentChartType: 'line',
    trendChart: null,
    channelChart: null,
    ragChart: null
};

// Initialize charts
function initCharts(retryCount = 0) {
    // Check if ECharts is loaded
    if (typeof echarts === 'undefined') {
        if (retryCount < 50) { // Maximum 50 retries (5 seconds)
            console.log(`ECharts library not loaded, delaying initialization... (${retryCount + 1}/50)`);
            setTimeout(() => initCharts(retryCount + 1), 100);
            return;
        } else {
            console.error('ECharts library failed to load, please check network connection or CDN link');
            return;
        }
    }
    
    console.log('ECharts版本:', echarts.version);
    
    // 获取图表容器
    const trendContainer = document.getElementById('trend-chart');
    const channelContainer = document.getElementById('channel-chart');
    const ragContainer = document.getElementById('rag-chart');
    
    if (!trendContainer || !channelContainer || !ragContainer) {
        console.error('图表容器未找到');
        return;
    }
    
    // 初始化趋势图表
    chartState.trendChart = echarts.init(trendContainer);
    chartState.channelChart = echarts.init(channelContainer);
    chartState.ragChart = echarts.init(ragContainer);
    
    // 更新所有图表
    updateTrendChart();
    updateChannelChart();
    updateRagChart();
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        chartState.trendChart?.resize();
        chartState.channelChart?.resize();
        chartState.ragChart?.resize();
    });
}

// 更新趋势图表
function updateTrendChart() {
    const timeType = chartState.currentTimeType;
    const chartType = chartState.currentChartType;
    const currentData = aiAssistData.timeTypes[timeType];
    
    if (!currentData || !currentData.data) {
        console.warn('趋势图表数据无效或为空');
        return;
    }
    
    // 确保图表容器有明确的宽度和高度
    const container = document.getElementById('trend-chart');
    if (container) {
        container.style.width = '100%';
        container.style.height = '300px';
    }
    
    const series = [
        {
            name: 'One Click',
            type: chartType,
            data: currentData.data.webChatClicks,
            itemStyle: { color: CONFIG.colors[0] },
            smooth: chartType === 'line'
        },
        {
            name: 'Manual Search',
            type: chartType,
            data: currentData.data.webChatQuestions,
            itemStyle: { color: CONFIG.colors[1] },
            smooth: chartType === 'line'
        }
    ];
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['One Click', 'Manual Search'],
            bottom: 0
        },
        grid: CONFIG.grid,
        xAxis: {
            type: 'category',
            data: currentData.labels,
            boundaryGap: chartType === 'bar'
        },
        yAxis: {
            type: 'value',
            name: 'Usage Count'
        },
        series: series
    };
    
    chartState.trendChart.setOption(option, true);
}

// 更新渠道分布图表
function updateChannelChart() {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: aiAssistData.channelData.map(item => item.name)
        },
        series: [
            {
                name: '渠道分布',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['60%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: aiAssistData.channelData.map(item => ({
                    name: item.name,
                    value: item.value,
                    itemStyle: { color: item.color }
                }))
            }
        ]
    };
    
    chartState.channelChart.setOption(option, true);
}

// 更新RAG资源命中类型图表
function updateRagChart() {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        series: [
            {
                name: 'RAG资源命中类型',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: aiAssistData.ragData.map(item => ({
                    name: item.name,
                    value: item.value,
                    itemStyle: { color: item.color }
                })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    formatter: '{b}\n{c}%'
                }
            }
        ]
    };
    
    chartState.ragChart.setOption(option, true);
}

// 设置当前日期
function setCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    document.getElementById('current-date').textContent = `${year}年${month}月`;
}

// 设置最后更新时间
function setLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('last-update-time').textContent = timeString;
}

// 初始化应用
function initApplication() {
    // 设置日期
    setCurrentDate();
    setLastUpdateTime();
    
    // 事件监听器
    setupEventListeners();
    
    // 延迟初始化图表，确保DOM完全加载
    setTimeout(() => initCharts(0), 100);
    
    // 自动更新时间
    setInterval(setLastUpdateTime, 60000); // 每分钟更新一次
}

// 设置事件监听器
function setupEventListeners() {
    // 时间维度切换
    const timeTypeSelect = document.getElementById('time-type');
    if (timeTypeSelect) {
        timeTypeSelect.addEventListener('change', (e) => {
            chartState.currentTimeType = e.target.value;
            updateTrendChart();
        });
    }
    
    // 图表类型切换
    const chartTypeButtons = document.querySelectorAll('.chart-type-btn');
    chartTypeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const chartType = e.target.dataset.type;
            if (chartType) {
                chartState.currentChartType = chartType;
                
                // 更新按钮状态
                chartTypeButtons.forEach(b => {
                    b.classList.remove('active', 'bg-primary/10', 'text-primary');
                    b.classList.add('bg-gray-100', 'text-gray-600');
                });
                e.target.classList.remove('bg-gray-100', 'text-gray-600');
                e.target.classList.add('active', 'bg-primary/10', 'text-primary');
                
                updateTrendChart();
            }
        });
    });
    
    // 查询按钮
    const queryBtn = document.getElementById('query-btn');
    if (queryBtn) {
        queryBtn.addEventListener('click', () => {
            // 这里可以添加查询逻辑
            console.log('执行查询操作');
            updateTrendChart();
            updateChannelChart();
            updateRagChart();
        });
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，检查ECharts状态...');
    console.log('ECharts可用:', typeof echarts !== 'undefined');
    
    const trendContainer = document.getElementById('trend-chart');
    console.log('趋势图表容器:', trendContainer ? '已找到' : '未找到');
    
    // 延迟初始化，确保所有资源加载完成
    setTimeout(initApplication, 200);
});

// 导出函数供全局使用
window.aiAssistReport = {
    initCharts,
    updateTrendChart,
    updateChannelChart,
    updateRagChart,
    chartState,
    aiAssistData
};