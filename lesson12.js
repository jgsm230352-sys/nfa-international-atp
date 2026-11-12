Warning: truncated output (original token count: 21483)
Total output lines: 570

window.nfaLesson12Data = (() => {
  const bilingual = (pt, en) => `PT-BR: ${pt}\nEN-US: ${en}`;
  const chapters = [
    {
      title: "1. Special Use Airspace: ler a área como uma condição operacional",
      body: `## Português (BR)

### Briefing do instrutor
Hoje vamos olhar para uma linha ou polígono na carta e perguntar: o que essa área significa para a nossa rota, neste horário, nesta altitude e sob esta autorização? Special Use Airspace (SUA) não é uma classe única de espaço aéreo. É um conjunto de áreas estabelecidas por causa de atividades específicas ou de limitações que essas atividades impõem a outras aeronaves. A consequência operacional depende do tipo da área e do seu status, não apenas do nome “SUA”.

### Objetivos
Ao final, você deverá distinguir SUA regulatória e não regulatória; ler limites laterais, verticais e horários; identificar quando a entrada é proibida, condicionada, permitida com cautela ou apenas solicitada como voluntariamente evitada; e construir uma decisão baseada em informação atual.

### Um modelo de quatro perguntas
Antes de planejar atravessar uma área, confirme: **qual tipo é?**; **quais são seus limites laterais e verticais?**; **está ativa no horário estimado?**; **qual autoridade controla, usa ou publica sua condição?** As dimensões e horários são parte da definição operacional. Uma rota pode cruzar a projeção horizontal da área sem penetrar seus limites verticais; pode também parecer livre na carta e ser afetada por uma restrição temporária publicada por NOTAM.

Prohibited Areas e Restricted Areas são SUA regulatórias, estabelecidas pelo processo de rulemaking e descritas no 14 CFR Part 73. Warning Areas, Military Operations Areas (MOAs), Alert Areas, Controlled Firing Areas (CFAs) e National Security Areas (NSAs) são categorias não regulatórias de SUA. “Não regulatória” não significa “sem risco” nem elimina regras gerais, instruções ATC ou restrições temporárias aplicáveis.

### O que a carta mostra — e o que pode não mostrar
Áreas permanentes, salvo exceções como CFAs, aparecem nas cartas apropriadas com identificação, limites, altitudes, horários e agência de controle. A AIM informa que CFAs, MOAs temporárias e Restricted Areas temporárias não são representadas como as áreas permanentes. Portanto, carta limpa não encerra a pesquisa: consulte NOTAMs, Domestic Notices, os recursos oficiais de SUA e a instalação ATC sobreposta quando necessário.

### Aplicação de linha
Em uma perna IFR, o plano passa perto de uma área R. Não aceite a impressão de que “o plano foi aceito, então está tudo resolvido”. ATC pode emitir uma rota que evite a área; em condições específicas de joint-use, pode permitir trânsito quando a área está inativa e liberada. O piloto continua responsável por cumprir a autorização e as regras. Se surgir dúvida sobre limites ou status, interrompa a suposição e obtenha esclarecimento antes de chegar ao ponto de decisão.

### Erros comuns
- Tratar todas as áreas SUA como se exigissem a mesma autorização.
- Confundir “não regulatória” com “entrada sempre segura ou recomendada”.
- Usar apenas a carta, sem NOTAM e informação de status atual.
- Ignorar os limites verticais e horários impressos.

### Revisão rápida
Tipo → limites → horário/status → autoridade e condições. Esse ciclo é mais confiável que decorar a cor de uma área isoladamente.

### English (US)

### Instructor briefing
Today we will look at a line or polygon on a chart and ask: what does this area mean for our route, at this time, altitude, and under this clearance? Special Use Airspace (SUA) is not one airspace class. It is a group of areas established for specific activities or for limitations those activities impose on other aircraft. The operational consequence depends on the area type and its status, not merely on the label “SUA.”

### Objectives
By the end, you should distinguish regulatory and nonregulatory SUA; interpret lateral, vertical, and time limits; determine whether entry is prohibited, conditional, permitted with caution, or only requested to be avoided voluntarily; and make a decision using current information.

### A four-question model
Before planning to cross an area, confirm: **what type is it?**; **what are its lateral and vertical limits?**; **will it be active at the estimated time?**; **which authority controls, uses, or publishes its status?** Dimensions and times are part of the operational definition. A route may cross the horizontal projection without entering the vertical limits. Conversely, a route that looks clear on a chart may be affected by a temporary restriction published by NOTAM.

Prohibited Areas and Restricted Areas are regulatory SUA established through rulemaking and described in 14 CFR Part 73. Warning Areas, Military Operations Areas (MOAs), Alert Areas, Controlled Firing Areas (CFAs), and National Security Areas (NSAs) are nonregulatory SUA categories. “Nonregulatory” does not mean “no risk,” nor does it remove generally applicable rules, ATC instructions, or temporary restrictions.

### What the chart shows—and may not show
Permanent areas, with exceptions such as CFAs, are depicted on appropriate charts with identification, limits, altitudes, times, and controlling agency. The AIM states that CFAs, temporary MOAs, and temporary Restricted Areas are not depicted in the same way as permanent areas. A clear chart therefore does not end the research: check NOTAMs, Domestic Notices, official SUA resources, and the overlying ATC facility when needed.

### Line-operation application
An IFR route passes near an R area. Do not assume that “the flight plan was accepted, so everything is settled.” ATC may issue a route that avoids the area; under specific joint-use conditions, it may allow transit when the area is inactive and released. The pilot remains responsible for complying with the clearance and applicable rules. If limits or status are uncertain, stop assuming and obtain clarification before reaching the decision point.

### Common errors
- Treating every SUA type as if it required the same authorization.
- Confusing “nonregulatory” with “always safe or recommended to enter.”
- Using only the chart without current NOTAM and status information.
- Ignoring printed vertical limits and times.

### Quick review
Type → limits → time/status → authority and conditions. This cycle is more reliable than memorizing an area’s color in isolation.

### References
FAA AIM 3-4-1; FAA AIM 3-4-9; 14 CFR Part 73; FAA Order JO 7400.10H.`
    },
    {
      title: "2. Prohibited Areas e Restricted Areas: a diferença muda a decisão",
      body: `## Português (BR)

### Briefing do instrutor
As letras P e R em uma carta não são intercambiáveis. Uma Prohibited Area define espaço no qual o voo é proibido. Uma Restricted Area admite operações sob condições e autorização previstas, mas pode conter perigos invisíveis graves. Em ambos os casos, o piloto não deve transformar uma autorização ATC genérica em autorização para entrar.

### Prohibited Area
É um volume de dimensões definidas no qual o voo de aeronaves é proibido por razões de segurança nacional ou interesse público. Os detalhes são publicados no Federal Register e representados em cartas. A ação padrão de planejamento é permanecer fora de seus limites. Uma clearance que pareça penetrar a área deve ser esclarecida; não presuma que o controlador concedeu uma exceção.

### Restricted Area
O voo dentro dos limites e durante os horários/altitudes designados fica sujeito a restrições. Atividades podem incluir artilharia, tiro aéreo ou mísseis guiados, com riscos que talvez não sejam visíveis da cabine. 14 CFR §91.133 veda operar em Restricted Area durante os horários/altitudes designados sem autorização prévia da agência usuária ou controladora.

Em áreas **joint-use**, a FAA pode usar o espaço quando a agência usuária o libera. A AIM descreve que, se a área está inativa e liberada ao controle, ATC pode permitir operação IFR sem emitir uma autorização específica para a área. Se está ativa e não liberada, ATC normalmente emite uma clearance que evita a área, salvo condições específicas, como autorização própria informada ao controle ou missão aprovada de altitude reservation. Essa prática descrita pela AIM não deve ser generalizada para áreas non-joint-use nem para Prohibited Areas.

### Raciocínio no cockpit
Antes do TOD, o FMS mostra um segmento cruzando R-XXXX. O PM confere chart/NOTAM e status, identifica altitude e horário de ativação e contata a instalação indicada. Se não houver confirmação confiável de que a área está inativa e liberada ou de que existe autorização válida, a tripulação solicita uma rota que mantenha separação do volume. Se a clearance recebida contradiz o planejamento, readback não substitui a verificação da legalidade e do perfil.

### Não confunda autorização
“Cleared direct” é uma autorização de rota ATC dentro do sistema de controle. A autorização de entrada em área restrita pode depender da agência usuária/controladora e das condições aplicáveis. O controlador não é automaticamente a agência que pode autorizar toda Restricted Area. A regra prática é confirmar quem tem autoridade e qual condição está sendo autorizada.

### Erros comuns
- Achar que Restricted significa apenas “cuidado”, como uma MOA.
- Achar que a autorização ATC sempre equivale à autorização exigida pela §91.133.
- Usar a regra de joint-use em qualquer área.
- Tratar uma área inativa no horário publicado como liberada sem confirmar sua situação.

### Síntese
P: não penetrar. R: entrar somente quando permitido pelas condições e autorização aplicáveis; conhecer a agência, status, altitude e horário.

### English (US)

### Instructor briefing
The letters P and R on a chart are not interchangeable. A Prohibited Area defines airspace in which flight is prohibited. A Restricted Area allows operations under specified conditions and authorization, but may contain serious invisible hazards. In either case, do not turn a generic ATC clearance into permission to enter.

### Prohibited Area
A Prohibited Area is a defined volume in which aircraft flight is prohibited for reasons of national security or public interest. Details are published in the Federal Register and depicted on charts. The normal planning action is to remain outside its boundaries. If a clearance appears to penetrate the area, clarify it; do not assume the controller granted an exception.

### Restricted Area
Flight within the boundaries and during designated times/altitudes is subject to restrictions. Activities may include artillery firing, aerial gunnery, or guided missiles, with hazards that may not be visible from the cockpit. 14 CFR §91.133 prohibits operating in a Restricted Area during its designated times/altitudes without prior authorization from the using or controlling agency.

In **joint-use** areas, the FAA may use the airspace when the using agency releases it. The AIM explains that when the area is inactive and released to ATC, ATC may allow IFR operations without issuing a separate area-specific clearance. If the area is active and not released, ATC normally issues a clearance that avoids it, except under specific conditions, such as separate permission reported to ATC or an approved altitude-reservation mission. Do not generalize this AIM procedure to non-joint-use areas or Prohibited Areas.

### Cockpit reasoning
Before top of descent, the FMS shows a segment crossing R-XXXX. The PM checks the chart/NOTAM and status, identifies altitude and activation time, and contacts the listed facility. Without reliable confirmation that the area is inactive and released or that valid permission exists, the crew requests a route that remains clear of the volume. If the clearance conflicts with the plan, readback does not replace checking legality and flight path.

### Do not confuse permissions
“Cleared direct” is an ATC route clearance within the control system. Permission to enter a Restricted Area may depend on the using or controlling agency and applicable conditions. The controller is not automatically the agency authorized to approve every Restricted Area entry. Confirm who has authority and what condition is being authorized.

### Common errors
- Treating Restricted as merely “use caution,” like a MOA.
- Assuming ATC clearance always equals the authorization required by §91.133.
- Applying the joint-use procedure to every area.
- Treating an area as released solely because the published active hours have passed.

### Summary
P: do not penetrate. R: enter only when applicable conditions and authorization permit; know the agency, status, altitude, and time.

### References
14 CFR §§91.133, 73.13; FAA AIM 3-4-2, 3-4-3; FAA Order JO 7400.10H.`
    },
    {
      title: "3. MOA, Warning, Alert e Controlled Firing Area",
      body: `## Português (BR)

### Briefing do instrutor
Agora vamos separar quatro áreas que frequentemente são colocadas no mesmo grupo mental por causa de atividade militar ou risco de tráfego. Elas não criam a mesma consequência. O que muda é a relação com tráfego IFR, a necessidade de autorização e quem mantém a responsabilidade de evitar conflito.

| Área | Propósito/risco | Operação de aeronave não participante |
|---|---|---|
| MOA | Separa certas atividades de treinamento militar do tráfego IFR | ATC pode liberar tráfego IFR se conseguir prover separação; VFR deve exercer extrema cautela durante atividade |
| Warning Area | Avisa sobre atividade potencialmente perigosa, começando 3 NM da costa dos EUA | O aviso não constitui por si só proibição geral de entrada; manter vigilância e consultar status |
| Alert Area | Informa treinamento intenso ou atividade aérea incomum | Participantes e pilotos em trânsito têm igual responsabilidade por evitar colisão; regras CFR continuam aplicáveis |
| CFA | Atividade perigosa é suspensa quando aeronave se aproxima | Não costuma exigir mudança de rota de não participantes; por isso não é representada como as demais |

### MOA: a pergunta é IFR ou VFR?
O propósito declarado é separar certas atividades militares de treinamento do tráfego IFR. Quando está em uso, ATC pode liberar tráfego IFR não participante através da MOA **se puder prover separação IFR**. Caso contrário, pode rerotear ou restringir o tráfego. Isso não transforma o voo IFR em autorização para ignorar uma clearance ou instrução ATC.

Para VFR, a AIM orienta extrema cautela quando há atividade militar. O status pode mudar com frequência. Consulte fonte de status em tempo real e, antes de entrar em MOA ativa, contate a agência controladora para advisories. Advisory não é separação garantida. Em uma aeronave de transporte, a tripulação deve integrar a informação ao planejamento e manter margem para desvio.

### Warning e Alert: aviso não é separação
Warning Area pode abranger águas domésticas ou internacionais, a partir de três milhas náuticas da costa. É um alerta de atividade potencialmente perigosa para não participantes. Alert Area alerta para alta densidade de treinamento ou atividade incomum. A responsabilidade de evitar colisão é compartilhada igualmente entre participantes e aeronaves em trânsito; a designação não suspende as regras de voo.

### CFA: mitigação pela interrupção
Em uma Controlled Firing Area, observadores, radar ou vigias terrestres indicam aproximação; a atividade perigosa é suspensa imediatamente. Como o mecanismo protege a aeronave não participante sem exigir que ela altere a rota, a CFA não precisa ser charted como as outras áreas SUA. Isso não autoriza desconsiderar NOTAM ou instruções específicas.

### Erro de cockpit
“O controlador me autorizou pela MOA, então há separação de todo tráfego.” Não necessariamente: o conceito da AIM é que ATC somente libera IFR através da área se puder fornecer separação IFR aplicável. Para VFR, o piloto continua responsável por ver e evitar segundo as regras aplicáveis. Confirme a condição real do serviço recebido.

### English (US)

### Instructor briefing
Let us separate four areas often grouped together mentally because of military activity or traffic risk. They do not have the same consequence. What changes is the relationship to IFR traffic, the need for authorization, and who remains responsible for collision avoidance.

| Area | Purpose/hazard | Nonparticipating aircraft operation |
|---|---|---|
| MOA | Separates certain military training activities from IFR traffic | ATC may clear IFR traffic if IFR separation can be provided; VFR pilots should use extreme caution during activity |
| Warning Area | Warns of potentially hazardous activity beginning 3 NM from the U.S. coast | The warning alone is not a general prohibition on entry; maintain vigilance and check status |
| Alert Area | Advises of intense training or unusual aerial activity | Participating and transiting pilots share equal collision-avoidance responsibility; CFR rules still apply |
| CFA | Hazardous activity is suspended when an aircraft approaches | Usually does not require nonparticipants to change course, so it is not depicted like other areas |

### MOA: ask whether the flight is IFR or VFR
The stated purpose is to separate certain military training activities from IFR traffic. When in use, ATC may clear nonparticipating IFR traffic through a MOA **if IFR separation can be provided**. Otherwise, it may reroute or restrict traffic. This does not authorize an IFR flight to disregard its clearance or an ATC instruction.

For VFR, the AIM advises extreme caution when military activity is occurring. Status may change frequently. Check a real-time status source and, before entering an active MOA, contact the controlling agency for advisories. An advisory is not guaranteed separation. In an airline aircraft, the crew should incorporate the information into the plan and retain room to deviate.

### Warning and Alert: an advisory is not separation
A Warning Area may include domestic or international waters and begins three nautical miles from the coast. It warns nonparticipants of potentially hazardous activity. An Alert Area advises of high-volume training or unusual activity. Participants and transiting aircraft share equal collision-avoidance responsibility; the designation does not suspend flight rules.

### CFA: mitigation by stopping the activity
In a Controlled Firing Area, spotters, radar, or ground lookouts detect an approaching aircraft; hazardous activity is immediately suspended. Because the mechanism protects a nonparticipating aircraft without requiring a route change, a CFA does not need to be charted like other SUA. This does not authorize ignoring a NOTAM or a specific instruction.

### Cockpit trap
“The controller cleared me through the MOA, so all traffic is separated.” Not necessarily: the AIM concept is that ATC clears IFR through only when it can provide applicable IFR separation. For VFR, the pilot remains responsible for see-and-avoid as applicable. Confirm the actual service being provided.

### References
FAA AIM 3-4-4 through 3-4-7; FAA AIM 4-1-18; FAA Order JO 7400.10H.`
    },
    {
      title: "4. National Security Areas e restrições de segurança",
      body: `## Português (BR)

### Briefing do instrutor
Uma NSA pede atenção porque há instalações em solo que exigem proteção adicional. A primeira distinção é entre o pedido publicado de evitar a área voluntariamente e uma proibição regulatória temporária. Um pedido de prudência não deve ser descrito como se fosse, sozinho, uma proibição legal; uma restrição emitida sob autoridade legal deve ser cumprida.

### NSA voluntária
National Security Areas têm dimensões laterais e verticais definidas e são estabelecidas onde há necessidade de maior segurança de instalações terrestres. A AIM diz que os pilotos são solicitados a evitar voluntariamente a NSA representada. Para uma operação profissional, evite quando praticável e planeje uma rota alternativa sem degradar a segurança do voo.

### Quando a NSA se torna restrição
Quando necessário, o voo pode ser temporariamente proibido por regulamento sob 14 CFR §99.7, Special Security Instructions. A restrição é divulgada por NOTAM. A partir daí, a decisão não é mais baseada no pedido voluntário: é preciso ler o NOTAM e cumprir os termos, limites, horários e exceções nele definidos.

### Verificação no planejamento
No briefing, localize a NSA na carta; depois verifique NOTAMs/FDC NOTAMs e fontes FAA de restrições. Confirme se o aviso cria proibição temporária, o volume e horário, eventuais operações permitidas e a autoridade de contato. A palavra “NSA” isolada não descreve integralmente a regra vigente.

### Cenário de tripulação
Durante o planejamento, um piloto diz: “A NSA é voluntária, podemos cruzar.” O outro encontra FDC NOTAM que ativa restrição §99.7. A resposta correta é suspender o plano de cruzamento, aplicar os termos do NOTAM e solicitar reroute se necessário. O conflito é resolvido pela informação atual e pela autoridade normativa, não pela classificação original na carta.

### English (US)

### Instructor briefing
A National Security Area deserves attention because ground facilities require additional protection. The first distinction is between a published request to avoid the area voluntarily and a temporary regulatory prohibition. A prudential request should not be described as a legal prohibition by itself; a restriction issued under legal authority must be followed.

### Voluntary NSA
National Security Areas have defined lateral and vertical dimensions and are established where increased security is needed for ground facilities. The AIM says pilots are requested to voluntarily avoid a depicted NSA. In professional operations, avoid it when practicable and plan an alternative without degrading flight safety.

### When an NSA becomes a restriction
When necessary, flight may be temporarily prohibited by regulation under 14 CFR §99.7, Special Security Instructions. The restriction is disseminated by NOTAM. At that point, the decision is no longer based on a voluntary request: read the NOTAM and comply with its terms, limits, times, and exceptions.

### Preflight verification
During the briefing, locate the NSA on the chart; then check NOTAMs/FDC NOTAMs and FAA restriction sources. Confirm whether a temporary prohibition is in effect, the volume and time, any permitted operations, and the contact authority. The label “NSA” alone does not fully describe the current rule.

### Crew scenario
During planning, one pilot says, “The NSA is voluntary; we can cross.” The other finds an FDC NOTAM activating a §99.7 restriction. The correct response is to suspend the crossing plan, apply the NOTAM terms, and request a reroute if needed. Resolve the conflict using current information and legal authority, not the original chart label.

### References
14 CFR §99.7; FAA AIM 3-4-8, 5-6-1; FAA Special Security Instructions page; current FDC NOTAM.`
    },
    {
      title: "5. TFR: restrição temporária exige leitura do NOTAM",
      body: `## Português (BR)

### Briefing do instrutor
Temporary Flight Restriction não é um tipo permanente de SUA: é uma restrição temporária publicada para uma situação e um volume definidos. O nome “TFR” não informa sozinho quem pode entrar. A resposta está no regulamento associado e no NOTAM específico: finalidade, limites, horários, exceções, procedimento de comunicação e autorização, se prevista.

### Principais bases regulatórias
A FAA publica TFRs sob diversas autoridades, entre elas: §91.137 (áreas de desastre/perigo); §91.138 (desastres nacionais no Havaí); §91.139 (regras emergenciais de tráfego aéreo); §91.141 (proximidade do Presidente e outras pessoas protegidas); §91.143 (operações de voo espacial); §91.144 (condições de alta pressão barométrica); e §91.145 (demonstrações aéreas e grandes eventos esportivos). Há também instruções especiais de segurança sob §99.7. A lista e a base aplicável devem ser confirmadas no NOTAM e nas publicações FAA vigentes.

### Não memorize uma permissão geral
Algumas TFRs preveem operações específicas ou admitem coordenação com ATC; outras restringem mais amplamente. Uma clearance ATC não cria por si só uma exceção. Só use uma via de entrada quando o regulamento e o NOTAM a permitirem, e cumpra exatamente os requisitos de identificação, comunicação, autorização prévia, rota, altitude e horário.

### Leitura estruturada do NOTAM
1. **Identifique** a base e a finalidade: desastre, segurança, emergência, evento ou atividade espacial.
2. **Construa o volume**: centro/coordenadas, raio ou polígono, limites verticais, início e fim, fuso horário e eventuais mudanças.
3. **Leia as exceções**: quem pode operar, quais condições se aplicam e qual órgão deve autorizar.
4. **Faça o briefing de tripulação**: ponto de decisão antes do limite, rota alternativa, frequências e ação caso a informação mude.
5. **Revalide** antes da partida e durante o voo, conforme atualizações e fontes disponíveis.

### Cenário de transporte
Uma TFR foi publicada depois da liberação do despacho/planejamento e intercepta a rota. A equipe atualiza a informação, determina se existe exceção aplicável ao voo e se todas as condições podem ser cumpridas. Se não houver base clara para entrada, solicita reroute ou desvia. “ATC provavelmente sabe” não é método de conformidade.

### Distinções importantes
TFR é operacionalmente temporária e pode ser divulgada por NOTAM; não presume que toda restrição esteja desenhada em carta aeronáutica. A AIM identifica responsabilidades específicas do piloto e recomenda conferir NOTAMs no planejamento. A obrigação concreta decorre do CFR/NOTAM aplicável; o checklist de leitura é método de gestão da tripulação.

### English (US)

### Instructor briefing
A Temporary Flight Restriction is not a permanent SUA type. It is a temporary restriction published for a defined situation and volume. The label “TFR” alone does not tell you who may enter. The answer is in the associated regulation and specific NOTAM: purpose, limits, times, exceptions, communication procedure, and authorization if provided.

### Main regulatory bases
The FAA issues TFRs under several authorities, including §91.137 (disaster/hazard areas); §91.138 (national disaster areas in Hawaii); §91.139 (emergency air traffic rules); §91.141 (proximity of the President and other protected parties); §91.143 (space flight operations); §91.144 (high barometric pressure conditions); and §91.145 (aerial demonstrations and major sporting events). Special security instructions may also be issued under §99.7. Confirm the applicable basis and current list in the NOTAM and current FAA publications.

### Do not memorize a general permission
Some TFRs provide for specific operations or coordination with ATC; others impose broader restrictions. An ATC clearance does not create an exception by itself. Use an entry path only when the regulation and NOTAM allow it, and comply exactly with identification, communication, prior authorization, route, altitude, and time requirements.

### Structured NOTAM review
1. **Identify** the authority and purpose: disaster, security, emergency, event, or space activity.
2. **Build the volume**: center/coordinates, radius or polygon, vertical limits, start and end, time zone, and changes.
3. **Read the exceptions**: who may operate, which conditions apply, and which agency must authorize.
4. **Brief the crew**: decision point before the boundary, alternate route, frequencies, and action if information changes.
5. **Revalidate** before departure and during flight using available updates and sources.

### Airline scenario
A TFR is issued after release of the dispatch/flight-planning package and intersects the route. The crew updates the information, determines whether an exception applies to the flight and whether every condition can be met. If entry lacks a clear basis, request a reroute or deviate. “ATC probably knows” is not a compliance method.

### Important distinctions
A TFR is temporary and may be disseminated by NOTAM; do not assume every restriction is drawn on an aeronautical chart. The AIM identifies pilot responsibilities and recommends checking NOTAMs during planning. The specific obligation comes from the applicable CFR/NOTAM; the review checklist is a crew risk-management method.

### References
14 CFR §§91.103, 91.137–91.145, 99.7; FAA AIM 3-5-3; FAA Flight Standards Information System, TFR guidance; FAA TFR/NOTAM Search.`
    },
    {
      title: "6. Preparação de rota: carta, NOTAM, horário e agência",
      body: `## Português (BR)

### Briefing do instrutor
Uma rota passa por volumes que podem mudar de status. O objetivo do planejamento não é marcar um “X” na carta; é transformar os dados em uma decisão que a tripulação consiga executar. Isso exige integrar fontes que têm finalidades diferentes.

### Camadas de informação
- **Carta aeronáutica:** representação de áreas permanentes, limites e referências visuais.
- **Chart Supplement e FAA Order JO 7400.10:** detalhes publicados das áreas e agências.
- **NOTAM/FDC NOTAM e Domestic Notices:** restrições temporárias, mudanças e informações vigentes.
- **FAA SUA Status/Map e instalação ATC/FSS indicada:** status e coordenação operacional; a disponibilidade pode variar por área.
- **Clearance ATC:** rota e instruções emitidas para o voo; não substitui automaticamente autorização de entrada requerida por outra agência.

### Sequência de briefing de tripulação
1. Marque todos os volumes que cruzam ou ficam próximos à rota, incluindo alturas e horários.
2. Compare o horário estimado de chegada ao volume com o período ativo, convertendo corretamente horário local/UTC conforme o produto.
3. Confira NOTAMs atuais, alterações, cancelamentos e áreas temporárias que não aparecem na carta.
4. Determine quem é a agência controladora/usuária e qual meio oficial confirma status ou autorização.
5. Escolha rota primária e alternativa, com ponto-limite antes da área e tempo para coordenar.
6. Distribua tarefas: um piloto monitora trajetória e clearance; o outro atualiza informação e comunica, conforme SOP.
7. Reavalie se horário, rota, meteorologia ou ATC mudarem.

### O ponto de decisão precisa estar antes do limite
Se a confirmação só será obtida depois que a aeronave cruzar a borda, o plano está atrasado. Defina um ponto de decisão com margem suficiente para manter-se fora, pedir reroute ou aguardar. Em operação de transporte, isso deve ser discutido no briefing com a carga de trabalho prevista, não improvisado em alta velocidade ou durante uma fase crítica.

### Disciplina de fontes
Mapas digitais ajudam a visualizar, mas não dispensam o NOTAM e a publicação oficial. Confira o ciclo, horário de atualização e limites da ferramenta. Se duas fontes divergem, não escolha a mais conveniente: consulte a autoridade responsável e planeje para permanecer fora enquanto a condição não estiver resolvida.

### English (US)

### Instructor briefing
A route passes through volumes whose status can change. The planning objective is not merely to put an “X” on the chart; it is to turn data into a decision the crew can execute. That requires combining sources with different purposes.

### Information layers
- **Aeronautical chart:** depiction of permanent areas, boundaries, and visual references.
- **Chart Supplement and FAA Order JO 7400.10:** published area details and agencies.
- **NOTAM/FDC NOTAM and Domestic Notices:** temporary restrictions, changes, and current information.
- **FAA SUA status/map and the listed ATC facility/FSS:** status and operational coordination; availability may vary by area.
- **ATC clearance:** route and instructions issued for the flight; it does not automatically replace entry authorization required from another agency.

### Crew-briefing sequence
1. Mark every volume crossing or near the route, including altitude and time limits.
2. Compare estimated arrival at the volume with the active period, correctly converting local/UTC time as applicable to the product.
3. Check current NOTAMs, changes, cancellations, and temporary areas absent from the chart.
4. Determine the controlling/using agency and the official method to confirm status or obtain permission.
5. Select a primary and alternate route, with a boundary decision point and time to coordinate.
6. Assign tasks: one pilot monitors path and clearance; the other updates information and communicates under SOP.
7. Reassess if time, route, weather, or ATC changes.

### The decision point must be before the boundary
If confirmation will only arrive after the aircraft crosses the boundary, the plan is late. Set a decision point with enough margin to remain clear, request a reroute, or hold. In airline operations, brief this with anticipated workload rather than improvising at high speed or during a critical phase.

### Source discipline
Digital maps help visualize but do not replace NOTAMs and official publications. Check the data cycle, update time, and tool limitations. If two sources disagree, do not choose the more convenient one: contact the responsible authority and plan to remain clear until the status is resolved.

### References
14 CFR §91.103; FAA AIM 3-4-1, 3-4-9, 5-1-3; FAA Domestic Notices; FAA SUA Map; FAA Chart Supplement; FAA Order JO 7400.10H.`
    },
    {
      title: "7. ATC, operador e PIC: responsabilidades que não se substituem",
      body: `## Português (BR)

### Briefing do instrutor
Uma autorização, uma consulta de status e uma autorização da agência usuária são atos diferentes. A tripulação precisa saber qual recebeu. ATC administra o tráfego e emite clearances; a agência usuária/controladora pode deter autoridade específica sobre Restricted Area; o PIC conserva responsabilidade pela operação da aeronave e pelo cumprimento das regras aplicáveis.

### Três perguntas antes de aceitar a trajetória
1. **O que ATC autorizou?** Leia rota, altitude, restrições e limites da clearance.
2. **Quem pode autorizar o acesso à área?** Confirme agência e condição quando a regra exige autorização própria.
3. **O que o voo pode cumprir com segurança e legalidade?** Se houver dúvida, “unable” e solicitação de esclarecimento são ferramentas profissionais.

ATC pode coordenar, avisar ou encaminhar o pedido; isso não significa que cada clearance implique autorização da agência usuária. Da mesma forma, uma autorização para entrar não substitui a clearance ATC, quando esta for requerida. Ambos os requisitos devem ser atendidos.

### Mudança de situação em voo
Se uma área se torna ativa, uma TFR entra em vigor ou surge informação incompatível com a rota, a tripulação mantém controle e consciência da posição, informa ATC quando possível e pede solução antes de atingir o limite. Não espere o FMS alertar uma violação: o mapa de navegação pode não carregar NOTAM, status de uso ou condições de autorização.

### CRM aplicado
Use comunicação em circuito fechado: “R-XXXX, ativo às 1430Z, limite FL180; decisão em 20 NM; solicitar desvio se sem liberação.” O outro piloto confirma a restrição e a tarefa. Se workload subir, priorize controle, navegação e comunicação …3483 tokens truncated…aa.gov/
7. FAA, *Temporary Flight Restrictions*: https://tfr.faa.gov/; FAA NOTAM Search: https://notams.aim.faa.gov/notamSearch/
8. FAA Order JO 7400.10H, *Special Use Airspace*, issued 04 Feb 2026, active: https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1044725

### Study assignment
Finish by briefing a real route: mark an R area, a MOA, and a temporary NOTAM; state limits, status, confirming source, decision point, alternate, and coordination call. If you cannot say who authorizes entry, what condition applies, and where you will remain clear, revisit Chapters 2, 5, and 6.`
    }
  ];

  const makeQuestion = (chapter, objective, ref, ptQ, enQ, ptOpts, enOpts, answer, ptWhy, enWhy) => ({
    q: bilingual(`[${objective}] ${ptQ}`, `[${objective}] ${enQ}`),
    options: ptOpts.map((v, i) => bilingual(v, enOpts[i])),
    answer, chapter, objective, reference: ref,
    explanation: bilingual(`${ptWhy}\nReferência FAA: ${ref}`, `${enWhy}\nFAA reference: ${ref}`)
  });
  const knowledge = [
    makeQuestion(0,"O1","FAA AIM 3-4-1; 14 CFR Part 73","Qual descrição melhor define Special Use Airspace?","Which statement best defines Special Use Airspace?",["Áreas ligadas a atividades específicas ou limitações impostas a outras aeronaves.","Toda área Classe E abaixo de 10.000 pés.","Qualquer volume no qual ATC fornece separação radar.","Somente áreas militares onde civis nunca podem voar."],["Airspace associated with specific activities or limitations imposed on other aircraft.","All Class E airspace below 10,000 feet.","Any volume where ATC provides radar separation.","Only military areas where civil aircraft may never fly."],0,"SUA é definida pela atividade e pelas limitações; suas categorias têm consequências diferentes.","SUA is defined by the activity and limitations; its categories have different consequences."),
    makeQuestion(0,"O1","FAA AIM 3-4-1; 14 CFR Part 73","Quais categorias são SUA regulatória?","Which categories are regulatory SUA?",["MOA e Warning Area.","Prohibited e Restricted Areas.","Alert Area e CFA.","NSA e MOA."],["MOA and Warning Area.","Prohibited and Restricted Areas.","Alert Area and CFA.","NSA and MOA."],1,"A AIM identifica Prohibited e Restricted como SUA regulatória do Part 73.","The AIM identifies Prohibited and Restricted Areas as regulatory Part 73 SUA."),
    makeQuestion(0,"O1","FAA AIM 3-4-1","Carta sem área temporária visível prova que a rota está livre de restrições?","Does a chart with no visible temporary area prove the route is free of restrictions?",["Sim, sempre.","Sim, se ATC aceitou o plano.","Não; consultar NOTAMs e fontes oficiais de status.","Não, mas somente para voos VFR."],["Yes, always.","Yes, if ATC accepted the flight plan.","No; check NOTAMs and official status sources.","No, but only for VFR flights."],2,"Áreas temporárias podem não estar representadas como as permanentes; carta não substitui NOTAM.","Temporary areas may not be depicted like permanent areas; a chart does not replace NOTAM review."),
    makeQuestion(0,"O1","FAA AIM 3-4-1","Quais dimensões devem ser consideradas no planejamento de um volume SUA?","Which dimensions must be considered when planning around an SUA volume?",["Somente coordenadas laterais.","Limites laterais, verticais e horários/status.","Somente altitude máxima.","Apenas frequência de rádio."],["Lateral coordinates only.","Lateral and vertical limits plus operating times/status.","Maximum altitude only.","Radio frequency only."],1,"O volume e a janela de atividade definem se a rota realmente penetra a área.","The volume and activity window determine whether the route actually enters the area."),
    makeQuestion(1,"O2","14 CFR §91.133; FAA AIM 3-4-2","Qual é a característica fundamental de uma Prohibited Area?","What is the defining feature of a Prohibited Area?",["VFR pode entrar com cautela.","O voo é proibido dentro do volume definido.","ATC sempre concede autorização por rádio.","Só restringe voos IFR."],["VFR may enter with caution.","Flight is prohibited within the defined volume.","ATC always grants entry by radio.","It restricts IFR flights only."],1,"A definição proíbe o voo no volume; o piloto deve permanecer fora.","The definition prohibits flight in the volume; the pilot must remain clear."),
    makeQuestion(1,"O2","14 CFR §91.133; 14 CFR §73.13","Quando §91.133 exige autorização para operar em Restricted Area?","When does §91.133 require authorization to operate in a Restricted Area?",["Em qualquer altitude e horário, sem exceção.","Durante os horários e altitudes designados, sem autorização prévia aplicável.","Somente após receber um aviso de tráfego.","Somente para aeronaves sem transponder."],["At any altitude and time, without exception.","During designated times and altitudes, without applicable prior authorization.","Only after receiving a traffic advisory.","Only for aircraft without a transponder."],1,"A regra vincula a restrição aos horários/altitudes designados e à autorização prévia da agência usuária ou controladora.","The rule ties the restriction to designated times/altitudes and prior permission from the using or controlling agency."),
    makeQuestion(1,"O2","FAA AIM 3-4-3","O procedimento AIM de Restricted Area joint-use pode ser aplicado a qualquer área R?","Can the AIM joint-use Restricted Area procedure be applied to every R area?",["Sim, todas são joint-use.","Não; a distinção joint-use é específica e não se estende a Prohibited ou non-joint-use areas.","Sim, desde que IFR.","Não, pois ATC nunca pode permitir operação IFR."],["Yes, all are joint-use.","No; joint-use is a specific distinction and does not extend to Prohibited or non-joint-use areas.","Yes, provided the flight is IFR.","No, because ATC can never allow IFR operations."],1,"A AIM limita expressamente o procedimento de liberação descrito às áreas joint-use.","The AIM expressly limits the described release procedure to joint-use areas."),
    makeQuestion(1,"O2","14 CFR §91.133; FAA AIM 3-4-3","A Restricted Area inativa no horário publicado deve ser considerada automaticamente liberada?","Should a Restricted Area be considered automatically released merely because its published active time has passed?",["Sim, sempre.","Não; confirmar status/liberação conforme a área e a fonte competente.","Sim, se a aeronave estiver em IFR.","Somente para voos comerciais."],["Yes, always.","No; confirm status/release with the applicable area and responsible source.","Yes, if the aircraft is IFR.","Only for commercial flights."],1,"Horário publicado é informação importante, mas não substitui confirmação de status/liberação quando necessária.","Published hours matter, but do not replace status/release confirmation when needed."),
    makeQuestion(2,"O3","FAA AIM 3-4-5","Em que condição ATC pode liberar tráfego IFR não participante através de uma MOA em uso?","Under what condition may ATC clear nonparticipating IFR traffic through an active MOA?",["Quando puder prover separação IFR.","Sempre que o piloto pedir.","Somente se a aeronave for militar.","Nunca."],["When it can provide IFR separation.","Whenever the pilot requests it.","Only if the aircraft is military.","Never."],0,"A AIM permite a passagem IFR se ATC puder prover separação IFR; caso contrário, pode rerotear/restringir.","The AIM allows IFR passage if ATC can provide IFR separation; otherwise it may reroute or restrict traffic."),
    makeQuestion(2,"O3","FAA AIM 3-4-5","Qual orientação FAA se aplica a VFR dentro de MOA com atividade militar?","What FAA guidance applies to VFR flight in a MOA with military activity?",["Separação garantida por ATC.","Extrema cautela e consulta de status/advisory.","Proibição automática de entrada.","Nenhuma responsabilidade de evitar tráfego."],["ATC-guaranteed separation.","Extreme caution and status/advisory checks.","Automatic prohibition on entry.","No collision-avoidance responsibility."],1,"A AIM recomenda extrema cautela; advisory não equivale a separação garantida.","The AIM advises extreme caution; an advisory is not guaranteed separation."),
    makeQuestion(2,"O3","FAA AIM 3-4-4","Uma Warning Area começa a partir de que referência costeira?","From what coastal reference does a Warning Area begin?",["Na fronteira internacional.","Três milhas náuticas da costa dos EUA.","Doze milhas da costa.","Somente dentro de águas territoriais."],["At the international boundary.","Three nautical miles from the U.S. coast.","Twelve miles from the coast.","Only within territorial waters."],1,"A definição AIM começa 3 NM outward da costa e pode abranger águas domésticas ou internacionais.","The AIM definition begins 3 NM outward from the coast and may cover domestic or international waters."),
    makeQuestion(2,"O3","FAA AIM 3-4-6","Quem possui responsabilidade de evitar colisão em Alert Area?","Who is responsible for collision avoidance in an Alert Area?",["Somente ATC.","Somente aeronaves participantes.","Participantes e aeronaves em trânsito igualmente.","Somente aeronaves VFR."],["ATC only.","Participating aircraft only.","Participating and transiting aircraft equally.","VFR aircraft only."],2,"A AIM atribui responsabilidade igual aos participantes e aos pilotos que transitam.","The AIM assigns equal responsibility to participants and pilots transiting the area."),
    makeQuestion(2,"O3","FAA AIM 3-4-7","Por que uma CFA normalmente não é representada como outras áreas SUA?","Why is a CFA generally not depicted like other SUA?",["A atividade perigosa é suspensa quando aeronave pode se aproximar.","É sempre espaço aéreo classe G.","Não há atividade perigosa.","A entrada é proibida para todo tráfego."],["Hazardous activity is suspended when an aircraft may be approaching.","It is always Class G airspace.","There is no hazardous activity.","Entry is prohibited to all traffic."],0,"O mecanismo de proteção suspende a atividade, de modo que não exige mudança de rota do não participante.","Its protective mechanism suspends the activity, so a nonparticipant need not change course."),
    makeQuestion(3,"O4","14 CFR §99.7; FAA AIM 3-4-8","O que a AIM solicita inicialmente em relação a uma NSA representada?","What does the AIM initially request regarding a depicted NSA?",["Evitação voluntária.","Entrada obrigatória.","Autorização ATC em todos os casos.","Desvio de qualquer regra de voo."],["Voluntary avoidance.","Mandatory entry.","ATC authorization in every case.","Deviation from all flight rules."],0,"A AIM descreve pedido de evitação voluntária; isso é distinto de proibição temporária.","The AIM describes a request for voluntary avoidance; that differs from a temporary prohibition."),
    makeQuestion(3,"O4","14 CFR §99.7; FAA AIM 3-4-8","Como uma restrição temporária de segurança associada a NSA é divulgada?","How is a temporary security restriction associated with an NSA disseminated?",["Somente por carta seccional.","Por regulação sob §99.7 e NOTAM.","Apenas verbalmente por ATC.","Por ATIS do aeroporto mais próximo."],["Only on a sectional chart.","By regulation under §99.7 and NOTAM.","Only verbally by ATC.","Through the nearest airport ATIS."],1,"A AIM indica que a proibição temporária sob §99.7 é promulgada e disseminada via NOTAM.","The AIM states that a temporary prohibition under §99.7 is issued and disseminated by NOTAM."),
    makeQuestion(4,"O5","FAA AIM 3-5-3; 14 CFR §91.137","Qual é a fonte operacional que define a TFR específica, seus limites e exceções?","Which operational source defines a specific TFR, its limits, and exceptions?",["Nome genérico “TFR”.","NOTAM aplicável e regulamento associado.","Somente o plano de voo arquivado.","Apenas uma carta antiga."],["The generic label “TFR.”","The applicable NOTAM and associated regulation.","The filed flight plan only.","An old chart only."],1,"A base e o NOTAM especificam o volume e as condições; o rótulo sozinho não basta.","The authority and NOTAM specify the volume and conditions; the label alone is insufficient."),
    makeQuestion(4,"O5","14 CFR §§91.137–91.145; FAA AIM 3-5-3","Qual seção trata de regras emergenciais de tráfego aéreo?","Which section addresses emergency air traffic rules?",["§91.137","§91.139","§91.141","§91.143"],["§91.137","§91.139","§91.141","§91.143"],1,"§91.139 é a base de Emergency Air Traffic Rules.","Section 91.139 is the authority for Emergency Air Traffic Rules."),
    makeQuestion(4,"O5","FAA AIM 3-5-3","Uma TFR publicada após a saída não aparece na carta usada no despacho. Qual conclusão é correta?","A TFR issued after departure is not shown on the chart used in planning. Which conclusion is correct?",["Não se aplica porque não estava na carta.","Verificar NOTAM atual, termos e impacto operacional.","ATC assume toda responsabilidade.","Somente voos VFR devem verificar."],["It does not apply because it was not on the chart.","Check the current NOTAM, terms, and operational impact.","ATC assumes all responsibility.","Only VFR flights must check."],1,"TFR é temporária e a tripulação deve acompanhar informação NOTAM atual.","A TFR is temporary and the crew must use current NOTAM information."),
    makeQuestion(5,"O6","14 CFR §91.103; FAA AIM 5-1-3","A preparação pré-voo inclui informações NOTAM relevantes à rota?","Does preflight action include NOTAM information relevant to the route?",["Não, NOTAM é apenas tarefa de despacho.","Sim, deve incluir toda informação disponível pertinente ao voo.","Somente para espaço aéreo classe A.","Somente quando ATC perguntar."],["No, NOTAMs are only a dispatch task.","Yes, it includes all available information pertinent to the flight.","Only for Class A airspace.","Only when ATC asks."],1,"§91.103 impõe a análise de todas as informações disponíveis pertinentes; AIM inclui NOTAM na preparação.","Section 91.103 requires review of all available information pertinent to the flight; the AIM includes NOTAMs in preflight planning."),
    makeQuestion(5,"O6","FAA AIM 3-4-1; FAA SUA Map","Qual é o melhor uso de um mapa gráfico de status SUA?","What is the best use of a graphical SUA status map?",["Substituir NOTAM e autorização.","Apoiar visualização/status, conferindo limites e dados oficiais aplicáveis.","Garantir entrada em qualquer área inativa.","Eliminar necessidade de briefing de rota."],["Replace NOTAMs and permission.","Support visualization/status while checking applicable official limits and data.","Guarantee entry into any inactive area.","Eliminate route briefing."],1,"Mapa é ferramenta de apoio; não substitui regra, NOTAM ou autorização exigida.","The map is an aid; it does not replace a rule, NOTAM, or required permission."),
    makeQuestion(5,"O6","FAA AIM 3-4-1","Em caso de divergência entre fontes digitais de status, qual resposta de planejamento é mais segura?","When digital status sources disagree, what is the safer planning response?",["Selecionar a fonte que libera o cruzamento.","Confirmar com autoridade responsável e planejar para ficar fora até resolver.","Ignorar divergência se IFR.","Usar apenas horário padrão da carta."],["Select the source that permits crossing.","Confirm with the responsible authority and plan to remain clear until resolved.","Ignore the discrepancy if IFR.","Use only charted standard hours."],1,"Não escolha a interpretação conveniente; obtenha confirmação oficial e preserve margem.","Do not choose the convenient interpretation; obtain official confirmation and preserve margin."),
    makeQuestion(6,"O7","14 CFR §§91.3, 91.123, 91.133; FAA AIM 3-4-3","Uma clearance ATC substitui automaticamente permissão da agência usuária de área restrita?","Does an ATC clearance automatically replace permission from a Restricted Area using agency?",["Sim.","Não; cumprir clearance e obter a permissão aplicável separadamente.","Sim, apenas se em IFR.","Sim, quando a área está desenhada na carta."],["Yes.","No; comply with the clearance and separately obtain applicable permission.","Yes, only when IFR.","Yes, when the area is charted."],1,"Os papéis são distintos; satisfazer um requisito não presume o outro.","The roles are distinct; satisfying one requirement does not imply the other."),
    makeQuestion(6,"O7","14 CFR §91.3; FAA AIM 4-2-1","Se a tripulação não consegue cumprir uma instrução com segurança, deve...","If the crew cannot safely comply with an instruction, it should...",["Aceitar e corrigir depois.","Informar unable, explicar brevemente e solicitar alternativa.","Ficar em silêncio.","Desligar o transponder."],["Accept and correct it later.","State unable, briefly explain, and request an alternative.","Remain silent.","Turn off the transponder."],1,"Comunicar a limitação permite coordenação; o PIC mantém responsabilidade operacional.","Communicating the limitation enables coordination; the PIC retains operational responsibility."),
    makeQuestion(6,"O7","14 CFR §91.123; FAA AIM 3-4-3","Uma autorização da agência usuária elimina a necessidade de clearance ATC quando esta é exigida?","Does using-agency permission eliminate the need for an ATC clearance when one is required?",["Sim.","Não; são requisitos distintos que devem ser conciliados.","Somente para voo VFR.","Sim, se o PIC for ATP."],["Yes.","No; they are separate requirements that must be reconciled.","Only for VFR flight.","Yes, if the PIC holds an ATP."],1,"Autorização da área e instrução ATC não são intercambiáveis.","Area permission and ATC instructions are not interchangeable."),
    makeQuestion(7,"O8","FAA AIM 3-4-3; 3-5-3","Qual plano de ação é mais adequado antes de atingir uma restrição sem confirmação?","What is the best action plan before reaching a restriction without confirmation?",["Continuar e perguntar depois.","Manter-se fora, contatar autoridade/ATC e solicitar reroute se necessário.","Descer abaixo da área sem verificar limites.","Confiar no FMS."],["Continue and ask later.","Remain clear, contact the authority/ATC, and request a reroute if needed.","Descend below the area without checking limits.","Rely on the FMS."],1,"A decisão deve ocorrer antes do limite, preservando opção de rota.","The decision should occur before the boundary while preserving a routing option."),
    makeQuestion(7,"O8","FAA AIM 3-4-5","Qual frase descreve corretamente um advisory em MOA?","Which statement correctly describes a MOA advisory?",["Garante separação de tráfego.","Fornece informação, mas não deve ser tratado como separação garantida.","Autoriza entrada em Restricted Area adjacente.","Substitui responsabilidade de evitar colisão."],["It guarantees traffic separation.","It provides information but should not be treated as guaranteed separation.","It authorizes entry into an adjacent Restricted Area.","It replaces collision-avoidance responsibility."],1,"Advisory apoia consciência situacional, não é garantia de separação.","An advisory supports situational awareness; it is not a guarantee of separation."),
    makeQuestion(7,"O8","FAA AIM 3-4-1; 3-4-9","O que deve fazer a tripulação quando rota, horário ou status mudam?","What should the crew do when route, time, or status changes?",["Manter plano original sem revisão.","Revalidar informações e reabrir decisão de cruzamento.","Esperar alerta do FMS.","Assumir que ATC atualizou o briefing."],["Keep the original plan without review.","Revalidate information and reopen the crossing decision.","Wait for an FMS alert.","Assume ATC updated the briefing."],1,"Mudanças podem alterar status e aplicabilidade; reavaliação antes do limite é essencial.","Changes can alter status and applicability; reassessment before the boundary is essential."),
    makeQuestion(7,"O8","FAA AIM 3-5-3","Quando a TFR não oferece exceção clara para o voo, o que a tripulação deve fazer?","When a TFR provides no clear exception for the flight, what should the crew do?",["Entrar se ATC estiver em contato.","Pedir solução de rota e permanecer fora da área restrita.","Usar a exceção de outra TFR.","Confiar que a restrição está suspensa."],["Enter if ATC is in contact.","Request a routing solution and remain outside the restricted area.","Use an exception from a different TFR.","Assume the restriction is suspended."],1,"Não se cria exceção por analogia ou clearance genérica.","Do not create an exception by analogy or generic clearance."),
    makeQuestion(7,"O8","FAA AIM 3-4-8; 14 CFR §99.7","Uma NSA voluntária recebe NOTAM temporário de proibição. Qual condição governa o voo?","A voluntary NSA receives a temporary prohibition NOTAM. Which condition governs the flight?",["Somente o pedido voluntário original.","Termos da restrição temporária e NOTAM.","A política interna do operador apenas.","Nenhuma, pois NSA não é regulatória."],["Only the original voluntary request.","The temporary restriction and NOTAM terms.","Only the operator's internal policy.","None, because an NSA is nonregulatory."],1,"A regra §99.7 altera a situação; cumprir limites e condições do NOTAM.","The §99.7 rule changes the situation; comply with the NOTAM limits and conditions."),
    makeQuestion(7,"O8","14 CFR §91.103; FAA AIM 3-4-1","Uma TFR foi publicada depois do despacho. Quem deve reavaliar o impacto na rota?","A TFR is issued after dispatch. Who should reassess its impact on the route?",["Somente o controlador.","A tripulação, integrando informação atual e procedimentos do operador.","Somente o passageiro responsável.","Ninguém se o plano já foi aceito."],["The controller only.","The crew, integrating current information and operator procedures.","Only the responsible passenger.","No one if the flight plan was accepted."],1,"A responsabilidade de preparação e operação exige acompanhar informação pertinente atual.","Preflight and operational responsibility require monitoring current pertinent information."),
    makeQuestion(7,"O8","FAA AIM 3-4-1 a 3-4-9; 3-5-3","Qual distribuição de tarefas melhor protege a consciência de rota?","Which task allocation best protects route awareness?",["Ambos os pilotos pesquisam enquanto ninguém monitora trajetória.","Um monitora trajetória/clearance e outro atualiza/comunica, conforme SOP, com confirmação fechada.","Somente o PM acompanha restrições.","O PF desliga alertas e mantém programação original."],["Both pilots research while no one monitors the path.","One monitors path/clearance and the other updates/communicates under SOP, with closed-loop confirmation.","Only the PM tracks restrictions.","The PF disables alerts and keeps the original programming."],1,"Divisão explícita e confirmação fechada preservam monitoramento e controle.","Explicit task sharing and closed-loop confirmation preserve monitoring and control.")
  ];

  const operational = [
    ...knowledge.slice(20),
    makeQuestion(1,"O2","14 CFR §91.133; FAA AIM 3-4-3","Em rota IFR, ATC oferece um direto que cruza uma R-area ativa e não liberada. Qual é a ação profissional?","On an IFR route, ATC offers a direct that crosses an active, unreleased R area. What is the professional action?",["Aceitar porque ATC conhece o status.","Informar a restrição, solicitar esclarecimento/desvio e não penetrar sem autorização aplicável.","Descer abaixo do limite sem coordenar.","Aceitar e pedir desculpas depois."],["Accept because ATC knows the status.","Advise ATC of the restriction, request clarification/deviation, and do not enter without applicable authorization.","Descend below the limit without coordinating.","Accept and apologize later."],1,"Clearance ATC não deve ser interpretada como permissão de entrada sem confirmar a condição exigida.","Do not interpret an ATC clearance as entry permission without confirming the required condition."),
    makeQuestion(1,"O2","FAA AIM 3-4-3","A R-area joint-use está inativa e a FAA confirmou liberação ao controle. O que a AIM descreve para tráfego IFR?","A joint-use R area is inactive and the FAA confirms release to ATC. What does the AIM describe for IFR traffic?",["ATC pode permitir a operação sem autorização específica adicional da área.","A entrada continua sempre proibida.","O piloto deve contatar a agência usuária em todos os casos e ignorar ATC.","A área vira MOA temporariamente."],["ATC may allow the operation without an additional area-specific clearance.","Entry remains prohibited at all times.","The pilot must always contact the using agency and ignore ATC.","The area temporarily becomes a MOA."],0,"Essa é a condição descrita para joint-use inativa e liberada; não generalizar para outras áreas.","That is the described condition for an inactive, released joint-use area; do not generalize it."),
    makeQuestion(2,"O3","FAA AIM 3-4-5","Uma tripulação VFR pretende cruzar MOA ativa com treinamento de interceptação. Qual decisão melhor aplica a orientação AIM?","A VFR crew plans to cross an active MOA with intercept training. Which decision best applies AIM guidance?",["Prosseguir porque MOA não é Restricted Area.","Exercer extrema cautela, obter status/advisory e contornar se margem de tráfego/manobra for insuficiente.","Considerar separação ATC garantida pelo advisory.","Desligar transponder para não interferir."],["Proceed because a MOA is not a Restricted Area.","Use extreme caution, obtain status/advisory, and go around if traffic or maneuvering margin is inadequate.","Treat the advisory as guaranteed ATC separation.","Turn off the transponder to avoid interference."],1,"A designação não é proibição geral, mas a atividade exige cautela; advisory não garante separação.","The designation is not a general prohibition, but activity calls for caution; an advisory does not guarantee separation."),
    makeQuestion(2,"O3","FAA AIM 3-4-5","ATC não pode manter separação IFR de tráfego não participante através de MOA em uso. O que pode ocorrer?","ATC cannot maintain IFR separation for nonparticipating traffic through a MOA in use. What may occur?",["ATC pode rerotear ou restringir o tráfego.","A aeronave deve penetrar mesmo assim.","A MOA é suspensa automaticamente.","O piloto recebe separação visual garantida."],["ATC may reroute or restrict the traffic.","The aircraft must enter anyway.","The MOA is automatically suspended.","The pilot receives guaranteed visual separation."],0,"A AIM prevê reroute ou restrição quando ATC não puder fornecer separação IFR.","The AIM provides for rerouting or restricting traffic when ATC cannot provide IFR separation."),
    makeQuestion(2,"O3","FAA AIM 3-4-6","No Alert Area, um piloto participante vê tráfego convergente. Qual afirmação se aplica?","In an Alert Area, a participating pilot sees converging traffic. Which statement applies?",["Apenas pilotos em trânsito evitam colisão.","Participantes e pilotos em trânsito têm responsabilidade igual de evitar colisão.","A designação transfere responsabilidade a ATC.","As regras CFR deixam de valer."],["Only transiting pilots avoid collision.","Participants and transiting pilots share equal collision-avoidance responsibility.","The designation transfers responsibility to ATC.","CFR rules no longer apply."],1,"AIM diz que ambos são igualmente responsáveis e a atividade segue os CFRs.","The AIM states both are equally responsible and activity remains subject to the CFRs."),
    makeQuestion(3,"O4","14 CFR §99.7; FAA AIM 3-4-8","No planejamento de uma NSA, não há NOTAM temporário. Qual leitura é mais precisa?","During planning for an NSA, there is no temporary NOTAM. Which reading is most accurate?",["Existe proibição federal automática.","A AIM pede evitação voluntária; a ausência de NOTAM não cria proibição §99.7, mas recomenda-se considerar a rota.","A entrada é obrigatória.","A área não tem dimensões verticais."],["A federal prohibition automatically exists.","The AIM requests voluntary avoidance; without a §99.7 NOTAM there is no such temporary prohibition, though the route should be considered.","Entry is mandatory.","The area has no vertical dimensions."],1,"Separar pedido de evitação voluntária de uma restrição regulatória temporária.","Separate a voluntary avoidance request from a temporary regulatory restriction."),
    makeQuestion(4,"O5","FAA AIM 3-5-3; 14 CFR §§91.137–91.145","Uma TFR de §91.137 contém exceção para certas aeronaves de apoio, sujeita à coordenação indicada. O que um voo comercial comum deve fazer?","A §91.137 TFR includes an exception for certain supporting aircraft subject to specified coordination. What should an ordinary airline flight do?",["Assumir que a exceção vale para qualquer voo com ATC.","Verificar se se enquadra literalmente e cumprir cada condição; caso contrário, permanecer fora e solicitar rota alternativa.","Usar a exceção porque a rota já estava arquivada.","Entrar se o NOTAM estiver em inglês."],["Assume the exception applies to any flight talking to ATC.","Verify it fits the stated category and meet every condition; otherwise remain clear and request an alternate route.","Use the exception because the route was already filed.","Enter if the NOTAM is written in English."],1,"Exceções são específicas; não se amplia elegibilidade por analogia.","Exceptions are specific; do not expand eligibility by analogy."),
    makeQuestion(4,"O5","14 CFR §§91.141, 91.143, 91.145; FAA AIM 3-5-3","Uma tripulação encontra NOTAM de TFR ligado a evento público. Que dados determinam a decisão?","A crew finds a public-event TFR NOTAM. Which information determines the decision?",["Somente a categoria do evento.","Regra/base, coordenadas, limites verticais, horário, exceções e procedimento de autorização.","Somente o controlador de saída.","A cor do símbolo no aplicativo."],["The event category only.","The authority, coordinates, vertical limits, time, exceptions, and authorization procedure.","The departure controller only.","The symbol color in an app."],1,"A decisão depende do volume e das condições expressas no NOTAM e na regra aplicável.","The decision depends on the volume and conditions stated in the NOTAM and applicable rule."),
    makeQuestion(5,"O6","14 CFR §91.103; FAA AIM 5-1-3","O horário ATC muda e a chegada prevista coincide agora com o início de uma área programada. O PM deve...","ATC changes the schedule and the new ETA coincides with the start of a scheduled area. The PM should...",["Manter a análise anterior.","Recalcular horário, confirmar status e atualizar briefing antes da entrada no volume.","Delegar toda a responsabilidade ao FMS.","Esperar até chegar à borda."],["Keep the previous analysis.","Recalculate timing, confirm status, and update the briefing before entering the volume.","Delegate all responsibility to the FMS.","Wait until reaching the boundary."],1,"A mudança temporal pode alterar a condição de atividade; revalidar antes do ponto-limite.","A time change can alter activity status; revalidate before the decision point."),
    makeQuestion(5,"O6","FAA AIM 3-4-1; FAA Order JO 7400.10H","Uma área temporária não aparece na carta aeronáutica. Qual é a medida apropriada?","A temporary area does not appear on the aeronautical chart. What is appropriate?",["Concluir que não existe.","Consultar NOTAM/Domestic Notice e recursos FAA, inclusive a instalação ATC sobreposta quando pertinente.","Desconsiderar porque não foi charted.","Usar a carta do ciclo anterior."],["Conclude it does not exist.","Check NOTAM/Domestic Notice and FAA resources, including the overlying ATC facility when pertinent.","Ignore it because it was not charted.","Use the previous chart cycle."],1,"AIM recomenda consultar fontes para SUA temporária não representada.","The AIM directs pilots to check sources for temporary SUA that is not depicted."),
    makeQuestion(6,"O7","14 CFR §§91.3, 91.123, 91.133","ATC diz “cleared through the restricted area”, mas a tripulação não tem certeza se a agência liberou. Qual resposta é adequada?","ATC says “cleared through the restricted area,” but the crew is unsure whether the agency released it. What is appropriate?",["Aceitar sem confirmação para evitar atraso.","Solicitar confirmação/coordenação antes da entrada e manter-se fora enquanto a condição não for clara.","Entrar e registrar a dúvida depois.","Cancelar IFR imediatamente."],["Accept without confirmation to avoid delay.","Request confirmation/coordination before entry and remain clear while the condition is unclear.","Enter and document the uncertainty later.","Cancel IFR immediately."],1,"A dúvida material sobre autorização deve ser resolvida antes da penetração.","A material uncertainty about authorization must be resolved before penetration."),
    makeQuestion(7,"O8","FAA AIM 3-4-1; SOP do operador","PF está em aproximação e PM recebe atualização de restrição próxima à rota. Qual coordenação é melhor?","The PF is on approach and the PM receives an update about a nearby route restriction. Which coordination is best?",["PM inicia pesquisa longa sem avisar.","PM transmite a informação essencial, confirma com PF, preserva monitoramento e aciona o plano previamente briefado.","PF muda rota sem comunicação.","Ambos abandonam monitoramento para ler o NOTAM."],["The PM begins a lengthy search without advising the PF.","The PM communicates the essential information, confirms with the PF, preserves monitoring, and uses the briefed plan.","The PF changes course without communication.","Both stop monitoring to read the NOTAM."],1,"Compartilhamento de tarefas e plano antecipado evitam perda de controle/consciência durante workload alto.","Task sharing and prior planning prevent loss of control or awareness during high workload."),
    makeQuestion(7,"O8","FAA AIM 3-4-1; 14 CFR §91.103","Uma ferramenta de mapa mostra “inactive”, mas a instalação controladora não confirmou liberação de Restricted Area. O que fazer?","A map tool shows “inactive,” but the controlling facility has not confirmed release of a Restricted Area. What should the crew do?",["Entrar, pois a tela é suficiente.","Manter-se fora e obter confirmação segundo procedimentos aplicáveis antes de entrar.","Entrar somente abaixo de 3,000 pés.","Ignorar os limites verticais."],["Enter because the display is sufficient.","Remain clear and obtain confirmation under applicable procedures before entry.","Enter only below 3,000 feet.","Ignore the vertical limits."],1,"Ferramentas são apoio; confirmação exigida e limites aplicáveis continuam governando.","Tools are aids; required confirmation and applicable limits still govern."),
    makeQuestion(7,"O8","FAA AIM 3-5-3; 14 CFR §91.103","No meio do voo, surge NOTAM que amplia uma TFR. Qual decisão demonstra boa gestão de ameaças?","A NOTAM appears en route expanding a TFR. Which decision demonstrates sound threat management?",["Continuar até receber instrução de ATC.","Atualizar posição versus novo limite, coordenar cedo e permanecer fora, salvo exceção confirmada.","Desligar o GPS.","Solicitar autorização somente depois de cruzar o limite."],["Continue until ATC issues an instruction.","Update position against the new boundary, coordinate early, and remain clear absent a confirmed exception.","Turn off GPS.","Request permission only after crossing the boundary."],1,"A atualização em voo exige reavaliação antes da entrada e coordenação proativa.","An en-route update requires reassessment before entry and proactive coordination.")
  ];
  return {
    title: "Special Use Airspace and Operational Restrictions",
    chapters,
    questions: [knowledge.slice(0, 20), operational.slice(0, 20)]
  };
})();
