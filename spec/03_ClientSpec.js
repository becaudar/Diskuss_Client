var User = require('../app/models/client')

describe("Client", function() {
  it("New Client", function() {
    let Client = new Client(let user = new User("1234", "Jean"))
    expect((client.CurrentUser).Nick).toEqual("Jean")
  )}

  it("Load, Add and Save Message(s)", function() {
    expect(user.LoadMessage()).not.toBeUndefined(user.message).and.toEqual("Success - message(s) loaded")
    expect(user.AddMessage("nick", "message")).toEqual("Success - new channel.txt created")
    expect(user.SaveMessage()).toEqual("Success - message saved")
  })
})
