import React from 'react'

export default function Accordian() {

    const data = [
        {
            title: 'Accordian1',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor non recusandae, illo voluptates culpa similique velit rerum quisquam delectus aperiam numquam corrupti odio voluptatum nihil minima ea ipsam asperiores odit aspernatur harum repellendus? Optio placeat ipsa eos amet minima facere, sunt esse quasi atque ullam vel saepe dolorum qui at sequi. Corporis architecto porro numquam voluptatum aperiam assumenda animi dolores quod laboriosam enim, eaque rem."
        },
        {
            title: 'Accordian2',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor non recusandae, illo voluptates culpa similique velit rerum quisquam delectus aperiam numquam corrupti odio voluptatum nihil minima ea ipsam asperiores odit aspernatur harum repellendus? Optio placeat ipsa eos amet minima facere, sunt esse quasi atque ullam vel saepe dolorum qui at sequi. Corporis architecto porro numquam voluptatum aperiam assumenda animi dolores quod laboriosam enim, eaque rem."
        },
        {
            title: 'Accordian3',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor non recusandae, illo voluptates culpa similique velit rerum quisquam delectus aperiam numquam corrupti odio voluptatum nihil minima ea ipsam asperiores odit aspernatur harum repellendus? Optio placeat ipsa eos amet minima facere, sunt esse quasi atque ullam vel saepe dolorum qui at sequi. Corporis architecto porro numquam voluptatum aperiam assumenda animi dolores quod laboriosam enim, eaque rem."
        },
        {
            title: 'Accordian4',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor non recusandae, illo voluptates culpa similique velit rerum quisquam delectus aperiam numquam corrupti odio voluptatum nihil minima ea ipsam asperiores odit aspernatur harum repellendus? Optio placeat ipsa eos amet minima facere, sunt esse quasi atque ullam vel saepe dolorum qui at sequi. Corporis architecto porro numquam voluptatum aperiam assumenda animi dolores quod laboriosam enim, eaque rem."
        }
    ];

    return (
        <div className='wrapper'>
            <div className="accordian">
                {data.map((item, i) => (
                    <div>
                        <div className="items">
                            <h2 className='title'> {item.title}</h2>
                            <span>+</span>
                        </div>
                        <div className="content">{item.content}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}
