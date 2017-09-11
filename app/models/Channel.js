class Channel {
    constructor(name, description, keep, owner){
        this.name = name
        this.description = description
        this.keep = keep
        this.owner = owner
    }

    // Lire Channel.Name
    public string Name(){
        return channel.name
    }

    // Lire & Écrire Channel.Description
    public string Description(){
        return channel.description
    }
    public void Description(description){
        channel.description = description
    }

    // Lire & Écrire Channel.Keep
    public string Keep(){
        return channel.keep
    }
    public void Keep(keep){
        channel.keep = keep
    }

    // Lire & Écrire Channel.Owner
    public string Owner(){
        return channel.owner
    }
    public void Owner(owner){
        channel.owner = owner
    }

    // Lire & Écrire Channel.Membres
    static string Membres(){
        return channel.membres
    }
    static void Membres(membres){
        channel.owner = membres
    }

    // Load, Add & Save message(s) on local
    static string LoadMessage(){
        return "Success - message(s) loaded"
    }
    static string AddMessage(){
        return "Success - message added"
    }
    static string SaveMessage(){
        return "Success - message(s) saved"
    }
