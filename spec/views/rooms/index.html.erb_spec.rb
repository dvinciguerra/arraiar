require 'rails_helper'

RSpec.describe "rooms/index", type: :view do
  before(:each) do
    assign(:rooms, [
      Room.create!(
        name: "Name",
        description: "MyText",
        slug: "Slug",
        url: "Url"
      ),
      Room.create!(
        name: "Name",
        description: "MyText",
        slug: "Slug",
        url: "Url"
      )
    ])
  end

  it "renders a list of rooms" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "Slug".to_s, count: 2
    assert_select "tr>td", text: "Url".to_s, count: 2
  end
end
