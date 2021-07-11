class Room < ApplicationRecord
  has_many :meetings
  has_many :rooms, through: :meetings
end
