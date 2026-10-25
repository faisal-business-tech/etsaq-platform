const departments=[
{name:'تقنيات الأعمال',programs:['تقنيات الأعمال المكتبية','تقنيات محاسبية']},
{name:'الحاسب وتقنية المعلومات',programs:['تقنية البرمجة وتطوير … (الاسم الكامل قيد التحقق)']},
{name:'التقنية المدنية والمعمارية',programs:['تقنية الإنشاءات المعمارية','تقنية الإنشاءات المدنية']},
{name:'التقنية الكهربائية',programs:['تقنية القوى الكهربائية','تقنية الآلات الكهربائية']},
{name:'تقنية المساحة',programs:['تقنية المساحة']},
{name:'التقنية الميكانيكية',programs:['تقنية المحركات والمركبات','تقنية التصنيع']}
];
const grid=document.getElementById('departmentGrid');
const details=document.getElementById('programDetails');
function clearDetails(){details.hidden=true;details.replaceChildren();grid.hidden=false;}
function addText(tag,text,cls){const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;return e;}
function showProgram(dept,program){
 grid.hidden=true;details.hidden=false;details.replaceChildren();
 const back=document.createElement('button');back.className='back-link';back.textContent='← العودة إلى الأقسام والبرامج';back.addEventListener('click',()=>{clearDetails();details.scrollIntoView({behavior:'smooth',block:'start'});});details.append(back);
 details.append(addText('div',dept,'overline'),addText('h2',program),addText('p','بطاقة البرنامج — عرض تجريبي. لم تُستخرج الخطة التفصيلية والمقررات بعد، ولا يُعد هذا العرض توثيقًا معتمدًا.','program-intro'));
 const stages=document.createElement('div');stages.className='program-stages';
 const steps=[['01','بيانات البرنامج','القسم والتخصص والمرجع الأكاديمي'],['02','الخطة التدريبية','المستويات والفصول والساعات'],['03','المقررات','رموز المقررات وأسماؤها ومتطلباتها'],['04','التوصيفات','المرفقات ونتائج المراجعة']];
 steps.forEach(([num,title,desc])=>{const item=document.createElement('article');item.className='stage-card';item.append(addText('span',num,'stage-number'),addText('h3',title),addText('p',desc));stages.append(item)});details.append(stages);
 const heading=addText('h3','الخطة التدريبية والمستويات','program-subtitle');details.append(heading);
 const notice=addText('p','سيُعرض هنا توزيع المقررات حسب المستوى بعد استخراج البيانات من ملف توصيفات البرامج ومراجعتها. لا توجد مقررات أو مستويات موثقة منشورة في هذه النسخة.','program-notice');details.append(notice);
 const empty=document.createElement('div');empty.className='program-empty';empty.append(addText('strong','بانتظار إدراج الخطة المعتمدة'),addText('p','ستتضمن النسخة التالية جدول المقررات: الرمز، الاسم، المستوى، الساعات، المتطلبات السابقة، ومرجع الصفحة.'));details.append(empty);
 details.scrollIntoView({behavior:'smooth',block:'start'});
}
departments.forEach(d=>{const card=document.createElement('article');card.className='dept-card';const count=addText('span',d.programs.length+' برنامج','count');const h=addText('h3',d.name);const ul=document.createElement('ul');d.programs.forEach(p=>{const li=document.createElement('li');const btn=document.createElement('button');btn.type='button';btn.className='program-link';btn.textContent='◈  '+p;btn.addEventListener('click',()=>showProgram(d.name,p));li.append(btn);ul.append(li)});card.append(count,h,ul);grid.appendChild(card)});
const labels={home:'نظرة عامة',departments:'الأقسام والبرامج',courses:'المقررات والتوصيفات',review:'الفحص الذكي',market:'مواءمة سوق العمل',reports:'المؤشرات والتقارير'};
function navigate(view){if(!labels[view])return;if(view==='departments')clearDetails();document.querySelectorAll('.view').forEach(e=>e.classList.toggle('active',e.id===view));document.querySelectorAll('.nav-item').forEach(e=>e.classList.toggle('active',e.dataset.view===view));document.getElementById('crumb').textContent=labels[view];document.getElementById('sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});history.replaceState(null,'','#'+view)}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));if(labels[location.hash.slice(1)])navigate(location.hash.slice(1));
