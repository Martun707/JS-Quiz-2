let questions = [
    {
    id: 1,   
    title: "Function type. What will be the result of the following code?  console.log(typeof function(){})",
    
    a:"  null ",
    b:"  string ",
    c:"  function ",
    d:"  undefined ",
  
    current:"c"
    
    },
    {
        id: 2,        
        title: "What is the result.   3 + 2 + '7'?",
        
        a:"  327 ",
        b:"  57 ",
        c:"  12 ",
        d:"  32+7",

    current:"b"
        
    },
    {
        id: 3,        
        title: "Data types. What will be the result of the following code?: console.log(typeof null)",
  
         a:"  object ",
         b:"  NaN ",
         c:"  null ",
         d:"  undefined ",
  
        current:"a"
       
    },
    {
        id: 4,       
        title: "Calling an empty function. What will be the result of the following code?:    console.log((function(){})())",         

    
   
        a:"  true ",
        b:"  undefined ",
        c:"  false ",
        d:"  null ",

    current:"b"
        
    },
]

let questioConfig={
    i:0,
    quiz_answers:document.querySelector('.quiz_answers'),
    quiz_question:document.querySelector('.quiz_question'),
    popup_button:document.querySelector('.popup_button'),
    popup_progress_item:document.querySelectorAll('.popup_progress-item'),
    refresh_button:document.querySelector('.refresh_button'),
    result:{
        succsess:0,
        worning:0
    }
}

questions=randomArray(questions)

function randomArray(array){
    return(
        array.sort(()=>0.5-Math.random())
    )
}

function startQuestions(){

    questioConfig.popup_button.classList.add('d-none')
    questioConfig.quiz_answers.innerHTML=''
    if(questioConfig.i===4){
        questioConfig.quiz_answers.innerHTML=`
        <label class="container">succsess:${questioConfig.result.succsess}</label>
        <label class="container">worning:${questioConfig.result.worning}</label>
         
        `
       questioConfig.refresh_button.classList.remove('d-none')
       return; 
   }
   questioConfig.popup_progress_item[questioConfig.i].classList.add('popup_progress-item_active')
   if(questioConfig.i>0){
    questioConfig.popup_progress_item[questioConfig.i-1].classList.remove('popup_progress-item_active')
   }

    let q=questions[questioConfig.i]
    questioConfig.quiz_question.innerHTML=q.title
    let array=['a','b','c','d']

    array.forEach(res=>{
        questioConfig.quiz_answers.innerHTML+=`
        <label class="container">${q[res]}
            <input type="radio" name="answers" value="${res}" class="quiz_input">  
            <span class="checkmark"></span>
        </label>
        `
    })
    questioConfig.quiz_input=document.querySelectorAll('.quiz_input')
    answerfunc()
}


function answerfunc(){
    questioConfig.quiz_input.forEach(tag=>{
        tag.addEventListener('change',function(e){
            console.log(e.target.value)
            questioConfig.popup_button.classList.remove('d-none')
            questioConfig.selectAnswer=e.target.value
            
        })
    })
    
}


    questioConfig.popup_button.addEventListener('click', function(){
        if(questions[questioConfig.i].current===questioConfig.selectAnswer){
            console.log('ok')
            questioConfig.result.succsess++
        }else{
            console.log('worning')
            questioConfig.result.worning++
        }
        questioConfig.i++
        startQuestions()
    })


    questioConfig.refresh_button.addEventListener('click',function(){
        questioConfig.popup_progress_item[questioConfig.i-1].classList.remove('popup_progress-item_active')
        questioConfig.refresh_button.classList.add('d-none')
        questions=randomArray(questions)
        questioConfig.result.succsess=0
        questioConfig.result.worning=0
        questioConfig.i=0
        startQuestions()
    })