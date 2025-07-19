const agentIntentsData = {
    v1: {
        version: 'V1',
        supportedIntents: 2,
        totalTriggers: 1245,
        agents: {
            all: {
                name: 'All V1 Agents',
                intents: [
                    { name: 'That_helped', triggers: 856, color: '#165DFF' },
                    { name: 'Talk_2_agent', triggers: 389, color: '#0FC6C2' }
                ]
            },
            support: {
                name: 'Agent - Support',
                intents: [
                    { name: 'That_helped', triggers: 520, color: '#165DFF' },
                    { name: 'Talk_2_agent', triggers: 245, color: '#0FC6C2' }
                ]
            },
            sales: {
                name: 'Agent - Sales',
                intents: [
                    { name: 'That_helped', triggers: 210, color: '#165DFF' },
                    { name: 'Talk_2_agent', triggers: 89, color: '#0FC6C2' }
                ]
            },
            technical: {
                name: 'Agent - Technical',
                intents: [
                    { name: 'That_helped', triggers: 126, color: '#165DFF' },
                    { name: 'Talk_2_agent', triggers: 55, color: '#0FC6C2' }
                ]
            }
        },
        intents: [
            { name: 'That_helped', triggers: 856, color: '#165DFF' },
            { name: 'Talk_2_agent', triggers: 389, color: '#0FC6C2' }
        ],
        trendData: {
            week: {
                labels: ['1/9', '1/10', '1/11', '1/12', '1/13', '1/14', '1/15'],
                data: {
                    That_helped: [120, 115, 125, 130, 118, 122, 126],
                    Talk_2_agent: [55, 52, 58, 62, 54, 56, 59]
                }
            },
            month: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                data: {
                    That_helped: [820, 840, 856, 880],
                    Talk_2_agent: [360, 375, 389, 395]
                }
            }
        }
    },
    v2: {
        version: 'V2',
        supportedIntents: 8,
        totalTriggers: 2890,
        agents: {
            all: {
                name: 'All V2 Agents',
                intents: [
                    { name: 'Product_inquiry', triggers: 680, color: '#165DFF' },
                    { name: 'Order_status', triggers: 520, color: '#0FC6C2' },
                    { name: 'Technical_support', triggers: 450, color: '#00B42A' },
                    { name: 'Billing_inquiry', triggers: 380, color: '#FF7D00' },
                    { name: 'Return_refund', triggers: 320, color: '#F53F3F' },
                    { name: 'Account_management', triggers: 280, color: '#722ED1' },
                    { name: 'Shipping_info', triggers: 180, color: '#EB2F96' },
                    { name: 'General_inquiry', triggers: 80, color: '#52C41A' }
                ]
            },
            support: {
                name: 'Agent - Support',
                intents: [
                    { name: 'Product_inquiry', triggers: 280, color: '#165DFF' },
                    { name: 'Technical_support', triggers: 320, color: '#00B42A' },
                    { name: 'Billing_inquiry', triggers: 180, color: '#FF7D00' },
                    { name: 'Account_management', triggers: 150, color: '#722ED1' }
                ]
            },
            sales: {
                name: 'Agent - Sales',
                intents: [
                    { name: 'Product_inquiry', triggers: 320, color: '#165DFF' },
                    { name: 'Order_status', triggers: 380, color: '#0FC6C2' },
                    { name: 'Return_refund', triggers: 220, color: '#F53F3F' },
                    { name: 'Shipping_info', triggers: 120, color: '#EB2F96' }
                ]
            },
            technical: {
                name: 'Agent - Technical',
                intents: [
                    { name: 'Technical_support', triggers: 130, color: '#00B42A' },
                    { name: 'Order_status', triggers: 140, color: '#0FC6C2' },
                    { name: 'Return_refund', triggers: 100, color: '#F53F3F' },
                    { name: 'General_inquiry', triggers: 80, color: '#52C41A' }
                ]
            }
        },
        intents: [
            { name: 'Product_inquiry', triggers: 680, color: '#165DFF' },
            { name: 'Order_status', triggers: 520, color: '#0FC6C2' },
            { name: 'Technical_support', triggers: 450, color: '#00B42A' },
            { name: 'Billing_inquiry', triggers: 380, color: '#FF7D00' },
            { name: 'Return_refund', triggers: 320, color: '#F53F3F' },
            { name: 'Account_management', triggers: 280, color: '#722ED1' },
            { name: 'Shipping_info', triggers: 180, color: '#EB2F96' },
            { name: 'General_inquiry', triggers: 80, color: '#52C41A' }
        ],
        trendData: {
            week: {
                labels: ['1/9', '1/10', '1/11', '1/12', '1/13', '1/14', '1/15'],
                data: {
                    Product_inquiry: [95, 98, 102, 105, 97, 100, 103],
                    Order_status: [72, 75, 78, 80, 74, 76, 79],
                    Technical_support: [62, 65, 68, 70, 64, 66, 69],
                    Billing_inquiry: [52, 55, 58, 60, 54, 56, 59],
                    Return_refund: [44, 46, 48, 50, 45, 47, 49]
                }
            },
            month: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                data: {
                    Product_inquiry: [650, 665, 680, 695],
                    Order_status: [490, 505, 520, 535],
                    Technical_support: [420, 435, 450, 465],
                    Billing_inquiry: [360, 370, 380, 390],
                    Return_refund: [300, 310, 320, 330]
                }
            }
        }
    }
};

// Chart configuration
const CONFIG = {
    colors: ['#165DFF', '#0FC6C2', '#00B42A', '#FF7D00', '#F53F3F', '#722ED1', '#EB2F96', '#52C41A'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
    }
};

// Chart state
let chartState = {
    currentAgentVersion: 'v1',
    currentSpecificAgent: 'all',
    currentTimeRange: 'last30days',
    currentTimePeriod: 'week',
    currentChartType: 'pie',
    intentsChart: null,
    trendChart: null,
    customDateRange: {
        startDate: null,
        endDate: null
    }
};

// Initialize charts
function initCharts(retryCount = 0) {
    // Check if ECharts is loaded
    if (typeof echarts === 'undefined') {
        if (retryCount < 50) {
            console.log(`ECharts library not loaded, delaying initialization... (${retryCount + 1}/50)`);
            setTimeout(() => initCharts(retryCount + 1), 100);
            return;
        } else {
            console.error('ECharts library failed to load, please check network connection or CDN link');
            return;
        }
    }
    
    console.log('ECharts version:', echarts.version);
    
    // Get chart containers
    const intentsContainer = document.getElementById('intents-chart');
    const trendContainer = document.getElementById('trend-chart');
    
    if (!intentsContainer || !trendContainer) {
        console.error('Chart containers not found');
        return;
    }
    
    // Initialize charts
    chartState.intentsChart = echarts.init(intentsContainer);
    chartState.trendChart = echarts.init(trendContainer);
    
    // Update all charts
    updateIntentsChart();
    updateTrendChart();
    
    // Listen for window resize
    window.addEventListener('resize', () => {
        chartState.intentsChart?.resize();
        chartState.trendChart?.resize();
    });
}

// Get current agent data based on selection
function getCurrentAgentData() {
    const versionData = agentIntentsData[chartState.currentAgentVersion];
    if (!versionData) return null;
    
    if (chartState.currentSpecificAgent === 'all') {
        return {
            ...versionData,
            intents: versionData.intents
        };
    } else {
        const specificAgentData = versionData.agents[chartState.currentSpecificAgent];
        if (!specificAgentData) return versionData;
        
        return {
            ...versionData,
            intents: specificAgentData.intents,
            totalTriggers: specificAgentData.intents.reduce((sum, intent) => sum + intent.triggers, 0),
            supportedIntents: specificAgentData.intents.length
        };
    }
}

// Update intents distribution chart
function updateIntentsChart() {
    const currentData = getCurrentAgentData();
    const chartType = chartState.currentChartType;
    
    if (!currentData || !currentData.intents) {
        console.warn('Intents chart data is invalid or empty');
        return;
    }
    
    let option;
    
    if (chartType === 'pie') {
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: currentData.intents.map(item => item.name)
            },
            series: [
                {
                    name: 'Intent Triggers',
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
                    data: currentData.intents.map(item => ({
                        name: item.name,
                        value: item.triggers,
                        itemStyle: { color: item.color }
                    }))
                }
            ]
        };
    } else {
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: CONFIG.grid,
            xAxis: {
                type: 'category',
                data: currentData.intents.map(item => item.name),
                axisLabel: {
                    rotate: 45
                }
            },
            yAxis: {
                type: 'value',
                name: 'Triggers'
            },
            series: [
                {
                    name: 'Intent Triggers',
                    type: 'bar',
                    data: currentData.intents.map(item => ({
                        value: item.triggers,
                        itemStyle: { color: item.color }
                    }))
                }
            ]
        };
    }
    
    chartState.intentsChart.setOption(option, true);
}

// Update trend chart
function updateTrendChart() {
    const currentData = getCurrentAgentData();
    const timePeriod = chartState.currentTimePeriod;
    const trendData = currentData.trendData[timePeriod];
    
    if (!trendData || !trendData.data) {
        console.warn('Trend chart data is invalid or empty');
        return;
    }
    
    const series = Object.keys(trendData.data).map((intentName, index) => ({
        name: intentName,
        type: 'line',
        data: trendData.data[intentName],
        itemStyle: { color: CONFIG.colors[index] },
        smooth: true
    }));
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: Object.keys(trendData.data),
            bottom: 0
        },
        grid: CONFIG.grid,
        xAxis: {
            type: 'category',
            data: trendData.labels,
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            name: 'Triggers'
        },
        series: series
    };
    
    chartState.trendChart.setOption(option, true);
}

// Update agent info display
function updateAgentInfo() {
    const currentData = getCurrentAgentData();
    
    // Update key metrics
    const topIntent = currentData.intents[0];
    const topIntentNameElement = document.getElementById('top-intent-name');
    const topIntentCountElement = document.getElementById('top-intent-count');
    const avgTriggersElement = document.getElementById('avg-triggers');
    const totalTriggersElement = document.getElementById('total-triggers');
    const activeIntentsElement = document.getElementById('active-intents');
    
    if (topIntentNameElement) {
        topIntentNameElement.textContent = topIntent.name;
    }
    if (topIntentCountElement) {
        topIntentCountElement.textContent = `${topIntent.triggers} triggers`;
    }
    
    const avgTriggers = Math.round(currentData.totalTriggers / 14); // Assuming 14 days
    if (avgTriggersElement) {
        avgTriggersElement.textContent = avgTriggers;
    }
    
    if (totalTriggersElement) {
        totalTriggersElement.textContent = currentData.totalTriggers.toLocaleString();
    }
    
    if (activeIntentsElement) {
        activeIntentsElement.textContent = currentData.supportedIntents;
    }
}

// Update intents table
function updateIntentsTable() {
    const currentData = getCurrentAgentData();
    const tableBody = document.getElementById('intents-table-body');
    
    tableBody.innerHTML = '';
    
    currentData.intents.forEach(intent => {
        const row = document.createElement('tr');

        
        row.innerHTML = `
            <td class="px-4 py-3">
                <div class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-3" style="background-color: ${intent.color}"></div>
                    <span class="font-medium">${intent.name}</span>
                </div>
            </td>
            <td class="px-4 py-3">${intent.triggers}</td>
            <td class="px-4 py-3">2025-01-15 ${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Update pagination info
    const totalRecords = currentData.intents.length;
    document.querySelector('.text-gray-500').textContent = `Showing 1-${totalRecords} of ${totalRecords} records`;
}

// Update all charts and displays
function updateAllCharts() {
    updateAgentInfo();
    updateIntentsChart();
    updateTrendChart();
    updateIntentsTable();
    
    // Update time range display in header
    updateTimeRangeDisplay();
}

// Update time range display
function updateTimeRangeDisplay() {
    const currentDateElement = document.getElementById('current-date');
    let displayText = '';
    
    switch (chartState.currentTimeRange) {
        case 'last7days':
            displayText = 'Last 7 Days';
            break;
        case 'last30days':
            displayText = 'Last 30 Days';
            break;
        case 'last90days':
            displayText = 'Last 90 Days';
            break;
        case 'custom':
            if (chartState.customDateRange.startDate && chartState.customDateRange.endDate) {
                const startDate = new Date(chartState.customDateRange.startDate).toLocaleDateString('zh-CN');
                const endDate = new Date(chartState.customDateRange.endDate).toLocaleDateString('zh-CN');
                displayText = `${startDate} - ${endDate}`;
            } else {
                displayText = 'Custom Range';
            }
            break;
        default:
            displayText = '2025年1月';
    }
    
    if (currentDateElement) {
        currentDateElement.textContent = displayText;
    }
}

// Set current date
function setCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    document.getElementById('current-date').textContent = `${year}年${month}月`;
}

// Set last update time
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

// Setup event listeners
function setupEventListeners() {
    // Time Range selector
    const timeRangeSelector = document.getElementById('time-range-selector');
    if (timeRangeSelector) {
        timeRangeSelector.addEventListener('change', (e) => {
            chartState.currentTimeRange = e.target.value;
            
            // Show/hide custom date range
            const customDateRange = document.getElementById('custom-date-range');
            if (e.target.value === 'custom') {
                customDateRange.classList.remove('hidden');
                // Set default dates
                const today = new Date();
                const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                document.getElementById('start-date').value = lastMonth.toISOString().split('T')[0];
                document.getElementById('end-date').value = today.toISOString().split('T')[0];
            } else {
                customDateRange.classList.add('hidden');
                updateAllCharts();
            }
        });
    }
    
    // Custom date range apply button
    const applyCustomRange = document.getElementById('apply-custom-range');
    if (applyCustomRange) {
        applyCustomRange.addEventListener('click', () => {
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            
            if (startDate && endDate) {
                chartState.customDateRange.startDate = startDate;
                chartState.customDateRange.endDate = endDate;
                updateAllCharts();
            } else {
                alert('Please select both start and end dates.');
            }
        });
    }
    
    // Agent Version selector
    const agentVersionSelector = document.getElementById('agent-version-selector');
    if (agentVersionSelector) {
        agentVersionSelector.addEventListener('change', (e) => {
            chartState.currentAgentVersion = e.target.value;
            chartState.currentSpecificAgent = 'all'; // Reset to all when version changes
            document.getElementById('specific-agent-selector').value = 'all';
            updateAllCharts();
        });
    }
    
    // Specific Agent selector
    const specificAgentSelector = document.getElementById('specific-agent-selector');
    if (specificAgentSelector) {
        specificAgentSelector.addEventListener('change', (e) => {
            chartState.currentSpecificAgent = e.target.value;
            updateAllCharts();
        });
    }
    
    // Time period selector
    const timePeriodSelect = document.getElementById('time-period');
    if (timePeriodSelect) {
        timePeriodSelect.addEventListener('change', (e) => {
            chartState.currentTimePeriod = e.target.value;
            updateTrendChart();
        });
    }
    
    // Chart type buttons
    const chartTypeButtons = document.querySelectorAll('.chart-type-btn');
    chartTypeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const chartType = e.target.getAttribute('data-type');
            chartState.currentChartType = chartType;
            
            // Update button states
            chartTypeButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary/10', 'text-primary');
                btn.classList.add('bg-gray-100', 'text-gray-600');
            });
            e.target.classList.remove('bg-gray-100', 'text-gray-600');
            e.target.classList.add('active', 'bg-primary/10', 'text-primary');
            
            updateIntentsChart();
        });
    });
}

// Initialize application
function initApplication() {
    // Set date and time
    setCurrentDate();
    setLastUpdateTime();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize displays
    updateTimeRangeDisplay();
    updateAgentInfo();
    updateIntentsTable();
    
    // Delay chart initialization to ensure DOM is fully loaded
    setTimeout(() => initCharts(0), 100);
    
    // Auto update time
    setInterval(setLastUpdateTime, 60000); // Update every minute
}

// Start application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApplication);
} else {
    initApplication();
}