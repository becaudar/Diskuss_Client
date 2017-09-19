class Channel {
  constructor(name, description, keep, owner) {
    this.name = name
    this.description = description
    this.keep = keep
    this.owner = owner
    this.messages
  }

  // Lire Channel.Name
  public string Name() {
    return this.name
  }

  // Lire & Écrire Channel.Description
  public string Description() {
    return this.description
  }
  public void Description(description) {
    this.description = description
  }

  // Lire & Écrire Channel.Keep
  public string Keep() {
    return this.keep
  }
  public void Keep(keep) {
    this.keep = keep
  }

  // Lire & Écrire Channel.Owner
  public string Owner() {
    return this.owner
  }
  public void Owner(owner) {
    this.owner = owner
  }

  // Lire & Écrire Channel.Membres
  static string Membres() {
    return this.membres
  }
  static void Membres(membres) {
    this.owner = membres
  }

  // Lire Channel.Messages
  static ? Messages() {
    return this.messages
  }

  // Load, Add & Save message(s) on local
  static string LoadMessage() {
    return false
  }
  static string AddMessage() {
    return false
  }
  static string SaveMessage() {
    return false
  }
