import React, {useEffect, useState} from 'react';

const Search = () => {

    const [term, setTerm] = useState('');

    console.log('I RUN WITH EVERY RENDER')

    useEffect(() => {
        //console.log('I ONLY RUN ONCE')
        console.log('I RUN AFTER EVERY RUNDER AND AT INITIAL RENDER')
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
        </div>
    );

}

export default Search;