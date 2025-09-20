// Script para adicionar interatividade ao website
document.addEventListener('DOMContentLoaded', function() {
    // Exibir data atual
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        currentDateElement.textContent = now.toLocaleDateString('pt-BR', options);
    }

    // Adicionar efeitos de hover nos cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Console log para demonstrar JavaScript funcionando
    console.log('🚀 Website Skills Introduction to GitHub carregado com sucesso!');
    console.log('📅 Deploy realizado em:', new Date().toISOString());
    
    // Verificar se GitHub Actions estão funcionando
    if (window.location.hostname.includes('github.io')) {
        console.log('✅ Website deployado via GitHub Pages!');
        
        // Adicionar indicador visual de deploy bem-sucedido
        const deployInfo = document.getElementById('deploy-info');
        if (deployInfo) {
            const successBadge = document.createElement('div');
            successBadge.innerHTML = '🎉 Deploy automático via GitHub Actions funcionando!';
            successBadge.style.cssText = `
                background: #d4edda;
                color: #155724;
                padding: 0.75rem;
                border-radius: 5px;
                margin-top: 1rem;
                border: 1px solid #c3e6cb;
                font-weight: 500;
            `;
            deployInfo.appendChild(successBadge);
        }
    }

    // Adicionar alguns recursos interativos
    addInteractiveFeatures();
});

// Função para adicionar recursos interativos
function addInteractiveFeatures() {
    // Animação suave ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-card, .info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Adicionar contador de visitas (simulado)
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    
    console.log(`🔢 Esta é sua visita número ${visitCount} ao site!`);
    
    // Exibir informações do repositório (se disponível)
    if (typeof window !== 'undefined' && window.location) {
        console.log('🌐 Informações do site:');
        console.log('   URL:', window.location.href);
        console.log('   Host:', window.location.hostname);
        console.log('   Protocolo:', window.location.protocol);
    }
}

// Função para demonstrar recursos do GitHub Actions
function demonstrateGitHubActions() {
    const actionsInfo = {
        workflow: 'Deploy to GitHub Pages',
        trigger: 'Push to main/master branch',
        steps: [
            'Checkout do código',
            'Setup do GitHub Pages',
            'Build do website',
            'Upload do artifact',
            'Deploy para GitHub Pages'
        ],
        benefits: [
            'Deploy automático',
            'Versionamento',
            'Rollback fácil',
            'Integração contínua'
        ]
    };

    console.log('⚙️ Informações do GitHub Actions:', actionsInfo);
    return actionsInfo;
}

// Executar demonstração
demonstrateGitHubActions();
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
