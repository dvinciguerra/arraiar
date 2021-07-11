require 'rails_helper'

RSpec.describe "rooms/edit", type: :view do
  before(:each) do
    @room = assign(:room, Room.create!(
      name: "MyString",
      description: "MyText",
      slug: "MyString",
      url: "MyString"
    ))
  end

  it "renders the edit room form" do
    render

    assert_select "form[action=?][method=?]", room_path(@room), "post" do

      assert_select "input[name=?]", "room[name]"

      assert_select "textarea[name=?]", "room[description]"

      assert_select "input[name=?]", "room[slug]"

      assert_select "input[name=?]", "room[url]"
    end
  end
end
