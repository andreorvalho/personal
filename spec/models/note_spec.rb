# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Note do
  describe 'has a valid factory' do
    let(:note) { create(:note) }

    it 'returns true' do
      expect(note.valid?).to be_truthy
    end
  end
end
