# frozen_string_literal: true

class Note < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
end
