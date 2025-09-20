# 🔧 Configuração do GitHub Pages

## Instruções para Ativar o GitHub Pages

Para que o deploy automático funcione corretamente, siga estes passos:

### 1. Configurar GitHub Pages no Repositório

1. Vá para **Settings** do repositório
2. Navegue até **Pages** no menu lateral
3. Em **Source**, selecione **GitHub Actions**
4. Salve as configurações

### 2. Verificar Permissões

Certifique-se de que as seguintes permissões estão habilitadas:

- **Actions**: Habilitadas para executar workflows
- **Pages**: Configurado para usar GitHub Actions como source

### 3. Variáveis de Ambiente (Opcional)

O workflow atual não requer variáveis de ambiente específicas, mas você pode adicionar:

```yaml
env:
  NODE_ENV: production
  SITE_URL: https://seu-usuario.github.io/skills-introduction-to-github
```

### 4. Monitoramento

Após o merge/push para a branch principal:

1. Vá para a aba **Actions** para ver o workflow em execução
2. Aguarde a conclusão do deploy
3. Acesse o site em: `https://seu-usuario.github.io/nome-do-repositorio`

### 🔍 Troubleshooting

**Problema**: Workflow não executa
- **Solução**: Verifique se as Actions estão habilitadas no repositório

**Problema**: Deploy falha
- **Solução**: Verifique os logs na aba Actions e as permissões do GITHUB_TOKEN

**Problema**: Site não carrega
- **Solução**: Aguarde alguns minutos para propagação e verifique se o GitHub Pages está configurado corretamente

### 📚 Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Documentação GitHub Actions](https://docs.github.com/actions)
- [Workflow de Deploy](../.github/workflows/deploy.yml)