// Função para atualizar a data de última atualização
function updateLastUpdate() {
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        const now = new Date();
        const formattedDate = now.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        lastUpdateElement.textContent = formattedDate;
    }
}

// Função para simular status do deploy
function updateDeployStatus() {
    const deployStatusElement = document.getElementById('deploy-status');
    if (deployStatusElement) {
        // Simular diferentes status
        const statuses = [
            { text: '✅ Ativo', class: 'success' },
            { text: '🔄 Em Deploy', class: 'building' },
            { text: '✅ Deploy Concluído', class: 'success' }
        ];
        
        // Por padrão, mostrar como ativo
        deployStatusElement.textContent = statuses[0].text;
    }
}

// Função para adicionar interatividade aos cards
function addCardInteractivity() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
}

// Função para simular dados do GitHub API (opcional)
async function fetchGitHubInfo() {
    try {
        // Esta é uma simulação - em um projeto real, você poderia
        // fazer uma chamada para a API do GitHub para obter informações reais
        const mockData = {
            repository: 'skills-introduction-to-github',
            owner: 'jrcosta',
            lastCommit: new Date().toISOString(),
            deployStatus: 'success'
        };
        
        console.log('Informações simuladas do repositório:', mockData);
        return mockData;
    } catch (error) {
        console.error('Erro ao buscar informações do GitHub:', error);
        return null;
    }
}

// Função para mostrar uma mensagem de boas-vindas
function showWelcomeMessage() {
    console.log('🎉 Bem-vindo à página de estudos do GitHub!');
    console.log('Esta página foi criada usando GitHub Actions e GitHub Pages.');
    console.log('Explore o código fonte para ver como tudo funciona!');
}

// Função principal que executa quando a página carrega
function initializePage() {
    updateLastUpdate();
    updateDeployStatus();
    addCardInteractivity();
    showWelcomeMessage();
    
    // Buscar informações do GitHub (simulado)
    fetchGitHubInfo().then(data => {
        if (data) {
            console.log('Dados do repositório carregados:', data);
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializePage);

// Atualizar o timestamp a cada minuto
setInterval(updateLastUpdate, 60000);

// Função para demonstrar conceitos do GitHub
function demonstrateGitHubConcepts() {
    const concepts = [
        {
            name: 'Repository',
            description: 'Um repositório é onde seu projeto vive no GitHub',
            icon: '📁'
        },
        {
            name: 'Commit',
            description: 'Um commit é um snapshot das mudanças no seu código',
            icon: '💾'
        },
        {
            name: 'Branch',
            description: 'Branches permitem trabalhar em features de forma isolada',
            icon: '🌿'
        },
        {
            name: 'Pull Request',
            description: 'Pull Requests são propostas de mudanças no código',
            icon: '🔄'
        },
        {
            name: 'Actions',
            description: 'GitHub Actions automatiza workflows de CI/CD',
            icon: '⚡'
        }
    ];
    
    return concepts;
}

// Exportar função para uso em outros scripts (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        demonstrateGitHubConcepts,
        fetchGitHubInfo
    };
}