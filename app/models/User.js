class User {
    constructor(id, nick){
        this.id = id
        this.nick = nick
        this.message = null
    }

    // Lire User.Id
    static string Id(){
        return user.id
    }

    // Lire User.Nick
    static string Nick(){
        return user.nick
    }

    // Load, Add & Save message(s) on local
    static string LoadMessage(){
        return "Success - message(s) loaded"
    }
    static string AddMessage(nick, message, time){
        return "Success - message added"
    }
    static string SaveMessage(){
        return "Success - message(s) saved"
    }
