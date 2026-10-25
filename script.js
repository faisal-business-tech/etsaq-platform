const departments=[
{name:'تقنيات الأعمال',programs:['تقنيات الأعمال المكتبية','تقنيات محاسبية']},
{name:'الحاسب وتقنية المعلومات',programs:['تقنية البرمجة وتطوير … (الاسم الكامل قيد التحقق)']},
{name:'التقنية المدنية والمعمارية',programs:['تقنية الإنشاءات المعمارية','تقنية الإنشاءات المدنية']},
{name:'التقنية الكهربائية',programs:['تقنية القوى الكهربائية','تقنية الآلات الكهربائية']},
{name:'تقنية المساحة',programs:['تقنية المساحة']},
{name:'التقنية الميكانيكية',programs:['تقنية المحركات والمركبات','تقنية التصنيع']}
];
const grid=document.getElementById('departmentGrid');departments.forEach(d=>{const card=document.createElement('article');card.className='dept-card';const count=document.createElement('span');count.className='count';count.textContent=d.programs.length+' برنامج';const h=document.createElement('h3');h.textContent=d.name;const ul=document.createElement('ul');d.programs.forEach(p=>{const li=document.createElement('li');li.textContent='◈  '+p;ul.appendChild(li)});card.append(count,h,ul);grid.appendChild(card)});
const labels={home:'نظرة عامة',departments:'الأقسام والبرامج',courses:'المقررات والتوصيفات',review:'الفحص الذكي',market:'مواءمة سوق العمل',reports:'المؤشرات والتقارير'};
function navigate(view){if(!labels[view])return;document.querySelectorAll('.view').forEach(e=>e.classList.toggle('active',e.id===view));document.querySelectorAll('.nav-item').forEach(e=>e.classList.toggle('active',e.dataset.view===view));document.getElementById('crumb').textContent=labels[view];document.getElementById('sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});history.replaceState(null,'','#'+view)}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));if(labels[location.hash.slice(1)])navigate(location.hash.slice(1));
