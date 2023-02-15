function formValues(){
    var html1,css1,java1,male1,female1;
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const  contact=document.getElementById('contact').value;
    const  url=document.getElementById('url').value;
    const java=document.getElementById('j').checked;
    const html=document.getElementById('h').checked;
    const css=document.getElementById('c').checked;
    const male=document.getElementById("male").checked;
    const female=document.getElementById("female").checked;
   
    const t1=document.getElementById("t2");
    const tr=document.createElement("tr");
    const th=document.createElement("td");
    const p1=document.createElement("p");
    p1.append(name);
    th.append(p1);
    if(male)
    {
        const p7=document.createElement("p");
        p7.append("MALE");
        th.append(p7);
    }
    if(female)
    {
        const p8=document.createElement("p");
        p8.append("FEMALE");
        th.append(p8);
    }
    const p2=document.createElement("p");
    
    p2.append(email);
    th.append(p2);
    const p3=document.createElement("p");
    p3.append(contact);
    th.append(p3);
    if(java)
    {
        const p4=document.createElement("p");
        p4.append("JAVA");
        th.append(p4);
    }
    if(html)
    {
        const p5=document.createElement("p");
        p5.append("HTML");
        th.append(p5);
    }
    if(css)
    {
        const p6=document.createElement("p");
        p6.append("CSS");
        th.append(p6);
    }
    th.colSpan=2;
    tr.appendChild(th);
    const td=document.createElement("td");
    const img=document.createElement("img");
    const url1="data:image/jpeg;base64,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"
    img.src=url1;
    td.appendChild(img);
    tr.appendChild(td);
    t1.appendChild(tr);

    
}
function clear(){
    const name=document.getElementById('name')
    const email=document.getElementById('email');
    const  contact=document.getElementById('contact');
    const  url=document.getElementById('url');
    const java=document.getElementById('j');
    const html=document.getElementById('h');
    const css=document.getElementById('c');
    const male=document.getElementById("male");
    const female=document.getElementById("female");
    name.value=""
    email.value="";
    contact.value="";
    url.value="";
    java.checked=false;
    html.checked=false;
    css.checked=false;
    male.checked=false;
    female.checked=false;

}
document.getElementById("mybtn").addEventListener("click",formValues)
document.getElementById("mybtn2").addEventListener("click",clear)
