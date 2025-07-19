// AI Agent Chats & Tickets Report JavaScript

// Mock data for demonstration
const mockData = {
    // V1 Agent data
    v1: {
        all: {
            totalConversations: 5234,
            aiOnlyConversations: 3456,
            aiHandoffConversations: 1778,
            aiOnlyPercentage: 66.0,
            webchat: {
                total: 3234,
                aiOnly: 2156,
                handoff: 1078,
                aiOnlyRate: 66.7
            },
            tickets: {
                total: 2000,
                aiOnly: 1300,
                handoff: 700,
                aiOnlyRate: 65.0
            },
            trendData: {
                dates: ['2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05', '2025-01-06', '2025-01-07'],
                totalConversations: [720, 850, 920, 780, 890, 950, 1120],
                aiOnlyConversations: [475, 561, 607, 515, 587, 627, 739],
                aiHandoffConversations: [245, 289, 313, 265, 303, 323, 381]
            }
        },
        support: {
            totalConversations: 2100,
            aiOnlyConversations: 1386,
            aiHandoffConversations: 714,
            aiOnlyPercentage: 66.0,
            webchat: { total: 1300, aiOnly: 858, handoff: 442, aiOnlyRate: 66.0 },
            tickets: { total: 800, aiOnly: 528, handoff: 272, aiOnlyRate: 66.0 }
        },
        sales: {
            totalConversations: 1567,
            aiOnlyConversations: 1034,
            aiHandoffConversations: 533,
            aiOnlyPercentage: 66.0,
            webchat: { total: 967, aiOnly: 638, handoff: 329, aiOnlyRate: 66.0 },
            tickets: { total: 600, aiOnly: 396, handoff: 204, aiOnlyRate: 66.0 }
        },
        technical: {
            totalConversations: 1567,
            aiOnlyConversations: 1036,
            aiHandoffConversations: 531,
            aiOnlyPercentage: 66.1,
            webchat: { total: 967, aiOnly: 640, handoff: 327, aiOnlyRate: 66.2 },
            tickets: { total: 600, aiOnly: 396, handoff: 204, aiOnlyRate: 66.0 }
        }
    },
    // V2 Agent data
    v2: {
        all: {
            totalConversations: 12456,
            aiOnlyConversations: 9234,
            aiHandoffConversations: 3222,
            aiOnlyPercentage: 74.1,
            webchat: {
                total: 8456,
                aiOnly: 6234,
                handoff: 2222,
                aiOnlyRate: 73.7
            },
            tickets: {
                total: 4000,
                aiOnly: 3000,
                handoff: 1000,
                aiOnlyRate: 75.0
            },
            trendData: {
                dates: ['2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05', '2025-01-06', '2025-01-07'],
                totalConversations: [1720, 1850, 1920, 1780, 1890, 1950, 2120],
                aiOnlyConversations: [1274, 1370, 1422, 1319, 1400, 1445, 1571],
                aiHandoffConversations: [446, 480, 498, 461, 490, 505, 549]
            }
        },
        support: {
            totalConversations: 5000,
            aiOnlyConversations: 3700,
            aiHandoffConversations: 1300,
            aiOnlyPercentage: 74.0,
            webchat: { total: 3400, aiOnly: 2516, handoff: 884, aiOnlyRate: 74.0 },
            tickets: { total: 1600, aiOnly: 1184, handoff: 416, aiOnlyRate: 74.0 }
        },
        sales: {
            totalConversations: 3728,
            aiOnlyConversations: 2761,
            aiHandoffConversations: 967,
            aiOnlyPercentage: 74.1,
            webchat: { total: 2528, aiOnly: 1873, handoff: 655, aiOnlyRate: 74.1 },
            tickets: { total: 1200, aiOnly: 888, handoff: 312, aiOnlyRate: 74.0 }
        },
        technical: {
            totalConversations: 3728,
            aiOnlyConversations: 2773,
            aiHandoffConversations: 955,
            aiOnlyPercentage: 74.4,
            webchat: { total: 2528, aiOnly: 1881, handoff: 647, aiOnlyRate: 74.4 },
            tickets: { total: 1200, aiOnly: 892, handoff: 308, aiOnlyRate: 74.3 }
        }
    }
};



// Current state
let currentVersion = 'all';
let currentAgent = 'all';
let currentTimeDimension = 'week';
let currentTimeRange = 'last30days';

// Initialize the report
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateReport();
    initializeCharts();
});

// Event listeners
function initializeEventListeners() {
    // Version selection
    document.getElementById('agent-version').addEventListener('change', function() {
        currentVersion = this.value;
        updateReport();
        updateCharts();
    });

    // Agent selection
    document.getElementById('specific-agent').addEventListener('change', function() {
        currentAgent = this.value;
        updateReport();
        updateCharts();
    });

    // Time dimension selection
    document.getElementById('time-dimension').addEventListener('change', function() {
        currentTimeDimension = this.value;
        updateReport();
        updateCharts();
    });

    // Time range selection
    document.getElementById('time-range').addEventListener('change', function() {
        currentTimeRange = this.value;
        if (this.value === 'custom') {
            document.getElementById('custom-date-range').style.display = 'block';
        } else {
            document.getElementById('custom-date-range').style.display = 'none';
        }
        updateReport();
        updateCharts();
    });

    // Custom date range apply
    document.getElementById('apply-custom-range').addEventListener('click', function() {
        updateReport();
        updateCharts();
    });
}

// Update report data
function updateReport() {
    const data = getCurrentData();
    
    // Update key metrics
    document.getElementById('total-ai-conversations').textContent = formatNumber(data.totalConversations);
    document.getElementById('ai-only-conversations').textContent = formatNumber(data.aiOnlyConversations);
    document.getElementById('ai-handoff-conversations').textContent = formatNumber(data.aiHandoffConversations);
    document.getElementById('ai-only-percentage').textContent = data.aiOnlyPercentage.toFixed(1) + '%';
    
    // Update webchat statistics
    document.getElementById('webchat-total').textContent = formatNumber(data.webchat.total);
    document.getElementById('webchat-ai-only').textContent = formatNumber(data.webchat.aiOnly);
    document.getElementById('webchat-handoff').textContent = formatNumber(data.webchat.handoff);
    document.getElementById('webchat-ai-rate').textContent = data.webchat.aiOnlyRate.toFixed(1) + '%';
    
    // Update tickets statistics
    document.getElementById('tickets-total').textContent = formatNumber(data.tickets.total);
    document.getElementById('tickets-ai-only').textContent = formatNumber(data.tickets.aiOnly);
    document.getElementById('tickets-handoff').textContent = formatNumber(data.tickets.handoff);
    document.getElementById('tickets-ai-rate').textContent = data.tickets.aiOnlyRate.toFixed(1) + '%';
    
    // Update agent breakdown table
    updateAgentBreakdownTable();
}

// Get current data based on selections
function getCurrentData() {
    if (currentVersion === 'all') {
        // Combine V1 and V2 data
        const v1Data = mockData.v1[currentAgent];
        const v2Data = mockData.v2[currentAgent];
        
        return {
            totalConversations: v1Data.totalConversations + v2Data.totalConversations,
            aiOnlyConversations: v1Data.aiOnlyConversations + v2Data.aiOnlyConversations,
            aiHandoffConversations: v1Data.aiHandoffConversations + v2Data.aiHandoffConversations,
            aiOnlyPercentage: ((v1Data.aiOnlyConversations + v2Data.aiOnlyConversations) / (v1Data.totalConversations + v2Data.totalConversations)) * 100,
            webchat: {
                total: v1Data.webchat.total + v2Data.webchat.total,
                aiOnly: v1Data.webchat.aiOnly + v2Data.webchat.aiOnly,
                handoff: v1Data.webchat.handoff + v2Data.webchat.handoff,
                aiOnlyRate: ((v1Data.webchat.aiOnly + v2Data.webchat.aiOnly) / (v1Data.webchat.total + v2Data.webchat.total)) * 100
            },
            tickets: {
                total: v1Data.tickets.total + v2Data.tickets.total,
                aiOnly: v1Data.tickets.aiOnly + v2Data.tickets.aiOnly,
                handoff: v1Data.tickets.handoff + v2Data.tickets.handoff,
                aiOnlyRate: ((v1Data.tickets.aiOnly + v2Data.tickets.aiOnly) / (v1Data.tickets.total + v2Data.tickets.total)) * 100
            }
        };
    } else {
        return mockData[currentVersion][currentAgent];
    }
}

// Update agent breakdown table
function updateAgentBreakdownTable() {
    const tableBody = document.getElementById('agent-breakdown-table-body');
    tableBody.innerHTML = '';
    
    const agents = ['support', 'sales', 'technical'];
    const versions = currentVersion === 'all' ? ['v1', 'v2'] : [currentVersion];
    
    versions.forEach(version => {
        agents.forEach(agent => {
            const data = mockData[version][agent];
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50';
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Agent - ${agent.charAt(0).toUpperCase() + agent.slice(1)}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        version === 'v1' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }">
                        ${version.toUpperCase()}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatNumber(data.totalConversations)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-success font-medium">${formatNumber(data.aiOnlyConversations)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-warning font-medium">${formatNumber(data.aiHandoffConversations)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-primary font-medium">${data.aiOnlyPercentage.toFixed(1)}%</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatNumber(data.webchat.total)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatNumber(data.tickets.total)}</td>
            `;
            
            tableBody.appendChild(row);
        });
    });
}

// Initialize charts
function initializeCharts() {
    initPerformanceTrendChart();
    initChannelDistributionChart();

}

// Performance trend chart
function initPerformanceTrendChart() {
    const chart = echarts.init(document.getElementById('performance-trend-chart'));
    updatePerformanceTrendChart(chart);
}

function updatePerformanceTrendChart(chart) {
    const data = getCurrentTrendData();
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['Total Conversations', 'AI Only', 'AI Handoff']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Total Conversations',
                type: 'line',
                data: data.totalConversations,
                itemStyle: { color: '#165DFF' }
            },
            {
                name: 'AI Only',
                type: 'line',
                data: data.aiOnlyConversations,
                itemStyle: { color: '#00B42A' }
            },
            {
                name: 'AI Handoff',
                type: 'line',
                data: data.aiHandoffConversations,
                itemStyle: { color: '#FF7D00' }
            }
        ]
    };
    
    chart.setOption(option);
}

// Channel distribution chart
function initChannelDistributionChart() {
    const chart = echarts.init(document.getElementById('channel-distribution-chart'));
    updateChannelDistributionChart(chart);
}

function updateChannelDistributionChart(chart) {
    const data = getCurrentData();
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Channel Distribution',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: data.webchat.total, name: 'Webchat', itemStyle: { color: '#165DFF' } },
                    { value: data.tickets.total, name: 'Inbox Tickets', itemStyle: { color: '#0FC6C2' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    chart.setOption(option);
}



// Get current trend data
function getCurrentTrendData() {
    if (currentVersion === 'all') {
        const v1Data = mockData.v1.all.trendData;
        const v2Data = mockData.v2.all.trendData;
        
        return {
            dates: v1Data.dates,
            totalConversations: v1Data.totalConversations.map((val, idx) => val + v2Data.totalConversations[idx]),
            aiOnlyConversations: v1Data.aiOnlyConversations.map((val, idx) => val + v2Data.aiOnlyConversations[idx]),
            aiHandoffConversations: v1Data.aiHandoffConversations.map((val, idx) => val + v2Data.aiHandoffConversations[idx])
        };
    } else {
        return mockData[currentVersion].all.trendData;
    }
}

// Update all charts
function updateCharts() {
    const performanceChart = echarts.getInstanceByDom(document.getElementById('performance-trend-chart'));
    const channelChart = echarts.getInstanceByDom(document.getElementById('channel-distribution-chart'));
    
    if (performanceChart) updatePerformanceTrendChart(performanceChart);
    if (channelChart) updateChannelDistributionChart(channelChart);
}

// Utility functions
function formatNumber(num) {
    return num.toLocaleString();
}

// Update current date display
function updateCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-CN', options);
    
    const updateTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('last-update-time').textContent = updateTime;
}

// Initialize date display
updateCurrentDate();

// Handle window resize for charts
window.addEventListener('resize', function() {
    const charts = [
        echarts.getInstanceByDom(document.getElementById('performance-trend-chart')),
        echarts.getInstanceByDom(document.getElementById('channel-distribution-chart'))
    ];
    
    charts.forEach(chart => {
        if (chart) {
            chart.resize();
        }
    });
});