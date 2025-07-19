// AI Agent Answers & Quick Reply Report JavaScript

// Mock data for AI Agent Answers & Quick Reply
const answersQuickReplyData = {
    v1: {
        'all': {
            name: 'All V1 Agents',
            totalAnswers: 4520,
            answeredQueries: 3680,
            unansweredQueries: 840,
            answerSuccessRate: 81.4,
            totalFeedback: 2890,
            feedbackRate: 78.5,
            positiveFeedback: 2156,
            escalationFeedback: 734,
            agents: [
                { name: 'Agent - Support V1', version: 'V1', totalAnswers: 1850, answered: 1520, unanswered: 330, successRate: 82.2, totalFeedback: 1180, positive: 890, escalation: 290, feedbackRate: 77.6, satisfaction: 75.4 },
                { name: 'Agent - Sales V1', version: 'V1', totalAnswers: 1420, answered: 1150, unanswered: 270, successRate: 81.0, totalFeedback: 920, positive: 720, escalation: 200, feedbackRate: 80.0, satisfaction: 78.3 },
                { name: 'Agent - Technical V1', version: 'V1', totalAnswers: 1250, answered: 1010, unanswered: 240, successRate: 80.8, totalFeedback: 790, positive: 546, escalation: 244, feedbackRate: 78.2, satisfaction: 69.1 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [620, 680, 720, 650, 590, 680, 720],
                answered: [510, 560, 590, 530, 480, 560, 590],
                unanswered: [110, 120, 130, 120, 110, 120, 130]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [380, 420, 450, 410, 370, 420, 450],
                positive: [285, 315, 338, 308, 278, 315, 338],
                escalation: [95, 105, 112, 102, 92, 105, 112]
            }
        },
        'support': {
            name: 'Agent - Support V1',
            totalAnswers: 1850,
            answeredQueries: 1520,
            unansweredQueries: 330,
            answerSuccessRate: 82.2,
            totalFeedback: 1180,
            feedbackRate: 77.6,
            positiveFeedback: 890,
            escalationFeedback: 290,
            agents: [
                { name: 'Agent - Support V1', version: 'V1', totalAnswers: 1850, answered: 1520, unanswered: 330, successRate: 82.2, totalFeedback: 1180, positive: 890, escalation: 290, feedbackRate: 77.6, satisfaction: 75.4 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [250, 280, 290, 260, 240, 280, 290],
                answered: [205, 230, 238, 213, 197, 230, 238],
                unanswered: [45, 50, 52, 47, 43, 50, 52]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [155, 175, 185, 165, 150, 175, 185],
                positive: [117, 132, 139, 124, 113, 132, 139],
                escalation: [38, 43, 46, 41, 37, 43, 46]
            }
        },
        'sales': {
            name: 'Agent - Sales V1',
            totalAnswers: 1420,
            answeredQueries: 1150,
            unansweredQueries: 270,
            answerSuccessRate: 81.0,
            totalFeedback: 920,
            feedbackRate: 80.0,
            positiveFeedback: 720,
            escalationFeedback: 200,
            agents: [
                { name: 'Agent - Sales V1', version: 'V1', totalAnswers: 1420, answered: 1150, unanswered: 270, successRate: 81.0, totalFeedback: 920, positive: 720, escalation: 200, feedbackRate: 80.0, satisfaction: 78.3 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [190, 210, 220, 200, 180, 210, 220],
                answered: [154, 170, 178, 162, 146, 170, 178],
                unanswered: [36, 40, 42, 38, 34, 40, 42]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [120, 135, 145, 130, 115, 135, 145],
                positive: [94, 106, 114, 102, 90, 106, 114],
                escalation: [26, 29, 31, 28, 25, 29, 31]
            }
        },
        'technical': {
            name: 'Agent - Technical V1',
            totalAnswers: 1250,
            answeredQueries: 1010,
            unansweredQueries: 240,
            answerSuccessRate: 80.8,
            totalFeedback: 790,
            feedbackRate: 78.2,
            positiveFeedback: 546,
            escalationFeedback: 244,
            agents: [
                { name: 'Agent - Technical V1', version: 'V1', totalAnswers: 1250, answered: 1010, unanswered: 240, successRate: 80.8, totalFeedback: 790, positive: 546, escalation: 244, feedbackRate: 78.2, satisfaction: 69.1 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [180, 190, 210, 190, 170, 190, 210],
                answered: [145, 154, 170, 154, 137, 154, 170],
                unanswered: [35, 36, 40, 36, 33, 36, 40]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [105, 110, 120, 115, 105, 110, 120],
                positive: [74, 78, 85, 81, 74, 78, 85],
                escalation: [31, 32, 35, 34, 31, 32, 35]
            }
        }
    },
    v2: {
        'all': {
            name: 'All V2 Agents',
            totalAnswers: 8456,
            answeredQueries: 7234,
            unansweredQueries: 1222,
            answerSuccessRate: 85.5,
            totalFeedback: 5234,
            feedbackRate: 72.3,
            positiveFeedback: 3892,
            escalationFeedback: 1342,
            // V2版本特有的自定义反馈按钮数据
            customFeedback: {
                moreInformation: 785,
                notRelevant: 523,
                other: 392
            },
            agents: [
                { name: 'Agent - Support V2', version: 'V2', totalAnswers: 3280, answered: 2850, unanswered: 430, successRate: 86.9, totalFeedback: 2120, positive: 1680, escalation: 440, feedbackRate: 74.4, satisfaction: 79.2 },
                { name: 'Agent - Sales V2', version: 'V2', totalAnswers: 2890, answered: 2480, unanswered: 410, successRate: 85.8, totalFeedback: 1890, positive: 1420, escalation: 470, feedbackRate: 76.2, satisfaction: 75.1 },
                { name: 'Agent - Technical V2', version: 'V2', totalAnswers: 2286, answered: 1904, unanswered: 382, successRate: 83.3, totalFeedback: 1224, positive: 792, escalation: 432, feedbackRate: 64.3, satisfaction: 64.7 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [1150, 1280, 1350, 1220, 1100, 1280, 1350],
                answered: [985, 1095, 1155, 1043, 941, 1095, 1155],
                unanswered: [165, 185, 195, 177, 159, 185, 195]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [720, 800, 850, 780, 700, 800, 850],
                positive: [535, 595, 632, 580, 521, 595, 632],
                escalation: [185, 205, 218, 200, 179, 205, 218]
            }
        },
        'support': {
            name: 'Agent - Support V2',
            totalAnswers: 3280,
            answeredQueries: 2850,
            unansweredQueries: 430,
            answerSuccessRate: 86.9,
            totalFeedback: 2120,
            feedbackRate: 74.4,
            positiveFeedback: 1680,
            escalationFeedback: 440,
            agents: [
                { name: 'Agent - Support V2', version: 'V2', totalAnswers: 3280, answered: 2850, unanswered: 430, successRate: 86.9, totalFeedback: 2120, positive: 1680, escalation: 440, feedbackRate: 74.4, satisfaction: 79.2 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [450, 500, 520, 480, 430, 500, 520],
                answered: [391, 435, 452, 417, 374, 435, 452],
                unanswered: [59, 65, 68, 63, 56, 65, 68]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [290, 325, 340, 315, 280, 325, 340],
                positive: [230, 257, 269, 249, 222, 257, 269],
                escalation: [60, 68, 71, 66, 58, 68, 71]
            }
        },
        'sales': {
            name: 'Agent - Sales V2',
            totalAnswers: 2890,
            answeredQueries: 2480,
            unansweredQueries: 410,
            answerSuccessRate: 85.8,
            totalFeedback: 1890,
            feedbackRate: 76.2,
            positiveFeedback: 1420,
            escalationFeedback: 470,
            agents: [
                { name: 'Agent - Sales V2', version: 'V2', totalAnswers: 2890, answered: 2480, unanswered: 410, successRate: 85.8, totalFeedback: 1890, positive: 1420, escalation: 470, feedbackRate: 76.2, satisfaction: 75.1 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [400, 440, 460, 420, 380, 440, 460],
                answered: [343, 377, 395, 360, 326, 377, 395],
                unanswered: [57, 63, 65, 60, 54, 63, 65]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [260, 285, 300, 275, 250, 285, 300],
                positive: [195, 214, 225, 206, 188, 214, 225],
                escalation: [65, 71, 75, 69, 62, 71, 75]
            }
        },
        'technical': {
            name: 'Agent - Technical V2',
            totalAnswers: 2286,
            answeredQueries: 1904,
            unansweredQueries: 382,
            answerSuccessRate: 83.3,
            totalFeedback: 1224,
            feedbackRate: 64.3,
            positiveFeedback: 792,
            escalationFeedback: 432,
            agents: [
                { name: 'Agent - Technical V2', version: 'V2', totalAnswers: 2286, answered: 1904, unanswered: 382, successRate: 83.3, totalFeedback: 1224, positive: 792, escalation: 432, feedbackRate: 64.3, satisfaction: 64.7 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [300, 340, 370, 320, 290, 340, 370],
                answered: [251, 284, 309, 267, 242, 284, 309],
                unanswered: [49, 56, 61, 53, 48, 56, 61]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [170, 190, 210, 190, 170, 190, 210],
                positive: [110, 123, 136, 123, 110, 123, 136],
                escalation: [60, 67, 74, 67, 60, 67, 74]
            }
        }
    },
    all: {
        'all': {
            name: 'All Agents (V1 & V2)',
            totalAnswers: 12976,
            answeredQueries: 10914,
            unansweredQueries: 2062,
            answerSuccessRate: 84.1,
            totalFeedback: 8124,
            feedbackRate: 74.4,
            positiveFeedback: 6048,
            escalationFeedback: 2076,
            agents: [
                { name: 'Agent - Support V1', version: 'V1', totalAnswers: 1850, answered: 1520, unanswered: 330, successRate: 82.2, totalFeedback: 1180, positive: 890, escalation: 290, feedbackRate: 77.6, satisfaction: 75.4 },
                { name: 'Agent - Sales V1', version: 'V1', totalAnswers: 1420, answered: 1150, unanswered: 270, successRate: 81.0, totalFeedback: 920, positive: 720, escalation: 200, feedbackRate: 80.0, satisfaction: 78.3 },
                { name: 'Agent - Technical V1', version: 'V1', totalAnswers: 1250, answered: 1010, unanswered: 240, successRate: 80.8, totalFeedback: 790, positive: 546, escalation: 244, feedbackRate: 78.2, satisfaction: 69.1 },
                { name: 'Agent - Support V2', version: 'V2', totalAnswers: 3280, answered: 2850, unanswered: 430, successRate: 86.9, totalFeedback: 2120, positive: 1680, escalation: 440, feedbackRate: 74.4, satisfaction: 79.2 },
                { name: 'Agent - Sales V2', version: 'V2', totalAnswers: 2890, answered: 2480, unanswered: 410, successRate: 85.8, totalFeedback: 1890, positive: 1420, escalation: 470, feedbackRate: 76.2, satisfaction: 75.1 },
                { name: 'Agent - Technical V2', version: 'V2', totalAnswers: 2286, answered: 1904, unanswered: 382, successRate: 83.3, totalFeedback: 1224, positive: 792, escalation: 432, feedbackRate: 64.3, satisfaction: 64.7 }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalAnswers: [1770, 1960, 2070, 1870, 1690, 1960, 2070],
                answered: [1495, 1655, 1745, 1573, 1421, 1655, 1745],
                unanswered: [275, 305, 325, 297, 269, 305, 325]
            },
            feedbackTrendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                totalFeedback: [1100, 1220, 1300, 1190, 1070, 1220, 1300],
                positive: [820, 910, 970, 888, 799, 910, 970],
                escalation: [280, 310, 330, 302, 271, 310, 330]
            }
        }
    }
};

// Chart instances
let answersTrendChart;
let answerStatusChart;
let agentPerformanceChart;
let feedbackTrendChart;
let feedbackTypeChart;
let agentFeedbackChart;

// Current active tab
let activeTab = 'answers';

// Initialize the report
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
    updateReport();
});

// Setup event listeners
function setupEventListeners() {
    // Filter change events
    document.getElementById('time-dimension').addEventListener('change', updateReport);
    document.getElementById('time-range').addEventListener('change', handleTimeRangeChange);
    document.getElementById('agent-version').addEventListener('change', updateReport);
    document.getElementById('specific-agent').addEventListener('change', updateReport);
    
    // Tab switching
    document.getElementById('answers-tab').addEventListener('click', () => switchTab('answers'));
    document.getElementById('quickreply-tab').addEventListener('click', () => switchTab('quickreply'));
    
    // Chart type buttons
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartContainer = this.closest('.card-shadow');
            chartContainer.querySelectorAll('.chart-type-btn').forEach(b => {
                b.classList.remove('active', 'bg-primary/10', 'text-primary');
                b.classList.add('bg-gray-100', 'text-gray-600');
            });
            this.classList.add('active', 'bg-primary/10', 'text-primary');
            this.classList.remove('bg-gray-100', 'text-gray-600');
            
            // Update chart based on type
            const chartType = this.dataset.type;
            const chartId = chartContainer.querySelector('.chart-container').id;
            updateChartType(chartId, chartType);
        });
    });
}

// Handle time range change
function handleTimeRangeChange() {
    const timeRange = document.getElementById('time-range').value;
    const customDateRange = document.getElementById('custom-date-range');
    
    if (timeRange === 'custom') {
        customDateRange.style.display = 'grid';
    } else {
        customDateRange.style.display = 'none';
    }
    
    updateReport();
}

// Switch between tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active', 'border-primary', 'text-primary');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    
    document.getElementById(tabName + '-tab').classList.add('active', 'border-primary', 'text-primary');
    document.getElementById(tabName + '-tab').classList.remove('border-transparent', 'text-gray-500');
    
    // Update content visibility
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
    
    document.getElementById(tabName + '-content').style.display = 'block';
    
    activeTab = tabName;
    updateReport();
}

// Get current data based on filters
function getCurrentData() {
    const version = document.getElementById('agent-version').value;
    const agent = document.getElementById('specific-agent').value;
    const timeRange = document.getElementById('time-range').value;
    
    let baseData;
    if (version === 'all') {
        baseData = answersQuickReplyData.all[agent] || answersQuickReplyData.all.all;
    } else {
        baseData = answersQuickReplyData[version][agent] || answersQuickReplyData[version].all;
    }
    
    // Apply time range adjustments
    return applyTimeRangeFilter(baseData, timeRange);
}

// Apply time range filter to data
function applyTimeRangeFilter(data, timeRange) {
    const adjustedData = JSON.parse(JSON.stringify(data)); // Deep copy
    
    switch (timeRange) {
        case 'today':
            adjustedData.totalAnswers = Math.round(data.totalAnswers * 0.15);
            adjustedData.answeredQueries = Math.round(data.answeredQueries * 0.15);
            adjustedData.unansweredQueries = Math.round(data.unansweredQueries * 0.15);
            adjustedData.totalFeedback = Math.round(data.totalFeedback * 0.15);
            adjustedData.positiveFeedback = Math.round(data.positiveFeedback * 0.15);
            adjustedData.escalationFeedback = Math.round(data.escalationFeedback * 0.15);
            break;
            
        case 'yesterday':
            adjustedData.totalAnswers = Math.round(data.totalAnswers * 0.14);
            adjustedData.answeredQueries = Math.round(data.answeredQueries * 0.14);
            adjustedData.unansweredQueries = Math.round(data.unansweredQueries * 0.14);
            adjustedData.totalFeedback = Math.round(data.totalFeedback * 0.14);
            adjustedData.positiveFeedback = Math.round(data.positiveFeedback * 0.14);
            adjustedData.escalationFeedback = Math.round(data.escalationFeedback * 0.14);
            break;
            
        case 'last7days':
            // Keep original data (7 days)
            break;
            
        case 'last30days':
            adjustedData.totalAnswers = Math.round(data.totalAnswers * 4.2);
            adjustedData.answeredQueries = Math.round(data.answeredQueries * 4.2);
            adjustedData.unansweredQueries = Math.round(data.unansweredQueries * 4.2);
            adjustedData.totalFeedback = Math.round(data.totalFeedback * 4.2);
            adjustedData.positiveFeedback = Math.round(data.positiveFeedback * 4.2);
            adjustedData.escalationFeedback = Math.round(data.escalationFeedback * 4.2);
            break;
            
        case 'last90days':
            adjustedData.totalAnswers = Math.round(data.totalAnswers * 12.5);
            adjustedData.answeredQueries = Math.round(data.answeredQueries * 12.5);
            adjustedData.unansweredQueries = Math.round(data.unansweredQueries * 12.5);
            adjustedData.totalFeedback = Math.round(data.totalFeedback * 12.5);
            adjustedData.positiveFeedback = Math.round(data.positiveFeedback * 12.5);
            adjustedData.escalationFeedback = Math.round(data.escalationFeedback * 12.5);
            break;
            
        case 'custom':
            adjustedData.totalAnswers = Math.round(data.totalAnswers * 2.1);
            adjustedData.answeredQueries = Math.round(data.answeredQueries * 2.1);
            adjustedData.unansweredQueries = Math.round(data.unansweredQueries * 2.1);
            adjustedData.totalFeedback = Math.round(data.totalFeedback * 2.1);
            adjustedData.positiveFeedback = Math.round(data.positiveFeedback * 2.1);
            adjustedData.escalationFeedback = Math.round(data.escalationFeedback * 2.1);
            break;
            
        default: // last7days
            break;
    }
    
    // Recalculate rates
    adjustedData.answerSuccessRate = adjustedData.totalAnswers > 0 ? 
        (adjustedData.answeredQueries / adjustedData.totalAnswers * 100) : 0;
    adjustedData.feedbackRate = adjustedData.answeredQueries > 0 ? 
        (adjustedData.totalFeedback / adjustedData.answeredQueries * 100) : 0;
    
    return adjustedData;
}

// Update the entire report
function updateReport() {
    const currentData = getCurrentData();
    
    if (activeTab === 'answers') {
        updateAnswersMetrics(currentData);
        updateAnswersTable(currentData);
        updateAnswersTrendChart(currentData);
        updateAnswerStatusChart(currentData);
        updateAgentPerformanceChart(currentData);
    } else {
        updateFeedbackMetrics(currentData);
        updateFeedbackTable(currentData);
        updateFeedbackTrendChart(currentData);
        updateFeedbackTypeChart(currentData);
        updateAgentFeedbackChart(currentData);
    }
}

// Update answers metrics
function updateAnswersMetrics(data) {
    document.getElementById('total-answers').textContent = data.totalAnswers.toLocaleString();
    document.getElementById('answered-queries').textContent = data.answeredQueries.toLocaleString();
    document.getElementById('unanswered-queries').textContent = data.unansweredQueries.toLocaleString();
    document.getElementById('answer-success-rate').textContent = data.answerSuccessRate.toFixed(1) + '%';
}

// Update feedback metrics
function updateFeedbackMetrics(data) {
    const currentVersion = document.getElementById('agent-version').value;
    
    document.getElementById('total-feedback').textContent = data.totalFeedback.toLocaleString();
    document.getElementById('feedback-rate').textContent = data.feedbackRate.toFixed(1) + '%';
    document.getElementById('positive-feedback').textContent = data.positiveFeedback.toLocaleString();
    
    // 根据版本显示不同的escalation rate计算方式
    let escalationRate;
    if (currentVersion === 'v1') {
        // V1版本：只有2个内置按钮，escalation rate基于总反馈
        escalationRate = data.totalFeedback > 0 ? 
            (data.escalationFeedback / data.totalFeedback * 100) : 0;
    } else if (currentVersion === 'v2') {
        // V2版本：考虑自定义按钮，escalation rate可能更低
        const totalCustomFeedback = data.customFeedback ? 
            (data.customFeedback.moreInformation + data.customFeedback.notRelevant + data.customFeedback.other) : 0;
        const adjustedEscalation = data.escalationFeedback - Math.floor(totalCustomFeedback * 0.3);
        escalationRate = data.totalFeedback > 0 ? 
            (adjustedEscalation / data.totalFeedback * 100) : 0;
    } else {
        // 所有版本：混合计算
        escalationRate = data.totalFeedback > 0 ? 
            (data.escalationFeedback / data.totalFeedback * 100) : 0;
    }
    
    document.getElementById('escalation-rate').textContent = escalationRate.toFixed(1) + '%';
    
    // 版本标识提示已移除
}

// Update answers table
function updateAnswersTable(data) {
    const tableBody = document.getElementById('answers-table-body');
    tableBody.innerHTML = '';
    
    data.agents.forEach(agent => {
        const row = document.createElement('tr');
        const trendIcon = agent.successRate > 80 ? 'fa-arrow-up' : 'fa-arrow-down';
        const trendColor = agent.successRate > 80 ? 'text-green-600' : 'text-red-600';
        
        row.innerHTML = `
            <td class="px-4 py-3">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <i class="fa fa-robot text-primary text-sm"></i>
                    </div>
                    <div>
                        <div class="text-sm font-medium text-gray-900">${agent.name}</div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    agent.version === 'V1' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }">
                    ${agent.version}
                </span>
            </td>
            <td class="px-4 py-3 font-semibold">${agent.totalAnswers.toLocaleString()}</td>
            <td class="px-4 py-3 text-green-600">${agent.answered.toLocaleString()}</td>
            <td class="px-4 py-3 text-red-600">${agent.unanswered.toLocaleString()}</td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center ${agent.successRate > 80 ? 'text-green-600' : 'text-orange-600'}">
                    ${agent.successRate.toFixed(1)}%
                </span>
            </td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center ${trendColor}">
                    <i class="fa ${trendIcon} mr-1"></i>
                    ${Math.abs(agent.successRate - 80).toFixed(1)}%
                </span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Update feedback table
function updateFeedbackTable(data) {
    const tableBody = document.getElementById('feedback-table-body');
    const currentVersion = document.getElementById('agent-version').value;
    tableBody.innerHTML = '';
    
    data.agents.forEach(agent => {
        const row = document.createElement('tr');
        const satisfactionColor = agent.satisfaction > 75 ? 'text-green-600' : 
                                 agent.satisfaction > 65 ? 'text-orange-600' : 'text-red-600';
        
        // 根据Agent版本显示不同的反馈类型信息
        let feedbackTypeInfo = '';
        let neutralFeedback = 0;
        
        if (agent.version === 'V1') {
            feedbackTypeInfo = `
                <div class="text-xs text-gray-500 mt-1">
                    Feedback Buttons: Positive Feedback(${agent.positive}) + Negative Feedback(${agent.escalation})
                </div>
            `;
        } else if (agent.version === 'V2') {
            // 为V2版本计算中性反馈数据
            neutralFeedback = Math.floor((agent.positive + agent.escalation) * 0.15);
            
            feedbackTypeInfo = `
                <div class="text-xs text-gray-500 mt-1">
                    Feedback Buttons: Positive Feedback(${agent.positive}) + Negative Feedback(${agent.escalation}) + Neutral Feedback(${neutralFeedback})
                </div>
            `;
        }
        
        // 根据当前选择的版本过滤显示
        if (currentVersion !== 'all' && currentVersion !== agent.version.toLowerCase()) {
            return; // 跳过不匹配版本的Agent
        }
        
        row.innerHTML = `
            <td class="px-4 py-3">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <i class="fa fa-robot text-primary text-sm"></i>
                    </div>
                    <div>
                        <div class="text-sm font-medium text-gray-900">${agent.name}</div>
                        ${feedbackTypeInfo}
                    </div>
                </div>
            </td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    agent.version === 'V1' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }">
                    ${agent.version}
                </span>
                <div class="text-xs text-gray-400 mt-1">
                    ${agent.version === 'V1' ? '2 Feedback Buttons' : '3 Feedback Buttons'}
                </div>
            </td>
            <td class="px-4 py-3 font-semibold">${agent.totalFeedback.toLocaleString()}</td>
            <td class="px-4 py-3 text-green-600">${agent.positive.toLocaleString()}</td>
            <td class="px-4 py-3 text-orange-600">${agent.escalation.toLocaleString()}</td>
            <td class="px-4 py-3 text-blue-600">${agent.version === 'V2' ? neutralFeedback.toLocaleString() : '-'}</td>
            <td class="px-4 py-3">${agent.feedbackRate.toFixed(1)}%</td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center ${satisfactionColor}">
                    ${agent.satisfaction.toFixed(1)}%
                </span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize charts
function initializeCharts() {
    // Initialize trend chart
    answersTrendChart = echarts.init(document.getElementById('answers-trend-chart'));
    feedbackTrendChart = echarts.init(document.getElementById('feedback-trend-chart'));
    
    // Initialize distribution charts
    answerStatusChart = echarts.init(document.getElementById('answer-status-chart'));
    feedbackTypeChart = echarts.init(document.getElementById('feedback-type-chart'));
    
    // Initialize performance charts
    agentPerformanceChart = echarts.init(document.getElementById('agent-performance-chart'));
    agentFeedbackChart = echarts.init(document.getElementById('agent-feedback-chart'));
    
    // 设置图表自适应
    const charts = [answersTrendChart, feedbackTrendChart, answerStatusChart, feedbackTypeChart, agentPerformanceChart, agentFeedbackChart];
    
    // Handle window resize
    window.addEventListener('resize', function() {
        charts.forEach(chart => {
            if (chart) {
                setTimeout(() => {
                    chart.resize();
                }, 100);
            }
        });
    });
    
    // 监听容器尺寸变化
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(entries => {
            charts.forEach(chart => {
                if (chart) {
                    setTimeout(() => {
                        chart.resize();
                    }, 50);
                }
            });
        });
        
        // 观察所有图表容器
        const containers = [
            'answers-trend-chart', 'feedback-trend-chart', 'answer-status-chart',
            'feedback-type-chart', 'agent-performance-chart', 'agent-feedback-chart'
        ];
        
        containers.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                resizeObserver.observe(element);
            }
        });
    }
}

// Update answers trend chart
function updateAnswersTrendChart(data) {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['Total Answers', 'Answered', 'Unanswered']
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '8%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.trendData.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Total Answers',
                type: 'line',
                data: data.trendData.totalAnswers,
                lineStyle: { color: '#3b82f6' },
                itemStyle: { color: '#3b82f6' }
            },
            {
                name: 'Answered',
                type: 'line',
                data: data.trendData.answered,
                lineStyle: { color: '#10b981' },
                itemStyle: { color: '#10b981' }
            },
            {
                name: 'Unanswered',
                type: 'line',
                data: data.trendData.unanswered,
                lineStyle: { color: '#ef4444' },
                itemStyle: { color: '#ef4444' }
            }
        ]
    };
    
    answersTrendChart.setOption(option);
}

// Update answer status chart
function updateAnswerStatusChart(data) {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        series: [{
            name: 'Answer Status',
            type: 'pie',
            radius: '70%',
            data: [
                { value: data.answeredQueries, name: 'Answered Queries', itemStyle: { color: '#10b981' } },
                { value: data.unansweredQueries, name: 'Unanswered Queries', itemStyle: { color: '#ef4444' } }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    
    answerStatusChart.setOption(option);
}

// Update agent performance chart
function updateAgentPerformanceChart(data) {
    const agentNames = data.agents.map(agent => agent.name.replace('Agent - ', ''));
    const successRates = data.agents.map(agent => agent.successRate);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: agentNames
        },
        yAxis: {
            type: 'value',
            min: 70,
            max: 90
        },
        series: [{
            name: 'Success Rate',
            type: 'bar',
            data: successRates,
            itemStyle: {
                color: function(params) {
                    return params.value > 85 ? '#10b981' : 
                           params.value > 80 ? '#f59e0b' : '#ef4444';
                }
            }
        }]
    };
    
    agentPerformanceChart.setOption(option);
}

// Update feedback trend chart
function updateFeedbackTrendChart(data) {
    const currentVersion = document.getElementById('agent-version').value;
    let series = [];
    let legendData = [];
    
    if (currentVersion === 'v1') {
        // V1版本：2个标准按钮的数据
        legendData = ['Total Feedback', 'Positive Feedback', 'Negative Feedback'];
        
        series = [
            {
                name: 'Total Feedback',
                type: 'line',
                data: data.feedbackTrendData.totalFeedback,
                lineStyle: { color: '#3b82f6', width: 3 },
                itemStyle: { color: '#3b82f6' },
                smooth: true
            },
            {
                name: 'Positive Feedback',
                type: 'line',
                data: data.feedbackTrendData.positive,
                lineStyle: { color: '#10b981', width: 2 },
                itemStyle: { color: '#10b981' },
                smooth: true
            },
            {
                name: 'Negative Feedback',
                type: 'line',
                data: data.feedbackTrendData.escalation,
                lineStyle: { color: '#f59e0b', width: 2 },
                itemStyle: { color: '#f59e0b' },
                smooth: true
            }
        ];
    } else if (currentVersion === 'v2') {
        // V2版本：3个标准按钮的数据
        legendData = ['Total Feedback', 'Positive Feedback', 'Negative Feedback', 'Neutral Feedback'];
        
        // 为V2版本生成Neutral中性反馈数据
        const neutralData = data.feedbackTrendData.positive.map(val => Math.floor(val * 0.15));
        const adjustedPositive = data.feedbackTrendData.positive.map((val, idx) => val - Math.floor(neutralData[idx] * 0.3));
        const adjustedNegative = data.feedbackTrendData.escalation.map((val, idx) => val - Math.floor(neutralData[idx] * 0.2));
        
        series = [
            {
                name: 'Total Feedback',
                type: 'line',
                data: data.feedbackTrendData.totalFeedback,
                lineStyle: { color: '#3b82f6', width: 3 },
                itemStyle: { color: '#3b82f6' },
                smooth: true
            },
            {
                name: 'Positive Feedback',
                type: 'line',
                data: adjustedPositive,
                lineStyle: { color: '#10b981', width: 2 },
                itemStyle: { color: '#10b981' },
                smooth: true
            },
            {
                name: 'Negative Feedback',
                type: 'line',
                data: adjustedNegative,
                lineStyle: { color: '#f59e0b', width: 2 },
                itemStyle: { color: '#f59e0b' },
                smooth: true
            },
            {
                name: 'Neutral Feedback',
                type: 'line',
                data: neutralData,
                lineStyle: { color: '#8b5cf6', width: 2 },
                itemStyle: { color: '#8b5cf6' },
                smooth: true
            }
        ];
    } else {
        // 所有版本：混合显示
        legendData = ['Total Feedback', 'Positive Feedback', 'Negative Feedback', 'Neutral Feedback'];
        const neutralData = data.feedbackTrendData.positive.map((val, idx) => 
            Math.floor((val + data.feedbackTrendData.escalation[idx]) * 0.15)
        );
        
        series = [
            {
                name: 'Total Feedback',
                type: 'line',
                data: data.feedbackTrendData.totalFeedback,
                lineStyle: { color: '#3b82f6', width: 3 },
                itemStyle: { color: '#3b82f6' },
                smooth: true
            },
            {
                name: 'Positive Feedback',
                type: 'line',
                data: data.feedbackTrendData.positive,
                lineStyle: { color: '#10b981', width: 2 },
                itemStyle: { color: '#10b981' },
                smooth: true
            },
            {
                name: 'Negative Feedback',
                type: 'line',
                data: data.feedbackTrendData.escalation,
                lineStyle: { color: '#f59e0b', width: 2 },
                itemStyle: { color: '#f59e0b' },
                smooth: true
            },
            {
                name: 'Neutral Feedback',
                type: 'line',
                data: neutralData,
                lineStyle: { color: '#8b5cf6', width: 2 },
                itemStyle: { color: '#8b5cf6' },
                smooth: true
            }
        ];
    }
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: function(params) {
                let result = params[0].axisValue + '<br/>';
                params.forEach(param => {
                    result += `${param.marker} ${param.seriesName}: ${param.value}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: legendData,
            top: 10
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '8%',
            top: '18%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.feedbackTrendData.dates,
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#f3f4f6'
                }
            }
        },
        series: series
    };
    
    feedbackTrendChart.setOption(option);
}

// Update feedback type chart
function updateFeedbackTypeChart(data) {
    const currentVersion = document.getElementById('agent-version').value;
    let feedbackData = [];
    
    if (currentVersion === 'v1') {
        // V1版本：2个标准按钮
        feedbackData = [
            { value: data.positiveFeedback, name: 'Positive Feedback', itemStyle: { color: '#10b981' } },
            { value: data.escalationFeedback, name: 'Negative Feedback', itemStyle: { color: '#f59e0b' } }
        ];
    } else if (currentVersion === 'v2') {
        // V2版本：3个标准按钮
        const totalFeedback = data.positiveFeedback + data.escalationFeedback;
        const othersFeedback = Math.floor(totalFeedback * 0.15); // 15%的其它中性反馈
        const adjustedPositive = data.positiveFeedback - Math.floor(othersFeedback * 0.3);
        const adjustedNegative = data.escalationFeedback - Math.floor(othersFeedback * 0.2);
        
        feedbackData = [
            { value: adjustedPositive, name: 'Positive Feedback', itemStyle: { color: '#10b981' } },
            { value: adjustedNegative, name: 'Negative Feedback', itemStyle: { color: '#f59e0b' } },
            { value: othersFeedback, name: 'Neutral Feedback', itemStyle: { color: '#8b5cf6' } }
        ];
    } else {
        // 所有版本：混合显示
        const v1Portion = 0.35; // V1占35%
        const v2Portion = 0.65; // V2占65%
        
        const v1Positive = Math.floor(data.positiveFeedback * v1Portion);
        const v1Negative = Math.floor(data.escalationFeedback * v1Portion);
        const v2Positive = Math.floor(data.positiveFeedback * v2Portion * 0.8);
        const v2Negative = Math.floor(data.escalationFeedback * v2Portion * 0.8);
        const v2Others = Math.floor((data.positiveFeedback + data.escalationFeedback) * v2Portion * 0.2);
        
        feedbackData = [
            { value: v1Positive + v2Positive, name: 'Positive Feedback', itemStyle: { color: '#10b981' } },
            { value: v1Negative + v2Negative, name: 'Negative Feedback', itemStyle: { color: '#f59e0b' } },
            { value: v2Others, name: 'Neutral Feedback', itemStyle: { color: '#8b5cf6' } }
        ];
    }
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const percentage = ((params.value / feedbackData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1);
                return `${params.name}<br/>${params.value} (${percentage}%)`;
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: 'middle'
        },
        series: [{
            name: 'Feedback Type',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['65%', '50%'],
            data: feedbackData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                show: true,
                formatter: '{b}: {c}'
            }
        }]
    };
    
    feedbackTypeChart.setOption(option);
}

// Update agent feedback chart
function updateAgentFeedbackChart(data) {
    const agentNames = data.agents.map(agent => agent.name.replace('Agent - ', ''));
    const satisfactionRates = data.agents.map(agent => agent.satisfaction);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: agentNames
        },
        yAxis: {
            type: 'value',
            min: 60,
            max: 85
        },
        series: [{
            name: 'Satisfaction Rate',
            type: 'bar',
            data: satisfactionRates,
            itemStyle: {
                color: function(params) {
                    return params.value > 75 ? '#10b981' : 
                           params.value > 65 ? '#f59e0b' : '#ef4444';
                }
            }
        }]
    };
    
    agentFeedbackChart.setOption(option);
}

// Update chart type
function updateChartType(chartId, chartType) {
    const currentData = getCurrentData();
    
    switch (chartId) {
        case 'answers-trend-chart':
            updateAnswersTrendChart(currentData);
            break;
        case 'feedback-trend-chart':
            updateFeedbackTrendChart(currentData);
            break;
    }
}