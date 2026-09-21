// Demo fixtures only. Replace geometry, records and status together with client material.
window.planData = {
  quarters: [
    { id:'nk', name:'Николо-Корма', description:'Знакомство с территорией села Николо-Корма.', price:'от 45 000 ₽/сотка', bounds:[40,100,270,310] },
    { id:'dg', name:'Дегтярицы', description:'Территория поблизости от Высоковского бора и Волги.', price:'от 70 000 ₽/сотка', bounds:[335,100,270,310] },
    { id:'ct', name:'Центральная часть', description:'Предложения в центральной части проекта.', price:'Цена уточняется', bounds:[630,100,230,310] }
  ],
  plots: [
    {id:'ДЕМО-01',quarter:'nk',area:10,status:'free',pricePerSotka:null,total:null,rect:[70,175,90,85]},
    {id:'ДЕМО-02',quarter:'nk',area:12,status:'free',pricePerSotka:null,total:null,rect:[185,175,90,85]},
    {id:'ДЕМО-03',quarter:'nk',area:14,status:'sold',pricePerSotka:null,total:null,rect:[70,285,205,80]},
    {id:'ДЕМО-04',quarter:'dg',area:15,status:'free',pricePerSotka:null,total:null,rect:[365,175,205,85]},
    {id:'ДЕМО-05',quarter:'dg',area:11,status:'sold',pricePerSotka:null,total:null,rect:[365,285,205,80]},
    {id:'ДЕМО-06',quarter:'ct',area:16,status:'sold',pricePerSotka:null,total:null,rect:[660,175,170,190]}
  ]
};
