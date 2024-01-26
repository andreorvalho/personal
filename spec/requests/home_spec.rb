# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'home page' do
  it 'visits home page successfully' do
    get '/'
    expect(response).to render_template('home/index')
  end
end
