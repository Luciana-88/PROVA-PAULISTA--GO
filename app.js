const questions = [
  {
    id:11,type:"single",title:"Armazenamento de Estoque",
    prompt:`Leia a situação a seguir para responder à questão:

Segundo o Sebrae, a gestão eficiente de estoques depende da correta classificação dos itens armazenados e da definição de locais apropriados para cada categoria de material. Em ambientes produtivos, os estoques podem ser organizados em matéria-prima, produtos em processo e produtos acabados. Essa organização facilita o controle dos materiais, reduz perdas, melhora a movimentação dos itens e contribui para a disponibilidade dos produtos quando necessários.

Uma empresa de bebidas identificou dificuldades para localizar materiais e controlar a movimentação de produtos em seu centro de distribuição. Parte dos itens utilizados na produção estava armazenada juntamente com produtos já finalizados, gerando atrasos operacionais e falhas no controle de estoque. Para resolver o problema, a empresa decidiu revisar a organização dos materiais armazenados.

Com base nas orientações do Sebrae, aplique formas adequadas de armazenamento para os itens de estoque e assinale a alternativa correta.`,
    options:{
      A:"Armazenar matérias-primas, produtos em processo e produtos acabados em áreas definidas de acordo com sua função na operação.",
      B:"Armazenar matérias-primas juntamente com produtos acabados para reduzir a quantidade de áreas de armazenamento.",
      C:"Armazenar produtos em processo na mesma área das matérias-primas por estarem relacionados à produção.",
      D:"Armazenar produtos acabados na área destinada às matérias-primas para facilitar a reposição dos materiais.",
      E:"Armazenar produtos em processo e produtos acabados em uma mesma área por fazerem parte das etapas finais da produção."
    },answer:["A"],
    explanation:"A alternativa (A) é a correta, pois a organização dos itens em áreas definidas de acordo com sua função operacional permite manter a classificação adequada dos estoques, facilita o controle dos materiais, melhora a movimentação dos itens e favorece a disponibilidade dos produtos ao longo do processo produtivo."
  },
  {
    id:12,type:"single",title:"Interpretação dos indicadores de atividade",
    prompt:`Leia o estudo a seguir para responder à questão:

Segundo estudo desenvolvido na Universidade Estadual Paulista (UNESP), o setor da construção civil apresenta elevados índices de retrabalho decorrentes de falhas de planejamento, incompatibilidades de projeto, erros de execução e deficiências no acompanhamento dos serviços. Como consequência, essas ocorrências podem provocar aumento de custos, atrasos na entrega, redução da produtividade, comprometimento da qualidade das entregas e insatisfação dos clientes. O estudo destaca que o monitoramento desses aspectos é fundamental para avaliar os efeitos das falhas sobre o desempenho dos projetos.

O estudo identificou projetos com crescimento de 32% nos custos de execução e redução de 18% no índice de conformidade das entregas em situações com elevado volume de retrabalho. Os pesquisadores destacam a importância do monitoramento desses indicadores para avaliar o desempenho dos projetos.

Com base nos indicadores observados no estudo, analise o impacto mais provável dos desvios de custos e qualidade sobre o desempenho operacional dos projetos e assinale a alternativa correta.`,
    options:{
      A:"Os desvios observados indicam perda de eficiência operacional, pois o aumento dos custos e das falhas de qualidade tende a ampliar o retrabalho e reduzir a produtividade.",
      B:"Os desvios observados indicam melhoria do desempenho operacional, pois o aumento dos custos representa maior aplicação de recursos na execução das atividades.",
      C:"Os desvios observados indicam impactos predominantemente financeiros, sem relação significativa com a qualidade das entregas e a produtividade das equipes.",
      D:"Os desvios observados indicam necessidade de ajustes no planejamento do projeto, mas não permitem associar os resultados obtidos à execução das atividades.",
      E:"Os desvios observados indicam necessidade de ampliar os investimentos no projeto, pois as falhas identificadas não estão relacionadas ao desempenho operacional."
    },answer:["A"],
    explanation:"A alternativa (A) é a correta, pois o estudo aponta que falhas de qualidade podem gerar retrabalho, aumento dos custos, redução da produtividade e atrasos na execução das atividades. A análise conjunta desses indicadores demonstra perda de eficiência operacional e comprometimento do desempenho do projeto."
  },
  {
    id:13,type:"single",title:"Checklist",
    prompt:`Leia a situação a seguir para responder à questão:

Segundo o Sebrae, o controle e a melhoria dos processos dependem do acompanhamento sistemático das atividades realizadas e do registro de informações que permitam identificar falhas, desperdícios e oportunidades de melhoria. Ferramentas de verificação e monitoramento auxiliam as empresas na coleta organizada de dados, contribuindo para o controle das operações e para a análise do desempenho dos processos.

Com base na situação apresentada, identifique a principal finalidade do checklist na coleta e no registro de informações de processos operacionais e assinale a alternativa correta.`,
    options:{
      A:"Registrar e organizar dados dos processos para apoiar a identificação e a análise de problemas operacionais.",
      B:"Registrar e organizar dados dos processos para apoiar a elaboração de ações relacionadas à execução das atividades operacionais.",
      C:"Registrar e organizar dados dos processos para documentar informações sobre a execução das atividades e subsidiar relatórios de desempenho.",
      D:"Registrar e organizar dados dos processos para acompanhar a realização das tarefas previstas e verificar sua execução ao longo do processo.",
      E:"Registrar e organizar dados dos processos para controlar a execução das atividades e disponibilizar informações para acompanhamento operacional."
    },answer:["A"],
    explanation:"A alternativa (A) é a correta, pois o checklist tem como finalidade principal registrar e organizar informações do processo, permitindo identificar ocorrências, analisar problemas e apoiar ações de melhoria contínua."
  },
  {
    id:14,type:"single",title:"Não Conformidades",
    prompt:`Leia o caso a seguir para responder à questão:

Uma reportagem do Correio Braziliense destacou que a marca de cosméticos WePink acumulou quase 50 mil reclamações relacionadas principalmente a atrasos e falhas nas entregas de produtos. Entre as queixas registradas pelos consumidores, estavam pedidos não entregues dentro do prazo informado, dificuldades no atendimento e falhas no acompanhamento das solicitações dos clientes. A situação evidencia a ocorrência de não conformidades em processos relacionados à logística e ao atendimento ao consumidor.

Com base na situação da WePink descrita no texto, aplique procedimentos adequados de tratamento de não conformidades e assinale a opção correta para evitar que o problema continue ocorrendo.`,
    options:{
      A:"Aplicar ações corretivas para eliminar as causas das falhas identificadas no processo e avaliar, posteriormente, a eficácia das medidas implementadas.",
      B:"Identificar as causas das falhas no processo de separação dos pedidos, implementar ações corretivas e registrar os resultados obtidos para o acompanhamento da evolução das entregas.",
      C:"Identificar as causas das falhas e implementar ações corretivas voltadas à melhoria do processo de separação e acompanhamento dos pedidos.",
      D:"Implementar ações corretivas com base nos dados operacionais coletados e acompanhar os indicadores de desempenho relacionados às entregas.",
      E:"Analisar as reclamações dos clientes e implementar melhorias voltadas ao atendimento e ao cumprimento dos prazos de entrega."
    },answer:["A"],
    explanation:"A alternativa (A) é a correta, pois o tratamento adequado de uma não conformidade exige a aplicação de ações corretivas voltadas à eliminação das causas do problema, e não apenas à correção de seus efeitos. Além disso, a verificação da eficácia das medidas implementadas é necessária para confirmar se a não conformidade foi efetivamente tratada e se há condições de evitar sua recorrência."
  },
  {
    id:15,type:"single",title:"Sequenciamento de atividades",
    prompt:`Leia o caso a seguir para responder à questão:

Em 2026, a Natura informou que a implementação de novos sistemas de planejamento e a substituição de sistemas corporativos exigiram etapas de preparação, configuração, validação e entrada em operação. Segundo a empresa, dificuldades observadas durante a implementação evidenciaram a importância do planejamento e do sequenciamento adequado das atividades para reduzir impactos na execução do projeto e no funcionamento das operações.

Com base no processo descrito pela Natura, aplique técnicas de sequenciamento de atividades para estabelecer a ordem mais adequada de execução das etapas de implantação de um sistema de controle de estoque e assinale a alternativa correta.`,
    options:{
      A:"Aplicar o sequenciamento das atividades iniciando a configuração do sistema, realizando o levantamento dos requisitos, validando a solução, treinando os usuários e iniciando a operação.",
      B:"Aplicar o sequenciamento das atividades levantando os requisitos dos usuários, configurando o sistema, validando a solução, treinando os usuários e iniciando a operação.",
      C:"Aplicar o sequenciamento das atividades levantando os requisitos dos usuários, treinando os usuários, configurando o sistema, validando a solução e iniciando a operação.",
      D:"Aplicar o sequenciamento das atividades levantando os requisitos dos usuários, configurando o sistema, treinando os usuários, iniciando a operação e validando a solução.",
      E:"Aplicar o sequenciamento das atividades configurando o sistema, iniciando a operação, validando a solução, treinando os usuários e retomando a operação após os ajustes necessários."
    },answer:["B"],
    explanation:"A alternativa (B) é a correta, pois apresenta uma sequência que respeita as dependências entre as atividades do projeto. O levantamento dos requisitos fornece as informações necessárias para a configuração do sistema. Após a configuração, a solução deve ser validada por meio de testes para verificar seu funcionamento. Com o sistema validado, os usuários podem ser capacitados para sua utilização e, somente depois dessas etapas, a operação pode ser iniciada."
  },
  {
    id:16,type:"multi",title:"Controle de prazos em projetos — Gráfico de Gantt",
    prompt:`Leia o trecho de um estudo a seguir para responder à questão:

Uma pesquisa realizada em uma empresa de equipamentos médicos de Franca (SP) analisou a utilização do gráfico de Gantt no Planejamento e Controle da Produção (PCP). O estudo mostrou que a ferramenta auxiliou o planejamento das atividades, a visualização do andamento das tarefas e a identificação de atrasos no cronograma. Antes da implantação do gráfico de Gantt, apenas 31,57% dos pedidos eram entregues exatamente no prazo previsto. Após sua utilização, a empresa passou a visualizar melhor as dependências entre atividades, revisar os cronogramas e definir os prazos de produção mais adequados.

Com base nas práticas descritas na pesquisa e no gráfico de Gantt apresentado, avalie as alternativas a seguir e assinale as ações mais adequadas para controlar os impactos do atraso identificado e apoiar o cumprimento dos prazos do projeto, considerando que mais de uma alternativa pode estar correta.`,
    options:{
      A:"Reavaliar as atividades subsequentes afetadas pelo atraso e verificar a necessidade de ajustes no cronograma para reduzir impactos sobre o prazo final do projeto.",
      B:"Calcular o impacto do atraso identificado sobre o prazo de conclusão do projeto, considerando a duração das atividades subsequentes e suas dependências, para verificar a necessidade de revisão da data de entrega.",
      C:"Revisar o desempenho das atividades já concluídas e comparar os resultados obtidos com os prazos originalmente planejados antes de promover ajustes no cronograma.",
      D:"Avaliar o desempenho da atividade atrasada e decidir sobre possíveis intervenções após verificar seus efeitos sobre o andamento geral do cronograma.",
      E:"Analisar a viabilidade de manter os marcos originalmente previstos e verificar o comportamento das atividades subsequentes antes de redefinir o cronograma."
    },answer:["A","B"],
    explanation:"As alternativas (A) e (B) estão corretas. A análise das atividades dependentes permite identificar quais etapas podem ser afetadas pelo atraso e definir ajustes no cronograma para reduzir impactos sobre a conclusão do projeto. O gráfico de Gantt também permite avaliar os efeitos do atraso sobre o prazo final do projeto, apoiando decisões relacionadas à revisão da data de entrega e ao controle do cronograma.",
    image:"assets/grafico-gantt.png",multiNote:"Marque as duas alternativas corretas."
  }
];

const $ = id => document.getElementById(id);
let index = 0, score = 0, hits = 0, selected = new Set(), startTime = 0, timerId = null;
const correctAudio = new Audio("assets/correto.mp3");
const wrongAudio = new Audio("assets/errado.mp3");
correctAudio.volume = .9; wrongAudio.volume = .9;

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
}
function formatTime(seconds){
  const m = String(Math.floor(seconds/60)).padStart(2,"0");
  const s = String(seconds%60).padStart(2,"0");
  return `${m}:${s}`;
}
function elapsed(){ return Math.floor((Date.now()-startTime)/1000); }

function renderQuestion(){
  const q = questions[index];
  selected = new Set();
  $("progress").textContent = `${index+1} / ${questions.length}`;
  $("score").textContent = score;
  $("questionNumber").textContent = `QUESTÃO ${q.id}`;
  $("questionType").textContent = q.type==="multi" ? "RESPOSTAS MÚLTIPLAS" : "RESPOSTA ÚNICA";
  $("questionTitle").textContent = q.title;
  $("prompt").textContent = q.prompt;
  $("answerBtn").textContent = q.type==="multi" ? "CONFIRMAR RESPOSTAS" : "CONFIRMAR RESPOSTA";
  $("answerBtn").disabled = true;
  $("multiNote").classList.toggle("hidden", !q.multiNote);
  if(q.multiNote) $("multiNote").textContent = q.multiNote;
  $("questionImageWrap").classList.toggle("hidden", !q.image);
  if(q.image) $("questionImage").src = q.image;

  const options = $("options"); options.innerHTML = "";
  Object.entries(q.options).forEach(([letter,text])=>{
    const label=document.createElement("label");
    label.className="option";
    label.dataset.letter=letter;
    label.innerHTML = `<input type="${q.type==="multi"?"checkbox":"radio"}" name="answer" value="${letter}">
      <span class="option-letter">${letter})</span><span>${text}</span>`;
    label.addEventListener("click",()=>{
      if(q.type==="multi"){
        if(selected.has(letter)) selected.delete(letter); else selected.add(letter);
      }else{
        selected = new Set([letter]);
      }
      document.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));
      selected.forEach(x=>document.querySelector(`.option[data-letter="${x}"]`)?.classList.add("selected"));
      $("answerBtn").disabled = selected.size===0;
    });
    options.appendChild(label);
  });
  $("gameScreen").scrollTo?.(0,0);
}

function play(audio){
  audio.currentTime=0;
  audio.play().catch(()=>{});
}
function coins(){
  const layer=$("coinLayer");
  for(let i=0;i<18;i++){
    const c=document.createElement("div"); c.className="coin";
    c.style.left=(5+Math.random()*90)+"%";
    c.style.animationDelay=(Math.random()*.35)+"s";
    c.style.animationDuration=(.9+Math.random()*.8)+"s";
    layer.appendChild(c);
    setTimeout(()=>c.remove(),1800);
  }
}
function submit(){
  const q=questions[index];
  const chosen=[...selected].sort();
  const expected=[...q.answer].sort();
  const ok=chosen.length===expected.length && chosen.every((v,i)=>v===expected[i]);
  if(ok){ score += 100; hits++; coins(); play(correctAudio); }
  else { play(wrongAudio); }
  $("score").textContent=score;
  $("feedbackIcon").textContent=ok?"🏆":"💥";
  $("feedbackTitle").textContent=ok?"PARABÉNS! VOCÊ ACERTOU!":"QUE PENA, VOCÊ ERROU!";
  $("feedbackMessage").textContent=ok
    ?"Mandou bem! Você ganhou 100 moedas nesta questão."
    :"Não desanime! Leia o gabarito explicativo e siga para a próxima fase.";
  $("correctAnswer").textContent=q.answer.join(" + ");
  $("explanation").textContent=q.explanation;
  $("nextBtn").textContent=index===questions.length-1?"VER RESULTADO FINAL ▶":"PRÓXIMA FASE ▶";
  show("feedbackScreen");
}
function next(){
  if(index<questions.length-1){ index++; show("gameScreen"); renderQuestion(); }
  else finish();
}
function finish(){
  clearInterval(timerId);
  const total=questions.length;
  const t=elapsed();
  $("finalScore").textContent=score;
  $("finalHits").textContent=`${hits}/${total}`;
  $("finalTime").textContent=formatTime(t);
  $("finalMessage").textContent = hits===total
    ?"Perfeito! Você coletou todas as respostas corretas."
    :hits>=4
      ?"Ótimo desempenho! Revise os gabaritos das questões que errou."
      :"Continue treinando: use os gabaritos explicativos para reforçar os conceitos.";
  show("endScreen");
}
$("startBtn").addEventListener("click",()=>{
  index=0;score=0;hits=0;startTime=Date.now();
  clearInterval(timerId);
  timerId=setInterval(()=>$("timer").textContent=formatTime(elapsed()),1000);
  $("timer").textContent="00:00";
  show("gameScreen"); renderQuestion();
});
$("answerBtn").addEventListener("click",submit);
$("nextBtn").addEventListener("click",next);
$("restartBtn").addEventListener("click",()=>{
  show("startScreen");
});
