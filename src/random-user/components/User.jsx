const User = ({user}) => {

    return (
        <article className="card">
            <header className="card__header">
                <div className="card__header__div">
                    <img src={user.photo} alt=""
                         className="card__header__div__img"/>
                </div>
                <p className="card__header__name">{user.prenom} {user.nom.toUpperCase()}</p>
            </header>
            <main className="card__infos">
                <div className="card__infos__line">
                    <p>Email: </p>
                    <p>{user.email}</p>
                </div>
                <div className="card__infos__line">
                    <p>Phone: </p>
                    <p>{user.mobile}</p>
                </div>
                <div className="card__infos__line">
                    <p>Rue: </p>
                    <p>{user.rue}</p>
                </div>
                <div className="card__infos__line">
                    <p>Ville: </p>
                    <p>{user.ville}</p>
                </div>
            </main>
        </article>
    )
}

export default User;