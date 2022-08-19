let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

// Greife auf die Werte dieses Objekts zu:
// "Nala"
console.log(unsereHaustiere[0].names[1]);
// "Droopy"
console.log(unsereHaustiere[1].names[2]);

console.log('---------------------------------------------------------');


unsereHaustiere[1].names.forEach(
    (item) => {
        console.log(item);
    }
);

// Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.

function aendereHundeNamen(index, wert) {

    index = index - 1;
    unsereHaustiere[1].names[index] = wert;
    showDogs();
}

function macheAenderungenRueckgaengig() {
    let name = [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
    ];
    unsereHaustiere[1].names = name;
    showDogs();
}

console.log(unsereHaustiere[1].names);
console.log('');

// und lasse dir einmal alle Hundenamen anzeigen
let showDogs = () => {
    document.getElementById('idOlOutput').innerHTML = '';
    for (let i = 0; i < unsereHaustiere[1].names.length; i++) {
        document.getElementById('idOlOutput').innerHTML += '<li>' + unsereHaustiere[1].names[i] + '</li>';
    }
}

showDogs();