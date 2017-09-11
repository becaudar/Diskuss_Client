const User = require('./User')
const Channel = require('./Channel')

class Client {
    constructor(user){
      this.CurrentUser = user
      this.CurrentChannel
      this.ListUsers
      this.ListChannels
    }

    const string VersionClient = "v0.1"

    // Lire Client.VersionClient
    public string VersionClient(){
      return client.VersionClient
    }

    // Lire Client.CurrentUser
    public User CurrentUser(){
        return client.CurrentUser
    }

    // Lire & Écrire Client.CurrentChannel
    public Channel CurrentChannel(){
      return client.CurrentChannel
    }
    public void CurrentChannel(channel){
      client.CurrentChannel = channel
    }

    // Lire & Écrire ListUsers
    public  User[] ListUsers(){
      return client.ListUsers
    }
    public void ListUsers(listusers){
      client.ListUsers = listusers
    }

    // Lire & Écrire ListChannels
    public  User[] ListChannels(){
      return client.ListChannels
    }
    public void ListChannels(listchannels){
      client.ListChannels = listchannels
    }

    public void ChangeTheme(theme){
      
    }

    public void QuitDiskuss(){

    }
