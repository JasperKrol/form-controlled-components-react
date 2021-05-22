import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("")
    const [ageValue, setAgeValue] = React.useState("0")
    const [detailsValues, setDetailsValues] = React.useState("")
    const [commentValue, setCommentValues] = React.useState("")
    // console.log(nameValue, ageValue, detailsValues, commentValue)

    // functie maken die op event reageert en alle waardes console logt
        // op de form, hier zet je niet een functie op maar de {statefunctie}

    function submitAndLogData (e) {
        e.preventDefault();
        console.log(nameValue, ageValue, detailsValues, commentValue)
    }

    return (
        <form
        onSubmit={submitAndLogData}
        >
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        name="details-name"
                        id="details-name"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                </label>

                <label htmlFor="details-age">
                    Age:
                    <input
                        type="text"
                        name="details-age"
                        id="details-age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(parseInt(e.target.value))}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="details-information">
                    Hoe heb je dit recept gevonden?
                    <select
                        name="found-through"
                        id="details-information"
                        value={detailsValues}
                        onChange={(e) => setDetailsValues(e.target.value)}

                    >
                        <option value="google">Google</option>
                        <option value="friend">A Friend</option>
                        <option value="adds">Advertisement</option>
                        <option value="else">Else</option>
                    </select>
                </label>

                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        name="recipe-comments"
                        id="recipe-comments"
                        cols="30"
                        rows="5"
                        placeholder="Wat vond je van het recept?"
                        value={commentValue}
                        onChange={(e) => setCommentValues(e.target.value)}
                    >
                    </textarea>
                </label>

                <button type="submit">Versturen</button>
            </fieldset>
        </form>
    );
}

export default App;
