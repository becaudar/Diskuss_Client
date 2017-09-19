class User {
  constructor(id, nick) {
    this.id = id
    this.nick = nick
    this.messages = null
  }

  // Lire User.Id
  static string Id() {
    return this.id
  }

  // Lire User.Nick
  static string Nick() {
    return this.nick
  }

  //Lire User.Messages
  static ? Messages() {
    return this.messages
  }

  // Load, Add & Save message(s) on local
  static string LoadMessages() {
    return false
  }
  static string AddMessage(nick, message, time) {
    return false
  }
  static string SaveMessages() {
    return false
  }
