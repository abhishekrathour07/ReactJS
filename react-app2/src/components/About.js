import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="accordion mx-2 my-2" id="accordionExample"  >
                <div className="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            What TextWorkers can do? 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>It works with the different text element </strong> Basically it converted the the txt into lowerCase , UpperCasse , remove extra spaces ,clear the text from th textbox , Copy all the text from th clipboard and many more....  <code>.You will Love ,when use it </code>, It basically help in daily life.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>To change the background color .</strong> switch one tab to another tab<code>without reloading the page</code>,Which makes page mor faster then previos reloaded pages.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='black'?'#13466e':'white',color:props.mode==='black'?'white':'black',}}>
                            Aim of TextWorkers
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>To solve the daily life problem.</strong>It is helping the individuals to perform some basic operation and you can find very opertion on a single website <code>.one page-many works</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
