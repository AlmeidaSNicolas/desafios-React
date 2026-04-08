Contador "Inteligente" (useState)
Objetivo: Entender como o estado local funciona, como atualizá-lo e como lidar com eventos de clique simples no React.

Requisitos:

Crie um componente que exiba um número centralizado na tela, começando no valor 0.

Adicione dois botões: "Aumentar" e "Diminuir".

Ao clicar em "Aumentar", o número na tela deve subir em 1.

Ao clicar em "Diminuir", o número na tela deve cair em 1.

Regra de Validação: O contador nunca pode ficar com um valor negativo. Se ele já estiver em 0 e você clicar em "Diminuir", nada deve acontecer (a ação deve ser ignorada).

Desafio Bônus: Já que a biblioteca de ícones está instalada e funcionando, importe os ícones Plus e Minus do lucide-react e coloque-os dentro dos seus respectivos botões para deixar o visual mais bacana.

Boa codificação! Se surgir alguma dúvida na lógica de bloqueio ou se o React acusar algum erro no terminal, é só mandar aqui.


Você vai precisar colocar uma verificação (um if simples) dentro da sua função DimuniurNumero 
para garantir que o setNumero só seja executado se o numero for maior que zero. Tente implementar
essa trava aí!