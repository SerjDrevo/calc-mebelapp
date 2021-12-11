const
cSosnaAB18 = 1640, // Цельноламельная сосна 18мм А/В
cSosnaBC18 = 1385, // Цельноламельная сосна 18мм В/С
cTermoSosnaAB18 = 2110, // Цельноламельная термососна 18мм А/В
cSosnaAB30 = 2060, // Цельноламельная сосна 30мм А/В
cSosnaBC30 = 1860, // Цельноламельная сосна 30мм В/С
cSosnaAB38 = 2820, // Цельноламельная сосна 38мм А/В
cSosnaBC38 = 2190, // Цельноламельная сосна 38мм В/С
cTermoSosnaAB38 = 3360, // Цельноламельная термососна 38мм А/В
cOlhaAB18 = 1640, // Цельноламельная ольха 18мм А/В
cOlhaAB38 = 2820, // Цельноламельная ольха 38мм А/В
cYuasenAB18 = 2640, // Цельноламельный ясень 18мм А/В
cYuasenAB38 = 3730, // Цельноламельный ясень 38мм А/В
cTermoYuasenAB18 = 3940, // Цельноламельный термоясень 18мм А/В
cTermoYuasenAB38 = 5590, // Цельноламельный термоясень 38мм А/В
cDubAB18 = 3650, // Цельноламельный дуб 18мм А/В
cDubAB38 = 5320, // Цельноламельный дуб 38мм А/В
cLipaAB18 = 1640, // Цельноламельная липа 18мм А/В
cLipaAB38 = 2820, // Цельноламельная липа 38мм А/В
cBukCleanListAB18 = 2450, // Цельноламельный бук,лиственница 18мм А/В
cBukCleanListAB38 = 3660, // Цельноламельный бук,лиственница 38мм А/В
//
sSosnaAB18 = 1230, // Срощеная сосна 18мм А/В
sSosnaBC18 = 1110, // Срощеная сосна 18мм В/С
sSosnaAB30 = 1560, // Срощеная сосна 30мм А/В
sSosnaBC30 = 1490, // Срощеная сосна 30мм В/С
sSosnaAB38 = 2100, // Срощеная сосна 38мм А/В
sSosnaBC38 = 1740, // Срощеная сосна 38мм В/С
sLipaAB18 = 1230, // Срощеная липа 18мм А/В
sLipaAB38 = 2100, // Срощеная липа 38мм А/В
sOlhaAB18 = 1230, // Срощеная ольха 18мм А/В
sOlhaAB38 = 2100, // Срощеная ольха 38мм А/В
sYuasenAB18 = 1880, // Срощеный ясень 18мм А/В
sYuasenAB38 = 2660, // Срощеный ясень 38мм А/В
sDubAB18 = 2630, // Срощеный дуб 18мм А/В
sDubAB38 = 3810, // Срощеный дуб 38мм А/В
sBukCleanListAB18 = 1830, // Срощеный бук,лиственница 18мм А/В
sBukCleanListAB38 = 2860; // Срощеный бук,лиственница 38мм А/В





function calc2(){
    const species = document.querySelector('.type__species');
    const construction = document.querySelector('.construction__select');
    const sort = document.querySelector('.sort__select');
    const thick = document.querySelector('.thick__select');
    const width2 = document.querySelector('.width2__input');
    const length2 = document.querySelector('.length2__input');
    const quantity2 = document.querySelector('.quantity2__input');
    const btnFunc =  document.querySelector('.btn__func');
    let totalTable = document.querySelector('.result__body--total');
    const kormCheckbox = document.querySelector('.korm__checkbox');
    
    let speciesVar , constructionVar,sortVar,thickVar,widthVar,lengthVar,quantityVar, 
    m2, perimetr,cost, totalCost,
    countM2=0,countQ=0,countT=0; 
    
    species.addEventListener('change',() =>{
        speciesVar = species.options[species.selectedIndex].text;
        if(speciesVar !=="Сосна"){
            sort.options[1].style.display="none";
            sort.value = sort.options[0].value;
        }else{
            sort.options[1].style.display="block";
        }
        if(speciesVar == "Термо-сосна" || speciesVar == "Термо-ясень"){
            construction.options[1].style.display="none";
            construction.value = construction.options[0].value;
        }else{
            construction.options[1].style.display="block";
        }
      
       
    });
  
    function   chooseSort(){
        if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sSosnaAB18;
        }else if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "В/С" && thickVar == "18"){
            cost = sSosnaBC18;
        }else if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "30"){
            cost = sSosnaAB30;
        }else if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "В/С" && thickVar == "30"){
            cost = sSosnaBC30;
        }else if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sSosnaAB38;
        }else if(speciesVar == "Сосна" && constructionVar == "Срощеная" && sortVar == "В/С" && thickVar == "38"){
            cost = sSosnaBC38;
        }else if(speciesVar == "Липа" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sLipaAB18;
        }else if(speciesVar == "Липа" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sLipaAB38;
        }else if(speciesVar == "Ольха" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sOlhaAB18;
        }else if(speciesVar == "Ольха" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sOlhaAB38;
        }else if(speciesVar == "Ясень" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sYuasenAB18;
        }else if(speciesVar == "Ясень" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sYuasenAB38;
        }else if(speciesVar == "Дуб" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sDubAB18;
        }else if(speciesVar == "Дуб" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sDubAB38;
        }else if(speciesVar == "Бук" || speciesVar == "Лиственница" || speciesVar == "Клён" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "18"){
            cost = sBukCleanListAB18;
        }else if(speciesVar == "Бук" || speciesVar == "Лиственница" || speciesVar == "Клён" && constructionVar == "Срощеная" && sortVar == "А/В" && thickVar == "38"){
            cost = sBukCleanListAB38;
        }
        //
        else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cSosnaAB18;
        }else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "В/С" && thickVar == "18"){
            cost = cSosnaBC18;
        }else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "30"){
            cost = cSosnaAB30;
        }else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "В/С" && thickVar == "30"){
            cost = cSosnaBC30;
        }else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cSosnaAB38;
        }else if(speciesVar == "Сосна" && constructionVar == "Цельноламельная" && sortVar == "В/С" && thickVar == "38"){
            cost = cSosnaBC38;
        }else if(speciesVar == "Термо-сосна" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cTermoSosnaAB18;
        }else if(speciesVar == "Термо-сосна" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cTermoSosnaAB38;
        }else if(speciesVar == "Липа" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cLipaAB18;
        }else if(speciesVar == "Липа" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cLipaAB38;
        }else if(speciesVar == "Ольха" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cOlhaAB18;
        }else if(speciesVar == "Ольха" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cOlhaAB38;
        }else if(speciesVar == "Ясень" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cYuasenAB18;
        }else if(speciesVar == "Ясень" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cYuasenAB38;
        }else if(speciesVar == "Термо-ясень" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cTermoYuasenAB18;
        }else if(speciesVar == "Термо-ясень" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cTermoYuasenAB38;
        }else if(speciesVar == "Дуб" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cDubAB18;
        }else if(speciesVar == "Дуб" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cDubAB38;
        }else if(speciesVar == "Бук" || speciesVar == "Лиственница" || speciesVar == "Клён" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "18"){
            cost = cBukCleanListAB18;
        }else if(speciesVar == "Бук" || speciesVar == "Лиственница" || speciesVar == "Клён" && constructionVar == "Цельноламельная" && sortVar == "А/В" && thickVar == "38"){
            cost = cBukCleanListAB38;
        }else{
            alert("Нет такого щита в калькуляторе");
        }
    }

    btnFunc.addEventListener('click', (e) =>{
        e.preventDefault;
        speciesVar = species.options[species.selectedIndex].text;
        constructionVar =  construction.options[construction.selectedIndex].text;
        sortVar = sort.options[sort.selectedIndex].text;
        thickVar =  thick.options[thick.selectedIndex].text;
        widthVar =  width2.value; 
        lengthVar = length2.value;
        quantityVar = quantity2.value;
    
        if(widthVar == ""){
            document.querySelector('.block__error--width').style.display ="block";
        }else{
            document.querySelector('.block__error--width').style.display ="none";
        }
        if(lengthVar === ""){
            document.querySelector('.block__error--length').style.display ="block";
        }else{
            document.querySelector('.block__error--length').style.display ="none";
        }
        if(quantityVar === ""){
            document.querySelector('.block__error--quantity').style.display ="block";
        }else{
            document.querySelector('.block__error--quantity').style.display ="none";
        }
        
        if(widthVar !== "" && lengthVar!== "" && quantityVar!== "" ){

            document.querySelector('.block__error').style.display ="none";
            chooseSort();

            let m2 = +((widthVar * 0.001 ) *(lengthVar * 0.001) *(+quantityVar));
            let costD;
            if(widthVar < 80 || widthVar > 800 ){
                costD = cost + (cost*0.3);
            }else{
                costD = cost;
            }
         
         
            perimetr = +(((widthVar / 1000 ) + (lengthVar / 1000))*2*(+quantityVar));
              
            if (kormCheckbox.checked ){
                totalCost = +((costD*m2)+(perimetr*10));
            }else{
                totalCost = +((costD*m2)+(perimetr*10));
            }
           

            let headerTable = document.querySelector('.result__header');
            headerTable.style.display = "table-row";
            resultRow = document.createElement('tr');
            resultRow.classList.add('result__body');
            resultRow.classList.add('result__content');
            resultRow.innerHTML = `
            <td class="body__block result__species">${speciesVar}</td>
            <td class="body__block result__construction">${constructionVar}</td>
            <td class="body__block result__sort">${sortVar}</td>
            <td class="body__block result__thick">${thickVar}</td>
            <td class="body__block result__width">${widthVar}</td>
            <td class="body__block result__length">${lengthVar}</td>
            <td class="body__block result__quantity">${quantityVar}</td>
            <td class="body__block result__m2">${m2.toFixed(3)}</td>
            <td class="body__block result__totalCost">${costD.toFixed(2)}</td>
            <td class="body__block result__totalCost">${totalCost.toFixed(2)}</td>
            <td class="body__block result__delete-row">удалить</td> 
            `;
            totalTable.before(resultRow);

            countM2 += +m2;
            countQ += +quantityVar;
            countT += +totalCost;

            totalTable.style.display ="table-row";
            totalTable.innerHTML = `
            <td class="body__block result__species">-</td>
            <td class="body__block result__construction">-</td>
            <td class="body__block result__sort">-</td>
            <td class="body__block result__thick">-</td>
            <td class="body__block result__width">-</td>
            <td class="body__block result__length">-</td>
            <td class="body__block result__quantity">${countQ}</td>
            <td class="body__block result__m2">${countM2.toFixed(3)}</td>
            <td class="body__block result__totalCost">-</td>
            <td class="body__block result__totalCost">${countT.toFixed(2)}</td>
            <td class="body__block result__delete-row"></td> 
            `;

            let deleteBtn = document.querySelectorAll('.result__delete-row');
            for (var i = 0, len = deleteBtn.length; i < len; i++) {
                deleteBtn[i].onclick = function() {
               
                    var cols = this.parentNode.querySelectorAll('td');
                        
                    countQ -= + cols[6].textContent;
                    console.log(cols[6].textContent);
                    countM2 -= + cols[7].textContent;
                    countT -= + cols[9].textContent;
                   
            
                    totalTable.innerHTML = `
                        <td class="body__block result__species">Итого:</td>
                        <td class="body__block result__construction">-</td>
                        <td class="body__block result__sort">-</td>
                        <td class="body__block result__thick">-</td>
                        <td class="body__block result__width">-</td>
                        <td class="body__block result__length">-</td>
                        <td class="body__block result__quantity">${countQ}</td>
                        <td class="body__block result__m2">${countM2.toFixed(3)}</td>
                        <td class="body__block result__totalCost">-</td>
                        <td class="body__block result__totalCost">${countT.toFixed(2)}</td>
                        <td class="body__block result__delete-row"></td> `;
        
                    this.parentNode.remove();
                };
            }
        }
    });
    }

calc2();