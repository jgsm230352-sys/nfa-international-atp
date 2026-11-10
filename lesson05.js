/* NFA International — Aula 05 | versão acadêmica bilíngue
   Conteúdo didático original. Referências oficiais verificadas em 10 Nov 2026. */
(function(){
  const chapter = (title, body) => ({title, body});
  const chapters = [
    chapter("5.1 — Autoridade FAA e função do Title 14 CFR", `
### Português (BR)
#### Briefing do instrutor
Pilotos, quando operamos nos Estados Unidos, a pergunta inicial não é “qual regra eu lembro?”, mas “qual autoridade e qual regra se aplicam a esta operação?”. A FAA administra a segurança da aviação civil dentro das atribuições federais. O Title 14 do Code of Federal Regulations organiza as regras aeronáuticas. As normas são publicadas por meio do processo federal de rulemaking; depois de promulgadas e vigentes, seus requisitos vinculam as pessoas e operações abrangidas.

O CFR não é uma lista de recomendações. Cada parte tem escopo próprio, e uma operação pode estar sujeita a mais de uma parte ao mesmo tempo. Um piloto ATP, por exemplo, pode estar pessoalmente sujeito à Part 61 quanto a certificado e privilégios, enquanto a operação específica é conduzida sob Part 91, 121 ou 135 conforme o operador e a natureza do serviço. O certificado do piloto não determina sozinho a parte operacional aplicável.

#### Como aplicar no voo
Antes de concluir que uma regra “vale” ou “não vale”, identifique: quem opera; em que condição; qual aeronave; qual serviço está sendo prestado; e se existe regra específica, exceção ou autorização. Em uma sessão oral, diga a conclusão, explique o fato que aciona a regra e só então cite a referência. Esse raciocínio é mais útil do que recitar números sem contexto.

**Objetivos:** distinguir autoridade regulatória de procedimentos internos; identificar a operação antes de aplicar a regra; justificar uma conclusão com texto vigente e fatos pertinentes.

### English (US)
#### Instructor briefing
Pilots, when we operate in the United States, the first question is not “which rule do I remember?” It is “which authority and which rule apply to this operation?” The FAA administers civil aviation safety within its federal responsibilities. Title 14 of the Code of Federal Regulations organizes aviation rules. Rules are issued through the federal rulemaking process; once adopted and effective, their requirements bind the persons and operations within their scope.

The CFR is not a list of recommendations. Each part has its own scope, and one operation may be subject to more than one part at the same time. An ATP pilot, for example, may be subject to Part 61 for certificate privileges while the particular operation is conducted under Part 91, 121, or 135 depending on the operator and the nature of the service. The pilot certificate alone does not determine the operating part.

#### Applying the framework
Before deciding that a rule does or does not apply, identify who is operating, under what conditions, which aircraft is involved, what service is being provided, and whether a specific rule, exception, or authorization exists. During an oral evaluation, state the conclusion, explain the fact that triggers the rule, and then cite the reference. That reasoning is more useful than reciting section numbers without context.

**Objectives:** distinguish regulatory authority from company procedures; identify the operation before applying a rule; support a conclusion with current text and relevant facts.
`),
    chapter("5.2 — Como ler uma disposição do CFR", `
### Português (BR)
#### Leitura em camadas
Leia uma regra em quatro passagens. Primeiro, encontre o sujeito: “no person”, PIC, owner, operator ou certificate holder. Segundo, identifique a ação regulada: operar, despachar, autorizar, registrar ou demonstrar. Terceiro, marque condições e qualificadores: “unless”, “except”, “when”, “under” e “for”. Quarto, siga as exceções, definições e referências cruzadas citadas.

Por exemplo, uma regra pode proibir uma ação sob determinada condição, mas incluir exceção para emergência, autorização do Administrator ou operação sob outra parte. A exceção não elimina o requisito geral; ela delimita quando ele muda. Não transporte uma frase isolada para outro tipo de operação.

#### Exemplo de briefing
Se a pergunta menciona uma aproximação IFR abaixo de mínimos, identifique primeiro a operação e a regra pertinente, depois separe DA/MDA, visibilidade, referências visuais e posição da aeronave. Não responda “pode” apenas porque existe autorização ATC: autorização de tráfego não substitui os critérios regulamentares para continuar a aproximação ou descer abaixo da altitude aplicável.

#### Erro frequente
Confundir uma regra geral com uma regra absoluta. O piloto deve ler o parágrafo completo e verificar o escopo e as exceções. Em prova, termos como “may”, “must”, “unless” e “except” mudam a resposta. Em operação, a mesma leitura evita aplicar requisito de Part 121 a um voo Part 91 ou o inverso.

### English (US)
#### Read the rule in layers
Read a rule in four passes. First, identify the subject: “no person,” PIC, owner, operator, or certificate holder. Second, identify the regulated action: operating, dispatching, authorizing, recording, or demonstrating. Third, mark conditions and qualifiers such as “unless,” “except,” “when,” “under,” and “for.” Fourth, follow the exceptions, definitions, and cross-references.

A rule may prohibit an action under a stated condition while providing an exception for an emergency, Administrator authorization, or an operation conducted under another part. An exception does not erase the general requirement; it defines when the requirement changes. Do not carry an isolated sentence into a different type of operation.

#### Briefing example
If a question concerns an IFR approach below minimums, first identify the operation and applicable rule, then separate DA/MDA, visibility, visual references, and aircraft position. Do not answer “yes” merely because ATC issued a clearance: an ATC clearance does not replace the regulatory criteria for continuing an approach or descending below the applicable altitude.

#### Common error
Do not confuse a general rule with an absolute rule. Read the complete paragraph and verify scope and exceptions. On an exam, words such as “may,” “must,” “unless,” and “except” can change the answer. In operations, the same reading prevents applying a Part 121 requirement to a Part 91 flight, or vice versa.
`),
    chapter("5.3 — Regulamento, orientação e padrão de avaliação", `
### Português (BR)
#### Quatro documentos, quatro funções
Um regulamento do 14 CFR contém requisitos vinculantes dentro de seu escopo. Uma Advisory Circular (AC) normalmente apresenta método aceitável, explicação ou orientação; não se torna automaticamente regra obrigatória. Pode ganhar efeito obrigatório quando um regulamento ou instrumento aplicável a incorpora ou exige seu cumprimento. Portanto, verifique o contexto em vez de presumir que toda AC é “lei” ou que nenhuma AC pode ser condição de aprovação.

O Aeronautical Information Manual (AIM) reúne informação e procedimentos de operação no sistema FAA. É fonte operacional valiosa, mas uma afirmação no AIM não deve ser tratada automaticamente como texto regulatório. O Airman Certification Standards (ACS), por sua vez, define o padrão usado no practical test para o certificado/habilitação correspondente; não é um regulamento geral de operação e não substitui o knowledge test.

#### Aplicação para ATP
Ao estudar, use a norma para responder “o que é obrigatório?”, o AIM para compreender procedimentos e informação do sistema, a AC para orientação/means of compliance e o ACS para saber como conhecimento, risco e habilidade serão avaliados no teste prático. Identifique a função de cada fonte ao explicar uma decisão.

### English (US)
#### Four documents, four functions
A 14 CFR regulation contains binding requirements within its scope. An Advisory Circular (AC) usually provides an acceptable method, explanation, or guidance; it does not automatically become a mandatory rule. It may acquire mandatory effect when an applicable regulation or instrument incorporates it or requires compliance with it. Check the context rather than assuming every AC is “law” or that no AC can ever be an approval condition.

The Aeronautical Information Manual (AIM) collects information and procedures for operating in the FAA system. It is valuable operational material, but an AIM statement should not automatically be treated as regulatory text. The Airman Certification Standards (ACS), in turn, establishes the standard used on the practical test for the corresponding certificate or rating; it is not a general operating regulation and does not replace the knowledge test.

#### ATP application
Use the regulation to answer “what is required?”, the AIM to understand procedures and system information, an AC for guidance or means of compliance, and the ACS to understand how knowledge, risk management, and skill are evaluated on the practical test. Identify each source’s function when explaining a decision.
`),
    chapter("5.4 — Part 61: certificados, privilégios e limites", `
### Português (BR)
Part 61 trata da certificação de pilotos e instrutores, incluindo emissão de certificados, habilitações, requisitos de elegibilidade e exercício de privilégios. Para ATP avião, a análise pode envolver §§ 61.153, 61.155, 61.156, 61.157, 61.159 e, quando aplicável, § 61.160. A aula 06 aprofunda conhecimento, experiência e proficiência; aqui o foco é reconhecer que a certificação do piloto é apenas uma camada da legalidade operacional.

Um ATP AMEL não autoriza automaticamente qualquer voo, aeronave ou função. Ainda é necessário verificar habilitação de tipo quando exigida, limitações do certificado, qualificação recente, condição médica aplicável, autorização do operador e regras da operação. Uma habilitação demonstra uma qualificação específica, mas não substitui treinamento de operador, verificação de competência ou autorização interna.

#### Cenário de instrutor
Uma tripulação apresenta ATP AMEL válido e pergunta se pode iniciar um voo comercial em aeronave de transporte. A resposta não pode ser baseada apenas no certificado. Verifique habilitação de tipo, função designada, qualificação e experiência recente, treinamento exigido pelo operador e a parte operacional. A decisão final depende do conjunto de requisitos pertinentes.

### English (US)
Part 61 addresses pilot and instructor certification, including certificate issuance, ratings, eligibility requirements, and the exercise of privileges. For an airplane ATP, the analysis may involve §§ 61.153, 61.155, 61.156, 61.157, 61.159, and, when applicable, § 61.160. Lesson 06 develops knowledge, experience, and proficiency; here the focus is recognizing that pilot certification is only one layer of operational legality.

An ATP AMEL does not automatically authorize every flight, aircraft, or duty position. The pilot must still verify any required type rating, certificate limitations, recent qualification, applicable medical status, operator authorization, and rules governing the operation. A rating demonstrates a specific qualification, but does not replace operator training, proficiency checks, or internal authorization.

#### Instructor scenario
A crew presents a valid ATP AMEL and asks whether it may begin a commercial flight in a transport-category airplane. The answer cannot be based on the certificate alone. Verify the type rating, assigned duty position, qualification and recent experience, operator-required training, and operating part. The decision depends on the full set of applicable requirements.
`),
    chapter("5.5 — Part 91, autoridade do PIC e emergência", `
### Português (BR)
Part 91 contém regras gerais de operação e voo. § 91.3(a) torna o PIC diretamente responsável e autoridade final pela operação segura da aeronave. Isso não significa liberdade para ignorar regras por preferência pessoal: significa que a responsabilidade permanece com o PIC, inclusive quando delega tarefas ou recebe instruções de terceiros.

Pelo § 91.3(b), diante de uma emergência que exija ação imediata, o PIC pode desviar-se de uma regra desta parte na extensão necessária para enfrentá-la. O requisito é a emergência e a necessidade imediata; não é um mecanismo para conveniência, atraso comercial ou correção de planejamento inadequado. Se o PIC desviar-se de uma regra sob essa autoridade, pode ser solicitado a enviar relatório escrito à FAA, nos termos do parágrafo (c).

Uma autorização ATC não transfere a responsabilidade do PIC. Se a autorização conflita com terreno, desempenho, meteorologia, condição técnica ou regra aplicável, a tripulação deve esclarecer, recusar ou solicitar outra autorização. Em emergência, priorize controle da aeronave, trajetória segura, comunicação e coordenação; reporte o desvio a ATC assim que praticável quando requerido.

### English (US)
Part 91 contains general operating and flight rules. Section 91.3(a) makes the PIC directly responsible for, and the final authority as to, the safe operation of the aircraft. This does not mean the pilot may ignore rules by personal preference; it means responsibility remains with the PIC, including when duties are delegated or instructions come from others.

Under § 91.3(b), in an emergency requiring immediate action, the PIC may deviate from a rule in this part to the extent required to meet the emergency. The conditions are an emergency and immediate need; this is not a device for convenience, a commercial delay, or correcting poor planning. If the PIC deviates under this authority, the FAA may request a written report under paragraph (c).

An ATC clearance does not transfer PIC responsibility. If a clearance conflicts with terrain, performance, weather, aircraft condition, or an applicable rule, the crew should clarify, decline, or request another clearance. In an emergency, prioritize aircraft control, a safe flight path, communication, and coordination; report a deviation to ATC as soon as practicable when required.
`),
    chapter("5.6 — IFR: autorização para continuar e descer", `
### Português (BR)
Em IFR, separar autorização ATC, mínimos publicados e condições regulamentares. Uma autorização de aproximação permite executar o procedimento, mas não autoriza automaticamente continuar abaixo de DA/DH ou MDA. § 91.175(c) exige, salvo exceções específicas, que a aeronave esteja continuamente em posição para uma descida e pouso na pista pretendida com razão normal, que a visibilidade de voo não seja inferior ao mínimo aplicável e que pelo menos uma referência visual requerida esteja claramente visível e identificável.

Se esses critérios não estão presentes ao atingir DA/DH ou MDA, execute a aproximação perdida. Se forem obtidos e mantidos, a tripulação ainda deve avaliar estabilidade, energia, alinhamento e capacidade de pousar com segurança. “Ver luzes” por si só não basta se a posição não permitir uma descida normal; da mesma forma, estar alinhado sem referência visual requerida não satisfaz a condição.

#### Exercício oral
Você está em uma aproximação ILS. Ao atingir DA, não tem referência visual, embora o controlador confirme que a pista está livre. O que faz? Resposta: inicia a missed approach conforme procedimento e autorização publicada/ATC; a informação do controlador não substitui os critérios de § 91.175.

### English (US)
In IFR, separate the ATC clearance, published minimums, and regulatory conditions. An approach clearance authorizes execution of the procedure, but it does not automatically authorize continuing below DA/DH or MDA. Except for specified exceptions, § 91.175(c) requires the aircraft to be continuously positioned for a normal descent and landing on the intended runway, flight visibility to be no less than the applicable minimum, and at least one required visual reference to be distinctly visible and identifiable.

If those criteria are not met at DA/DH or MDA, execute the missed approach. If they are acquired and maintained, the crew must still assess stability, energy, alignment, and the ability to land safely. “Seeing lights” alone is not enough if the aircraft is not positioned for a normal descent; likewise, alignment without a required visual reference does not satisfy the condition.

#### Oral exercise
You are on an ILS approach. At DA, you have no visual reference, although the controller confirms the runway is clear. What do you do? Answer: initiate the missed approach in accordance with the procedure and applicable clearance; the controller’s information does not replace § 91.175 criteria.
`),
    chapter("5.7 — Part 97: procedimentos IFR publicados", `
### Português (BR)
Part 97 contém procedimentos instrumentais padrão e materiais associados, incluindo procedimentos de aproximação e dados que devem ser interpretados com a publicação vigente. Na prática, a carta é uma instrução operacional detalhada: frequência, curso, altitudes, restrições, mínimos, perfil vertical e procedimento de aproximação perdida precisam ser lidos como um conjunto.

Uma carta publicada não garante que o procedimento esteja utilizável no momento do voo. NOTAMs podem suspender ou limitar componentes; equipamentos da aeronave, autorização operacional, disponibilidade de sinal e condições específicas podem restringir o uso. O piloto compara carta atual, NOTAMs, condições da aeronave e autorização recebida. Se ATC autorizar uma aproximação diferente da preparada, esclareça a mudança e confirme capacidade, mínimos e configuração.

Não misture os mínimos de carta com mínimos de alternado ou mínimos de operador. Eles respondem a perguntas diferentes. Para operação sob Part 121/135, o operador pode ter restrições adicionais autorizadas ou exigidas. A escolha deve respeitar o contexto operacional.

### English (US)
Part 97 contains standard instrument procedures and related material, including approach procedures and data that must be interpreted using the current publication. In practice, the chart is a detailed operating instruction: frequencies, courses, altitudes, restrictions, minimums, vertical profile, and missed-approach procedure must be read as a whole.

A published chart does not guarantee that the procedure is usable at the time of flight. NOTAMs may suspend or limit components; aircraft equipment, operational authorization, signal availability, and specific conditions may restrict use. The pilot compares the current chart, NOTAMs, aircraft capability, and received clearance. If ATC clears an approach different from the one prepared, clarify the change and confirm capability, minimums, and configuration.

Do not confuse chart minimums with alternate minimums or operator minimums. They answer different questions. For Part 121/135 operations, the operator may have additional restrictions that are authorized or required. The choice must fit the operating context.
`),
    chapter("5.8 — Part 119: quando existe operação de transportador", `
### Português (BR)
Part 119 estabelece requisitos de certificação e operações de certos operadores aéreos. A pergunta prática é se a atividade está sendo conduzida como operação que exige certificado de operador e sob qual parte operacional. A natureza do serviço, quem exerce controle operacional, a forma de remuneração, o tipo de aeronave e as exceções regulamentares podem influenciar a análise.

O certificado ATP é uma credencial individual do piloto. Certificado de operador e especificações operacionais pertencem ao operador. Um piloto pode ter ATP válido e, ainda assim, uma empresa não estar autorizada a oferecer determinado serviço; inversamente, o certificado do operador não substitui as qualificações pessoais do piloto.

#### Decisão em linha
Antes de aceitar uma missão como “voo privado” ou “fretamento”, não use apenas o nome comercial dado ao voo. Identifique quem vende o transporte, quem fornece aeronave e tripulação, quem decide despacho/partida e qual autorização operacional rege a atividade. Para o piloto, a conclusão deve ser coordenada com os documentos e procedimentos aprovados do operador.

### English (US)
Part 119 establishes certification and operating requirements for certain air carriers and operators. The practical question is whether the activity is being conducted as an operation that requires an operating certificate and under which operating part. The nature of the service, who exercises operational control, compensation, aircraft type, and regulatory exceptions may affect the analysis.

An ATP certificate is an individual pilot credential. The operating certificate and operations specifications belong to the operator. A pilot may hold a valid ATP while a company is not authorized to provide a particular service; conversely, an operator certificate does not replace the pilot’s personal qualifications.

#### Line-operation decision
Before accepting a mission described as “private” or “charter,” do not rely solely on the commercial label. Identify who sells the transportation, who provides the aircraft and crew, who controls dispatch/departure, and which operating authorization governs the activity. The pilot’s conclusion should be coordinated with the operator’s approved documents and procedures.
`),
    chapter("5.9 — Part 121: operações de transporte aéreo", `
### Português (BR)
Part 121 contém requisitos para operações domésticas, flag e suplementares de determinados transportadores e operadores comerciais. Em comparação com a regra geral Part 91, a Part 121 integra um sistema operacional mais prescritivo: certificação do operador, manuais e especificações, treinamento e verificações, despacho/controle operacional, limitações de operação, manutenção e requisitos de tripulação.

Não é correto pegar uma regra Part 91 e presumir que ela é suficiente para Part 121. A operação pode estar sujeita a uma regra específica da Part 121, uma autorização nas operations specifications, um manual aprovado e procedimentos da empresa. O piloto deve cumprir o conjunto aplicável. Também não se deve importar automaticamente Part 121 para um voo particular conduzido sob Part 91.

#### Exemplo
Em uma operação comercial, uma regra Part 121 sobre alternado ou combustível pode exigir planejamento diferente do modelo Part 91. A tripulação deve usar a regulamentação e documentação do operador aplicáveis, incluindo despacho e política de combustível. As seções desta aula são apenas um mapa conceitual; cálculos e procedimentos de despacho serão desenvolvidos nas aulas apropriadas, sem antecipar seu conteúdo.

### English (US)
Part 121 contains requirements for domestic, flag, and supplemental operations of certain air carriers and commercial operators. Compared with general Part 91 rules, Part 121 is part of a more prescriptive operating system: operator certification, manuals and specifications, training and checking, dispatch/operational control, operating limitations, maintenance, and crew requirements.

It is incorrect to take a Part 91 rule and assume it is sufficient for Part 121. The operation may be subject to a specific Part 121 rule, an authorization in the operations specifications, an approved manual, and company procedures. The pilot must comply with the applicable set. Part 121 should not automatically be imported into a private flight conducted under Part 91 either.

#### Example
In a commercial operation, a Part 121 alternate or fuel rule may require planning different from the Part 91 model. The crew must use the applicable regulation and operator documentation, including dispatch and fuel policy. This lesson’s sections are a conceptual map only; dispatch calculations and procedures will be developed in their appropriate lessons without preempting that content.
`),
    chapter("5.10 — Part 135: commuter e on-demand", `
### Português (BR)
Part 135 se aplica a determinadas operações commuter e on-demand e a pessoas a bordo dessas aeronaves. Ela não é simplesmente “Part 91 com mais passageiros”: possui requisitos próprios para operação, tripulação, treinamento, manutenção, registros e condições do serviço. A certificação e as especificações do operador delimitam o que pode ser feito.

Para um piloto, a primeira tarefa é confirmar a operação e o certificado do operador; a segunda, conferir se seu treinamento, habilitações e designação atendem aos requisitos daquela operação. O mesmo avião pode ser usado em operações diferentes sob bases regulamentares distintas, conforme os fatos e autorizações. Não classifique a operação somente pelo tamanho da aeronave ou pela rota.

#### Pergunta de checkride
“Se a aeronave é pequena, posso aplicar apenas Part 91?” Não. O tamanho não determina sozinho a parte aplicável. Explique a natureza da operação, o operador, o serviço e a autorização. Em avaliações, evite respostas absolutas sem dados suficientes.

### English (US)
Part 135 applies to certain commuter and on-demand operations and to persons on board those aircraft. It is not simply “Part 91 with more passengers”: it has its own requirements for operations, crewmembers, training, maintenance, records, and service conditions. The operator’s certificate and specifications define what may be conducted.

For a pilot, the first task is to confirm the operation and the operator’s certificate; the second is to verify that training, ratings, and assignment meet the requirements for that operation. The same airplane may be used in different operations under different regulatory bases depending on the facts and authorizations. Do not classify an operation only by aircraft size or route.

#### Checkride question
“If the aircraft is small, may I apply only Part 91?” No. Aircraft size alone does not determine the applicable part. Explain the nature of the operation, the operator, the service, and the authorization. In an evaluation, avoid absolute answers when the facts are incomplete.
`),
    chapter("5.11 — IFR: quando o plano exige alternado e mínimos do alternado", `
### Português (BR)
Vamos corrigir uma confusão comum. Há duas perguntas diferentes: **preciso listar um alternado no plano IFR?** e **o alternado listado atende aos mínimos para ser planejado como alternado?** O critério informal “1-2-3” responde à primeira pergunta sob a regra geral Part 91. Se, para o aeroporto de destino, previsão/observação apropriada indicar, no período de uma hora antes até uma hora depois da ETA, teto de pelo menos 2.000 ft e visibilidade de pelo menos 3 statute miles, a regra geral permite não listar alternado, desde que as demais condições de § 91.169 sejam satisfeitas.

Se o alternado é requerido, § 91.169(c) trata dos mínimos meteorológicos para incluí-lo: em termos gerais, 600 ft de teto e 2 statute miles para procedimento de precisão; 800 ft e 2 statute miles para procedimento não precisão, ressalvadas exceções e mínimos publicados. Isso é diferente do critério destino 2.000/3. Uma carta pode indicar mínimos de alternado diferentes, e o operador pode impor requisitos adicionais.

#### Exercício resolvido
Destino tem previsão de 1.900 ft e 4 SM em toda a janela relevante; não há exceção autorizada. Um alternado com ILS prevê 700 ft e 2 SM. A primeira previsão não atende 2.000 ft/3 SM, então em regra será necessário listar alternado. O alternado supera 600-2 para precisão, mas ainda confirme mínimos publicados, NOTAM, disponibilidade do procedimento, combustível e regras do operador. Se a previsão do destino fosse 2.100 ft e 3 SM ou melhor em toda a janela, a regra geral poderia dispensar alternado, sem tornar o combustível ou o julgamento do PIC irrelevantes.

### English (US)
Let us correct a common confusion. These are two different questions: **must I list an alternate on the IFR flight plan?** and **does the listed alternate meet the minimums for planning it as an alternate?** The informal “1-2-3” criterion answers the first question under the general Part 91 rule. If appropriate forecasts/reports for the destination indicate, from one hour before to one hour after ETA, a ceiling of at least 2,000 feet and visibility of at least 3 statute miles, the general rule permits omitting an alternate, provided the other conditions of § 91.169 are met.

If an alternate is required, § 91.169(c) addresses weather minimums for listing it: generally, a 600-foot ceiling and 2 statute miles for a precision procedure; 800 feet and 2 statute miles for a nonprecision procedure, subject to exceptions and published minimums. This is separate from the destination 2,000/3 criterion. A chart may show different alternate minimums, and an operator may impose additional requirements.

#### Worked exercise
The destination forecast is 1,900 feet and 4 SM throughout the relevant window; no exception applies. An alternate with an ILS forecast of 700 feet and 2 SM is available. The destination forecast does not meet 2,000/3, so an alternate generally must be listed. The alternate exceeds 600-2 for a precision procedure, but still verify published minimums, NOTAMs, procedure availability, fuel, and operator rules. If the destination forecast were at least 2,100 feet and 3 SM throughout the window, the general rule could permit no alternate, without making fuel planning or PIC judgment irrelevant.
`),
    chapter("5.12 — IFR: combustível da regra geral Part 91", `
### Português (BR)
Para avião sob a regra geral Part 91, § 91.167 exige que o combustível permita voar até o primeiro aeroporto de pouso pretendido; depois, até o alternado, se ele for exigido; e ainda manter 45 minutos em velocidade normal de cruzeiro. A regra especifica uma reserva regulamentar, não um plano operacional completo nem uma meta recomendada de chegada.

O piloto deve distinguir: mínimo legal; política do operador; combustível necessário diante de vento, espera, restrições, taxi, procedimento, desvio e contingências; e combustível efetivamente disponível/consumível. Os 45 minutos não substituem combustível de contingência nem autorizam planejar deliberadamente para chegar próximo do mínimo. Se houver regra Part 121 ou 135 aplicável, use os requisitos dessa operação; não transfira automaticamente o cálculo Part 91.

#### Demonstração
Com alternado requerido, o raciocínio da regra é: destino → alternado → reserva de 45 minutos. Sem alternado requerido, a regra se aplica ao destino mais 45 minutos. O cálculo deve refletir o consumo na velocidade normal de cruzeiro e considerar a aeronave real e os dados aprovados. Se o cenário inclui previsão piorando e possíveis esperas, o julgamento operacional pode exigir mais combustível que o mínimo regulamentar.

### English (US)
For an airplane under the general Part 91 rule, § 91.167 requires enough fuel to fly to the first airport of intended landing; then to the alternate if one is required; and then to fly for 45 minutes at normal cruising speed. The rule specifies a regulatory reserve, not a complete operational fuel plan or a recommended arrival target.

The pilot should distinguish the legal minimum, operator policy, fuel required for wind, holding, restrictions, taxi, procedure, diversion, and contingencies, and the fuel actually available/usable. The 45-minute reserve does not replace contingency fuel or authorize planning to arrive near the minimum. If Part 121 or 135 applies, use the requirements for that operation; do not automatically transfer the Part 91 calculation.

#### Demonstration
When an alternate is required, the rule’s sequence is destination → alternate → 45-minute reserve. When no alternate is required, the rule is destination plus 45 minutes. The calculation must use normal-cruise fuel consumption and account for the actual aircraft and approved data. If the scenario includes deteriorating forecasts and possible holding, operational judgment may require more fuel than the regulatory minimum.
`),
    chapter("5.13 — Aeronavegabilidade e equipamento inoperante", `
### Português (BR)
§ 91.7 proíbe operar uma aeronave civil que não esteja aeronavegável e atribui ao PIC a responsabilidade de determinar se ela está em condição segura para voo. Aeronavegabilidade não é apenas “o avião ligou” ou “não há mensagem no display”: envolve conformidade com certificado de tipo, limitações, manutenção, diretivas aplicáveis e condição real dos sistemas.

Quando um equipamento está inoperante, § 91.213 pode permitir operação somente se forem atendidas as condições aplicáveis. A sequência prática é: identificar equipamento e regra de obrigatoriedade; consultar MEL aprovada e procedimentos quando houver; verificar lista de equipamentos requerida pela operação e limitações; determinar se a falha afeta segurança; cumprir placard/manutenção/documentação e procedimentos exigidos. Não existe autorização geral para voar com qualquer item “deferred”.

#### Caso operacional
Um indicador obrigatório aparece inoperante antes do voo. A tripulação não deve concluir que o avião pode sair só porque o item não é essencial para aquele trecho. Deve verificar o AFM/KOEL, MEL quando aplicável, regras e operações specifications do operador, e se a condição afeta aeronavegabilidade ou segurança. Se a autorização não estiver clara, interrompa a liberação e consulte manutenção/controle operacional.

### English (US)
Section 91.7 prohibits operating a civil aircraft that is not airworthy and makes the PIC responsible for determining whether the aircraft is in condition for safe flight. Airworthiness does not mean merely “the airplane started” or “there is no display message”; it involves conformity with the type certificate, limitations, maintenance, applicable directives, and the actual condition of systems.

When equipment is inoperative, § 91.213 may permit operation only when its applicable conditions are met. A practical sequence is: identify the item and any rule requiring it; consult an approved MEL and procedures when available; check equipment lists and operational limitations; determine whether the failure affects safety; and comply with required placarding, maintenance, records, and procedures. There is no blanket authorization to fly with any item simply “deferred.”

#### Operational case
An indication required for the flight becomes inoperative before departure. The crew should not conclude that the aircraft may depart merely because the item seems unnecessary for this leg. Check the AFM/KOEL, MEL when applicable, regulations and operator operations specifications, and whether the condition affects airworthiness or safety. If authorization is unclear, stop the release and consult maintenance/operational control.
`),
    chapter("5.14 — ATP-CTP: requisito de treinamento, não prova de certificação", `
### Português (BR)
ATP-CTP é um programa de treinamento exigido para candidatos ao ATP com classe multiengine de avião e para determinados candidatos que obtêm ATP junto com habilitação de tipo. § 61.156 define requisitos mínimos de currículo acadêmico e treinamento em simulador. O curso inclui aerodinâmica e operação em alta altitude, meteorologia, operações de transportador aéreo, liderança/desenvolvimento profissional/CRM/cultura de segurança e treinamento em FSTD conforme as condições regulamentares.

Conclusão do ATP-CTP demonstra que o candidato concluiu o programa aprovado; não significa aprovação no ATP knowledge test, elegibilidade completa ou aprovação no practical test. ATP-CTP é requisito de treinamento, o knowledge test é avaliação escrita separada e o practical test demonstra proficiência segundo padrão aplicável. Experiência profissional ou tipo-rating anterior não substitui automaticamente o requisito previsto.

#### Pergunta de piloto
“Fiz treinamento de linha e tenho milhares de horas; posso pular o CTP?” Experiência pode ajudar a aprender, mas não elimina por si só um requisito obrigatório. Confirme o percurso de certificação e a regra vigente. A NFA oferece preparação acadêmica independente; não se apresenta como provedora autorizada de ATP-CTP.

### English (US)
ATP-CTP is a training program required for applicants for an ATP certificate with an airplane multiengine class rating and for certain applicants seeking an ATP concurrently with a type rating. Section 61.156 defines minimum academic curriculum and simulator-training requirements. The course includes aerodynamics and high-altitude operations, meteorology, air-carrier operations, leadership/professional development/CRM/safety culture, and FSTD training subject to regulatory conditions.

Completion of ATP-CTP shows that the applicant completed the approved program; it does not mean the applicant passed the ATP knowledge test, meets all eligibility requirements, or passed the practical test. ATP-CTP is a training prerequisite, the knowledge test is a separate written evaluation, and the practical test demonstrates proficiency to the applicable standard. Professional experience or a prior type rating does not automatically replace the requirement.

#### Pilot question
“I have line training and thousands of hours; may I skip CTP?” Experience may help learning, but it does not by itself remove a mandatory requirement. Confirm the certification pathway and current rule. NFA provides independent academic preparation and does not represent itself as an authorized ATP-CTP provider.
`),
    chapter("5.15 — ACS e julgamento: como demonstrar conhecimento", `
### Português (BR)
O ATP Airplane ACS organiza o practical test por áreas e tarefas e associa conhecimento, gerenciamento de risco e habilidades. O candidato não deve decorar o ACS como se fosse um regulamento operacional. Ele é o padrão de avaliação prática: mostra o que o examinador avaliará e com qual desempenho aceitável. A versão oficial identificada para ATP Airplane é FAA-S-ACS-11A, efetiva desde 31 de maio de 2024, conforme a lista FAA consultada.

Na resposta oral, organize-se em quatro passos: identifique a operação; declare a decisão; explique a regra/princípio aplicável; descreva como monitorará e mudará o plano se as condições mudarem. Se não souber a resposta exata, explique como localizaria a fonte oficial e evite inventar. Isso demonstra julgamento profissional sem alegar que ACS ou examinador substitui o regulamento.

#### Mini-briefing
“Por que você não continuaria abaixo de DA?” Resposta de qualidade: “Não tenho a referência visual requerida em DA; portanto, não posso continuar abaixo dela. Iniciarei a aproximação perdida conforme o procedimento, manterei controle e comunicarei ATC quando praticável.” A resposta conecta fato, regra, ação e monitoramento.

### English (US)
The ATP Airplane ACS organizes the practical test into areas and tasks and associates knowledge, risk management, and skill. Applicants should not memorize the ACS as if it were an operating regulation. It is the practical evaluation standard: it shows what the examiner evaluates and the acceptable performance. The FAA’s listed ATP Airplane edition is FAA-S-ACS-11A, effective May 31, 2024, according to the FAA list consulted.

For an oral answer, use four steps: identify the operation; state the decision; explain the applicable rule or principle; describe how you will monitor and change the plan if conditions change. If you do not know the exact answer, explain how you would locate the official source and do not invent. This demonstrates professional judgment without claiming that the ACS or examiner replaces the regulation.

#### Mini-briefing
“Why would you not continue below DA?” A strong answer is: “I do not have the required visual reference at DA, so I may not continue below it. I will initiate the missed approach in accordance with the procedure, maintain control, and advise ATC when practicable.” The answer connects facts, rule, action, and monitoring.
`),
    chapter("5.16 — Revisão oral, casos integrados e fontes oficiais", `
### Português (BR)
#### Revisão conduzida
1. Em que momento você identifica se uma operação é Part 91, 121 ou 135? Antes de aplicar requisitos específicos: identifique operador, serviço, controle operacional e autorizações.
2. Uma autorização ATC permite descer abaixo de DA sem referência visual? Não. A autorização permite executar o procedimento, mas § 91.175 define as condições para continuar abaixo.
3. O critério 1-2-3 significa que o alternado precisa ter 2.000/3? Não. 2.000 ft/3 SM é o critério de destino usado para determinar se um alternado é exigido no caso geral Part 91. Mínimos para alternado são analisados separadamente sob § 91.169(c) e publicações aplicáveis.
4. Os 45 minutos de § 91.167 são política completa de combustível? Não. É uma reserva regulamentar para as condições da regra geral; o planejamento operacional pode exigir margem adicional e outras partes têm regras próprias.
5. Quem mantém responsabilidade final na operação? O PIC, dentro do escopo de sua autoridade e das regras aplicáveis.

#### Matriz de rastreabilidade resumida
Assunto → fonte oficial → aprendizagem/aplicação: autoridade e leitura normativa → Title 14 CFR/eCFR → identificar escopo, sujeito, condição e exceção; PIC/emergência → § 91.3 e AIM → decidir/explicar autoridade sem transformar emergência em conveniência; aproximação IFR → § 91.175 → determinar quando continuar ou executar missed approach; Part 97 → procedimentos e cartas vigentes → cruzar carta, NOTAM e capacidade; Part 119/121/135 → texto das partes → classificar a operação e aplicar somente o conjunto correspondente; alternado e combustível → §§ 91.167 e 91.169 → separar requisito de alternado, mínimos do alternado e reserva de combustível; aeronavegabilidade → §§ 91.7 e 91.213 → interromper liberação até determinar condição/autorização; ATP-CTP e practical test → § 61.156 e ATP ACS FAA-S-ACS-11A → separar treinamento, knowledge test e practical test.

#### Referências oficiais consultadas em 10 Nov 2026
* eCFR, Title 14, Parts 61, 91, 97, 119, 121 e 135. A página consultada informava Title 14 atualizado até 6 Nov 2026 e última alteração em 15 Oct 2026. O eCFR é atualizado continuamente; confirme o texto no dia de uso.
* FAA, ATP Certification Training Program (CTP), página Pilot Training, atualizada em 8 Jun 2026.
* FAA, Airline Transport Pilot and Type Rating for Airplane Category Airman Certification Standards, FAA-S-ACS-11A, effective 31 May 2024.
* FAA, Aeronautical Information Manual, edição vigente e alterações publicadas pela FAA.

Links: [eCFR Title 14](https://www.ecfr.gov/current/title-14) · [§ 91.3](https://www.ecfr.gov/current/title-14/section-91.3) · [§ 91.175](https://www.ecfr.gov/current/title-14/section-91.175) · [§ 91.169](https://www.ecfr.gov/current/title-14/section-91.169) · [§ 91.167](https://www.ecfr.gov/current/title-14/section-91.167) · [FAA ACS list](https://www.faa.gov/training_testing/testing/acs) · [FAA ATP-CTP](https://www.faa.gov/pilots/training/atp) · [FAA Guidance](https://www.faa.gov/guidance).

### English (US)
#### Guided review
1. When do you identify whether an operation is under Part 91, 121, or 135? Before applying specific requirements: identify the operator, service, operational control, and authorizations.
2. Does an ATC clearance allow descent below DA without a visual reference? No. The clearance allows execution of the procedure, but § 91.175 defines the conditions for continuing below.
3. Does the 1-2-3 criterion mean the alternate must have 2,000/3? No. 2,000 feet/3 SM is the destination criterion used to determine whether an alternate is required under the general Part 91 case. Alternate minimums are analyzed separately under § 91.169(c) and applicable publications.
4. Are the 45 minutes in § 91.167 a complete fuel policy? No. It is a regulatory reserve for the conditions of the general rule; operational planning may require additional margin, and other parts have their own rules.
5. Who retains final responsibility for the operation? The PIC, within the scope of the pilot’s authority and applicable rules.

#### Traceability matrix, summary
Topic → official source → learning/application: regulatory authority and rule reading → Title 14 CFR/eCFR → identify scope, subject, condition, and exception; PIC/emergency → § 91.3 and AIM → explain authority without treating emergency as convenience; IFR approach → § 91.175 → decide whether to continue or execute a missed approach; Part 97 → current procedures and charts → cross-check chart, NOTAM, and capability; Parts 119/121/135 → text of each part → classify operation and apply only the corresponding rule set; alternate and fuel → §§ 91.167 and 91.169 → distinguish alternate requirement, alternate minimums, and fuel reserve; airworthiness → §§ 91.7 and 91.213 → stop release until condition/authorization is determined; ATP-CTP and practical test → § 61.156 and ATP ACS FAA-S-ACS-11A → separate training, knowledge test, and practical test.

#### Official references checked November 10, 2026
* eCFR, Title 14, Parts 61, 91, 97, 119, 121, and 135. The consulted page stated Title 14 was current through November 6, 2026, and last amended October 15, 2026. The eCFR is continuously updated; verify the text on the date of use.
* FAA, ATP Certification Training Program (CTP), Pilot Training page, updated June 8, 2026.
* FAA, Airline Transport Pilot and Type Rating for Airplane Category Airman Certification Standards, FAA-S-ACS-11A, effective May 31, 2024.
* FAA, Aeronautical Information Manual, current edition and FAA-published changes.

Links: [eCFR Title 14](https://www.ecfr.gov/current/title-14) · [§ 91.3](https://www.ecfr.gov/current/title-14/section-91.3) · [§ 91.175](https://www.ecfr.gov/current/title-14/section-91.175) · [§ 91.169](https://www.ecfr.gov/current/title-14/section-91.169) · [§ 91.167](https://www.ecfr.gov/current/title-14/section-91.167) · [FAA ACS list](https://www.faa.gov/training_testing/testing/acs) · [FAA ATP-CTP](https://www.faa.gov/pilots/training/atp) · [FAA Guidance](https://www.faa.gov/guidance).
`)
  ];

  const q = (pt, en, options, answer, chapter, explPT, explEN) => ({
    q: `${pt} | English: ${en}`,
    options: options.map(([p,e]) => `PT: ${p} | EN: ${e}`),
    answer, chapter,
    explanation: `PT — ${explPT} | EN — ${explEN}`
  });

  const knowledge = [
    q("Qual é o primeiro passo antes de aplicar uma parte do 14 CFR?","What is the first step before applying a part of 14 CFR?",[["Memorizar todas as seções","Memorize every section"],["Identificar fatos, operador e natureza da operação","Identify the facts, operator, and nature of the operation"],["Assumir que todo voo é Part 91","Assume every flight is Part 91"],["Perguntar apenas ao ATC","Ask only ATC"]],1,0,"A parte aplicável depende do contexto factual e regulatório.","The applicable part depends on the factual and regulatory context."),
    q("O 14 CFR contém principalmente...","The 14 CFR primarily contains...",[["Recomendações voluntárias","Voluntary recommendations"],["Regras federais aplicáveis conforme seu escopo","Federal rules applicable within their scope"],["SOPs das companhias","Airline SOPs"],["Somente padrões de exame","Examination standards only"]],1,0,"O CFR codifica regras vinculantes dentro do seu escopo.","The CFR codifies binding rules within their scope."),
    q("Qual leitura é necessária para compreender uma disposição?","What reading is needed to understand a provision?",[["Somente o título","The title only"],["Sujeito, ação, condições e exceções","Subject, action, conditions, and exceptions"],["Somente o primeiro parágrafo","The first paragraph only"],["A interpretação de um colega","A colleague’s interpretation"]],1,1,"Condições e exceções podem mudar o resultado.","Conditions and exceptions may change the outcome."),
    q("Uma Advisory Circular normalmente...","An Advisory Circular normally...",[["Emenda automaticamente o CFR","Automatically amends the CFR"],["Oferece orientação; verifique se foi incorporada ou exigida","Provides guidance; check whether it is incorporated or required"],["Substitui o ACS","Replaces the ACS"],["É sempre obrigatória","Is always mandatory"]],1,2,"AC é orientação não regulatória, salvo efeito por incorporação/requisito aplicável.","An AC is nonregulatory guidance unless incorporated or required by an applicable instrument."),
    q("Qual fonte estabelece o padrão do practical test ATP avião?","Which source establishes the ATP airplane practical-test standard?",[["AIM","AIM"],["ATP Airplane ACS vigente","Current ATP Airplane ACS"],["Qualquer AC antiga","Any old AC"],["Somente o manual da empresa","The company manual only"]],1,14,"O ACS é padrão de avaliação prática, não regulamento geral.","The ACS is a practical evaluation standard, not a general operating regulation."),
    q("Part 61 aborda principalmente...","Part 61 primarily addresses...",[["Certificação e habilitações de pilotos","Pilot certification and ratings"],["Procedimentos de aproximação","Approach procedures"],["Despacho Part 121","Part 121 dispatch"],["Classificação de aeroportos","Airport classification"]],0,3,"Part 61 regula certificados e habilitações de airmen.","Part 61 governs airman certificates and ratings."),
    q("O que § 91.3(a) estabelece para o PIC?","What does § 91.3(a) establish for the PIC?",[["Autoridade final e responsabilidade direta pela operação segura","Final authority and direct responsibility for safe operation"],["Autoridade para ignorar qualquer regra","Authority to ignore any rule"],["Poder de cancelar regra de operador","Power to cancel an operator rule"],["Responsabilidade exclusiva do ATC","Exclusive ATC responsibility"]],0,4,"A autoridade do PIC mantém responsabilidades e limites legais.","PIC authority retains responsibilities and legal limits."),
    q("Quando § 91.3(b) permite desvio de regra Part 91?","When does § 91.3(b) permit deviation from a Part 91 rule?",[["Por conveniência","For convenience"],["Em emergência que exige ação imediata, na extensão necessária","In an emergency requiring immediate action, to the extent required"],["Sempre que ATC demora","Whenever ATC is delayed"],["Quando há pressão comercial","When there is commercial pressure"]],1,4,"A exceção é limitada à necessidade de enfrentar emergência imediata.","The exception is limited to what is required to meet an immediate emergency."),
    q("Uma autorização de aproximação significa automaticamente que o piloto pode descer abaixo de DA?","Does an approach clearance automatically allow descent below DA?",[["Sim, em todos os casos","Yes, in every case"],["Não; as condições de § 91.175 também devem ser satisfeitas","No; § 91.175 conditions must also be met"],["Sim, se a pista está livre","Yes, if the runway is clear"],["Somente se ATC repetir a autorização","Only if ATC repeats the clearance"]],1,5,"A autorização ATC não substitui referências visuais e demais condições regulamentares.","An ATC clearance does not replace visual references and other regulatory conditions."),
    q("Part 97 é mais diretamente associado a...","Part 97 is most directly associated with...",[["Procedimentos instrumentais padrão","Standard instrument procedures"],["Certificação de operador","Operator certification"],["Horas de experiência ATP","ATP flight-hour experience"],["Certificação de manutenção","Maintenance certification"]],0,6,"Part 97 contém procedimentos instrumentais publicados.","Part 97 contains published instrument procedures."),
    q("O certificado ATP individual...","An individual ATP certificate...",[["Certifica automaticamente o operador","Automatically certifies the operator"],["Não substitui certificado de operador","Does not replace an operator certificate"],["Autoriza qualquer operação comercial","Authorizes any commercial operation"],["Substitui operations specifications","Replaces operations specifications"]],1,7,"Piloto e operador possuem certificações distintas.","Pilot and operator certifications are distinct."),
    q("Part 121 deve ser aplicada...","Part 121 should be applied...",[["A toda aeronave de transporte, mesmo em voo privado","To every transport airplane, even on a private flight"],["Quando a operação estiver dentro de seu escopo e condições","When the operation falls within its scope and conditions"],["Somente quando ATC determinar","Only when ATC directs it"],["A qualquer voo Part 91","To any Part 91 flight"]],1,8,"A aplicabilidade depende da operação e do certificado, não só do tipo de avião.","Applicability depends on the operation and certificate, not only the aircraft type."),
    q("Part 135 inclui certas operações...","Part 135 includes certain...",[["Commuter e on-demand","Commuter and on-demand operations"],["Somente instrução Part 61","Part 61 instruction only"],["Aproximações IFR","IFR approaches"],["Licenças estrangeiras","Foreign licenses"]],0,9,"Part 135 cobre operações específicas conforme a regulamentação e autorização.","Part 135 covers specified operations under the regulations and authorization."),
    q("O critério informal 1-2-3 de § 91.169(b) verifica...","The informal 1-2-3 criterion in § 91.169(b) determines...",[["Mínimos do alternado","Alternate minimums"],["Se o destino permite dispensar o alternado na regra geral","Whether destination conditions allow omitting an alternate under the general rule"],["Reserva de combustível","Fuel reserve"],["Mínimos de decolagem Part 121","Part 121 takeoff minimums"]],1,10,"O critério se aplica ao destino e à necessidade de alternado, não aos mínimos do alternado.","The criterion applies to the destination and whether an alternate is required, not to alternate minimums."),
    q("Mínimos de alternado de § 91.169(c) são...","Alternate minimums under § 91.169(c) are...",[["Sempre 2,000-3","Always 2,000-3"],["Separados do critério 1-2-3 do destino","Separate from the destination 1-2-3 criterion"],["Idênticos aos mínimos de aproximação do destino","Identical to destination approach minimums"],["Escolhidos sem considerar o procedimento","Selected without regard to the procedure"]],1,10,"A regra distingue quando alternado é requerido dos mínimos para listá-lo.","The rule distinguishes when an alternate is required from the minimums for listing it."),
    q("§ 91.167 para avião Part 91 em IFR prevê, na condição aplicável...","For a Part 91 airplane in IFR, § 91.167 requires, when applicable...",[["Destino e mais 15 minutos","Destination plus 15 minutes"],["Destino, alternado se exigido e 45 minutos em cruzeiro normal","Destination, alternate if required, and 45 minutes at normal cruise"],["Somente até o alternado","Only to the alternate"],["Uma hora de espera","One hour of holding"]],1,11,"A reserva de 45 minutos é o mínimo regulatório previsto nessa regra geral.","The 45-minute reserve is the regulatory minimum specified by this general rule."),
    q("§ 91.7 atribui ao PIC qual responsabilidade?","What responsibility does § 91.7 assign to the PIC?",[["Determinar se a aeronave está em condição segura para voo","Determine whether the aircraft is in condition for safe flight"],["Aprovar o certificado de tipo","Approve the type certificate"],["Emitir MEL","Issue an MEL"],["Substituir manutenção","Replace maintenance"]],0,12,"PIC determina condição segura; owner/operator também tem responsabilidades regulamentares.","The PIC determines safe condition; owners/operators also have regulatory responsibilities."),
    q("Equipamento inoperante sob § 91.213 exige...","Inoperative equipment under § 91.213 requires...",[["Aplicar análise das condições e autorizações relevantes","Apply the relevant conditions and authorizations"],["Sempre remover o item","Always remove the item"],["Sempre operar normalmente","Always operate normally"],["Ignorar se voo curto","Ignore it for a short flight"]],0,12,"Não há permissão geral; regras, MEL e condição segura precisam ser avaliadas.","There is no blanket permission; regulations, MEL, and safe condition must be evaluated."),
    q("ATP-CTP é...","ATP-CTP is...",[["A própria prova ATP escrita","The ATP written test itself"],["Treinamento exigido para percursos especificados","Training required for specified pathways"],["Practical test","The practical test"],["Certificado de operador","An operator certificate"]],1,13,"ATP-CTP é treinamento; conhecimento e proficiência são avaliações distintas.","ATP-CTP is training; knowledge and proficiency are separate evaluations."),
    q("A referência de vigência deve ser...","A currency reference should be...",[["A versão atual da fonte oficial no momento de uso","The current official version at the time of use"],["Uma cópia impressa sem data","An undated paper copy"],["Uma pergunta de fórum","A forum post"],["Um ACS antigo","An old ACS"]],0,15,"Regulamentos e publicações podem ser atualizados; confira a versão aplicável.","Regulations and publications may change; verify the applicable version.")
  ];

  const scenarios = [
    q("Em DA, a tripulação não tem referência visual requerida, mas ATC diz que o tráfego está livre. A decisão correta é...","At DA, the crew has no required visual reference, but ATC says the traffic is clear. The correct action is...",[["Continuar porque ATC confirmou","Continue because ATC confirmed"],["Executar a aproximação perdida","Execute the missed approach"],["Descer até MDA","Descend to MDA"],["Desligar o piloto automático e continuar","Disconnect the autopilot and continue"]],1,5,"A informação ATC não satisfaz as condições de § 91.175 para continuar abaixo de DA.","ATC information does not satisfy § 91.175 conditions for continuing below DA."),
    q("Destino IFR prevê 1,800 ft e 4 SM na janela ETA ±1 h, sem exceção. Em regra Part 91...","The IFR destination forecast is 1,800 feet and 4 SM during ETA ±1 hour, with no exception. Under the general Part 91 rule...",[["Alternado pode ser dispensado","An alternate may be omitted"],["Alternado geralmente deve ser listado","An alternate generally must be listed"],["Somente combustível aumenta","Only fuel must increase"],["O critério 1-2-3 não se aplica a aviões","The 1-2-3 criterion does not apply to airplanes"]],1,10,"O teto não atende ao patamar geral de 2,000 ft, apesar da visibilidade favorável.","The ceiling does not meet the general 2,000-foot threshold despite favorable visibility."),
    q("No mesmo cenário, alternate ILS prevê 700 ft e 2 SM. Qual análise é correta?","In the same scenario, an ILS alternate forecasts 700 feet and 2 SM. Which analysis is correct?",[["Confundir com destino: precisa 2,000-3","Confuse it with the destination: it needs 2,000-3"],["Comparar aos mínimos de alternado de precisão, carta e requisitos adicionais","Compare with precision alternate minimums, chart, and additional requirements"],["Considerar automaticamente aprovado","Automatically consider it acceptable"],["Usar mínimos VFR","Use VFR minimums"]],1,10,"Mínimos do alternado são análise separada; confirme procedimento publicado e regras do operador.","Alternate minimums are a separate analysis; verify the published procedure and operator rules."),
    q("Em IFR Part 91, alternado é requerido. Qual sequência de combustível da regra geral?","An alternate is required on a Part 91 IFR flight. What is the general rule’s fuel sequence?",[["Destino + 45 min","Destination + 45 minutes"],["Destino, alternado, depois 45 min em cruzeiro normal","Destination, alternate, then 45 minutes at normal cruise"],["Alternado + 30 min","Alternate + 30 minutes"],["Destino e alternado sem reserva","Destination and alternate with no reserve"]],1,11,"§ 91.167 inclui destino, alternado requerido e reserva de 45 minutos.","§ 91.167 includes destination, required alternate, and a 45-minute reserve."),
    q("Uma autorização ATC parece levar a terreno inadequado. Não há emergência imediata. O PIC deve...","An ATC clearance appears to lead toward unsafe terrain. There is no immediate emergency. The PIC should...",[["Cumprir por ter sido autorizado","Comply because it was cleared"],["Esclarecer, recusar ou solicitar autorização segura","Clarify, decline, or request a safe clearance"],["Desviar-se sem comunicação","Deviate without communication"],["Transferir a decisão ao controlador","Transfer the decision to the controller"]],1,4,"PIC mantém responsabilidade e não deve aceitar autorização que não possa executar com segurança.","The PIC retains responsibility and should not accept a clearance that cannot be safely flown."),
    q("Falha de sistema ocorre e exige reação imediata. § 91.3(b) permite...","A system failure occurs and requires immediate action. Section 91.3(b) permits...",[["Qualquer desvio por conveniência","Any deviation for convenience"],["Desvio de regra Part 91 na extensão necessária à emergência","Deviation from a Part 91 rule to the extent required by the emergency"],["Ignorar limitações por todo o voo","Ignore limitations for the entire flight"],["Apenas desvio de SOP","Deviation from SOP only"]],1,4,"A exceção é limitada pelo requisito de emergência imediata e necessidade.","The exception is limited by the immediate-emergency and necessity requirements."),
    q("Uma empresa chama um voo remunerado de “privado”. O piloto deve classificar a operação por...","A company labels a compensated flight “private.” The pilot should classify the operation based on...",[["O nome comercial","The marketing label"],["Operador, serviço, controle operacional e autorização","Operator, service, operational control, and authorization"],["Somente número de assentos","Seat count only"],["Somente decisão do passageiro","Passenger preference only"]],1,7,"Rótulo não determina enquadramento; analise fatos e regras de aplicabilidade.","A label does not determine classification; analyze the facts and applicability rules."),
    q("Um piloto ATP pretende operar em função de tripulação Part 121. Além do ATP, deve verificar...","An ATP pilot intends to serve in a Part 121 crew position. In addition to the ATP, the pilot should verify...",[["Tipo, designação, treinamento e qualificação exigidos","Required type rating, assignment, training, and qualification"],["Somente passaporte","Passport only"],["Nenhuma outra condição","No other condition"],["Apenas rota","Route only"]],0,3,"Certificado pessoal não substitui qualificação e requisitos do operador.","The personal certificate does not replace operator qualification and requirements."),
    q("A tripulação usa carta Part 97, mas um NOTAM suspende um componente essencial. Deve...","The crew uses a Part 97 chart, but a NOTAM suspends an essential component. The crew should...",[["Executar sem ajuste","Fly it without adjustment"],["Avaliar disponibilidade, capacidade e alternativa antes do voo","Assess availability, capability, and alternatives before flight"],["Ignorar NOTAM por carta publicada","Ignore the NOTAM because the chart is published"],["Pedir autorização e presumir que resolve","Request clearance and assume it resolves the issue"]],1,6,"Publicação não garante disponibilidade atual; NOTAM e capacidade também são relevantes.","Publication does not guarantee current availability; NOTAMs and capability also matter."),
    q("Antes da partida, equipamento listado como inoperante. A resposta profissional é...","Before departure, an item is listed as inoperative. The professional response is...",[["Decolar se não houve alarme","Depart if no warning appears"],["Verificar regra, MEL/lista aplicável, limitação e condição segura","Check the rule, applicable MEL/list, limitation, and safe condition"],["Deferir verbalmente","Defer it verbally"],["Ignorar em voo curto","Ignore it on a short flight"]],1,12,"A liberação requer base regulamentar aplicável e condição segura demonstrada.","Release requires an applicable regulatory basis and demonstrated safe condition."),
    q("Um item inoperante parece irrelevante para o trecho, mas é requerido para a operação. O PIC deve...","An inoperative item seems irrelevant to this leg but is required for the operation. The PIC should...",[["Aceitar a avaliação pessoal sem consulta","Rely on personal judgment without checking"],["Interromper a liberação até confirmar a autorização e condição","Stop release until authorization and condition are confirmed"],["Pedir ao passageiro decidir","Ask the passenger to decide"],["Usar Part 91 sempre","Always use Part 91"]],1,12,"Segurança e conformidade dependem da regra e documentação operacional pertinentes.","Safety and compliance depend on the relevant rule and operating documentation."),
    q("Tripulação concluiu ATP-CTP, mas ainda não fez o knowledge test. Isso demonstra...","The crew member completed ATP-CTP but has not taken the knowledge test. This demonstrates...",[["Aprovação escrita ATP","Passing the ATP written test"],["Conclusão do treinamento exigido, não aprovação no exame escrito","Completion of required training, not passing the written test"],["Aprovação prática","Practical-test success"],["Elegibilidade completa","Complete eligibility"]],1,13,"Treinamento ATP-CTP e conhecimento test são etapas distintas.","ATP-CTP training and the knowledge test are separate steps."),
    q("O candidato diz que Part 121 se aplica porque a aeronave é grande. Melhor resposta oral:","The applicant says Part 121 applies because the aircraft is large. The best oral response is:",[["Aeronave grande sempre significa Part 121","A large aircraft always means Part 121"],["Identifique operador, serviço e aplicabilidade regulamentar","Identify the operator, service, and regulatory applicability"],["O piloto escolhe a parte","The pilot chooses the part"],["ATC determina a parte","ATC determines the part"]],1,8,"A parte aplicável decorre da operação e do escopo regulatório, não só do porte.","The applicable part follows the operation and regulatory scope, not aircraft size alone."),
    q("Ao responder oralmente sobre regra desconhecida, o piloto deve...","When answering an oral question about an unfamiliar rule, the pilot should...",[["Inventar um número de seção","Invent a section number"],["Explicar raciocínio e localizar fonte oficial vigente","Explain the reasoning and locate the current official source"],["Responder só “depende”","Answer only “it depends”"],["Citar um fórum","Cite a forum"]],1,14,"Raciocínio transparente e referência oficial são melhores que especulação.","Transparent reasoning and an official reference are better than speculation."),
    q("O piloto interpreta “unless” como se fosse irrelevante. O risco é...","A pilot treats “unless” as irrelevant. The risk is...",[["Nenhum","None"],["Ignorar condição ou exceção que altera a aplicação da regra","Ignoring a condition or exception that changes how the rule applies"],["Apenas erro gramatical","A grammar error only"],["Aumentar margem de combustível","Increasing fuel margin"]],1,1,"Termos condicionais podem delimitar ou mudar o requisito.","Conditional terms may limit or change the requirement."),
    q("Uma operação é Part 91. A empresa quer importar um requisito Part 121 sem verificar aplicabilidade. A tripulação deve...","An operation is Part 91. The company wants to import a Part 121 requirement without checking applicability. The crew should...",[["Assumir equivalência automática","Assume automatic equivalence"],["Verificar regra, política e autorização aplicáveis, sem confundir jurisdições","Check applicable rules, policy, and authorization without conflating regimes"],["Ignorar todas as políticas","Ignore all policies"],["Usar apenas o requisito menos restritivo","Use only the least restrictive requirement"]],1,8,"Regras não se importam automaticamente; políticas válidas podem adicionar procedimentos, mas não substituir norma aplicável.","Rules do not transfer automatically; valid policies may add procedures but cannot replace applicable regulations."),
    q("A tripulação apresenta previsão de destino 2,100 ft e 3 SM ou melhor durante toda janela ETA ±1 h, Part 91 geral. Sem outra condição relevante...","The crew has a destination forecast of at least 2,100 feet and 3 SM throughout ETA ±1 hour, under general Part 91. With no other relevant condition...",[["§ 91.169(b) pode permitir não listar alternado","§ 91.169(b) may permit omitting an alternate"],["Alternado sempre é requerido","An alternate is always required"],["Os 45 min deixam de ser necessários","The 45 minutes are no longer required"],["Isso aprova qualquer aeroporto","This approves any airport"]],0,10,"As condições atendem ao critério geral para dispensar alternado, mas não removem outros requisitos.","The conditions meet the general criterion for omitting an alternate, but do not remove other requirements."),
    q("Na aproximação, referência visual requerida aparece abaixo da MDA, mas aeronave não está em posição para descida normal. O piloto deve...","On approach, a required visual reference appears below MDA, but the aircraft is not positioned for a normal descent. The pilot should...",[["Descer bruscamente para pousar","Descend steeply to land"],["Não continuar até que todas as condições aplicáveis estejam atendidas; executar missed approach se necessário","Do not continue until all applicable conditions are met; go missed if necessary"],["Pousar fora da pista","Land beside the runway"],["Confiar somente no PAPI","Rely only on the PAPI"]],1,5,"Referência visual isolada não substitui posição para descida e pouso normais.","A visual reference alone does not replace position for a normal descent and landing."),
    q("A tripulação tem ATP-CTP, exame de conhecimento aprovado e experiência documentada. Ainda precisa no practical test...","The crew member has ATP-CTP, a passing knowledge test, and documented experience. For the practical test, the applicant still must...",[["Demonstrar os conhecimentos, gerenciamento de risco e habilidades requeridos","Demonstrate required knowledge, risk management, and skills"],["Apenas reapresentar certificado CTP","Only resubmit the CTP certificate"],["Nenhum teste","No test"],["Usar somente Part 91","Use Part 91 only"]],0,14,"Cada etapa tem finalidade própria; practical test avalia padrão de proficiência.","Each step has its own purpose; the practical test evaluates the proficiency standard."),
    q("Em um evento de emergência, o PIC desviou-se da regra somente no necessário. Após estabilizar, deve...","During an emergency, the PIC deviated from a rule only as required. After stabilizing, the PIC should...",[["Ocultar o desvio","Conceal the deviation"],["Coordenar com ATC quando praticável e cumprir eventual pedido de relatório","Coordinate with ATC when practicable and comply with any report request"],["Presumir que toda regra foi cancelada","Assume every rule was waived"],["Continuar desviando por conveniência","Continue deviating for convenience"]],1,4,"A autoridade de emergência é limitada; comunicações e requisitos de relatório podem permanecer.","Emergency authority is limited; communication and reporting requirements may remain.")
  ];

  window.nfaLesson05Data = {
    title: "Understanding 14 CFR and FAA Regulatory Authority",
    chapters,
    questions: [knowledge, scenarios],
    references: {
      checked: "2026-11-10",
      currentAsOf: "2026-11-06",
      links: [
        "https://www.ecfr.gov/current/title-14",
        "https://www.ecfr.gov/current/title-14/section-91.3",
        "https://www.ecfr.gov/current/title-14/section-91.175",
        "https://www.ecfr.gov/current/title-14/section-91.169",
        "https://www.ecfr.gov/current/title-14/section-91.167",
        "https://www.faa.gov/training_testing/testing/acs",
        "https://www.faa.gov/pilots/training/atp",
        "https://www.faa.gov/guidance"
      ]
    }
  };
})();
