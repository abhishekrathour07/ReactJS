import React from 'react'

export default function About(props) {
    return (
        <div>
            <div class="accordion" id="accordionExample"  >
                <div class="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            What TextWorkers can do? 
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>It works with the different text element </strong> Basically it converted the the txt into lowerCase , UpperCasse , remove extra spaces ,clear the text from th textbox , Copy all the text from th clipboard and many more....  <code>.You will Love ,when use it </code>, It basically help in daily life.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
