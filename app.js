const people = [
  {
    id:'alicia-alonso', name:'Alicia Alonso', style:'Classical ballet', category:'ballet',
    photo:'assets/people/alicia-alonso.webp',
    fact:'Alicia Alonso became an internationally celebrated ballerina and helped build the company that became the National Ballet of Cuba.',
    move:'Reach up and make a long ballet shape. You can move seated or standing.',
    source:'https://www.britannica.com/biography/Alicia-Alonso',
    questions:[
      {q:'Which institution did Alicia Alonso help establish?',a:['The National Ballet of Cuba','Ballet Hispánico','San Francisco Ballet','Ballet Folklórico de México'],correct:0},
      {q:'Which description best explains Alicia Alonso’s impact?',a:['She combined an international performing career with building Cuban ballet','She founded a Broadway theater','She created a television dance contest','She directed a flamenco museum'],correct:0}
    ]
  },
  {
    id:'paloma-herrera', name:'Paloma Herrera', style:'Classical ballet', category:'ballet',
    photo:'assets/people/paloma-herrera.webp',
    fact:'Paloma Herrera became a principal dancer at American Ballet Theatre and performed with the company for 24 years.',
    move:'Stand tall and point one foot. You can hold a grown-up’s hand.',
    source:'https://www.abt.org/people/paloma-herrera/',
    questions:[
      {q:'With which company did Paloma Herrera dance for 24 years?',a:['American Ballet Theatre','Ballet Hispánico','English National Ballet','The Royal Ballet'],correct:0},
      {q:'What leadership role did Paloma Herrera later hold?',a:['Director of the ballet company at Teatro Colón','Director of a flamenco museum','Founder of the Fly Girls','Leader of the Limón Dance Company'],correct:0}
    ]
  },
  {
    id:'carlos-acosta', name:'Carlos Acosta', style:'Classical ballet', category:'ballet',
    photo:'assets/people/carlos-acosta.webp',
    fact:'Carlos Acosta performed with major ballet companies, then founded Acosta Danza and became a ballet director.',
    move:'Make one strong shape, then slowly change it into another.',
    source:'https://www.brb.org.uk/profile/carlos-acosta',
    questions:[
      {q:'Which dance company did Carlos Acosta found?',a:['Acosta Danza','Ballet Hispánico','Ballet Folklórico de México','Ballet Cristina Hoyos'],correct:0},
      {q:'Which field is at the center of Carlos Acosta’s performing career?',a:['Classical ballet','Tap','Ballroom','Irish step dance'],correct:0}
    ]
  },
  {
    id:'lucia-lacarra', name:'Lucía Lacarra', style:'Classical ballet', category:'ballet',
    photo:'assets/people/lucia-lacarra.webp',
    fact:'Lucía Lacarra has danced principal ballet roles with major European companies and is celebrated for dramatic artistry.',
    move:'Use your face and arms to show one big feeling.',
    source:'https://lucialacarraballet.com/wp-content/uploads/2025/03/LUCIA-LACARRA_BioPalmares.pdf',
    questions:[
      {q:'Which description best matches Lucía Lacarra’s career?',a:['Principal roles with major European ballet companies','Broadway tap and musical comedy','Competitive ballroom championships','Commercial hip-hop music videos only'],correct:0},
      {q:'For which quality is Lucía Lacarra especially celebrated?',a:['Dramatic ballet artistry','Flamenco castanet technique','Tap improvisation','Ballroom partnering'],correct:0}
    ]
  },
  {
    id:'tamara-rojo', name:'Tamara Rojo', style:'Classical ballet', category:'ballet',
    photo:'assets/people/tamara-rojo.webp',
    fact:'Tamara Rojo built a major career as a ballerina and later led English National Ballet and San Francisco Ballet.',
    move:'Lead your family in one slow step, then let them lead you.',
    source:'https://www.sfballet.org/the-company/leadership/tamara-rojo/',
    questions:[
      {q:'Which company appointed Tamara Rojo artistic director in 2022?',a:['San Francisco Ballet','American Ballet Theatre','Ballet Hispánico','National Ballet of Cuba'],correct:0},
      {q:'Which company did Tamara Rojo lead before San Francisco Ballet?',a:['English National Ballet','Houston Ballet','Alvin Ailey American Dance Theater','Ballet Folklórico de México'],correct:0}
    ]
  },
  {
    id:'chita-rivera', name:'Chita Rivera', style:'Broadway / theater jazz', category:'stage',
    photo:'assets/people/chita-rivera.webp',
    fact:'Chita Rivera originated major Broadway roles, including Anita in West Side Story, during a career spanning more than six decades.',
    move:'Make your biggest opening-night stage pose.',
    source:'https://www.kennedy-center.org/artists/r/ra-rn/chita-rivera/',
    questions:[
      {q:'Which Broadway role did Chita Rivera originate?',a:['Anita in West Side Story','Dorothy in The Wiz','Cassie in A Chorus Line','Effie in Dreamgirls'],correct:0},
      {q:'Which milestone was part of Chita Rivera’s legacy?',a:['She became the first Latina Kennedy Center Honoree','She founded the National Ballet of Cuba','She created the Limón technique','She founded a flamenco museum'],correct:0}
    ]
  },
  {
    id:'jennifer-lopez', name:'Jennifer Lopez', style:'Commercial dance', category:'stage',
    photo:'assets/people/jennifer-lopez.webp',
    fact:'Jennifer Lopez first gained national television attention as a Fly Girl dancer and kept dance central to her music and film career.',
    move:'Show your favorite dance move—big or small.',
    source:'https://www.britannica.com/biography/Jennifer-Lopez',
    questions:[
      {q:'Which television dance group helped launch Jennifer Lopez’s national career?',a:['The Fly Girls','The Rockettes','The June Taylor Dancers','The Gold Diggers'],correct:0},
      {q:'How has dance remained important in Jennifer Lopez’s later career?',a:['It is central to her concerts, films and visual storytelling','She stopped dancing when she began recording','She works only in classical ballet','She became known mainly for ballroom competitions'],correct:0}
    ]
  },
  {
    id:'jose-limon', name:'José Limón', style:'Modern dance', category:'modern',
    photo:'assets/people/jose-limon.webp',
    fact:'José Limón became a leading artist of American modern dance, using breath, weight, suspension and recovery to communicate emotion.',
    move:'Breathe in as your arms float up, then breathe out as they fall.',
    source:'https://www.limon.nyc/legacy',
    questions:[
      {q:'Which area of dance history is most closely connected to José Limón?',a:['American modern dance','Classical Indian dance','Competitive ballroom','Broadway tap'],correct:0},
      {q:'Which ideas are central to Limón movement technique?',a:['Breath, weight, suspension and recovery','Pointe shoes and tutus','Castanets and fans','Tap shoes and metal sounds'],correct:0}
    ]
  },
  {
    id:'nacho-duato', name:'Nacho Duato', style:'Contemporary ballet', category:'modern',
    photo:'assets/people/nacho-duato.webp',
    fact:'Nacho Duato developed a fluid contemporary-ballet language and led Spain’s Compañía Nacional de Danza.',
    move:'Move one arm smoothly, as if it is following music only you can hear.',
    source:'https://nachoduatoacademy.com/en/nacho-duato-full-bio/',
    questions:[
      {q:'Which company did Nacho Duato lead in Spain?',a:['Compañía Nacional de Danza','Ballet Hispánico','American Ballet Theatre','Ballet Folklórico de México'],correct:0},
      {q:'How is Nacho Duato’s choreographic language described?',a:['Fluid contemporary ballet shaped by music and relationships','Traditional tap vaudeville','Competitive Latin ballroom','Classical ballet without contemporary influence'],correct:0}
    ]
  },
  {
    id:'blanca-li', name:'Blanca Li', style:'Contemporary / hip-hop fusion', category:'modern',
    photo:'assets/people/blanca-li.webp',
    fact:'Blanca Li works across contemporary dance, flamenco, ballet and hip-hop, showing how forms can meet while keeping distinct histories.',
    move:'Make one smooth move and one sharp move.',
    source:'https://blancali.com/es/apropos/',
    questions:[
      {q:'Which combination reflects Blanca Li’s wide-ranging work?',a:['Contemporary dance, flamenco, ballet and hip-hop','Only classical ballet','Only ballroom and tap','Irish step dance and clogging'],correct:0},
      {q:'Where has Blanca Li brought her choreography beyond the concert stage?',a:['Opera, film and popular music','Only sporting events','Only ballet examinations','Only ballroom competitions'],correct:0}
    ]
  },
  {
    id:'tina-ramirez', name:'Tina Ramirez', style:'Ballet / modern / Spanish dance', category:'founders',
    photo:'assets/people/tina-ramirez.webp',
    fact:'Tina Ramirez founded Ballet Hispánico to create opportunities for Hispanic dancers and choreographers.',
    move:'Invite someone to move with you, then copy each other.',
    source:'https://www.ballethispanico.org/about/org/leadership-legacy/tina-ramirez-memorial/',
    questions:[
      {q:'Which organization did Tina Ramirez found in 1970?',a:['Ballet Hispánico','National Ballet of Cuba','Acosta Danza','San Francisco Ballet'],correct:0},
      {q:'What did Tina Ramirez build through Ballet Hispánico?',a:['A company, school and community programs','A single annual dance contest','A movie studio without a dance company','A museum devoted only to costumes'],correct:0}
    ]
  },
  {
    id:'amalia-hernandez', name:'Amalia Hernández', style:'Baile folklórico', category:'founders',
    photo:'assets/people/amalia-hernandez.webp',
    fact:'Amalia Hernández founded Ballet Folklórico de México and brought dances from many Mexican regions to international stages.',
    move:'Open your arms wide, then take two proud steps from side to side.',
    source:'https://www.balletfolkloricodemexico.com.mx/',
    questions:[
      {q:'Which company did Amalia Hernández found?',a:['Ballet Folklórico de México','Ballet Hispánico','English National Ballet','Acosta Danza'],correct:0},
      {q:'Which traditions did Amalia Hernández bring to major theatrical stages?',a:['Dances from many regions of Mexico','Russian character dances only','American tap traditions','Irish step dancing'],correct:0}
    ]
  },
  {
    id:'carmen-amaya', name:'Carmen Amaya', style:'Flamenco', category:'spanish',
    photo:'assets/people/carmen-amaya.webp',
    fact:'Carmen Amaya transformed flamenco with remarkable speed, rhythmic power and commanding footwork.',
    move:'Clap a strong rhythm: slow, slow, quick-quick, slow.',
    source:'https://www.britannica.com/biography/Carmen-Amaya',
    questions:[
      {q:'Which dance tradition did Carmen Amaya transform?',a:['Flamenco','Classical ballet','Modern dance','Broadway tap'],correct:0},
      {q:'How did Carmen Amaya challenge conventions in flamenco performance?',a:['She performed movement and costuming then associated mainly with men','She removed rhythm and footwork from the form','She performed only silent film roles','She avoided international performances'],correct:0}
    ]
  },
  {
    id:'antonia-merce', name:'Antonia Mercé “La Argentina”', style:'Spanish dance', category:'spanish',
    photo:'assets/people/antonia-merce.webp',
    fact:'Antonia Mercé, known as La Argentina, helped establish Spanish dance as a sophisticated concert art.',
    move:'Tap your fingers together like tiny castanets.',
    source:'https://www.britannica.com/biography/La-Argentina',
    questions:[
      {q:'For which performance skill was Antonia Mercé especially renowned?',a:['Castanet technique and musicality','Tap improvisation','Pointe work','Ballroom lifts'],correct:0},
      {q:'What did Antonia Mercé help establish?',a:['Spanish dance as an international concert art','A television dance competition','A Cuban ballet academy','A Broadway tap company'],correct:0}
    ]
  },
  {
    id:'antonio-gades', name:'Antonio Gades', style:'Flamenco / Spanish dance', category:'spanish',
    photo:'assets/people/antonio-gades.webp',
    fact:'Antonio Gades brought flamenco and Spanish dance to international theater and film audiences.',
    move:'Make a pose that looks like the beginning of a story.',
    source:'https://fundacionantoniogades.com/en/antonio-gades/',
    questions:[
      {q:'Which filmmaker collaborated with Antonio Gades on a trilogy of dance films?',a:['Carlos Saura','Steven Spielberg','Spike Lee','Alfred Hitchcock'],correct:0},
      {q:'How did Antonio Gades expand the audience for flamenco and Spanish dance?',a:['Through both international theater and film','By limiting performances to one city','Through ballroom competitions only','By leaving choreography for painting'],correct:0}
    ]
  },
  {
    id:'cristina-hoyos', name:'Cristina Hoyos', style:'Flamenco', category:'spanish',
    photo:'assets/people/cristina-hoyos.webp',
    fact:'Cristina Hoyos became known through performance, choreography and film, then founded a company and the Flamenco Dance Museum.',
    move:'Pretend to open museum doors and welcome everyone inside.',
    source:'https://museodelbaileflamenco.com/en/cristina-hoyos-biography/',
    questions:[
      {q:'Which museum did Cristina Hoyos create in Seville?',a:['The Flamenco Dance Museum','The Museum of Modern Art','The Broadway Dance Museum','The National Ballet Museum'],correct:0},
      {q:'What did Cristina Hoyos do after dancing with Antonio Gades?',a:['Founded her own flamenco company','Joined a tap competition','Directed American Ballet Theatre','Stopped working in dance'],correct:0}
    ]
  },
  {
    id:'sara-baras', name:'Sara Baras', style:'Flamenco', category:'spanish',
    photo:'assets/people/sara-baras.webp',
    fact:'Sara Baras is known for precise flamenco footwork and theatrical productions presented around the world.',
    move:'Tap a gentle rhythm with your toes.',
    source:'https://www.sarabaras.com/',
    questions:[
      {q:'What did Sara Baras establish in 1998?',a:['Her own flamenco company','The National Ballet of Cuba','The Fly Girls','The Flamenco Dance Museum'],correct:0},
      {q:'Which qualities are associated with Sara Baras’s work?',a:['Precise footwork and theatrical productions','Pointe work without music','Tap dancing in silent films','Ballroom competition routines'],correct:0}
    ]
  },
  {
    id:'israel-galvan', name:'Israel Galván', style:'Contemporary flamenco', category:'spanish',
    photo:'assets/people/israel-galvan.webp',
    fact:'Israel Galván expands contemporary flamenco through sharp rhythm, silence and unconventional movement.',
    move:'Freeze in silence, then make one clear, sharp move.',
    source:'https://www.israelgalvancompany.com/biography',
    questions:[
      {q:'Which description best matches Israel Galván’s choreography?',a:['Sharp rhythm, silence and unconventional movement','Traditional ballet copied without change','Broadway tap comedy only','Competitive ballroom partnering'],correct:0},
      {q:'How has Israel Galván contributed to flamenco?',a:['He has expanded ideas about contemporary flamenco','He replaced flamenco with classical ballet','He founded American Ballet Theatre','He worked only as a film actor'],correct:0}
    ]
  },
  {
    id:'maria-pages', name:'María Pagés', style:'Contemporary flamenco', category:'spanish',
    photo:'assets/people/maria-pages.webp',
    fact:'María Pagés expands flamenco through theatrical storytelling and cross-cultural collaboration.',
    move:'Use your arms to show one big moment in a story.',
    source:'https://www.fpa.es/en/princess-of-asturias-awards/laureates/2022-maria-pages.html',
    questions:[
      {q:'Which major arts honor did María Pagés receive in 2022?',a:['The Princess of Asturias Award for the Arts','A Tony Award for Best Musical','The Pulitzer Prize for Drama','An Academy Award for acting'],correct:0},
      {q:'How does María Pagés expand flamenco?',a:['Through theatrical storytelling and cross-cultural collaboration','By removing choreography from performance','Through ballet competitions only','By avoiding music and narrative'],correct:0}
    ]
  },
  {
    id:'joaquin-cortes', name:'Joaquín Cortés', style:'Flamenco / ballet fusion', category:'spanish',
    photo:'assets/people/joaquin-cortes.webp',
    fact:'Joaquín Cortés trained in classical ballet and flamenco, then created large theatrical productions combining dance forms.',
    move:'Blend one smooth move with one sharp move.',
    source:'https://joaquincortesoficial.es/en/biography/',
    questions:[
      {q:'In which two forms did Joaquín Cortés train?',a:['Classical ballet and flamenco','Tap and Irish step dance','Ballroom and gymnastics','Modern dance and figure skating'],correct:0},
      {q:'What helped Joaquín Cortés reach international audiences?',a:['Large productions fusing flamenco, ballet and contemporary dance','A career limited to ballet examinations','A television cooking program','Silent films without dance'],correct:0}
    ]
  }
];

const photoCredits={
  'alicia-alonso':'Public domain / Wikimedia Commons','paloma-herrera':'Embajada de EEUU en la Argentina / CC BY 2.0 / Wikimedia Commons','carlos-acosta':'Pedro J Pacheco / CC BY-SA 4.0 / Wikimedia Commons','lucia-lacarra':'CC BY-SA 4.0 / Wikimedia Commons','tamara-rojo':'Erik Doble / CC BY-SA 4.0 / Wikimedia Commons','chita-rivera':'Kingkongphoto / CC BY-SA 2.0 / Wikimedia Commons','jennifer-lopez':'Everwest / CC BY 4.0 / Wikimedia Commons','jose-limon':'Unknown photographer / Public domain / Wikimedia Commons','nacho-duato':'Rodrigo Fernández / CC BY-SA 3.0 / Wikimedia Commons','blanca-li':'Ali Mahdavi / CC BY-SA 3.0 / Wikimedia Commons','tina-ramirez':'Vbh massistant / CC BY-SA 4.0 / Wikimedia Commons','amalia-hernandez':'Rob Mieremet / Anefo / CC0 / Wikimedia Commons','carmen-amaya':'ArmKa / CC BY-SA 4.0 / Wikimedia Commons','antonia-merce':"Studio d'Ora, Paris / Public domain / Wikimedia Commons",'antonio-gades':'Unknown photographer / Public domain / Wikimedia Commons','cristina-hoyos':'Ministerio de Cultura de la Nación / CC BY-SA 2.0 / Wikimedia Commons','sara-baras':'TheOm3ga / CC BY-SA 3.0 / Wikimedia Commons','israel-galvan':'MITO SettembreMusica / CC BY 2.0 / Wikimedia Commons','maria-pages':'Junta de Andalucía / CC BY-SA 2.0 / Wikimedia Commons','joaquin-cortes':'Roberto Santorini / CC BY-SA 2.0 / Wikimedia Commons'
};
people.forEach(person=>person.credit=photoCredits[person.id]);
localStorage.removeItem('hpsdDanceBoard');

const screens={
  start:document.getElementById('startScreen'), family:document.getElementById('familyScreen'),
  familyResult:document.getElementById('familyResultScreen'), quiz:document.getElementById('quizScreen'),
  result:document.getElementById('resultScreen')
};
const progressTrack=document.getElementById('progressTrack');
const progressBar=document.getElementById('progressBar');
let game=[],index=0,score=0,answered=false;
let familyGame=[],familyIndex=0,familyTarget=null;
let activeUtterance=null,activePauseButton=null;
let starTimers=[];

const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
function stopSpeech(){
  if('speechSynthesis' in window)window.speechSynthesis.cancel();
  if(activePauseButton){activePauseButton.disabled=true;activePauseButton.textContent='⏸ Pause sound';activePauseButton.setAttribute('aria-pressed','false');}
  activeUtterance=null;activePauseButton=null;
}
function show(name){stopSpeech();Object.values(screens).forEach(s=>s.classList.remove('active'));screens[name].classList.add('active');progressTrack.hidden=name!=='quiz';window.scrollTo(0,0);}

function takeFromRotation(key,count,pool=people){
  const ids=pool.map(p=>p.id);let remaining;
  try{remaining=JSON.parse(localStorage.getItem(key)||'[]').filter(id=>ids.includes(id));}catch{remaining=[];}
  const picked=[];
  while(picked.length<count){
    if(!remaining.length)remaining=shuffle(ids.filter(id=>!picked.includes(id)));
    const id=remaining.shift();if(!picked.includes(id))picked.push(id);
  }
  localStorage.setItem(key,JSON.stringify(remaining));
  return picked.map(id=>pool.find(p=>p.id===id));
}

function buildGame(){
  game=shuffle(takeFromRotation('hpsdLeaderRotation',8).map(person=>{
    const variant=person.questions[Math.floor(Math.random()*person.questions.length)];
    return {...variant,person,points:125,explain:person.fact,source:person.source};
  }));
}
function startGame(){buildGame();index=0;score=0;answered=false;show('quiz');renderQuestion();}
function renderQuestion(){
  answered=false;const q=game[index];
  document.getElementById('questionCount').textContent=`Question ${index+1} of 8`;
  document.getElementById('pointValue').textContent='125 points';
  document.getElementById('questionPhoto').src=q.person.photo;
  document.getElementById('questionPhoto').alt=`${q.person.name}, ${q.person.style}`;
  document.getElementById('questionName').textContent=q.person.name;
  document.getElementById('questionStyle').textContent='Featured artist';
  document.getElementById('questionCredit').textContent=`Photo: ${q.person.credit}`;
  document.getElementById('questionText').textContent=q.q;
  progressBar.style.width=`${(index/8)*100}%`;
  const box=document.getElementById('answers');box.innerHTML='';
  shuffle(q.a.map((text,i)=>({text,original:i}))).forEach(opt=>{const b=document.createElement('button');b.className='answer';b.textContent=opt.text;b.dataset.correct=String(opt.original===q.correct);b.addEventListener('click',()=>answer(b));box.appendChild(b);});
  document.getElementById('feedback').classList.remove('show');
}
function answer(selected){
  if(answered)return;answered=true;const q=game[index];const buttons=[...document.querySelectorAll('#answers .answer')];
  buttons.forEach(b=>{b.disabled=true;if(b.dataset.correct==='true')b.classList.add('correct');});
  const correct=selected.dataset.correct==='true';if(correct)score+=q.points;else selected.classList.add('incorrect');
  document.getElementById('feedbackTitle').textContent=correct?'Correct! +125':'Not quite—here is the connection.';
  document.getElementById('feedbackText').textContent=q.explain;
  document.getElementById('sourceLink').href=q.source;
  document.getElementById('nextButton').textContent=index===7?'See my score':'Next';
  const fb=document.getElementById('feedback');fb.classList.add('show');fb.focus();
}
function next(){if(!answered)return;if(index<7){index++;renderQuestion();}else finish();}
function finish(){
  progressBar.style.width='100%';document.getElementById('finalScore').textContent=score;
  const msg=score>=875?'Outstanding. You connected eight different artists with their contributions.':score>=625?'Strong work. You met eight different artists who shaped dance history.':'You met eight important artists. Replay to discover more of the full group.';
  document.getElementById('resultMessage').textContent=msg;show('result');
}

function startFamily(){const categories=['ballet','stage','modern','founders','spanish'];familyGame=shuffle(categories.map(category=>{const pool=people.filter(person=>person.category===category);return takeFromRotation(`hpsdFamilyRotation-${category}`,1,pool)[0];}));familyIndex=0;show('family');renderFamilyMeet();}
function speak(text,pauseButton){
  if(!('speechSynthesis' in window))return;
  stopSpeech();
  const voice=new SpeechSynthesisUtterance(text);voice.rate=.84;activeUtterance=voice;activePauseButton=pauseButton;
  pauseButton.disabled=false;pauseButton.textContent='⏸ Pause sound';pauseButton.setAttribute('aria-pressed','false');
  const finish=()=>{if(activeUtterance===voice){pauseButton.disabled=true;pauseButton.textContent='⏸ Pause sound';pauseButton.setAttribute('aria-pressed','false');activeUtterance=null;activePauseButton=null;}};
  voice.onend=finish;voice.onerror=finish;window.speechSynthesis.speak(voice);
}
function toggleSpeech(pauseButton){
  if(!('speechSynthesis' in window)||!activeUtterance)return;
  if(window.speechSynthesis.paused){window.speechSynthesis.resume();pauseButton.textContent='⏸ Pause sound';pauseButton.setAttribute('aria-pressed','false');}
  else{window.speechSynthesis.pause();pauseButton.textContent='▶ Resume sound';pauseButton.setAttribute('aria-pressed','true');}
}
function addSpeechButtons(container,text,hearLabel){
  const hear=document.createElement('button');hear.className='secondary';hear.textContent=`🔊 ${hearLabel}`;
  const pause=document.createElement('button');pause.className='secondary sound-toggle';pause.textContent='⏸ Pause sound';pause.disabled=true;pause.setAttribute('aria-pressed','false');
  if(!('speechSynthesis' in window)){hear.disabled=true;pause.disabled=true;hear.textContent='Sound unavailable';}
  hear.addEventListener('click',()=>speak(text,pause));pause.addEventListener('click',()=>toggleSpeech(pause));container.append(hear,pause);
}
function renderFamilyMeet(){
  stopSpeech();
  familyTarget=familyGame[familyIndex];document.getElementById('familyCount').textContent=`Artist ${familyIndex+1} of 5`;
  const stage=document.getElementById('familyStage');stage.innerHTML='';
  const card=document.createElement('div');card.className='meet-card';
  const img=document.createElement('img');img.className='meet-photo';img.src=familyTarget.photo;img.alt=familyTarget.name;
  const copy=document.createElement('div');copy.className='meet-copy';
  const label=document.createElement('p');label.className='eyebrow';label.textContent=familyTarget.style;
  const name=document.createElement('h2');name.textContent=familyTarget.name;
  const fact=document.createElement('p');fact.className='meet-fact';fact.textContent=familyTarget.fact;
  const credit=document.createElement('small');credit.className='photo-credit';credit.textContent=`Photo: ${familyTarget.credit}`;
  const move=document.createElement('div');move.className='move-cue';move.textContent=`Try it: ${familyTarget.move}`;
  const actions=document.createElement('div');actions.className='family-actions';
  const tried=document.createElement('button');tried.className='primary';tried.textContent='I tried the move';tried.addEventListener('click',renderFamilyMatch);
  addSpeechButtons(actions,`${familyTarget.name}. ${familyTarget.fact} ${familyTarget.move}`,'Hear it');actions.append(tried);copy.append(label,name,fact,move,credit,actions);card.append(img,copy);stage.appendChild(card);
}
function renderFamilyMatch(){
  stopSpeech();
  const distractor=shuffle(people.filter(p=>p.id!==familyTarget.id))[0];const choices=shuffle([familyTarget,distractor]);
  const stage=document.getElementById('familyStage');stage.innerHTML='';
  const title=document.createElement('h2');title.textContent='Who did you just meet?';
  const listen=document.createElement('div');listen.className='listen-actions';addSpeechButtons(listen,`Who did you just meet? Find ${familyTarget.name}.`,'Hear the question');
  const grid=document.createElement('div');grid.className='family-match';
  choices.forEach(person=>{const b=document.createElement('button');b.className='answer family-choice';b.dataset.correct=String(person.id===familyTarget.id);const img=document.createElement('img');img.src=person.photo;img.alt=person.name;const label=document.createElement('span');label.className='choice-label';label.textContent=person.name;b.append(img,label);b.addEventListener('click',()=>answerFamilyMatch(b));grid.appendChild(b);});
  stage.append(title,listen,grid);
}
function answerFamilyMatch(selected){
  const buttons=[...document.querySelectorAll('.family-choice')];if(buttons.some(b=>b.disabled))return;
  buttons.forEach(b=>{b.disabled=true;if(b.dataset.correct==='true')b.classList.add('correct');});
  const correct=selected.dataset.correct==='true';if(!correct)selected.classList.add('incorrect');
  const note=document.createElement('div');note.className='feedback show';note.tabIndex=-1;
  const heading=document.createElement('strong');heading.textContent=correct?'You found them!':'Good looking—here they are!';
  const fact=document.createElement('p');fact.className='family-fact';fact.textContent=familyTarget.fact;
  const row=document.createElement('div');row.className='feedback-footer';const spacer=document.createElement('span');const nextButton=document.createElement('button');nextButton.className='secondary';nextButton.textContent=familyIndex===familyGame.length-1?'See my stars':'Meet the next artist';nextButton.addEventListener('click',nextFamily);row.append(spacer,nextButton);note.append(heading,fact,row);document.getElementById('familyStage').appendChild(note);note.focus();
}
function lightFamilyStars(){
  starTimers.forEach(clearTimeout);starTimers=[];
  const stars=[...document.querySelectorAll('#familyStars span')];
  stars.forEach(star=>{star.textContent='☆';star.classList.remove('filled');});
  stars.forEach((star,i)=>starTimers.push(setTimeout(()=>{star.textContent='★';star.classList.add('filled');},i*140)));
}
function nextFamily(){if(familyIndex<familyGame.length-1){familyIndex++;renderFamilyMeet();}else{show('familyResult');lightFamilyStars();}}

document.getElementById('startButton').addEventListener('click',startGame);
document.getElementById('familyButton').addEventListener('click',startFamily);
document.getElementById('nextButton').addEventListener('click',next);
document.getElementById('replayButton').addEventListener('click',startGame);
document.getElementById('familyReplay').addEventListener('click',startFamily);
document.getElementById('familyMain').addEventListener('click',startGame);
