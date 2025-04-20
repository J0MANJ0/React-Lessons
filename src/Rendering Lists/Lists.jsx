const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
}

import React, { Fragment } from 'react'

const Lists = () => {
    const listItems = people.map((person, i) =>
        <>
            <li key={person.id}>
                {person.name} : {person.profession}
            </li>
        </>
    )
    const chemists = people.filter(chem => chem.profession === "chemist")
    return (
        <div>
            <ul>
                {listItems}
                <h2>Chemists:</h2>
                {chemists.map(chem => <li key={`${chem.id + 50}`}>{chem.name}</li>)}
            </ul>
        </div>
    )
}

const Recipe = ({ id, name, ingredients }) => {
    return (
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
    )
}

export const Recipes = () => {
    return (
        <div>
            <h1>Recipes</h1>
            <p>Recipes available : <b>{recipes.length}</b></p>

            {recipes.map(recipe => <Recipe {...recipe} key={recipe.id} />)}
        </div>
    )
}

// export const Poem = () => {
//     let output = []

//     poem.lines.forEach((line, i) => {
//         output.push(
//             <hr key={i + '-separator'} style={{ border: "1px dashed #45c3d8", margin: "0 120px" }} />
//         )
//         output.push(
//             <p key={i + '-text'}>
//                 {line}
//             </p>
//         )
//     })

//     output.shift()

//     return (
//         <article>
//             {output}
//         </article>
//     )
// }

export const Poem = () => {
    return (
        <article>
            {poem.lines.map((line, i) =>
                <Fragment key={i}>
                    {i > 0 && <hr />}
                    <p>{line}</p>
                </Fragment>)}
        </article>
    )
}

export default Lists