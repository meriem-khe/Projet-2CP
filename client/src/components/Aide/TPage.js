import "../services/commun//Style_sheet.css"

const TPage = () => {

    return (
        <div className="partie-milieu">
            <h2>  Services </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> C'est quoi un service pour SM ESI? </h4>
                    <p> Pour l'application web SM ESI, un service est un espace partagé,
                         ou  les utilisateurs ont le droit </p>
                    <p>  de consulter ou éditer des dossiers dans ce service.   </p>
                    <p> Il y a principalement quatre services,l'utilisateur aprés sa connexion va être redirigé </p>
                    <p> automatiquement vers son service.</p>

                </div>
                <div className="paragraph">
                    <h4> Service marchés : </h4>
                    <p>Parmi les fonctionnalités qui sont propre à lui , la création d'un nouveau</p>
                    <p>dossier, ce qui peut ne pas etre effectuer sur les autres services.</p>
                </div>
                <div className="paragraph">
                    <h4> Service commandes : </h4>
                    <p>Pour commande c'est presque la même chose que marché, mais avec quelques différences,</p>
                    <p> au niveau du formulaire qui est propre à chaque service.</p>
                </div>


                <div className="paragraph">
                    <h4> Service budget : </h4>
                    <p>Pour budget, on a un formulaire aussi personnalisé qui répond à l'enchainement</p>
                    <p>d'un dossier passant par les deux services précedents ou par commande seulement.</p>
                    <p>Dans ce service ,l'utilisateur n'a pas le droit de créer un nouveau dossier.</p>
                </div>
                <div className="paragraph">
                    <h4> Service  comptabilité : </h4>
                    <p>l'utilisateur n'a pas le droit de créer un nouveau dossier!</p>
                    <p>Pour les fonctionnalités , l'utilisateur de ce service peut changer </p>
                    <p>les dates limites des dossiers , annuler un dossier ou terminer son traitement .</p>
                </div>
            </div>

        </div>
    )
};
export default TPage;