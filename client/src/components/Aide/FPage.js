import "../services/commun//Style_sheet.css"

const FPage = () => {

    return (
        <div className="partie-milieu">

            <h2> Paramètre et compte  </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> Compte :</h4>
                    <p>Si un utilisateur veut changer son nom, prénom, adresse email ,il n'a qu'à aller dans paramètres chosir compte dans le menu et modifier ses informations personnelles.</p>
                    <p>  La demmande de la suppression d'un compte se fait aussi ici, mais ça necessite une Autorisation et ça sera l'administrateur qui va faire la suppression de son compte , un email lui sera envoyé après la suppression.</p>
                </div>
                <div className="paragraph">
                    <h4> Sécurité :</h4>
                    <p> C'est pour le changement d'un mot de passe. (ça nécessite la saisie de l'ancien mot de passe).</p>
                </div>
                <div className="paragraph">
                    <h4> Notifications :</h4>
                    <p>L'utilisateur peut choisir le type de notifications qu'il veut recevoir par mail.</p>
                </div>
                <div className="paragraph">

                    <h4> Autorisations :</h4>
                    <p> C'est un espace propre à l'administrateur, il lui permet de consulter les demanades de suppression de compte ensuite les autoriser ou bien les refuser.</p>
                </div>

            </div>

        </div>
    )
};
export default FPage;