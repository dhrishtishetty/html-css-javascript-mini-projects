var arr = ["Try not to resist the changes that come your way. Instead, let life live through you.", 
    "Down these mean streets a man must go who is not himself mean, who is neither tarnished nor afraid.", 
    "Live to the point of tears.", 
    "I shut my eyes and all the world drops dead; I lift my lids and all is born again.", 
    "You have to die a few times before you can really live.", 
    "Freedom is not enough. What I desire still has no name.", 
    "Act the way you'd like to be and soon you'll be the way you act.", 
    "You can cut all the flowers but you cannot keep spring from coming.", 
    "Character — the willingness to accept responsibility for one’s own life — is the source from which self-respect springs.", 
    "Not everything that is faced can be changed, but nothing can be changed until it is faced."
];



function func() {
        var randomNumber = Math.floor(Math.random() * arr.length);
        document.getElementById("para").innerHTML = arr[randomNumber];
}
