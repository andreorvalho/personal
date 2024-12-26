require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'has a valid factory' do
    let(:user) { create(:user) }

    it 'returns true' do
      expect(user.valid?).to be_truthy
    end
  end
end
