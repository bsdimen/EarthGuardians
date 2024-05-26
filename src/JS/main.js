function changeContent(target) {
    
    var title = document.getElementById('invTit');
    var para = document.getElementById('invPara');
    
    var consEff = document.getElementById('consEff');
    var cliAct = document.getElementById('cliAct');
    var susLiv = document.getElementById('susLiv');
    
    console.log("Title element:", title);
    console.log("Paragraph element:", para);

    if (target === "consEff") {
        title.innerHTML = "Conservation Efforts";
        para.innerHTML = "We work tirelessly to protect and preserve our natural resources, including forests, oceans, and wildlife habitats. Through initiatives such as reforestation projects, beach clean-ups, and wildlife conservation programs, we strive to restore and maintain the delicate balance of ecosystems worldwide.";
        
        consEff.classList.add("tit-active");
        cliAct.classList.remove("tit-active");
        susLiv.classList.remove("tit-active");
        
    }
    if (target === "cliAct") {
        title.innerHTML = "Climate Action";
        para.innerHTML = "Climate change is one of the most pressing challenges of our time. We are dedicated to reducing greenhouse gas emissions, promoting renewable energy sources, and advocating for policies that address the root causes of climate change. Join us in our efforts to combat this global crisis and build a more resilient future for generations to come.";
        
        consEff.classList.remove("tit-active");
        cliAct.classList.add("tit-active");
        susLiv.classList.remove("tit-active");
        
    }
    if (target === "susLiv") {
        title.innerHTML = "Sustainable Living";
        para.innerHTML = "Small changes in our daily habits can make a big difference in protecting the environment. From reducing single-use plastics to practicing energy conservation at home, we provide tips, resources, and educational materials to help individuals and families adopt more sustainable lifestyles.";
        
        consEff.classList.remove("tit-active");
        cliAct.classList.remove("tit-active");
        susLiv.classList.add("tit-active");
        
    }
    console.log('hello there');
}