function Heading(){
    return (
        <h1 style={{textAlign:"center"}}>Learn Web Development</h1>
    )
}
function Para1(){
    return (
       <div>
         <p style={{fontSize:25}}>Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.</p>
       </div>
    )
}
function Para2(){
    return (
        <div>
            <p style={{fontSize:25}}>The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>
        </div>
    )
}
function Para3(){
    return (
        <div>
            <p style={{fontSize:25}}>If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
        </div>
    )
}


function MyApp(){
    return (
        <>
        <Heading/>
        <Para1/>
        <Para2/>
        <Para3/>
        </>
    )
}
ReactDOM.render(<MyApp/>,document.querySelector('#root'));

