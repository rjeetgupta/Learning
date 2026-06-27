import React from "react";

const vegitables = [
    "Potato",
    "Tomato",
    "Onion",
    "Carrot",
    "Cabbage",
    "Spinach",
    "Broccoli",
    "Cauliflower",
    "Peas",
    "Cucumber",
    "Garlic"
];

const page = () => {
    return <div>
        <nav>
            <div>Logo</div>
        </nav>
        {
            vegitables.map(function (veg, index) {
                return <li key={index} className="text-red-400">{ veg}</li>
            })
        }
        {/* <ul>
            <li className="text-red-400">Potato</li>
            <li className="text-red-400">Onion</li>
            <li className="text-red-400">Cabbage</li>
            <li className="text-red-400">Peas</li>
            <li className="text-red-400">Cucumber</li>
        </ul> */}
    </div>;
};

export default page;
