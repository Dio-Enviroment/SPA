let buts=[document.getElementById("hom"),
his=document.getElementById("his"),
gas=document.getElementById("gas"),
tur=document.getElementById("tur"),
asi=document.getElementById("asi")];

let from=0,
to=0,
target=buts[0];

for (const key in buts) {
    const but = buts[key];
    but.addEventListener("click",(e)=>{
        from=to;
        e.target.className="nav-container-select";
        switch (e.target.value) {
            case "Home":
                to=0;
                break;

            case "Bibliografía":
                to=-25;
                break;
            
            case "Trabajos":
                to=-50;
                break;
            
        }
        document.documentElement.style.setProperty('--start-animation', `${from}%`);
        document.documentElement.style.setProperty('--end-animation', `${to}%`);
        asi.style.animation = 'none';
        asi.offsetHeight; 
        asi.style.animation = null; 
    });
}