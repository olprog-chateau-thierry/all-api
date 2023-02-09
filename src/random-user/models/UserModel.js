export default class UserModel {
    prenom
    nom
    rue
    ville
    email
    mobile
    photo

//    constructor(prenom, nom, rue, ville, email, mobile, photo) {
//        this.prenom = prenom
//        this.nom = nom
//        this.rue = rue
//        this.ville = ville
//        this.email = email
//        this.mobile = mobile
//        this.photo = photo
//    }

    toArrayUserModel(resultats) {
        return resultats.map(oneObject => {
            const user = new UserModel();
            user.prenom = oneObject['name']['first'] ?? "";
            user.nom = oneObject['name']['last'] ?? "";
            user.rue = oneObject['location']['street']['name'] ?? "";
            user.ville = oneObject['location']['city'] ?? "";
            user.email = oneObject['email'] ?? "";
            user.mobile = oneObject['cell'] ?? "";
            user.photo = oneObject['picture']['large'] ?? "";
            return user;
        })
    }
}