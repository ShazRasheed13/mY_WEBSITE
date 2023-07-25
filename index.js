document.querySelector('.cross').style.display="none";
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display="inline";
        document.querySelector('.cross').style.display="none";
    }
    else{
        document.querySelector('.ham').style.display="none";
        setTimeout(()=>{
            document.querySelector('.cross').style.display="inline";
        },300)
        
    }
})


card1.addEventListener('mouseenter', function() {
    img1.src="images/SJEC.jpg"
    // Perform actions when the mouse enters the element
  });
  
  card1.addEventListener('mouseleave', function() {
    img1.src="images/SJEC1.jpg"
    // Perform actions when the mouse enters the element
  });
  
  card2.addEventListener('mouseenter', function() {
    img2.src="images/aloy1.jpg"
    // Perform actions when the mouse enters the element
  });
  
  card2.addEventListener('mouseleave', function() {
    img2.src="images/aloy.jpg"
    // Perform actions when the mouse enters the element
  });
  
  card3.addEventListener('mouseenter', function() {
      img3.src="images/jamiya1.jpg"
      // Perform actions when the mouse enters the element
    });
  
    card3.addEventListener('mouseleave', function() {
      img3.src="images/Jamiya.png"
      // Perform actions when the mouse enters the element
    });

    // projects

    one.addEventListener('click', function() {
      a.hidden=false
      // sign.src="documents/New_sign.GIF"
    });


    
    
    three.addEventListener('click', function() {

      aa.hidden=false
      // corona.src="images/corona2.gif"
      
    });
    
    close1.addEventListener('click', function() {
      a.hidden=true
      sign.src="images/sign.png"
    });
    
    close3.addEventListener('click', function() {
      aa.hidden=true
      corona.src="images/gocorona.jpg"
    });

    let morre=document.getElementsByClassName('.container_pro .more')
    more.addEventListener('click', function() {
      other_pro.hidden=false
      more.style.backgroundColor="yellow"
      // corona.src="images/gocorona.jpg"
    });
// const nintyElement = document.querySelector('.skills');

cls_pro
more.addEventListener('click', function() {
  
  other_pro.hidden=false
  more.style.cursor="pointer"
  cls.style.cursor="pointer"
  
  // corona.src="images/gocorona.jpg"
});

cls_pro.addEventListener('click', function() {
  other_pro.hidden=true
  cls_pro.style.cursor="pointer"
  more.style.backgroundColor="white"
  // corona.src="images/gocorona.jpg"
});






