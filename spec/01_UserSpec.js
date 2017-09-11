var User = require('../app/models/User')

describe("User", function() {
  it("New User", function() {
    let user = new User("1562", "Damien")
    expect(user.id).toEqual("1562")
    expect(user.nick).toEqual("Damien")
    expect(user.message).not.toBeUndefined()
  )}

  it("has id, nick and message undefined", function(){
    let User = new User("1478", "Yoan")
    expect(user.Id).toEqual("1478")
    expect(user.Nick).toEqual("Yoan")
    expect(user.message).not.toBeUndefined()
  })

  it("Load, Add and Save Message(s)", function() {
    expect(user.LoadMessage()).not.toBeUndefined(user.message).and.toEqual("Success - message(s) loaded")
    let user = new User("1234", "Dimitri")
    let message = "Hello world !"
    let time = "11.09.2017 - 09h45"
    expect(user.AddMessage(user.nick, message, time)).toEqual("Success - message added")
    expect(user.SaveMessage()).toEqual("Success - message(s) saved")
  })
})
