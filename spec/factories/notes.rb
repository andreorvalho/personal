# frozen_string_literal: true

FactoryBot.define do
  factory :note do
    title { 'MyString' }
    content { 'MyText' }
  end
end
