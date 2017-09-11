var User = require('../app/models/User')

describe("User", function() {
  it("has id, nick and maybe message(s)", function() {
    let user = new User("id", "nick")
    expect(user.id).toEqual("id")
    expect(user.nick).toEqual("nick")
    expect(user.message).not.toBeUndefined()
  )}

  it("Load, Add and Save Message(s)", function() {
    expect(user.LoadMessage()).not.toBeUndefined(user.message).and.toEqual("Success - message(s) loaded")
    expect(user.AddMessage("nick", "message")).toEqual("Success - new conversation.txt created")
    expect(user.SaveMessage()).toEqual("Success - message saved")
  })
})
