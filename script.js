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