require "rails_helper"

RSpec.describe "home page", type: :request do
  it "visits home page successfully" do
    get "/"
    expect(response).to render_template('home/index')
  end
end
